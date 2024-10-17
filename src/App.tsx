import { useEffect, useState } from "react"
import Footer from "./compenents/Footer"
import Pic from "./compenents/Pic"
import Sidebar from "./compenents/Sidebar"

function App() {
  const [data, setData] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`


      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])


  function handelToggle() {
    setShowModel(!showModel)
    console.log("clicked")
  }
  return (
    <>
      {data ? (<Pic data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear loading-icon icon"></i>
        </div>
      )}
      {data && (
        <Footer data={data} handelToggle={handelToggle} />
      )}
      {showModel && (
        <Sidebar data={data} handelToggle={handelToggle} />
      )}
    </>
  )
}

export default App
