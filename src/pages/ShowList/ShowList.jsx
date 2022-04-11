import './ShowList.css'

// Components
import ShowCard from '../../components/ShowCard/ShowCard'

const ShowList = ({ shows, showImages }) => {
  return (
    <>
      <section className="page-header">
        <h1>Show List</h1>
      </section>
      <section className="card-container">
        {shows.map((show) => (
          <ShowCard
            show={show}
            key={show.id}
            // showImages={showImages}
          />
        ))}
      </section>
    </>
  )
}

export default ShowList