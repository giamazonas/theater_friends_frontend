import './Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, getUser } from '../../services/authService'

const Home = ({ user, setUser }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(form)
    const currentUser = getUser()
    setUser(currentUser)
    navigate('/shows')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <img className="curtain" src="https://i.imgur.com/Ta6DJut.jpg" alt="Photoby Rob Laughter on Unsplash" ></img>
        <h1 className="quote">"All the world’s a stage,
        And all the men and women merely players;
        They have their exits and their entrances,
        And one man in his time plays many parts."    <p></p>
        ~William Shakespeare</h1>

    </div>
  )
}

export default Home