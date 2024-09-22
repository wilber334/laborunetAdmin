/* eslint-disable react/prop-types */
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebase";

function UsuarioReportado({ elegido }) {

    const [usuarioReportado, setusuarioReportado] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const resultado = await getDoc(doc(db, "users", elegido.userId));
            if (resultado.exists()) {
                setusuarioReportado(resultado.data());
            } else {
                setusuarioReportado({})
            }
        };

        fetchData();
    }, [elegido.userId]);

    return (
        <div className="p-3 shadow-md shadow-yellow-700 border border-blue-900 rounded-md relative">
            <p>ID de usuario: {usuarioReportado.id}</p>
            <p>Nombre: {usuarioReportado.nombre}</p>
            <p>Email: {usuarioReportado.email ?? 'informacion no existe o ya fue borrada'}</p>
            <p>dni: {usuarioReportado.dni ?? ''}</p>
            <p>saldo: {usuarioReportado.saldo ?? ''}</p>
            <p>status: {usuarioReportado.verificado ? 'verificado ✅' : 'No Verificado ⛔'}</p>
            <p>terminos y condiciones: {usuarioReportado.terminosyCondiciones ? 'Aceptado ✅' : 'No aceptado ⛔'}</p>
            <p>telefono: {usuarioReportado.telefono ?? ''}</p>
            <div className=" flex gap-1 justify-around absolute bottom-2 left-0 w-full">
                <button className="px-1 bg-red-600 text-white">Eliminar</button>
            </div>
        </div>
    );
}

export default UsuarioReportado