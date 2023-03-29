import React, { useState } from 'react'

export default function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("")

    // const handlerKey = (e) => {
    //     if (e.key ==="Enter") {
    //         handlerSubmit()
    //     }
    // }

    const handlerSubmit = () => {
        cb(value);
    }

    return (
        <div>

            <input
                id='search-field'
                type="search"
                placeholder='search'
                onInput={handlerSubmit}
                onChange={(e) => setValue(e.target.value)}
                value={value}>
            </input>

            <button
                className="btn-1"
                onClick={handlerSubmit}
            >Search
            </button>

        </div>
    )
}
