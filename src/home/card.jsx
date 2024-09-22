import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
function Card({ seccion, cantidad }) {
    return (
        <div className='cursor-pointer hover:border-2 p-2 border border-blue-900 md:max-w-xs md:min-w-max text-center m-2 rounded-md shadow-md shadow-blue-900'>
            <Link to={'/' + seccion}>

                <h2 className='text-2xl'>{seccion}</h2>
                <p className='text-5xl'>{cantidad}</p>
                <br />
                {/* <div className='flex justify-around'>
                    <p>Mes: 50</p>
                    <p>Dia: 5</p>
                </div> */}
            </Link>
        </div>)
}

export default Card