import logoutHandler from "../../modules/logoutcall";

const Logout = ({ router }: any) => {
  const logout = () => {
    logoutHandler(() => {
      router.push("/login");
    });
  };
  return (
    <div
      className="font-sans text-white  flex justify-center items-center h-10 w-10"
      onClick={() => {
        logout();
      }}
    >
      Logout
    </div>
  );
};

export default Logout;
