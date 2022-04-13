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
import MyShows from '../pages/MyShows/MyShows'
import Remove from '../pages/RemoveShow/RemoveShow'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from '../services/authService'
import * as showService from '../services/shows'

function App() {
  const navigate = useNavigate()
  const [shows, setShows] = useState([])
  const [user, setUser] = useState(authService.getUser())


  const addShow = async (showData) => {
    const show = await showService.create(showData)
    setShows([...shows, show])
  }

  const updateShow = async (showData) => {
    const updatedShow = await showService.update(showData)
    setShows(shows.map((show) => (
      show.id === updatedShow.id ? updatedShow : show
    )))
  }

  const deleteShow = async (id) => {
    await showService.deleteOne(id)
    setShows(shows.filter(show => show.id !== parseInt(id)))
  }

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
              />
            </ProtectedRoute>} 
            />
          <Route path="/shows/:id" element={
            <ProtectedRoute user={user}>
              <ShowDetails 
              user={user} 
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
              deleteShow={deleteShow} 
              user={user} 
              />
            </ProtectedRoute>
          } />
          <Route path="/shows/myshows" element={
            <ProtectedRoute user={user}>
              <MyShows 
                shows={shows} 
                user={user} 
              />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id/removeshow" element={
            <ProtectedRoute user={user}>
              <Remove 
              deleteShow={deleteShow} 
              user={user}
              shows={shows}
              />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </>
  )
}

export default App