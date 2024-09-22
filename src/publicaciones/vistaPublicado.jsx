/* eslint-disable react/prop-types */

import dayjs from "dayjs";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import db from "../firebase";

function VistaPublicado({ elegido }) {
    function convertirTiempo(milisegundos) {
        let dias = Math.floor(milisegundos / 86400000); // 86400000 es el número de milisegundos en un día
        let horas = Math.floor((milisegundos % 86400000) / 3600000); // 3600000 es el número de milisegundos en una hora
        let minutos = Math.floor(((milisegundos % 86400000) % 3600000) / 60000); // 60000 es el número de milisegundos en un minuto

        let resultado = '';

        if (dias > 0) {
            resultado += dias + ' día' + (dias > 1 ? 's' : '') + ' ';
        }
        if (horas > 0) {
            resultado += horas + ' hora' + (horas > 1 ? 's' : '') + ' ';
        }
        if (dias === 0 && horas === 0 && minutos > 0) {
            resultado += 'minutos';
        }
        if (dias === 0 && horas === 0 && minutos === 0) {
            resultado += 'instantes';
        }
        return resultado.trim();
    }
    const fecha = new Date(elegido.fechaPublicacion.seconds * 1000 + elegido.fechaPublicacion.nanoseconds / 1000000);

    return (
        <div className="p-3 relative shadow-md shadow-yellow-700 border border-blue-900 rounded-md">
            <div>
                <p className="font-semibold italic capitalize">Empresa: {elegido.empresa}</p>
                <p className="font-semibold italic ">Id de Usuario: {elegido.id}</p>
                <p className="font-medium italic ">Id de Publicacion: {elegido.anuncioId}</p>
                <p>Fecha de publicacion: {dayjs(fecha).format('DD/MM/YYYY hh:mm a')}</p>
                <span className="text-red-500 capitalize">Hace {convertirTiempo(new Date().getTime() - fecha)}</span>
                <p>Activo: {elegido.activo ? 'true ✅' : 'false ⛔'}</p>
                <p className="first-letter:capitalize text-justify">Anuncio: {elegido.anuncio}</p>
                <p className="italic text-blue-900">Direccion: <span className="capitalize">{elegido.direccion}</span></p>
                <p>sueldo: S/ {elegido.sueldo}</p>
                <p>Telefono: {elegido.telefono}</p>
                <p>Whatsapp: {elegido.whatsapp ? 'true' : 'false'}</p>
                <p className="flex justify-end font-medium text-blue-800">{elegido.interesados} Interesados</p>
            </div>
            <div className=" flex gap-1 justify-around absolute bottom-2 left-0 w-full">
                <button className="px-1 bg-red-600 text-white" onClick={() => {
                    const eliminar = async () => {
                        await deleteDoc(doc(db, 'anuncio', elegido.anuncioId));
                    }
                    if (window.confirm('confirmar')) {
                        eliminar();
                    }
                }}>Eliminar</button>
                <button className="px-1 bg-green-600 text-white" onClick={() => {
                    const activar = async () => {
                        await updateDoc(doc(db, 'anuncio', elegido.anuncioId), {
                            activo: true,
                        })
                    }
                    if (window.confirm('confirmar')) {
                        activar();
                    }
                }}>Activar</button>
                <button className="px-1 bg-amber-600 text-white" onClick={() => {
                    const desactivar = async () => {
                        await updateDoc(doc(db, 'anuncio', elegido.anuncioId), {
                            activo: false,
                        })
                    }
                    if (window.confirm('confirmar')) {
                        desactivar();
                    }
                }}>Desactivar</button>
            </div>
        </div>
    );
}

export default VistaPublicado