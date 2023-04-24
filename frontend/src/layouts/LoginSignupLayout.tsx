import { Outlet } from "react-router-dom";

export const LoginSignupLayout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between">
      <div className="min-h-screen bg-gradient-to-b from-primaryColor_darkTurquoise/10 to-secondaryColor_darkPurple/10">
        <Outlet />
      </div>
    </div>
  );
};
