import { createContext, useState } from 'react'

export const DorduncununDatasi = createContext()


function DorduncununContexti(props) {
    let { children } = props
    
    const [car, setCar] = useState([
        { id: 1, name: "BMW" },
        { id: 2, name: "AUDI" },
        { id: 3, name: "MERSEDES" },
        { id: 4, name: "HYUNDAI" },
        { id: 5, name: "KIA" },
    ])
    const set = () => {
        setCar(!car)
    }
    return (
        <DorduncununDatasi.Provider
            value={{
                car,
                set
            }}>
            {children}
        </DorduncununDatasi.Provider>
    )
}

export default DorduncununContexti