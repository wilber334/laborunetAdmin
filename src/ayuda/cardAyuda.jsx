import dayjs from "dayjs";

/* eslint-disable react/prop-types */
function CardAyuda({ item, setelegido }) {
    const fecha = new Date(item.fechaMensaje.seconds * 1000 + item.fechaMensaje.nanoseconds / 1000000);
    return (
        <div className="p-1 my-1 border h-min border-blue-900 rounded-md cursor-pointer" onClick={() => { setelegido(item) }}>
            <p className="font-semibold italic">Usuario: {item.userId}</p>
            <p>Fecha de Mensaje: {dayjs(fecha).format('DD/MM/YYYY')}</p>
            <p>Status: {item.atendido ? 'resuelto ✅' : 'No atendido ⛔'}</p>
            {/* <p className="font-medium">Saldo: S/ {item.saldo}</p> */}
            <p>Mensaje: {item.mensaje}</p>
        </div>
    );
}
export default CardAyuda;