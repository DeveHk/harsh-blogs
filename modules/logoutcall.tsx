import axios from "axios";

const logoutHandler = (afterfun: any) => {
  axios
    .get("https://backendnew-production.up.railway.app/api/v1/signout")
    .then((res) => {
      //console.log(res);
      localStorage.removeItem("currentUserData");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("currentUserEmail");
      localStorage.removeItem("currentUserId");
      localStorage.removeItem("creditsBalance");
      afterfun();
    })
    .catch((err) => {
      //console.log(err);
    });
};
export default logoutHandler;
