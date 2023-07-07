import { useRouter } from "next/router";
import { useEffect } from "react";

import { useState } from "react";
import IndividualBlog from "../../components/IndividualBlog";
import { supabase } from "../../db/supabaseClient";
import { useGlobalState } from "../../state/blogState";
const IndividualBlogpg = () => {
  const [data, setData] = useGlobalState();
  const router = useRouter();
  const { bid } = router.query;
  const [page, setPage] = useState(data.filter((dat) => dat.id == bid)[0]);
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

  useEffect(() => {
    setPage(data.filter((dat) => dat.id == bid)[0]);
  }, [bid, data]);
  return (
    <div className="">
      {page && <IndividualBlog page={page}></IndividualBlog>}
    </div>
  );
};

export default IndividualBlogpg;
