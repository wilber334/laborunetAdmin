import dayjs from "dayjs";

/* eslint-disable react/prop-types */
function CardPublicados({ item, setelegido }) {

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
    const fecha = new Date(item.fechaPublicacion.seconds * 1000 + item.fechaPublicacion.nanoseconds / 1000000);
    return (
        <div className="p-1 my-1 h-min shadow-md shadow-yellow-700 border border-blue-900 rounded-md cursor-pointer" onClick={() => { setelegido(item) }}>
            <p className="font-semibold italic capitalize">Empresa: {item.empresa}</p>
            <p>Fecha de publicacion: {dayjs(fecha).format('DD/MM/YYYY hh:mm a')}</p>
            <span className="text-red-500 capitalize">Hace {convertirTiempo(new Date().getTime() - fecha)}</span>
            <p>Activo: {item.activo ? 'true ✅' : 'false ⛔'}</p>
            <p className="first-letter:capitalize text-justify">Anuncio: {item.anuncio}</p>
            <p className="italic text-blue-900">Direccion: <span className="capitalize">{item.direccion}</span></p>
            <p>sueldo: S/ {item.sueldo}</p>
            <p>Telefono: {item.telefono}</p>
            <p>Whatsapp: {item.whatsapp ? 'true' : 'false'}</p>
            <p className="text-blue-800 font-medium flex justify-end">{item.interesados} Interesados</p>
        </div>
    );
}
export default CardPublicados;