/* eslint-disable react/prop-types */
import { useContext } from "react";
import CardUser from "./cardUser"
import { datosContext } from "../DataContext";

function PanelRecargas({ setmodal, setrecargarUser }) {
    const { procesoRecarga } = useContext(datosContext);
    return (
        <div className='px-5 border border-gray-500 md:max-w-full md:h-96  text-center m-2 rounded-md shadow-md shadow-slate-500 overflow-y-auto'>
            <div className='sticky top-0 bg-white'>
                <h2 className='text-lg italic font-medium text-blue-900'>Lista de pedidos de recargas

                </h2>
                <div className='flex justify-evenly text-lg font-semibold bg-blue-400'>
                    <p>usuario</p>
                    <p>status</p>
                    <span>
                        {procesoRecarga.length ? <span className="relative grid justify-center h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="rounded-full h-4 w-4 bg-red-500"></span>
                        </span> : null}
                    </span>
                </div>
            </div>
            {
                procesoRecarga.map((item, index) => {
                    return (
                        <CardUser key={index} item={item} setmodal={setmodal} setrecargarUser={setrecargarUser} />
                    );
                })
            }
        </div>)
}

export default PanelRecargas