import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
      <div className="flex justify-between items-center">
        {/* Lefy empty */}
        <div></div>
        {/* Middle */}
        <div>
          <ul className="flex gap-3">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Career</NavLink>
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="flex gap-3 items-center">
          <p className="border p-3 rounded-full text-2xl">
            <FaUser></FaUser>
          </p>
          <button className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    );
};

export default Navbar;