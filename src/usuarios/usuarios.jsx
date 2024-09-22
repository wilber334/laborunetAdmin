import { useContext, useState } from "react";
import VistaUsuario from "./vistaUsuario";
import CardUsuarios from "./cardUsuarios";
import { datosContext } from "../DataContext";
import { Link } from "react-router-dom";
import Modal from "../home/modal";
import AnunciosDelUsuario from "./anunciosDelUsuario";

function Usuarios() {
    const { users, verificados } = useContext(datosContext);
    const [elegido, setelegido] = useState(null);
    const [verAnuncioDeUsuario, setverAnuncioDeUsuario] = useState(false);
    const [modal, setmodal] = useState(false);
    function search() {
        let elementos = document.querySelectorAll(".nombreUsuario");
        let texto = document.getElementById("search").value.toLowerCase();
        for (const element of elementos) {
            let producto = element.textContent.toLowerCase();
            if (producto.indexOf(texto) === -1) {
                element.parentNode.style.display = "none";
            } else {
                element.parentNode.style.display = "grid";
            }
        }
    }


    return (
        <div className="md:flex justify-center">
            <div className={verAnuncioDeUsuario ? "md:w-11/12" : "md:w-2/3"}>
                <div className="flex justify-around">
                    <div className="grid justify-center p-2">
                        <h2 className="text-xl font-medium">Usuarios Registrados {users.length}</h2>
                        <p className="text-center font-medium">Usuarios Verificados: {verificados}</p>
                    </div>
                    <button className="text-red-600 font-bold">
                        <Link to={'/home'}>
                            Regresar 🔙
                        </Link>
                    </button>
                </div>
                <div className={verAnuncioDeUsuario ? "grid md:grid-cols-3 gap-4" : "grid md:grid-cols-2 gap-4"}>
                    <div>
                        <div><input type="search" id="search" placeholder="Buscar por nombre" onChange={search} /> </div>
                        <div className='p-1 h-[600px] border-2 overflow-y-auto border-blue-900'>
                            {
                                users.map((item, index) => {
                                    return (
                                        <CardUsuarios key={index} item={item} setelegido={setelegido} />
                                    );
                                })
                            }
                        </div>
                    </div>
                    {elegido != null ?
                        <VistaUsuario elegido={elegido} setmodal={setmodal} setverAnuncioDeUsuario={setverAnuncioDeUsuario} verAnuncioDeUsuario={verAnuncioDeUsuario} />
                        : null}
                    {verAnuncioDeUsuario ? <AnunciosDelUsuario userId={elegido.id} /> : null}
                </div>
            </div>
            {modal ? <Modal setmodal={setmodal} recargarUser={elegido} /> : null}
        </div>
    );
}

export default Usuarios