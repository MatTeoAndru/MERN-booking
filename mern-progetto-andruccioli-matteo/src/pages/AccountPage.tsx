// import { useContext } from "react";
// import { UserContext } from "../UserContent";
// import { Navigate } from "react-router-dom";

// export default function AccountPage() {
//     const {ready, user} = useContext(UserContext);
//     if (!ready) {
//         return 'loading..'
//     }    
//     if (ready && !user) {
//         return <Navigate to = {'/login'}/>
//     }
    
    

//     return (
//         <div>account page for {user.name}</div>
//     );
// }

import {useContext, useState} from "react";
import {UserContext} from "../UserContent.tsx";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
// import PlacesPage from "./PlacesPage";
// import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect,setRedirect] = useState(null);
  const {ready,user,setUser} = useContext(UserContext);
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('/logout');
    //to be fixed setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      {/* <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )} */}
    </div>
  );
}