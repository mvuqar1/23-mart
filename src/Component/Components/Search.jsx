import React, { useEffect, useState } from 'react'

export default function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("")
    console.log('value : ', value)
    // const handlerKey = (e) => {
    //     if (e.key ==="Enter") {
    //         handlerSubmit()
    //     }
    // }

    useEffect(() => {
        cb(value)
    }, [value])
    // const handlerSubmit = () => {
    //     console.log('inside handleSUBMIT: ', value)
    //     cb(value);
    // }

    return (
        <div className='search-container'>

            <input
                id='search-field'
                type="search"
                placeholder='search'
                // onInput={handlerSubmit}
                onChange={(e) => setValue(e.target.value)}
                value={value}>
            </input>

            <button
                className="btn-1"
                onClick={() => console.log('submit value: ', value)}
            >Search
            </button>

        </div>
    )
}
