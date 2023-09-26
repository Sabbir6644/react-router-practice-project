import { useNavigate } from "react-router-dom";


const User = ({user}) => {
     const navigate = useNavigate();
     console.log(user);
     // const {name, username, email}= user;
     const handleDetails = ()=>{
          navigate(`/users/${user.id}`)
     }
     return (
          
               <div className="text-lg border-2 text-center">
                    <h2>Name: {user.name}</h2>
                    <h2>Email: {user.email}</h2>
                    <h2>UserName: {user.username}</h2>
                    <button onClick={handleDetails} className="my-3 py-2 px-4 bg-green-400 rounded-lg">details</button>
               </div>
        
     );
};

export default User;