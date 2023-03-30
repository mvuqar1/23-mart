import { createContext, useState } from 'react'

export const UserContextDeiwen = createContext()


function MerkeziData(props) {
    let { children } = props

    const [logged, setLogged] = useState(false)


    const toggleLogged = () => {
        setLogged(!logged)
    }

    return (
        <UserContextDeiwen.Provider
            value={{
                logged,
                toggleLogged
            }}>
            {children}
        </UserContextDeiwen.Provider>
    )
}

export default MerkeziData