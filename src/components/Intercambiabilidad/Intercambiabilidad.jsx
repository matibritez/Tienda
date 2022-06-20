import { useState } from "react"
import ButtonCount from "../ButtonCount/ButtonCount"
import InputCount from "../InputCount/InputCount"

const Intercambiabilidad = () =>{
    const [inputType, setInputType] = useState("button")


    const handleInter = () =>{
         setInputType("input")
    }

    return(
        <div>
        {
             inputType ==="button" ?
                <ButtonCount handleInter={handleInter}/>
            :
                <InputCount />
        }
        </div>
    )
}

export default Intercambiabilidad