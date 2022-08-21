import type { NextPage } from "next";
import { useEffect, useState } from "react";
import IndexBtn from "../components/Button";
import Header from "../components/core/Header";
import Seo from "../components/Seo";

const categories = [
  "전체",
  "실시간 맞춤 동영상",
  "야구",
  "축구",
  "게임",
  "실시간 프로그램",
  "액션 어드벤처",
  "예능",
  "영화 프로그램",
];

type Video = {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
  };
};

const Home: NextPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      const { items } = await (
        await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
        )
      ).json();
      setVideos(items);
    })();
  }, []);

  return (
    <>
      <Seo title="Home" />
      <Header />
      <section className="categories bg-zinc-900 max-w-6xl flex justify-around m-auto">
        {categories.map((category, index) => (
          <IndexBtn key={`category-${index}`} category={category} />
        ))}
      </section>

      <main className="bg-zinc-900 text-zinc-300 max-w-7xl py-6 flex flex-wrap m-auto">
        {videos.map((video) => (
          <div className="w-1/3 mb-3" key={video.id}>
            <div className="w-80 overflow-hidden">
              <img
                className="hover:scale-110 ease-in-out duration-300"
                src={`http://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt="video thumbnail"
              />
            </div>
            <h3 className="overflow-hidden">{video.snippet.title}</h3>
            <h2 className="text-zinc-500">{video.snippet.channelTitle}</h2>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
