import Marquee from "react-fast-marquee";

const LetestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-slate-500 p-2 rounded-lg">
      <button className="btn border-none bg-slate-800 text-white ">
        Latest
      </button>
      <Marquee pauseOnHover className="text-black">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default LetestNews;
