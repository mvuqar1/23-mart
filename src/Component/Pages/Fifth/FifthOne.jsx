import { useSelector,useDispatch } from "react-redux";
import * as action_types_store  from "../../Redux/ACTION/action_types_store";


const Fifth = () => {
    const count = useSelector((state) => state.count)
    
    
    const dispatchFunction= useDispatch();

    const incrimentHandler=()=>{
        dispatchFunction({type:action_types_store.PLUS})
    }
    const dicrimentHandler=()=>{
        dispatchFunction({type:action_types_store.MINUS})
    }
    const resetHandler=()=>{
        dispatchFunction({type:action_types_store.RESET,
            payload:0})
    }

    const toggleCounterHandler = () => { };

    return (
        <main style={{marginLeft:"18%"}} >
            <h1>Счётчик</h1>
            <h1 >{count}</h1>
            <button onClick={incrimentHandler}>+</button>
            <button onClick={dicrimentHandler}>-</button>
            <button onClick={resetHandler}>Reset</button>
            <br/>
            <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
        </main>
    );
};

export default Fifth;
