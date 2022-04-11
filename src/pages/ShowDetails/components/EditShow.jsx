import { useNavigate, useParams } from "react-router-dom";

// Image Assets
// import Photo from ''

const EditShow = ({show, user}) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    show.deleteShow && show.deleteShow(id)
    navigate(`/shows`)
  }

  return ( 
    show.profile_id === user.id && 
    <div className="edit_show">
      <button className="btn warn" 
      onClick={() => navigate(`/shows/${show.id}/edit`, { state: show})}
      >Edit Show</button>

      <button 
      className="btn danger"
      onClick={handleDelete}
      type="button">
        Delete Show
      </button>
    </div>
);
}

export default EditShow;