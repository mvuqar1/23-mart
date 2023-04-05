// {/* <form onSubmit={useDispatch(action_creater.changeToThisObject(formState))} ></form> */}


// useEffect(() => {
//     console.log(formState)
// }, [formState])



// console.log(sentForm)


//     import * as action_creater from "../Redux/ACTION/action_creater";



import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function FormComponent() {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()

    const initialState = {
        name: '',
        surname: '',
        age: '',
        mesag: '',
    }

    const [formState, setFormState] = useState(initialState)

    const setFunction = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const sentForm = (e) => {
        e.preventDefault()
        dispatch({
            type: "change",
            payload: formState
        })
        console.log(selector)
        setFormState({
            name: '',
            surname: '',
            age: '',
            mesag: '',
        })
    }

    return (
        <div>
            <form onSubmit={sentForm} >
                <div>
                    <input id='name' type="text" name='name' value={formState.name} onChange={setFunction} />
                    <label htmlFor="name"> : AD</label>
                </div>
                <div>
                    <input id="surname" type="text" name='surname' value={formState.surname} onChange={setFunction} />
                    <label htmlFor="surname"> : Soyad</label>
                </div>
                <div>
                    <input id='age' type="number" name='age' value={formState.age} onChange={setFunction} />
                    <label htmlFor="age"> : Age</label>
                </div>
                <div>
                    <textarea id='mesag' type="textarea" name='mesag' value={formState.mesag} onChange={setFunction} />
                    <label htmlFor="mesag"> : Mesaj</label>
                </div>
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}
