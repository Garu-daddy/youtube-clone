import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import IndexBtn from "../components/Button";
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
    <>
      <Seo title="Home" />
      <Header />
      <section className="categories bg-zinc-900 justify-around w-8/12 flex m-auto">
        <IndexBtn category="전체" />
        <IndexBtn category="실시간 프로그램" />
        <IndexBtn category="야구" />
        <IndexBtn category="축구" />
        <IndexBtn category="스포츠" />
        <IndexBtn category="게임" />
        <IndexBtn category="최근 업로드 영상" />
        <IndexBtn category="요리" />
        <IndexBtn category="영화 프로그램" />
        <IndexBtn category="맞춤 동영상" />
      </section>
      <main className="bg-zinc-900 text-zinc-300 px-48 py-6 flex flex-wrap m-auto">
        {videos.map((video) => (
          <div className="w-1/3 mb-3" key={video.id}>
            <div className="w-96 overflow-hidden">
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
