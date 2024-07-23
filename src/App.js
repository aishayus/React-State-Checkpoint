import { useState, React, useEffect } from 'react';
import './App.css';


function App() {
  //States for the name, bio and profession
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [prof, setProf] = useState('')

  //State for the information inputted to display
  const [info, setInfo] = useState(false)

  //State for the time interval
  const [count, setCount] = useState(0)

  //State to show the uploaded image
  const [image, setImage] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [count])

  const handleSubmit = (e) =>{
    e.preventDefault()
    setInfo(true)
  }

  const handleChange = (e)=> {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

    return(
      <>
        <h1 className='heading'>Enter Your Information</h1>

        <div className='container'>
        <form className='form'>
          {}
          <input className='text' type='text' value={name} placeholder='Enter your Full Name' onChange={(e) => setName(e.target.value)}/>
          <input className='text' type='text' value={bio} placeholder='Enter your Bio' onChange={(e) => setBio(e.target.value)}/>
          <input className='text' type='text' value={prof} placeholder='Enter your Profession' onChange={(e) => setProf(e.target.value)}/>
          <input className='image' type='file' onChange={handleChange}/>
          <button onClick={handleSubmit}>Submit</button>
        </form>

        {/* display the information and time interval */}
        {
          info && (
          <>
          <div className='display'>
            <div className='img-box'>
              <img src={image} alt='https://via.placeholder.com/200px'/>
            </div>
            <div className='content'>
              <h1>Name: {name}</h1>
              <h2>Profession: {prof}</h2>
              <p>{bio}</p>

              <h1>{count}</h1>
            </div>
          </div>
          </>)
        }
        </div>
      </>
    )
}

export default App;
