import { useEffect, useState } from 'react'

function RoomWithCanvas() {
    const [isLightOn, setIsLightOn] = useState(true)
    const [canvasColor, setCanvasColor] = useState('white')

    useEffect(() => {
        if(isLightOn){
            setCanvasColor('claro')
        } else {
            setCanvasColor('oscuro')
        }
    }, [isLightOn])

    return(
        <div>
            <button onClick={() => setIsLightOn(!isLightOn)}>{isLightOn ? "Apagar la luz" : "Encender la luz"}</button>
            <p>El lienzo está pintado de color: {canvasColor}</p>
        </div>
    )
}

export default RoomWithCanvas