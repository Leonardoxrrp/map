import spinner from "../images/spinner.gif"

function Spinner() {
    return (
        <div className="spinner">
            <img src={spinner} />
            <h2>Fetching Data</h2>
        </div>
    )
}

export default Spinner
