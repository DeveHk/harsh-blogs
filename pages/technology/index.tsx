import BlogPage from "../../components/BlogPage";

import useBlogState from "../../hooks/useBlogState";
const Home = () => {
  const [data, setData] = useBlogState();
  return <BlogPage tags={"Technology"}></BlogPage>;
};

export default Home;
