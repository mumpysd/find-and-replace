import { useState } from "react";
import FindInput from "./FindInput";
import ReplaceInput from "./ReplaceInput";
import TextAreaContent from "./TextAreaContent";

const FindAndReplace = () => {

    const [content, setContent] = useState("This is initial content.");
    const [findInputText, setFindInputText] = useState("");
    const [replaceInputText, setReplaceInputText] = useState("");

    const handleContentChange = (newContent) => {
        setContent(newContent);
    }

    const handleFindInputChange = (newText) => {
        setFindInputText(newText);
    }

    const handleReplaceInputChange = (newText) => {
        setReplaceInputText(newText);
    }

    const handleFindAndReplace = () => {
        console.log(findInputText);
        console.log(replaceInputText);
        const updatedContent = content.split(findInputText).join(replaceInputText);;
        console.log(updatedContent);
        setContent(updatedContent);
    }

    return(
        <>
            <div className="find-replace-wrapper">
                <TextAreaContent textContent={content} onContentChange={handleContentChange} />

                <div className="row my-3">
                    <div className="col-lg-4 col-sm-12">
                        <FindInput findText={findInputText} onFindInputChange={handleFindInputChange} />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <ReplaceInput replaceText={replaceInputText} onReplaceInputChange={handleReplaceInputChange} />
                    </div>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={handleFindAndReplace}>Submit</button>
            </div>
        </>
    )
}

export default FindAndReplace;