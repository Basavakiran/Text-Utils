import React,{useState}  from "react";

export default function About(props) {

    const [myStyle, semyStyle] = useState({
        color: '#042743',
        backgroundColor:'white'
    })

    const [btntext, setBtntext] = useState("Enable Dark Mode")
    const toggleStyle = () =>
    {
        if(myStyle.color==='white')
        {
            semyStyle({
                color: '#042743',
                backgroundColor:'white'
            })
            setBtntext("Enable Dark Mode")
        }else{
            semyStyle({
                color: 'white',
                backgroundColor:'#042743'
            })
            setBtntext("Enable Light Mode")
        }
    }

    return (
        <div className="container" style={myStyle}>
        <h1 className="my-3">About TextUtils</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                ><strong>
                    Developed by
                </strong>
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                <strong>TextUtils Tool developed by " Basavakiran N Ullagaddi " to analyse and modify text. Nothing more, nothing less.</strong>
                </div>
            </div>
            </div>
            <div className="accordion-item" >
            <h2 className="accordion-header" id="headingTwo">
                <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                ><strong>
                    Features
                </strong>
                </button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                <strong>The Features of the TextUtils are:- 
                    Convert Dark Mode, Convert to Upper Case, Convert to Lower Case, Clear Text Area, Copy Text Area, Remove Spaces, Display of Text Summary and Preview.    
                </strong> 
                </div>
            </div>           
            </div>
            <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>
        </div>
        </div>
    );
}
