import { createContext,useReducer } from 'react'

export const CarContext = createContext()




const initialState=[
    { id: 1, name: "BMW" },
    { id: 2, name: "AUDI" },
    { id: 3, name: "MERCEDES" },
    { id: 4, name: "HYUNDAI" },
    { id: 5, name: "KIA" },
]

export const ACTION_TYPES={
    REMOVE:"removeCar"
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.REMOVE:
            return state.filter((item) => {
                return item.id !== action.payload
            })
        default:
            break;
    }
}

export default function CarData(props) {
    let { children } = props
    
    const[car,dispatc]=useReducer(counterReducer,initialState)

    // const [car, setCar] = useState([
    //     { id: 1, name: "BMW" },
    //     { id: 2, name: "AUDI" },
    //     { id: 3, name: "MERCEDES" },
    //     { id: 4, name: "HYUNDAI" },
    //     { id: 5, name: "KIA" },
    // ])
    // const removeCar = sileceyiminIdisi => {
    //     setCar(car.filter((item) => {
    //         return item.id !== sileceyiminIdisi
    //     })
    //     )
    // }


    return (
        <CarContext.Provider
            value={{
                car,
                dispatc
            }}>
            {children}
        </CarContext.Provider>
    )
}

