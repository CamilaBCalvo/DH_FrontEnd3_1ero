function Card(props){
    return(
        <>
        <h1>¡Felicitaciones!</h1>
        <h2>Has ingresado un nuevo libro para el club de lectura.</h2>
        <p>Nombre del Libro: {props.libro}</p>
        <p>Nombre del Autor: {props.autor}</p>
        <p>Cantidad de hojas: {props.hojas}</p>
        <p>Nombre de la Editorial: {props.editorial}</p>
        </>
    )
}
export default Card