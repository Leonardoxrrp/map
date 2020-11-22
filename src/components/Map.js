import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"
import {useState} from "react"
import InfoBox from "./Infobox"

const { REACT_APP_APIMAP } = process.env;

function Map({eventData, center, zoom}) {
    const [infoData, setInfoData] = useState(null)
    const [infoDataClicked, setInfoDataClicked] = useState(false)

    const clickedHandler = (clicked) => {
        setInfoDataClicked(clicked)
    }

    const markers = eventData.map(ev=> {
        if (ev.categories[0].id === 8) {
            return  <LocationMarker lat = {ev.geometries[0].coordinates[1] }  lng={ev.geometries[0].coordinates[0]} onClick={()=> {
                setInfoData({id: ev.id, title: ev.title, categoryTitle: ev.categories[0].title, source: ev.sources[0].url})
                setInfoDataClicked(true)
            }}  />
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                    bootstrapURLKeys={{ key: REACT_APP_APIMAP}}
                    defaultCenter={center}
                    defaultZoom={zoom}
            >
               {markers}
            </GoogleMapReact>

            {infoData && <InfoBox info={infoData} infoDataClicked={infoDataClicked} onClick={clickedHandler}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 3
    }

export default Map
