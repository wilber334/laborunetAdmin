import { useContext } from "react";
import { Link } from "react-router-dom"
import { datosContext } from "../DataContext";

function Ingresos() {
    const { precio } = useContext(datosContext);
    return (
        <div className='cursor-pointer hover:border-2 p-2 border border-blue-900 md:max-w-xs md:min-w-max text-center m-2 rounded-md shadow-md shadow-blue-900'>
            <Link to={'/ingresos'}>
                <div className="flex justify-center items-center h-full">
                    <div>
                        <p className="text-xl">Precio</p>
                        <p className="text-xl">{precio}</p>
                    </div>
                </div>
            </Link>
        </div>)
}

export default Ingresos