import BlogPage from "../../components/BlogPage";

import useBlogState from "../../hooks/useBlogState";
const Home = () => {
  const [data, setData] = useBlogState();
  return <BlogPage tags={"Finance"}></BlogPage>;
};

export default Home;
