import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/core/Header";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   getVideos().then((data) => setVideos(data));
  // }, []);

  useEffect(() => {
    (async () => {
      const { items } = await (
        await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAaoApWq1cJg_w5_BBUI6bbVvzXnBl7y-8`
        )
      ).json();
      console.log(items);
      setVideos(items);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <Header />
      <body className="bg-zinc-900 text-zinc-300">
        {videos.map((video) => (
          <div key={video.id}>
            <div className="w-96 overflow-hidden">
              <img
                className="hover:scale-110 ease-in-out duration-300"
                src={`http://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt="video thumbnail"
              />
            </div>
            <h3>{video.snippet.title}</h3>
            <h2 className="text-zinc-500">{video.snippet.channelTitle}</h2>
          </div>
        ))}
      </body>
    </div>
  );
};

export default Home;
