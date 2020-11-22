function Infobox({ info, infoDataClicked, onClick }) {

    return (
        <div>
            {infoDataClicked ?
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

                    <div className="xContainer" onClick={() => onClick(false)}>
                        <p>X</p>
                    </div>
                </div>
                :
                null}


        </div>
    )
}

export default Infobox
