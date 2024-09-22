import { useContext, useState } from "react";

import { datosContext } from "../DataContext";
import CardReportes from "./cardReportes";
import VistaReportes from "./vistaReportes";
import { Link } from "react-router-dom";
import UsuarioReportado from "./usuarioReportado";

function Reportes() {
    const { reportes } = useContext(datosContext);
    const [elegido, setelegido] = useState(null);
    const [verUsuarioReportado, setverUsuarioReportado] = useState(false);

    return (
        <div className="md:flex justify-center">
            <div className={verUsuarioReportado ? "md:w-11/12" : "md:w-2/3"}>
                <div className="flex justify-around">
                    <div className="grid justify-center p-2">
                        <h2 className="text-xl font-medium">Reportes</h2>
                        <p className="text-center font-medium">Total: {reportes.length}</p>
                    </div>
                    <button className="text-red-600 font-bold">
                        <Link to={'/home'}>
                            Regresar 🔙
                        </Link>
                    </button>
                </div>
                <div className={verUsuarioReportado ? "grid md:grid-cols-3 gap-4" : "grid md:grid-cols-2 gap-4"}>
                    <div className='p-1 h-[600px] border overflow-y-auto border-blue-900'>
                        {
                            reportes.map((item, index) => {
                                return (
                                    <CardReportes key={index} item={item} setelegido={setelegido} />
                                );
                            })
                        }
                    </div>
                    {elegido != null ?
                        <VistaReportes elegido={elegido} setverUsuarioReportado={setverUsuarioReportado} verUsuarioReportado={verUsuarioReportado} />
                        : null}
                    {verUsuarioReportado ? <UsuarioReportado elegido={elegido} /> : null}
                </div>
            </div>
        </div>
    );
}

export default Reportes