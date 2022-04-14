import './ShowList.css'
import ShowCard from '../../components/ShowCard/ShowCard'

const ShowList = ({ shows, showImages }) => {

  return (
    <> 
    <img className="stageview" src="https://i.imgur.com/J4l2ze9.jpg" alt="Photoby Mark Thompson on Unsplash" ></img>
      <div className="stage" id="stage">   </div>
      <section className="page-header">
      </section>
      <section className="card-container">
        {shows.map((show) => (
          <ShowCard
            show={show}
            key={show.id}
          />
        ))}
      </section>
    </>
  )
}

export default ShowList