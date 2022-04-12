import { useState, useEffect, Profile } from 'react'
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
      <img className="showview" src="https://i.imgur.com/CsygsNR.jpg" alt="Photoby Felix Mooneeram on Unsplash"  ></img>
      </div>
      <section className="container">
      
        <div className="show-details">
          <h2>{show.title}</h2>
            <br />
            <h3> {show.theater},  {show.city}</h3>
            <p>Starts:  {show.start_date}</p>
            <p>Last Show:  {show.end_date}</p>
            <p>{show.time}</p>
            <h3>Cast: </h3>
            <p>{show.cast}</p>
            <h3>Exta information: </h3>
              <p>{show.info}</p>
            <br />
            {/* <p>posted by: {profile.name}</p> */}
            <br />
            {/* <Link >{show.ticket_url}</Link> */}
            <a href="`${show.ticket_url}`"></a>

            <EditShow show={show}
            user={user} />
        </div>
      </section>
    </>
  )
}

export default ShowDetails