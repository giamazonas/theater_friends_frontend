import '../ShowList/ShowList.css'
import ShowCard from '../../components/ShowCard/ShowCard'

const MyShows = (props) => {

  let findOwner = props.shows.filter(show => {
    return show.profile_id === props.user.id
  })

  return  ( 
    <> 
      <div className="myshows">
      <section className="card-container">
        {findOwner.map((show) => (
          <ShowCard
            show={show}
            key={show.id}
          />
        ))}
      </section>
      </div>
    </>
  );
}

export default MyShows;