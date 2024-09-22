/* eslint-disable react/prop-types */
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import db from "./firebase";



// eslint-disable-next-line react-refresh/only-export-components
export const datosContext = createContext();
function DataLaborunet({ children }) {

    let auth = getAuth();//conseguimos el usuario
    auth.languageCode = 'it';
    const [usuario, setusuario] = useState();

    const [anuncios, setanuncios] = useState([]);
    const [users, setUsers] = useState([]);
    const [verificados, setverificados] = useState(0);
    const [ayuda, setayuda] = useState([]);

    const [procesoRecarga, setprocesoRecarga] = useState([]);
    const [recargas, setrecargas] = useState([]);
    const [precio, setPrecio] = useState(null);

    const [reportes, setreportes] = useState([]);
    const [reportesNoAtendidos, setreportesNoAtendidos] = useState([]);

    function loginEmail(email, password) {
        signInWithEmailAndPassword(auth, email, password);
    }

    function cerrarsesion() {
        signOut(auth).then(() => {
            console.log('sesion finalizada');
            setusuario();
        }).catch((error) => {
            console.log(error);
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {//verificamos si el usuario esta logueado
            if (user) {
                setusuario(user);
            }
        });
    }, [auth]);

    useEffect(() => {
        const q = query(collection(db, "anuncio"), orderBy('fechaPublicacion', 'asc'));//traer anuncios
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), anuncioId: doc.id });
            });
            setanuncios(docs);
        });
        unsubscribe;
    }, []);

    useEffect(() => {
        const q = query(collection(db, "users"), orderBy('saldo', 'desc'));//traer usuarios
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            let verificado = 0;
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
                if (doc.data().verificado) {
                    verificado++;
                }
            });
            setUsers(docs);
            setverificados(verificado);
        });
        unsubscribe;
    }, []);

    useEffect(() => {
        const q = query(collection(db, "users"), where('procesoRecarga', '==', true));//traer usuarios en proceso de recarga
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setprocesoRecarga(docs);
        });
        unsubscribe;
    }, []);
    useEffect(() => {
        const q = query(collection(db, "help"), orderBy('fechaMensaje', 'desc'));//traer datos de ayuda
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setayuda(docs);
        });
        unsubscribe;
    }, []);
    useEffect(() => {
        const q = query(collection(db, "report"), orderBy('fechaReporte', 'desc'));//traer datos de reportes
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setreportes(docs);
        });
        unsubscribe;
    }, []);
    useEffect(() => {
        const q = query(collection(db, "report"), where('status', '==', 'no atendido'), orderBy('fechaReporte', 'desc'));//traer datos de reportes
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setreportesNoAtendidos(docs);
        });
        unsubscribe;
    }, []);

    // const [limite, setlimite] = useState(10);
    useEffect(() => {
        const q = query(collection(db, "hrecargas"), orderBy('fechaRecarga', 'desc'));//traer datos de historia de recargas
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setrecargas(docs);
        });
        unsubscribe;
    }, []);

    const eliminar = async (rutaColeccion, idDocumento) => {
        await deleteDoc(doc(db, rutaColeccion, idDocumento));
    }
    useEffect(() => {
        const fetchData = async () => {
            const resultado = await getDoc(doc(db, "price", "G5pv1rytdgGcbBe7vx5z"));
            setPrecio(resultado.data().precio);
        };

        fetchData();
    }, []);


    return (
        <datosContext.Provider value={{
            loginEmail, usuario, cerrarsesion, anuncios, users, ayuda, reportes, procesoRecarga, recargas, verificados,
            // setlimite, limite,
            eliminar, precio, reportesNoAtendidos
        }}>
            {children}
        </datosContext.Provider>
    )
}
export default DataLaborunet;