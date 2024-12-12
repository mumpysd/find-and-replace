const FindInput = (props) => {
    return(
        <>
            <div className="input-group mb-3">
                <input type="text" 
                className="form-control"
                onChange={(e) => props.onFindInputChange(e.target.value)}
                value={props.findText}
                placeholder="Find Input Text" aria-label="Find Input Text" aria-describedby="basic-addon1" />
            </div>
        </>
    )
}

export default FindInput;