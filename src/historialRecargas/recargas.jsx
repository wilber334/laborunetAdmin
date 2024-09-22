import { useContext, useState } from "react";

import { datosContext } from "../DataContext";
import CardRecargas from "./cardRecargas";
import VistaRecargas from "./vistaRecargas";
import { Link } from "react-router-dom";

function Recargas() {
    const { recargas, eliminar } = useContext(datosContext);
    const [elegido, setelegido] = useState(null);

    return (
        <div className="md:flex justify-center">
            <div className="md:w-2/3">
                <div className="flex justify-around">
                    <div className="grid justify-center p-2">
                        <h2 className="text-xl font-medium">Recargas</h2>
                        <p className="text-center font-medium">Total: {recargas.length}</p>
                    </div>
                    <button className="text-red-600 font-bold">
                        <Link to={'/home'}>
                            Regresar 🔙
                        </Link>
                    </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className='p-1 h-[600px] border overflow-y-auto border-blue-900'>
                        {
                            recargas.map((item, index) => {
                                return (
                                    <CardRecargas key={index} item={item} setelegido={setelegido} />
                                );
                            })
                        }
                        {/* <button onClick={() => { setlimite(limite + 10) }}>ver 10 mas ⬇️</button> */}
                    </div>
                    {elegido != null ?
                        <VistaRecargas elegido={elegido} eliminar={eliminar} />
                        : null}
                </div>
            </div>
        </div>
    );
}

export default Recargas