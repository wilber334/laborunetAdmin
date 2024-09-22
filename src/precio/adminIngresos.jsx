import { useContext, useState } from "react";
import { datosContext } from "../DataContext";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase";

function AdminIngresos() {
    const { precio } = useContext(datosContext);

    const [formulario, setformulario] = useState(false);
    const enviarDatos = (event) => { //guarda el conjunto de datos a enviar del formulario, aqui se puede enviar a un servidor
        event.preventDefault();
        let claveIngresada = prompt("Ingrese la clave de confirmación");
        let nuevoPrecio = Number(document.querySelector('#precioId').value);
        const actualizarPrecio = async () => {
            await updateDoc(doc(db, 'price', 'G5pv1rytdgGcbBe7vx5z'), {
                precio: nuevoPrecio,
            })
        }
        if (claveIngresada === "4321") {
            if (window.confirm('¿Seguro que deseas cambiar el precio?')) {
                actualizarPrecio();
                event.target.reset();
                setformulario(false);
            }
        } else {
            alert("Clave incorrecta. Cambio de precio cancelado.");
        }
    }


    return (
        <div className="grid justify-center text-center">
            <div className="flex justify-around">
                <div className="grid justify-center p-2">
                    <h2 className="text-xl font-medium">Precios</h2>
                </div>
                <button className="text-red-600 font-bold">
                    <Link to={'/home'}>
                        Regresar 🔙
                    </Link>
                </button>
            </div>
            <div className="border-2 border-blue-900 m-5 p-5">
                <p className="text-xl font-bold">LaboruNET</p>
                <p className="text-xl">Precio por anuncio: <span className="font-semibold text-2xl">{precio.toFixed(2)}</span> soles</p>
                <br />
                <button className='bg-green-600 text-white  p-2 rounded-md' onClick={() => { setformulario(true) }}>Cambiar precio</button>
                {formulario ?
                    <form onSubmit={enviarDatos} className='grid gap-2 p-5 border-2 border-green-600 rounded-md m-5'>
                        <div className='flex justify-around'>
                            <p className="text-xl font-semibold">Nuevo precio</p>  <button className='bg-red-600 p-2 rounded text-white' onClick={() => { setformulario(false) }}>X</button>
                        </div>
                        <input type='number'
                            id="precioId"
                            autoComplete='off'
                            required
                            placeholder='nuevo precio'
                            className='rounded-md px-2 py-1 border border-green-600 text-2xl w-full'
                        />

                        <button type='submit' className='bg-red-600 text-white text-xl p-2 rounded-md'>cambiar</button>
                    </form>
                    : null
                }
            </div>
            <div></div>
        </div>

    )
}

export default AdminIngresos