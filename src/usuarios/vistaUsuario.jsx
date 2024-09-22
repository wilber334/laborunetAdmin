/* eslint-disable react/prop-types */

import dayjs from "dayjs";

function VistaUsuario({ elegido, setmodal, setverAnuncioDeUsuario, verAnuncioDeUsuario }) {
    function convertirTiempo(milisegundos) {
        let year = Math.floor(milisegundos / (86400000 * 365)); // 86400000 es el número de milisegundos en un día
        let resultado = '';
        if (year > 0) {
            resultado += year + ' año' + (year > 1 ? 's' : '') + ' ';
        }
        return resultado.trim();
    }
    const fecha = new Date(elegido.fechaNacimiento.seconds * 1000 + elegido.fechaNacimiento.nanoseconds / 1000000);

    return (
        <div className="p-3 shadow-md shadow-yellow-700 border border-blue-900 rounded-md relative">
            <p className="font-semibold italic capitalize">Usuario: {elegido.nombre}</p>
            <p className="font-semibold italic ">ID de Usuario: {elegido.id}</p>
            <p>Fecha de Nacimiento: {dayjs(fecha).format('DD/MM/YYYY')}</p>
            <span className=" capitalize">Edad: {convertirTiempo(new Date().getTime() - fecha)}</span>
            <p>Status: {elegido.verificado ? 'Verificado ✅' : 'No Verficado ⛔'}</p>
            <p className="first-letter:capitalize text-justify">Correo: {elegido.email}</p>
            <p className="font-semibold">Saldo: S/ {elegido.saldo}</p>
            <p>Telefono: {elegido.telefono}</p>
            <p>DNI: {elegido.dni}</p>
            <p>Terminos y Condiciones: {elegido.terminosyCondiciones ? 'aceptado' : 'no aceptado'}</p>
            <p className="text-right"><button className="bg-orange-300 p-2 text-white rounded-md" onClick={() => { setverAnuncioDeUsuario(!verAnuncioDeUsuario) }}>{verAnuncioDeUsuario ? 'ocultar publicaciones' : 'ver publicaciones'}</button></p>
            <div className=" flex gap-1 justify-around absolute bottom-2 left-0 w-full">
                <button className="px-1 bg-red-600 text-white">Eliminar</button>
                <button className="px-1 bg-green-600 text-white" onClick={() => { setmodal(true) }}>Recargar</button>
            </div>
        </div>
    );
}

export default VistaUsuario