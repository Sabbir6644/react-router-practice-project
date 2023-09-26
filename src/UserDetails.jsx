import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
     const navigate = useNavigate();
     const handleGoback= ()=>{
          navigate(-1);
     }
     const user = useLoaderData();
     console.log(user);
     const {id} = useParams();
     return (
          <div>
              <h2>User Name: {user.name}</h2> 
              <button onClick={handleGoback}>Go Back</button>
          </div>
     );
};

export default UserDetails;