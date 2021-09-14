function UserList(props){
    console.log(props)
    const userInfo=props.users.map((user,index)=>{
        return <li key={index}>
            {user.email}
            {user.first_name}
            {user.last_name}
            {user.avatar}
        </li>
    })

    return (
        <ul>
            {userInfo}
        </ul>
    )
}

export default UserList