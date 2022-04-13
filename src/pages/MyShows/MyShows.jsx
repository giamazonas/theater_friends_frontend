import '../ShowList/ShowList.css'
// import { Navigate } from 'react-router-dom'

// Components
import ShowCard from '../../components/ShowCard/ShowCard'

const MyShows = (props) => {
  console.log('HELLO1', props.shows.id)
  console.log('NOPE', props.shows.profile_id)
  console.log(props.user.id)

  // sort by date - ascending
// need to access by last two index of string, to sort
// order by show.date( acces digits ) acsending
  // if ({props.shows.id} === {props.user.id})


  // if (!props.user) { return <Navigate to="/shows" /> }
  // else if (props.user.id ===  )  

  return  ( 
    // props.show.profile_id === props.user.id 
    <> 
      <div className="myshows">
      <section className="card-container">
        {props.shows.map((show) => (
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