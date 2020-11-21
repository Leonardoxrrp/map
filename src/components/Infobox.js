function Infobox({info}) {
    return (
        <div className="infoBox">
            <h1>Details</h1>
            <p><span><strong>Type: </strong></span>{info.categoryTitle}</p>
            <p><span><strong>Description: </strong></span>{info.title}</p>

        </div>
    )
}

export default Infobox
