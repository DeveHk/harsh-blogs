import Axios from "axios";
import { useEffect } from "react";
import { useGlobalState } from "../state/blogState";

const useBlogState = () => {
  const [data, setData] = useGlobalState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedState = localStorage.getItem("globalState");
        if (!storedState) {
          Axios.get("/api/blog/get").then((res) => {
            console.log(res.data.data);
            setData(res.data.data);
            localStorage.setItem("globalState", JSON.stringify(res.data.data));
          });
        } else {
          setData(JSON.parse(storedState));
        }
        console.log(storedState);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (data.length == 0) fetchData();
  }, [data, setData]);

  return [data, setData];
};
export default useBlogState;
