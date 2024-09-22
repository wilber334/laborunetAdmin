/* eslint-disable react/prop-types */
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebase";
import CardAnunciosDelUsuario from "./cardAnunciosDelUsuario.jsx";

function AnunciosDelUsuario({ userId }) {
    const [mysAnuncios, setmysAnuncios] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "anuncio"), where('id', '==', userId), orderBy('fechaPublicacion', 'desc'));//traer anuncios
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data() });
            });
            setmysAnuncios(docs);
        });
        unsubscribe;
    }, [userId]);
    return (
        <div>
            <div className='p-1 h-[600px] border-2 overflow-y-auto border-blue-900'>
                {
                    mysAnuncios.map((item, index) => {
                        return (
                            <CardAnunciosDelUsuario key={index} item={item} />
                        );
                    })
                }
            </div>
        </div>
    );
}
export default AnunciosDelUsuario;