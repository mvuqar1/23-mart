import { useSelector,useDispatch } from "react-redux";
import { ACTION_TYPES_STORE } from "../../Store/store";


const Fifth = () => {
    const dispatchFunction= useDispatch();
    const counter = useSelector((state) => state.counter)
    
    const incrimentHandler=()=>{
        dispatchFunction({type:ACTION_TYPES_STORE.PLUS})
        
    }
    const dicrimentHandler=()=>{
        dispatchFunction({type:ACTION_TYPES_STORE.MINUS})
        

    }

    const toggleCounterHandler = () => { };

    return (
        <main style={{marginLeft:"18%"}} >
            <h1>Счётчик</h1>
            <h1 >{counter}</h1>
            <button onClick={incrimentHandler}>+</button>
            <button onClick={dicrimentHandler}>-</button>
            <br/>
            <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
        </main>
    );
};

export default Fifth;
