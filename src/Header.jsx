import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
     return (
          <div>
               <nav className="flex gap-6 text-lg font-medium justify-center my-5">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                    <NavLink to={'/users'}>Users</NavLink>
               </nav>
               <Outlet></Outlet>
          </div>
     );
};

export default Header;