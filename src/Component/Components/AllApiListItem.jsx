import React from 'react'
import { Link } from 'react-router-dom'


export default function AllApiListItem(props) {
    const { id,title,image,price,description } = props
    return (
        <div style={{display:"",alignItems:"center",width:"30%",minHeight:"250px",maxHeight:"450px",overflow:"hiden"}}>
            <div>{title}</div>
            <img style={{width:"100px"}} src={image} alt={title}/>
            <Link className='btn' to={`/products/${id}`}>Open Product</Link>
            <p>{description.slice(0,250)}...</p>
            <span>{price}</span>
            <div style={{witdh:"100%",height:"5px",backgroundColor:"grey",margin:"20px 0"}}></div>
        </div>
    )
}
