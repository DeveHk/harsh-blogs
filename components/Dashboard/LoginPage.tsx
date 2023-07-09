import Navbar from "../NavBar/Navbar";
import LoginForm from "./LoginForm";
import LoginInfo from "./LoginInfo";

const LoginPage = () => {
  return (
    <div className="bg-[#030203]   min-h-[100vh] relative">
      <div className="bg-[#2d5886] rounded-full fixed -top-10  right-10 h-[180px] w-[250px] md:h-[200px] md:w-[300px] lg:h-[250px] lg:w-[400px]"></div>
      <div className="bg-[#2E3980] rounded-full fixed bottom-10  -left-10 h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px]"></div>
      <div className="fixed w-full h-full bg-[#030203] bg-opacity-5 backdrop-blur-[100px]"></div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-[80px] relative">
        <div className="hidden md:flex lg:col-span-2 ">
          <LoginInfo></LoginInfo>
        </div>

        <div className="col-span-2  flex justify-center">
          <div className=" min-w-[280px] w-[80%] max-w-[480px]">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
