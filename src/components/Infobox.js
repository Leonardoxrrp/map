
import { useState } from "react"
import LocationMarker from "./LocationMarker"
function Infobox({ info, infoDataClicked }) {

    const [closeInfo, setCloseInfo] = useState(false)

    const windowHandler = () => {
        setCloseInfo(true)
    }
    return (
        <div>
            {infoDataClicked && !closeInfo ?
                <div className="infoBox">
                    <h1>Details</h1>
                    <p><span><strong>Type: </strong></span>{info.categoryTitle}</p>
                    <p><span><strong>Description: </strong></span>{info.title}</p>

                    <p><span><strong>Source: </strong></span><a
                        href={info.source}
                        className="sourceURL"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{info.source}
                    </a>
                    </p>

                    <div className="xContainer" onClick={() => windowHandler()}>
                        <p>X</p>
                    </div>
                </div>
                :
                null}


        </div>
    )
}

export default Infobox
