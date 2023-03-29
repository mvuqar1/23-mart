import{ createContext,useState } from 'react'

export const UserContext = createContext()


const MerkeziData =(props)=> {
    let {children}=props

    const [logged, setLogged] = useState(false)


    const toggleLogged = () => {
        setLogged(!logged)
    }
console.log(logged);

    return (
        <UserContext.Provider value={{
            logged,
            toggleLogged
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default MerkeziData