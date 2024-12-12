const TextAreaContent = (props) => {
    return (
        <>
            <div className="form-floating">
                <textarea className="form-control" 
                    value={props.textContent} 
                    onChange={(e) => props.onContentChange(e.target.value)} id="floatingTextarea2" style={{height: "200px"}} />
            </div>
        </>
    )
}

export default TextAreaContent;