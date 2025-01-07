import { useState } from "react";

export default function Colors() {
    const [state, setState] = useState({
        background: 'white',
        font: 'black'
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
                <label htmlFor="font">Font Color</label>
                <input type="color" name="font" value={state.font} onChange={colorChanged} />
            </form>

            <div
                style={{
                    backgroundColor: state.background,
                    color: state.font,                
                    minHeight: '100vh',         
                }}
            >
                This is a preview text!
            </div>
            
        </>
    )
}