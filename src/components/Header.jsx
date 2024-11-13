import moment from "moment/moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center ">
      <img className="w-96" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM  DD, YYYY")}</p>
    </div>
  );
};

export default Header;
