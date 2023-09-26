import { useLoaderData, useNavigation } from "react-router-dom";
import User from "./User";

const Users = () => {
     const users = useLoaderData();
     const navigation = useNavigation();
     return (
          <div>
               {
                     navigation.state === "loading"
                     ? "Data Loading..." : <div className="grid grid-cols-3 gap-4">
                     {
                               users.map((user, index)=><User key={index} user={user}></User>)
                           }
                     </div> 
               }
               
            
          </div>
     );
};

export default Users;