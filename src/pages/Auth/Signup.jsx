import './login.css'
import '../../styles/Form.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, getUser } from '../../services/authService'

const Signup = ({ setUser }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    error: null,
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  })

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await signup(form)
      const currentUser = getUser()
      setUser(currentUser)
      navigate('/shows')
    } catch (err) {      
      setForm({ ...form, error: err.toString()})
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      error: null,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div id="curtain">
      <img className="curtain" src="https://i.imgur.com/Ta6DJut.jpg" alt="Photoby Rob Laughter on Unsplash" ></img>
      <div className="page-header">
        <h1>Sign Up</h1>
      </div>

      {form.error &&
        <h3 className="red-text">{form.error}</h3>
      }

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            value={form.name} onChange={handleChange}
            name="name" type="text" autoComplete="off"
          />
          <label>Email:</label>
          <input
            value={form.email} onChange={handleChange}
            name="email" type="email" autoComplete="off"
          />
          <label>Password:</label>
          <input
            value={form.password} onChange={handleChange}
            name="password" type="password" autoComplete="off"
          />
          <label>Password Confirmation:</label>
          <input
            value={form.passwordConf} onChange={handleChange}
            name="passwordConf" type="password" autoComplete="off"
          />
          <button type="submit" className="btn submit">Signup</button>
        </form>
      </section>
    </div>
  )
}

export default Signup