import React from 'react';
import {useEffect,useState} from 'react';

const Api = () => {
 
  
    const [data,setData]=useState([]);

    const getData = async ()=>{
      const res =await fetch('https://jsonplaceholder.typicode.com/users');
      const mainData = await res.json();

      setData(mainData);
    }

useEffect(()=>{
getData()

},[]);

return(
<>
<h1 className='text-center mt-3'>This is An Api page</h1>

<table className='table mt-5'>

<tr>
  <th>ID</th>
  <th>Name</th>
  <th>UserName</th>
  <th>Email</th>
  <th>address</th>
</tr>
{
data.map((cval)=>{




  return(
    <tr>

    <td>{cval.id}</td>
    <td>{cval.name}</td>
    <td>{cval.username}</td>
    <td>{cval.email}</td>
    <td>{cval.address.street} , {cval.address.suite} , {cval.address.city} </td>
    </tr>
  )
}


)

}

</table>

</>

)

}

export default Api;