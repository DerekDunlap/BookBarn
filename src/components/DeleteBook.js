// function DeleteBook(){

//     const handleDeleteBook=(e)=>{
//         fetch('http://localhost:808/api/books',{
//             method: 'DELETE',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 id:e.target.value
//             })
//         })
//         .then(response=>{
//             return response.json()
//         }).then(results=>{
//             if(results.success){
//                 props.history.push('/')
//             }
//         })
//      }
// }

// export default DeleteBook