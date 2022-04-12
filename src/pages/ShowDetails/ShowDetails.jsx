import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import './ShowDetails.css'
import EditShow from './components/EditShow'
import { getOne } from '../../services/shows'

const ShowDetails = ({ showImages, user, profile }) => {
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const navigate = useNavigate()

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
            <p>🕰  {show.time}</p>
            <h3>Cast: </h3>
            <p>{show.cast}</p>
            <h3>Exta information: </h3>
              <p>{show.info}</p>
            <br />
            <br />
            <p>Purchase tickets here: </p>
            <button className='btn' onClick={() => navigate(`${show.ticket_url}`) }>{show.ticket_url}</button><br /> <br /><br />
            <EditShow show={show}
            user={user} /><br/>
        </div>
      </section>
    </>
  )
}

export default ShowDetails