import { useNavigate, useParams } from "react-router-dom";

// Image Assets
// import Photo from ''

const EditShow = ({show, user, deleteShow}) => {
  const { id } = useParams()
  const navigate = useNavigate()

  // const handleDelete = () => {
  //   show.deleteShow(id)
  //   navigate(`/shows`)
  // }

  return ( 
    show.profile_id === user.id && 
    <div className="edit_show">
      <button className="btn" 
      onClick={() => navigate(`/shows/${show.id}/edit`, { state: show})}
      >Edit Show</button>

      <button 
      className="btn"
      onClick={() => navigate(`/shows/${show.id}/removeshow`, { state: show})}
      // type="button"
      > Delete Show
      </button>
    </div>
);
}

export default EditShow;