/* eslint-disable react/prop-types */
function Descargas({ setformulario }) {

    return (
        <div onClick={() => { setformulario(true) }} className='cursor-pointer hover:border-2 p-2 border border-blue-900 md:max-w-xs md:min-w-max text-center m-2 rounded-md shadow-md shadow-blue-900'>

            <h2 className='text-2xl'>Descargas</h2>
            <p className='text-5xl'>1000</p>
            <br />
            {/* <div className='flex justify-around'>
                    <p>Mes: 50</p>
                    <p>Dia: 5</p>
                </div> */}
        </div>)
}

export default Descargas