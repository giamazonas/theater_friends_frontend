import { Link } from 'react-router-dom'

const ShowCard = ({ show, Images }) => {

  return (
    <Link to={`/shows/${show.id}`} className="card">
      <div className="card-content">
        <div className="card-img-container">
          {/* <img className="usr-img" 
          src={Images[idx]} alt={`${show.title}`} 
          /> */}
        </div>
        <h2 className="card-title">{show.title}</h2>
        <p>{show.theater}</p>
        <p><small>{show.city}</small></p>
        <p><small>{show.start_date}</small></p>
      </div>
    </Link>
  )
}

export default ShowCard

