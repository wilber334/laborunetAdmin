/* eslint-disable react/prop-types */
function CardUsuarios({ item, setelegido }) {
    return (
        <div className="p-1 my-1 border border-blue-900 rounded-md cursor-pointer" onClick={() => { setelegido(item) }}>
            <p className="font-semibold italic capitalize nombreUsuario">Usuario: {item.nombre}</p>
            <p>Status: {item.verificado ? 'Verificado ✅' : 'No Verficado ⛔'}</p>
            <p className="first-letter:capitalize text-justify">Correo: {item.email}</p>
            <p className="font-medium">Saldo: S/ {item.saldo}</p>
            <p>Telefono: {item.telefono}</p>
            <p>DNI: {item.dni}</p>
            <p>Terminos y Condiciones: {item.terminosyCondiciones ? 'aceptado' : 'no aceptado'}</p>
        </div>
    );
}
export default CardUsuarios;