import { useContext } from "react";
import { datosContext } from "../DataContext";

function Logout() {
    const { cerrarsesion } = useContext(datosContext);
    return (
        <div className='hover:border-2 p-5 border border-blue-900 md:max-w-xs md:min-w-max text-center m-2 rounded-md shadow-md shadow-blue-900'>
            <button className="text-6xl rotate-90" onClick={() => { cerrarsesion() }}>⛔ </button>
            <p>logout</p>
        </div>
    )
}

export default Logout