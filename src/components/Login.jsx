import { FaGithub, FaGoogle } from "react-icons/fa";
import FindUs from "./FindUs";

const Login = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Login with</h2>
      <div className="w-full flex flex-col gap-2">
        <button className="btn ">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          <FaGithub /> Login with Github
        </button>
      </div>
      <FindUs/>
    </div>
  );
};

export default Login;
