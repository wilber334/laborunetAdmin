import { useContext } from "react";
import { Link } from "react-router-dom"
import { datosContext } from "../DataContext";

function Alerta() {
    const { ayuda, reportesNoAtendidos } = useContext(datosContext);
    return (
        <div className="grid gap-2 p-5 border-2 border-blue-500 md:w-80 text-center m-2 rounded-md shadow-md shadow-slate-500 ">
            <Link to={'/ayuda'}>
                <div
                    className={ayuda.length > 0 ? "animate-pulse-qwik flex justify-around text-red-600 border-4 border-red-600 rounded-2xl p-2 hover:bg-gray-300" : "flex justify-around border-4 rounded-2xl p-2 hover:bg-gray-300"}
                >
                    <p>Ayuda</p> <span>{ayuda.length}</span>
                </div>
            </Link>
            <Link to={'/reportes'}>
                <div
                    className={reportesNoAtendidos.length > 0 ? "animate-pulse-qwik flex justify-around text-red-600 border-4 border-red-600 rounded-2xl p-2 hover:bg-gray-300" : "flex justify-around border-4 rounded-2xl p-2 hover:bg-gray-300"}
                >
                    <p>Reportes</p> <span>{reportesNoAtendidos.length}</span>
                </div>
            </Link>

        </div>
    )
}

export default Alerta

