import Map from "./components/Map"
import { useState, useEffect } from "react"
import Spinner from "./components/Spinner"

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
      const { events } = await res.json();
      setEventData(events)
      setLoading(false)
    }
    fetchData();
  }, [])
  return (
    <div>
      {!loading ? <Map eventData={eventData} /> : <Spinner />}
    </div>
  );
}

export default App;
