import React,{ useState }  from 'react'
import PropTypes from 'prop-types'

const FormText = props => {
    const [text, settext] = useState("Enter text here");
    const handleUpClick= (e)=>{
        e.preventDefault()
        settext(text.toUpperCase())
    }
    const handlelowClick= (e)=>{
        e.preventDefault()
        settext(text.toLowerCase())
    }
    const handleOnChange =(e)=>{
        settext(e.target.value)
        // settext(e.target.value.toUpperCase()) with this way we can change he inpou vaule it self before submitting 
    }
    const handleclear =(e)=>{
        settext("")
        // settext(e.target.value.toUpperCase()) with this way we can change he inpou vaule it self before submitting 
    }
    return (
        <>
        <div className=''>
            <h1>{props.heading}</h1>
            <div className="mb-10">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-1 " onClick={handlelowClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-1 " onClick={handleclear}>clear text</button>
        </div>
        <div className='my-4'>
            <h1> your text summary</h1>
            <p>{text.length} and{text.split(" ").length}words</p>
            {/* <p> you need the{(text.split(" ").length*0.1)}minutes to read words</p> */}
        </div>
        </>

    )
}

FormText.propTypes = {
    heading: PropTypes.string

}

export default FormText