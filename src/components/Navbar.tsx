import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="top-0 fixed py-2  bg-main text-white w-full border-b-2 border-black flex justify-between items-center  px-4 sm:px-10">
      <Link to="/">
        <Button
          variant="noShadow"
          className="text-black bg-bg text-sm sm:text-xl font-bold sm:h-12 h-10"
        >
          🦄 RYAN KUSUMA
        </Button>
      </Link>
      <div className="hidden sm:block">
        <div className="flex justify-end gap-4 items-center">
          <Link to="/experience">
            <Button className="bg-bg h-12">PENGALAMAN</Button>
          </Link>
          <Link to="/project">
            <Button className="bg-bg h-12">PROJEK</Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-bg h-12">KONTAK</Button>
          </Link>
        </div>
      </div>
      <div className="sm:hidden block">
        <SidebarTrigger />
      </div>
    </div>
  );
};

export default Navbar;
