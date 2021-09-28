import { useSelector } from "react-redux"
import "./style.css"

const FruitsPage=()=>{
    const fruits = useSelector((state)=>state.fruits)

    return(
        <div className="container_fruit">
            {fruits.map((fruit)=>(
                <p key={fruit} className={`card_fruit ${fruit}`}>{fruit}</p>
            ))}
        </div>
    )
}

export default FruitsPage