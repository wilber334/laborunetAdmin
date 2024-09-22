import dayjs from "dayjs";

/* eslint-disable react/prop-types */
function CardRecargas({ item, setelegido }) {
    const fecha = new Date(item.fechaRecarga.seconds * 1000 + item.fechaRecarga.nanoseconds / 1000000);
    return (
        <div className="p-1 my-1 shadow-md border h-min border-blue-900 rounded-md cursor-pointer" onClick={() => { setelegido(item) }}>
            <p className="font-semibold italic">Usuario: {item.nombreUser}</p>
            <p className="font-semibold italic">Id: {item.userId}</p>
            <p>Fecha de Recarga: {dayjs(fecha).format('DD/MM/YYYY hh:mm a')}</p>
            <p>Monto Recargado: <span className="font-semibold">S/ {item.montoRecargado}</span></p>
            <p className="italic">Metodo de Recarga: <span className="font-medium">{item.metodoRecarga}</span></p>
        </div>
    );
}
export default CardRecargas;