import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import LetestNews from "../components/LetestNews";
import Login from "../components/Login";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header className="py-4 space-y-4">
        <Header></Header>
        <LetestNews />
        <Navbar />
      </header>
      <main className="grid grid-cols-12 gap-20">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet/>
        </section>
        <aside className="col-span-3 ">
          <Login />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
