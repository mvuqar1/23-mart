
// // USESTATE-DEN USERECUDERE KECMEYIMIZ
// // ______________________________________



// // CARDATA
// // ______________________________________________
// // ________________________________________________
// import { createContext, useState } from 'react'


// export const CarContext = createContext()


// export default function CarData(props) {
//     let { children } = props
    
//     const [car, setCar] = useState([
//         { id: 1, name: "BMW" },
//         { id: 2, name: "AUDI" },
//         { id: 3, name: "MERCEDES" },
//         { id: 4, name: "HYUNDAI" },
//         { id: 5, name: "KIA" },
//     ])
//     const removeCar = sileceyiminIdisi => {
//         setCar(car.filter((item) => {
//             return item.id !== sileceyiminIdisi
//         })
//         )
//     }
//     return (
//         <CarContext.Provider
//             value={{
//                 car,
//                 removeCar
//             }}>
//             {children}
//         </CarContext.Provider>
//     )
// }


// // ++++++++++++++++++++++++++++++++++++++

// // ++++++++++++++++++++++++++++++++++++++

// import { createContext,useReducer } from 'react'
// export const CarContext = createContext()

// const initialState=[
//     { id: 1, name: "BMW" },
//     { id: 2, name: "AUDI" },
//     { id: 3, name: "MERCEDES" },
//     { id: 4, name: "HYUNDAI" },
//     { id: 5, name: "KIA" },
// ]

// export const ACTION_TYPES={
//     REMOVE:"removeCar"
// }

// const counterReducer = (state, action) => {
//     switch (action.type) {
//         case ACTION_TYPES.REMOVEyy:
//             return state.filter((item) => {
//                 return item.id !== action.payload
//             })
//         default:
//             break;
//     }
// }

// export default function CarData(props) {
//     let { children } = props  
//     const[car,dispatc]=useReducer(counterReducer,initialState)
//     return (
//         <CarContext.Provider
//             value={{
//                 car,
//                 dispatc
//             }}>
//             {children}
//         </CarContext.Provider>
//     )
// }





// // =============================================
// // =============================================
// // =============================================

// // THIRDoNE
// // __________________________________________
// import React, { useContext } from 'react'
// import { CarContext } from '../Data/CarData'

// export default function ThirdOne() {
//   const {car,removeCar} = useContext(CarContext)
  
//   return (
//     <div style={{ fontSize: "20px", color: "blue", marginLeft: "25%" }}>
//       {car.map((el) =>
//         <div key={el.id}>
//           <p>
//             <button
//               className='btn-2'
//               onClick={()=>removeCar(el.id)}
//               style={{ marginRight: "3%" }}>
//               Delete
//             </button>
//               {el.name}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// // +++++++++++++++++++++++++++++++++++++++

// // +++++++++++++++++++++++++++++++++++++++
// import React, { useContext } from 'react'

// import { CarContext } from '../Data/CarData'
// import { ACTION_TYPES } from '../Data/CarData'

// export default function ThirdOne() {
//   const {car,dispatc} = useContext(CarContext)
//   return (
//     <div style={{ fontSize: "20px", color: "blue", marginLeft: "25%" }}>
//       {car.map((el) =>
//         <div key={el.id}>
//           <p>
//             <button
//               className='btn-2'
//               onClick={()=>{
//                 dispatc({
//                   type:ACTION_TYPES.REMOVE,
//                   payload:(el.id)
//                 })
//               }}
//               style={{ marginRight: "3%" }}>
//               Delete
//             </button>
//               {el.name}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

