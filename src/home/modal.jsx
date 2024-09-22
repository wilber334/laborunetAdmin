/* eslint-disable react/prop-types */

import { addDoc, collection, doc, increment, serverTimestamp, updateDoc } from "firebase/firestore";
import db from "../firebase";

function Modal({ setmodal, recargarUser }) {
    return (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-80'>
            <div className='grid gap-5 p-10 rounded-md bg-white'>
                <div className='flex justify-between -mt-6'><span></span><p className='font-medium'>RECARGAR A:</p><button className='bg-red-600 px-2 rounded text-white' onClick={() => { setmodal(false) }}>x</button></div>
                <div className="flex justify-around">
                    <div className="text-center">
                        <p>Usuario:</p>
                        <p>{recargarUser.nombre}</p>
                    </div>
                    <img src={recargarUser.comprobanteUrl} alt="imagen de comprobante" width={100} className="hover:scale-[2.8] touch-pan-down:-ml-96" />
                </div>
                <input type="number" id="montoRecarga" min={0} className='text-5xl h-20 appearance-none w-80 input-without-spinners text-center border border-blue-600 rounded-md' />
                <div className="italic flex justify-evenly">
                    <label htmlFor="metodoRecarga">Metodo de Recarga:</label>
                    <select id="metodoRecarga" className="bg-blue-700 text-white">
                        <option value="yape">Yape</option>
                        <option value="Plin">Plin</option>
                    </select>
                </div>
                <br />
                <div className='flex justify-around text-white'>
                    <button className='w-32 bg-red-600 rounded' onClick={() => { setmodal(false) }}>cancelar</button>
                    <button className='w-32 bg-blue-600 rounded' onClick={() => {
                        let montoRecarga = Number(document.querySelector('#montoRecarga').value);
                        let metodoRecarga = document.querySelector('#metodoRecarga').value;
                        const actualizarSaldo = async () => {
                            await updateDoc(doc(db, 'users/' + recargarUser.id), {
                                saldo: increment(montoRecarga),
                                procesoRecarga: false,
                                comprobanteUrl: '',
                                rutaImagen: '',
                            })
                        }
                        const guardarRecarga = async () => {
                            await addDoc(collection(db, "hrecargas"), {
                                userId: recargarUser.id,
                                montoRecargado: montoRecarga,
                                metodoRecarga: metodoRecarga,
                                nombreUser: recargarUser.nombre,
                                fechaRecarga: serverTimestamp(),
                                comprobante: recargarUser.comprobanteUrl,
                                rutaImagen: recargarUser.rutaImagen,
                            }).then(setmodal(false));
                        }
                        if (window.confirm('confirmar Recarga??')) {
                            actualizarSaldo();
                            guardarRecarga();
                        }
                    }}>Recargar</button>
                </div>
            </div>
        </div>)
}

export default Modal