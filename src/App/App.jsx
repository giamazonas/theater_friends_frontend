import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

// Components
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import ShowForm from '../pages/Forms/ShowForm'
import ShowList from '../pages/ShowList/ShowList'
import Header from '../components/Header/Header'
import ShowDetails from '../pages/ShowDetails/ShowDetails'
import Remove from '../pages/RemoveShow/RemoveShow'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from '../services/authService'
import * as showService from '../services/shows'

// Image Assets
// import img from '../assets/ .svg'

function App() {
  const navigate = useNavigate()
  const [shows, setShows] = useState([])
  const [user, setUser] = useState(authService.getUser())

  const addShow = async (showData) => {
    const show = await showService.create(showData)
    SVGMetadataElement([...shows, show])
  }

  const updateShow = async (showData) => {}
  const deleteShow = async (id) => {}

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await showService.getAll()
      setShows(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header user={user} 
      handleLogout={handleLogout} 
      />
      <main>
        <Routes>
          <Route path="/" 
          element={<Home user={user} 
          setUser={setUser} />} 
          />
          <Route path="/login" 
          element={<Login user={user} 
          setUser={setUser} />}
          />
          <Route path="/signup" 
          element={<Signup user={user} 
          setUser={setUser} />} 
          />
          <Route path="/shows" 
            element={
            <ProtectedRoute user={user}>
              <ShowList shows={shows} 
              // showImages={showImages} 
              />
            </ProtectedRoute>} 
            />
          <Route path="/shows/:id" element={
            <ProtectedRoute user={user}>
              <ShowDetails 
              user={user} 
              // images={images} 
              />
            </ProtectedRoute>
          } />
          <Route path="/shows/addshow" element={
            <ProtectedRoute user={user}>
              <ShowForm addShow={addShow} 
              user={user} 
              />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id/edit" element={
            <ProtectedRoute user={user}>
              <ShowForm shows={shows} 
              updateShow={updateShow} 
              user={user} 
              />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id/remove" element={
            <ProtectedRoute user={user}>
              <Remove 
              deleteShow={deleteShow} 
              user={user} 
              />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </>
  )
}

export default App