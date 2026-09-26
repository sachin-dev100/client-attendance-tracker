import {Outlet, useLocation, useNavigate} from "react-router-dom";

// import Icons
import {IoMdLogOut} from "react-icons/io";
import {FaUser} from "react-icons/fa";

// image import
import logo from "@/assets/logo.svg";
import {Button} from "../ui/shadcn/button";
import Cookies from "js-cookie";

const Layout = ({children}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const headerHidePath = ["/login", "/register", "/email-validator", '/password-recovery']
  const isHideContent = headerHidePath.includes(pathname)

  const userLogOut = () => {
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="flex justify-between items-center bg-[#005c99] sticky top-0 z-100 h-[10vh] px-4 md:px-20">
        <h1 className="text-base/5 text-white font-600 font-logo">
          Attendence <br />
          <span className="text-[15px] text-primary">Tracker</span>
        </h1>
        {!isHideContent && (
          <div className="flex items-center gap-2">
            <Button size="lg" className="md:hidden bg-transparent">
              <FaUser size={26} />
            </Button>

            <Button
              size="lg"
              className="md:hidden bg-transparent"
              onClick={userLogOut}>
              <IoMdLogOut size={26} />
            </Button>

            <Button
              size="lg"
              className="hidden md:inline bg-transparent border-2 border-success/90 bg-success/50"
              onClick={userLogOut}>
              Logout
            </Button>
          </div>
        )}
      </header>
      <main className="w-screen flex flex-col grow px-4 overflow-y-auto md:px-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
