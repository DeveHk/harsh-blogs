import BlogPage from "../../components/BlogPage";

import useBlogState from "../../hooks/useBlogState";
const Home = () => {
  const [data, setData] = useBlogState();
  return <BlogPage tags={"finance"}></BlogPage>;
};

export default Home;
