import { useContext, useState } from "react";
import Alerta from "./alerta";
import Card from "./card";
import PanelRecargas from "../panel_recargar/panelRecargas";
import Modal from "./modal";
import Logout from "./logout";
import { datosContext } from "../DataContext";
import Ingresos from "./ingresos";
import Descargas from "./descargas";
import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase";

function Home() {
    const { anuncios, users, recargas } = useContext(datosContext);
    const [recargarUser, setrecargarUser] = useState({});
    const [modal, setmodal] = useState(false);

    const [formulario, setformulario] = useState(false);
    const enviarDatos = (event) => {
        event.preventDefault();
        let descargas = Number(document.querySelector('#descargas').value);
        const actualizarDescargas = async () => {
            await updateDoc(doc(db, 'price', 'G5pv1rytdgGcbBe7vx5z'), {
                descargas: descargas,
            })
        }
        actualizarDescargas();
        event.target.reset();
        setformulario(false);
    }
    return (
        <div>
            <div className='flex justify-center'><p className='text-blue-900 font-bold'>LaboruNET</p></div>
            <div className=' grid md:grid-cols-2 select-none p-2'>
                <div className='grid md:grid-cols-2 gap-1'>
                    <div className='md:hidden'>
                        <Alerta />
                        <PanelRecargas setmodal={setmodal} setrecargarUser={setrecargarUser} />
                    </div>
                    <Descargas setformulario={setformulario} />
                    <Card seccion={'Publicaciones'} cantidad={anuncios.length} />
                    <Ingresos />
                    <Card seccion={'Usuarios'} cantidad={users.length} />
                    <div className='hidden md:grid'>
                        <Alerta />
                    </div>
                </div>
                <div className=''>
                    <div className='grid md:grid-cols-2'>
                        <Card seccion={'Recargas'} cantidad={recargas.length} />
                        <Logout />
                    </div>
                    <div className="hidden md:grid">
                        <PanelRecargas setmodal={setmodal} setrecargarUser={setrecargarUser} />
                    </div>
                </div>
            </div>
            {modal ? <Modal setmodal={setmodal} recargarUser={recargarUser} /> : null}
            {formulario ?
                <div className="fixed top-0 left-0 p-10 bg-slate-600 w-full">
                    <form onSubmit={enviarDatos} className='grid gap-2 p-5 border-2 border-green-600 rounded-md '>
                        <div className='flex justify-around'>
                            <p className="text-xl font-semibold">Actualizacion</p>  <button className='bg-red-600 p-2 rounded text-white' onClick={() => { setformulario(false) }}>X</button>
                        </div>
                        <input type='number'
                            id="descargas"
                            autoComplete='off'
                            required
                            placeholder='nueva cantidad'
                            className='rounded-md px-2 py-1 border border-green-600 text-2xl w-full'
                        />
                        <button type='submit' className='bg-red-600 text-white text-xl p-2 rounded-md'>Actualizar</button>
                    </form>
                </div>
                : null
            }
        </div>)
}

export default Home