import { useState } from "react";

export default function Colors() {
    const [state, setState] = useState({
        background: '',
        fontColor: '',
        font: ''
    });

    const colorChanged = c => {
        setState({
            ...state,
            [c.target.name]: c.target.value
        })
    }
    

    return (
        <>
            <form>
                <label htmlFor='background'>Background Color  </label>
                <input type="color" name="background" value={state.background} onChange={colorChanged} />
                <label htmlFor="fontColor"> Font Color </label>
                <input type="color" name="fontColor" value={state.fontColor} onChange={colorChanged} />
                <label htmlFor="font"> Font </label>
                <select name="font" value={state.font} onChange={colorChanged}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Calibri">Calibri</option>
                    <option value=" Lucida Handwriting ">Lucida Handwriting</option>
                    <option value="Brush Script MT">Brush Script MT</option>
                </select>
            </form>

            <div
                style={{
                    backgroundColor: state.background,
                    color: state.fontColor,                
                    minHeight: '100vh',    
                    fontFamily: state.font     
                }}
            >
                This is a preview text!
            </div>
            
        </>
    )
}