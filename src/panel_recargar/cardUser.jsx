/* eslint-disable react/prop-types */

function CardUser({ setmodal, item, setrecargarUser }) {
    return (
        <div className='flex justify-around even:bg-blue-100 py-2'>
            <p>{item.nombre}</p>
            <p>recargando..</p>
            <button className='bg-green-600 px-2 rounded-md text-white' onClick={() => {
                setrecargarUser(item);
                setmodal(true);
            }}>recargar</button>
        </div>)
}

export default CardUser