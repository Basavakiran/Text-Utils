import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(' Converted to Upper Case','Success:')
    }
    const handleDownClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(' Converted to Lower Case','Success:')
    }
    const handleclearClick = ()=> {
        let newText = "";
        setText(newText)
        props.showAlert(' Cleared the Text Box','Success:')
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    const copyMytext = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(' Text has Been Copied to Clipboard!!','Success:')
    }
    const extraSpace = ()=> {
        let newText = text.split(/[ ]+/)
        navigator.clipboard.writeText(text.value);
        setText(newText.join(" "))
        props.showAlert(' Removed All the Spaces','Success:')
    }
    return (
    < >
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={copyMytext}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={extraSpace}>Remove Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter in the Text box to preview"}</p>
        </div>
        
    </>
    )
}
