import { useState, useEffect, Profiler } from 'react'
import { useParams } from 'react-router-dom'
import './ShowDetails.css'
import EditShow from './components/EditShow'
import { getOne } from '../../services/shows'
import { Link } from 'react-router-dom'

const ShowDetails = ({ showImages, user, profile }) => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setShow(data.show)
    }
    fetchOne()
  }, [id])

  if (!show) return <h1>Loading</h1>
  return (
    <>  
      <div>
      <img className="showview" src="https://i.imgur.com/CsygsNR.jpg"  ></img>
      </div>
      <section className="container">
      
        <div className="show-details">
          <h2>{show.title}</h2>
            <br />
            <p>{show.theater}</p>
            <p>{show.city}</p>
            <p>{show.start_date}</p>
            <p>{show.end_date}</p>
            <p>{show.time}</p>
            <p>{show.cast}</p>
            <p>{show.info}</p>
            <br />
            {/* <p>posted by: {profile.name}</p> */}
            <br />
            {/* <Link >{show.ticket_url}</Link> */}
            <EditShow show={show}
            user={user} />
        </div>
      </section>
    </>
  )
}

export default ShowDetails