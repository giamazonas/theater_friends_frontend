import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";

const EditShow = ({show, user}) => {
  const navigate = useNavigate()

  return ( 
    show.profile_id === user.id && 
    <div className="edit_show">
      <button className="btn warn" 
      onClick={() => navigate(`/shows/${show.id}/edit`, { state: show})}
      >Edit Show</button>

      <button className="btn danger"
      onClick={() => navigate(`/shows/${show.id}/removeShow`, { state: show })}>Delete Show </button>

    </div>
);
}

export default EditShow;