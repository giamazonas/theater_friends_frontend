import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../styles/Form.css'
import { getOne } from '../../services/shows'
import ShowInput from './ShowInput'

const ShowForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateShow(form) : props.addShow(form)
    navigate(`/shows`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.show.id,
        title: data.show.title,
        theater: data.show.theater,
        city: data.show.city,
        start_date: data.show.start_date,
        end_date: data.show.end_date,
        time: data.show.time,
        cast: data.show.cast,
        info: data.show.info,
        ticket_url: data.show.url,
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <><br />
      <div className="page-header">
        {id
          ? <h1>Edit Show</h1>
          : <><h2>Add a Show</h2></>
        }
      </div>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <ShowInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
      <br />
      <br />
      <br />
    </>
  )
}

export default ShowForm