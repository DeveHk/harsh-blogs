import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import IndividualBlog from "../../components/IndividualBlog";
import useBlogState from "../../hooks/useBlogState";
const IndividualBlogpg = () => {
  const [data, setData] = useBlogState();
  const router = useRouter();
  const { bid } = router.query;
  const [page, setPage] = useState(
    Array.isArray(data) ? data.filter((dat) => dat.id == bid)[0] : []
  );

  useEffect(() => {
    setPage(Array.isArray(data) ? data.filter((dat) => dat.id == bid)[0] : []);
  }, [bid, data]);
  return (
    <div className="">
      {page && <IndividualBlog page={page}></IndividualBlog>}
    </div>
  );
};

export default IndividualBlogpg;
