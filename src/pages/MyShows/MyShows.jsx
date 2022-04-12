import '../ShowList/ShowList.css'

// Components
// import ShowCard from '../../components/ShowCard/ShowCard'

const MyShows = (props) => {
  return ( 
    <>
      <div className="myshows">
      {/* {shows.map((show) => (
        if (show.profile_id === profile.id) {
            <section className="card-container">

              <ShowCard
                show={show}
                key={show.id}
                // showImages={showImages}
              /> 
            </section>
        }else {
          <h3>add your upcoming shows for content here!</h3>
        }
        ))} */}
      </div>
    </>
  );
}

export default MyShows;