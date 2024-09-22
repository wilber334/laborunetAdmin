import dayjs from "dayjs";

/* eslint-disable react/prop-types */
function CardReportes({ item, setelegido }) {
    const fecha = new Date(item.fechaReporte.seconds * 1000 + item.fechaReporte.nanoseconds / 1000000);
    return (
        <div className="p-1 my-1 shadow-md border h-min border-blue-900 rounded-md cursor-pointer" onClick={() => { setelegido(item) }}>
            <p className="font-medium italic">ID anuncio: {item.anuncioId}</p>
            <p className=" italic">ID usuario: {item.userId}</p>
            <p>Fecha de Mensaje: {dayjs(fecha).format('DD/MM/YYYY hh:mm a')}</p>
            {item.status == 'resuelto' ? <p>status: Resuelto ✅</p> : null}
            {item.status == 'pospuesto' ? <p>status: Pospuesto ⚠️</p> : null}
            {item.status == 'no atendido' ? <p>status: No Atendido ⛔</p> : null}
            <p>Motivo: {item.motivoReporte}</p>
        </div>
    );
}
export default CardReportes;