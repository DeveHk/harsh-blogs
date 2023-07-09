import Dashboardpage from "../../components/Dashboardpage";
import useBlogState from "../../hooks/useBlogState";

export default function Home() {
  const [data, setData] = useBlogState();
  return data.length > 0 && <Dashboardpage></Dashboardpage>;
}
