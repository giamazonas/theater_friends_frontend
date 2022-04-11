import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'

// Image Assets
// import Photo from ''

const Remove = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleDelete = () => {
    props.deleteShow && props.deleteShow(id)
    navigate(`/shows`)
  }

  return (
    <>
      <div className="page-header">
        <h2>Delete Show from Shows List</h2>
        {/* <img src={IMG} alt="" /> */}
      </div>
      <section className="remove">
        <h2>Are you sure you want to delete {state?.title}?</h2>
        <Link 
        className="btn submit" 
        to={`/shows/${id}`}>
          Cancel</Link>
        <button 
        onClick={handleDelete} 
        type="button" 
        className="btn danger">
          Delete</button>
      </section>
    </>
  )
}

export default Remove