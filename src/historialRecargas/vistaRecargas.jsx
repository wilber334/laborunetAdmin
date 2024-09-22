/* eslint-disable react/prop-types */

import dayjs from "dayjs";
import { getStorage, ref, deleteObject } from "firebase/storage";

function VistaRecargas({ elegido, eliminar }) {

    const fecha = new Date(elegido.fechaRecarga.seconds * 1000 + elegido.fechaRecarga.nanoseconds / 1000000);

    return (
        <div className="p-3 shadow-md shadow-yellow-700 border border-blue-900 rounded-md relative">
            <p className="font-semibold italic">Usuario: {elegido.nombreUser}</p>
            <p className="font-semibold italic">Id: {elegido.userId}</p>
            <p>Fecha de Recarga: {dayjs(fecha).format('DD/MM/YYYY hh:mm a')}</p>
            <p>Monto Recargado: <span className="font-semibold">S/ {elegido.montoRecargado}</span></p>
            <p className="italic">Metodo de Recarga: <span className="font-medium">{elegido.metodoRecarga}</span></p>
            <img src={elegido.comprobante} alt="comprobante" width={200} />

            <div className=" flex gap-1 justify-around absolute bottom-2 left-0 w-full">
                <button className="px-1 bg-red-600 text-white" onClick={() => {
                    if (window.confirm('seguro desea eliminar??')) {
                        eliminar('hrecargas', elegido.id);
                        if (elegido.comprobante != '') {
                            deleteObject(ref(getStorage(), elegido.rutaImagen));
                        }
                    }
                }}>Eliminar</button>
                {/* <button className="px-1 bg-green-600 text-white" onClick={() => {
                    if (window.confirm('confirmar')) {
                        deleteObject(ref(getStorage(), elegido.rutaImagen));
                    }
                }}>borrar imagen</button> */}
            </div>
        </div>
    );
}

export default VistaRecargas