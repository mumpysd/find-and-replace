const ReplaceInput = (props) => {
    return(
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" 
                  onChange={(e) => props.onReplaceInputChange(e.target.value)}
                  value={props.replaceText}
                 placeholder="Replace Input Text" aria-label="Replace Input Text" aria-describedby="basic-addon1" />
            </div>
        </>
    )
}

export default ReplaceInput;