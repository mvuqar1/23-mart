import { createContext, useState } from 'react'


export const CarContext = createContext()


export default function CarData(props) {
    let { children } = props
    
    const [car, setCar] = useState([
        { id: 1, name: "BMW" },
        { id: 2, name: "AUDI" },
        { id: 3, name: "MERCEDES" },
        { id: 4, name: "HYUNDAI" },
        { id: 5, name: "KIA" },
    ])
    const removeCar = sileceyiminIdisi => {
        setCar(car.filter((item) => {
            return item.id !== sileceyiminIdisi
        })
        )
    }
    return (
        <CarContext.Provider
            value={{
                car,
                removeCar
            }}>
            {children}
        </CarContext.Provider>
    )
}

