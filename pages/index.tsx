import type { NextPage } from "next";
import { useEffect } from "react";
import Header from "../components/core/Header";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   getVideos().then((data) => setVideos(data));
  // }, []);

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAaoApWq1cJg_w5_BBUI6bbVvzXnBl7y-8`
        )
      ).json();
      console.log(data);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <Header />
    </div>
  );
};

export default Home;
