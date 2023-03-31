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
    REMOVE:"removeCar",
}

const counterReducer = (state, action) => {
    const {type,payload}=action
    switch (type) {
        case ACTION_TYPES.REMOVE:
            return state.filter((item) => {
                return item.id !== payload
            })
        default:
            break;
    }
}

export default function CarData(props) {
    let { children } = props
    
    const[carState,dispatc]=useReducer(counterReducer,initialState)

    return (
        <CarContext.Provider
            value={{
                carState,
                dispatc
            }}>
            {children}
        </CarContext.Provider>
    )
}

