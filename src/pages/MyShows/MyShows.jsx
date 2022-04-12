import '../ShowList/ShowList.css'
// import { Navigate } from 'react-router-dom'

// Components
import ShowCard from '../../components/ShowCard/ShowCard'

const MyShows = (props) => {
  console.log('HELLO1', props.shows.id)
  console.log('NOPE', props.id)
  console.log(props.user.id)

  // if ({props.shows.id} === {props.user.id})

  // if (!props.user) { return <Navigate to="/shows" /> }
  return  ( 
    // props.show.profile_id === props.user.id && 
    <> 
      <div className="myshows">
      <section className="card-container">
        {props.shows.map((show) => (
          <ShowCard
            show={show}
            key={show.id}
            // showImages={showImages}
          />
        ))}
      </section>
      </div>
    </>
  );
}

export default MyShows;