import {useState} from 'react'

function Formulario(props) {

    const [libroNombre, setLibroNombre] = useState('')
    const onChangeLibroNombre = (e) => {
        setLibroNombre(e.target.value)
    }
    const [libroAutor, setAutor] = useState('')
    const onChangeLibroAutor = (e) => {
        setAutor(e.target.value)
    }
    const [libroHojas, setHojas] = useState(0)
    const onChangeLibroHojas = (e) => {
        setHojas(e.target.value)
    }
    const [libroEditorial, setEditorial] = useState('')
    const onChangeLibroEditorial = (e) => {
        setEditorial(e.target.value)
    }


    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if(libroNombre.length === 0){
            setError('Por favor complete el nombre del libro. ¡Gracias!')
        } else if (libroHojas < 100){
            setError('Recuerde que para ingresar el libro debe tener un mínimo de 100 hojas. ¡Gracias!')
        } else if(libroAutor.length === 0){
            setError('Por favor complete el nombre del autor. ¡Gracias!')
        } else if(libroEditorial.length === 0){
            setError('Por favor complete el nombre de la editorial. ¡Gracias!')
        } else if(!/^\S/.test(libroNombre)){
            setError('Por favor no deje espacios en blanco antes del nombre del libro. ¡Gracias!')
        } else {
            setError('')
            props.guardarLibro(libroNombre,libroAutor,libroHojas,libroEditorial) 
        }        
    }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="libro">Nombre del libro:</label>
        <input
          type="text"
          id="libro"
          placeholder="Ingrese el nombre del libro"
          value={libroNombre}
          onChange={onChangeLibroNombre}
        />
        <label htmlFor="autor">Autor:</label>
        <input
          type="text"
          id="autor"
          placeholder="Ingrese el nombre del autor"
          value={libroAutor}
          onChange={onChangeLibroAutor}
        />
        <label htmlFor="hojas">Cantidad de hojas:</label>
        <input
          type="number"
          id="hojas"
          placeholder="Ingrese la cantidad de hojas"
          value={libroHojas}
          onChange={onChangeLibroHojas}
        />
        <label htmlFor="editorial">Editorial:</label>
        <input
          type="text"
          id="editorial"
          placeholder="Ingrese la editorial"
          value={libroEditorial}
          onChange={onChangeLibroEditorial}
        />
        <button>Enviar data</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
export default Formulario;
