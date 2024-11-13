import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Find us on</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item justify-start">
          <FaFacebook /> Facebook
        </button>
        <button className="btn justify-start">
          <FaTwitter /> Twitter
        </button>
        <button className="btn justify-start">
          <FaInstagram /> Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
