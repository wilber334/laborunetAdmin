import { useContext, useState } from "react";
import { datosContext } from "./DataContext";

function Login() {
    const { loginEmail } = useContext(datosContext);
    const [passwordVisible, setpasswordVisible] = useState(false);

    return (
        <div className="h-screen w-screen bg-blue-900 flex justify-center items-center">
            <div className="fixed top-20 text-6xl text-white"><h2>LaboruNET</h2></div>
            <div className="bg-white p-5 grid gap-5 rounded-md">
                <div className="grid">
                    <label htmlFor="email">Usuario: </label>
                    <input type="email" id="email" className="border border-blue-900" autoComplete="off" />
                </div>
                <div className="grid">
                    <label htmlFor="password">Contraseña: </label>
                    <div>
                        <input type={passwordVisible ? 'text' : "password"} id="password" autoComplete="off" className="border border-blue-900" />
                        <button onClick={() => { setpasswordVisible(!passwordVisible) }} className={passwordVisible ? "opacity-40 -ml-5" : '-ml-5'}>👁️‍🗨️</button>
                    </div>
                </div>
                <button className="bg-green-700 rounded-md text-white font-medium py-1" onClick={() => {
                    let email = document.querySelector('#email').value;
                    let password = document.querySelector('#password').value;
                    loginEmail(email, password);
                }}>Ingresar</button>
            </div>
        </div>
    )
}

export default Login