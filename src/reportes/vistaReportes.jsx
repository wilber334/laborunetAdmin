/* eslint-disable react/prop-types */

import dayjs from "dayjs";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebase";

function VistaReportes({ elegido, setverUsuarioReportado, verUsuarioReportado }) {

    const fecha = new Date(elegido.fechaReporte.seconds * 1000 + elegido.fechaReporte.nanoseconds / 1000000);

    const [anuncioReportado, setanuncioReportado] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const resultado = await getDoc(doc(db, "anuncio", elegido.anuncioId));
            if (resultado.exists()) {
                setanuncioReportado(resultado.data());
            } else {
                setanuncioReportado({})
            }
        };

        fetchData();
    }, [elegido.anuncioId]);

    return (
        <div className="p-3 shadow-md shadow-yellow-700 border border-blue-900 rounded-md relative">
            <p className="font-medium italic">ID anuncio: {elegido.anuncioId}</p>
            <p className="italic">ID Usuario: {elegido.userId}</p>
            <p>Fecha de Mensaje: {dayjs(fecha).format('DD/MM/YYYY hh:mm a')}</p>
            <p className="font-medium">Motivo: {elegido.motivoReporte}</p>
            {elegido.status == 'resuelto' ? <p>status: Resuelto ✅</p> : null}
            {elegido.status == 'pospuesto' ? <p>status: Pospuesto ⚠️</p> : null}
            {elegido.status == 'no atendido' ? <p>status: No Atendido ⛔</p> : null}
            <hr className="border border-blue-900" />
            <br />
            <p>empresa: {anuncioReportado.empresa}</p>
            <p>anuncio: {anuncioReportado.anuncio ?? 'informacion no existe o ya fue borrada'}</p>
            <p>direccion: {anuncioReportado.direccion ?? ''}</p>
            <p>tipo: {anuncioReportado.tipo ?? ''}</p>
            <p>sueldo: {anuncioReportado.sueldo ?? ''}</p>
            <p>status: {anuncioReportado.activo ? 'activo' : 'No activo'}</p>
            <p>telefono: {anuncioReportado.telefono ?? ''}</p>
            <p className="text-right"><button className="bg-orange-300 p-2 text-white rounded-md" onClick={() => { setverUsuarioReportado(!verUsuarioReportado) }}>{verUsuarioReportado ? 'ocultar Usuario' : 'ver Usuario'}</button></p>
            <div className=" flex gap-1 justify-around absolute bottom-2 left-0 w-full">
                <button className="px-1 bg-red-600 text-white" onClick={() => {

                }}>Archivar</button>
                <button className="px-1 bg-amber-600 text-white" onClick={() => {
                    const posponer = async () => {
                        await updateDoc(doc(db, 'report', elegido.id), {
                            status: 'pospuesto',
                        })
                    }
                    if (window.confirm('confirmar')) {
                        posponer();
                    }
                }}>Posponer</button>
                <button className="px-1 bg-green-600 text-white" onClick={() => {
                    const resolver = async () => {
                        await updateDoc(doc(db, 'report', elegido.id), {
                            status: 'resuelto',
                        })
                    }
                    if (window.confirm('confirmar')) {
                        resolver();
                    }
                }}>Resuelto</button>
            </div>
        </div>
    );
}

export default VistaReportes