import React,{useState,useEffect} from "react";
import UserList from './UserList'

function Hooks(){
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState([])

    const handleIncrement=()=>{
        setCount(count+1)
    }

    const handleDecrement=()=>{
        setCount(count-1)
    }

    const handleCountReset=()=>{
        setCount(0)
    }

    useEffect(()=>{
        getUserInfo()
    },[])

    const getUserInfo=()=>{
        fetch(`https://reqres.in/api/users?page=2`)
        .then(response=>{
            return response.json()
        }).then(results=>{
            console.log(results)
            setUsers(results.data)
        })
    }


    return(
        <div>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleCountReset}>Reset</button>
            <button onClick={handleIncrement}>Increment</button>
            <UserList users={users}/>
        </div>
    )
}

export default Hooks