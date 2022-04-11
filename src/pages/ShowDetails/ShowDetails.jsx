import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ShowDetails.css'
import EditShow from './components/EditShow'

const ShowDetails = ({ showImages, user }) => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {}, [id])

  if (!show) return <h1>Loading</h1>

  return (
    <>
      <section className="container">
        {/* <div className=""> */}
          {/* <img className="" src={Images[idx]} alt={`${show.show_title}`} /> */}
        {/* </div> */}
        <div className="show-details">
          <h1>{show.title}</h1>
            <p>{show.theater}</p>
            <p>{show.city}</p>
            <p>{show.start_date}</p>
            <p>{show.end_date}</p>
            <p>{show.time}</p>
            <p>{show.cast}</p>
            <p>{show.info}</p>
            <p>{show.ticket_url}</p>
            <EditShow show={show}
            user={user} />
        </div>
      </section>
    </>
  )
}

export default ShowDetails