// import React from 'react'
// import { useState } from 'react'



// const About = () => {

//   const [count,setCount]=useState(0);
//   function handleclick(){
//     setCount (count + 1);
//   }



//   return (
//     <>

//     <button className='ms-5 mt-4' onClick={handleclick}>
//       you press me {count} times
//     </button>
    
//     </>
  
//   )
// }

// export default About


// import React, { useState } from 'react'

// const About = () => {

//   const[text,setText]=useState('Nothing');

//   function handlechange(e){
//     setText(e.target.value);
//   }


//   return (
//     <>
//     <div className='container ms-5'>
//     <input className='mt-5' value={text} onChange={handlechange}/> 
//     <p>you Type: {text}</p>
//     <button className='mt-1' onClick={()=> setText("Nothng")}>Reset</button>
//     </div>
//     </>
//   ) 
// }

// export default About

// import React from 'react'
// import { useState } from 'react'

// function About() {

//   const [liked,setliked]=useState(true);
 
//   function handleChange(e){
//     setliked(e.target.checked)
//   }

//   return (
//     <div className='container mt-4'>
//      <label>
//       <input type="checkbox" onChange={handleChange}/> 
//         I Like This
//      </label>
//      <p>You {liked ? 'liked':"did not Like "} this.</p>
//     </div>
//   )
// }


import React from 'react'
import { useState } from 'react'



const About = () => {
  const[text,setText]=useState("Ryan")
  const[Count,setCount]=useState(0)

  function handleChange(e){
  setText(e.target.value)


  }
  function handleclick(){
    setCount(Count + 1)
  }

  return (
    <div className='conatiner ms-5 mt-5'>
      <input  value={text}   onChange={handleChange}/>
      <div className='mt-3'>
      <button onClick={handleclick}>Increment Age</button>
      </div>
      <p>Hello ,{text}. You are {Count}</p>
    </div>
  )
}

export default About

