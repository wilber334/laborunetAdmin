import { useContext, useState } from "react";
import VistaAyuda from "./vistaAyuda";
import CardAyuda from "./cardAyuda";
import { datosContext } from "../DataContext";
import { Link } from "react-router-dom";

function Ayuda() {
    const { ayuda } = useContext(datosContext);
    const [elegido, setelegido] = useState(null);

    return (
        <div className="md:flex justify-center">
            <div className="md:w-2/3">
                <div className="flex justify-around">
                    <div className="grid justify-center p-2">
                        <h2 className="text-xl font-medium">Mensajes de Ayuda</h2>
                        <p className="text-center font-medium">Total: {ayuda.length}</p>
                    </div>
                    <button className="text-red-600 font-bold">
                        <Link to={'/home'}>
                            Regresar 🔙
                        </Link>
                    </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className='p-1 h-[600px] border-2 overflow-y-auto border-blue-900'>
                        {
                            ayuda.map((item, index) => {
                                return (
                                    <CardAyuda key={index} item={item} setelegido={setelegido} />
                                );
                            })
                        }
                    </div>
                    {elegido != null ?
                        <VistaAyuda elegido={elegido} />
                        : null}
                </div>
            </div>
        </div>
    );
}

export default Ayuda