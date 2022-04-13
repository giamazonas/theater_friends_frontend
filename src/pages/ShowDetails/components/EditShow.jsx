import { useNavigate } from "react-router-dom";


const EditShow = ({show, user, deleteShow}) => {
  const navigate = useNavigate()

  return ( 
    show.profile_id === user.id && 
    <div className="edit_show">
      <button className="btn" 
      onClick={() => navigate(`/shows/${show.id}/edit`, { state: show})}
      >Edit Show</button>

      <button 
      className="btn"
      onClick={() => navigate(`/shows/${show.id}/removeshow`, { state: show})}
      > Delete Show
      </button>
    </div>
);
}

export default EditShow;