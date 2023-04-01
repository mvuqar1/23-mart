import { useSelector, useDispatch } from "react-redux";
import * as action_creater from "../../Redux/ACTION/action_creater";


const Fifth = () => {
    const count = useSelector((state) => state.count)

    const dispatchFunction = useDispatch();


    return (
        <main style={{ marginLeft: "18%" }} >
            <h1>Счётчик</h1>
            <h1 >{count}</h1>
            <button onClick={() => dispatchFunction(action_creater.incrimentHandler())}>+</button>
            <button onClick={() => dispatchFunction(action_creater.dicrimentHandler())}>-</button>
            <button onClick={() => dispatchFunction(action_creater.resetHandler())}>Reset</button>
            <br />
            <button >Спрятать / Показать</button>
        </main>
    );
};

export default Fifth;
