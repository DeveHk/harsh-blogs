import BlogPage from "../../components/BlogPage";

import { useEffect } from "react";
import { supabase } from "../../db/supabaseClient";
import { useGlobalState } from "../../state/blogState";
const Home = () => {
  const [data, setData] = useGlobalState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedState = localStorage.getItem("globalState");
        if (!storedState) {
          const { data, error } = await supabase.from("Blogs").select("*");
          if (error) {
            throw error;
          }
          setData(data);
          localStorage.setItem("globalState", JSON.stringify(data));
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
  return <BlogPage tags={"technology"}></BlogPage>;
};

export default Home;
