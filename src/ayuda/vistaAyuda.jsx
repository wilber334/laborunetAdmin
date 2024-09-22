/* eslint-disable react/prop-types */

import dayjs from "dayjs";

function VistaAyuda({ elegido }) {

    const fecha = new Date(elegido.fechaMensaje.seconds * 1000 + elegido.fechaMensaje.nanoseconds / 1000000);

    return (
        <div className="p-3 shadow-md shadow-yellow-700 border border-blue-900 rounded-md relative">
            <p className="font-semibold italic ">Usuario: {elegido.userId}</p>
            <p>Fecha de Mensaje: {dayjs(fecha).format('DD/MM/YYYY')}</p>
            <p>Status: {elegido.atendido ? 'resuelto ✅' : 'No atendido ⛔'}</p>
            {/* <p className="font-medium">Saldo: S/ {elegido.saldo}</p> */}
            <p>Mensaje: {elegido.mensaje}</p>
            <div className=" flex gap-1 justify-around absolute bottom-2 left-0 w-full">
                <button className="px-1 bg-red-600 text-white">Eliminar</button>
                <button className="px-1 bg-green-600 text-white" onClick={() => { }}>Resuelto</button>
            </div>
        </div>
    );
}

export default VistaAyuda