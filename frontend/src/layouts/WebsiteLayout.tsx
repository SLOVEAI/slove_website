import { Outlet } from "react-router-dom";
import Navigation from "../components/Shared_components/Navigation";
import Footer from "../components/Shared_components/Footer";

export const WebsiteLayout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between">
      <div className="min-h-screen bg-gradient-to-b from-primaryColor_darkTurquoise/10 to-secondaryColor_darkPurple/10">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
