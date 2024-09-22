import { useContext, useState } from "react";
import CardPublicados from "./CardPublicados";
import VistaPublicado from "./vistaPublicado";
import { datosContext } from "../DataContext";
import { Link } from "react-router-dom";

function Publicaciones() {
    const { anuncios } = useContext(datosContext);
    const [elegido, setelegido] = useState(null);
    return (
        <div className="md:flex justify-center">
            <div className="md:w-2/3">
                <div className="flex justify-around">
                    <div className="grid justify-center p-2">
                        <h2 className="text-xl font-medium">Publicaciones</h2>
                        <p className="text-center font-medium">Total: {anuncios.length}</p>
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
                            anuncios.map((item, index) => {
                                return (
                                    <CardPublicados key={index} item={item} setelegido={setelegido} />
                                );
                            })
                        }
                    </div>
                    {elegido != null ?
                        <VistaPublicado elegido={elegido} />
                        : null}

                </div>

            </div>
        </div>
    );
}

export default Publicaciones