import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Video } from "..";
import Header from "../../components/core/Header";
import getDetail from "../../lib/get-detail";

export default function VideoDetail() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [videoInfo, setVideoInfo] = useState<Video[]>([]);

  useEffect(() => {
    getDetail(router.query.id as string)
      .then((data) => setVideoInfo(data))
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, [router.query.id]);

  return (
    <>
      <Header />
      {loading && <div className="text-white">Loading...</div>}
      <section>
        <div>
          <iframe
            className="aspect-video w-3/4 p-5"
            id="player"
            src={`http://www.youtube.com/embed/${router.query.id}?enablejsapi=1`}
          ></iframe>
        </div>

        {videoInfo.map((video) => (
          <div className="w-3/4 p-5" key={video.id}>
            <h2 className="text-zinc-100 text-2xl">{video.snippet.title}</h2>
            <h3 className="text-zinc-400 text-xl">
              {video.snippet.channelTitle}
            </h3>
            <h4 className="text-zinc-400 text-xl">
              {video.snippet.description}
            </h4>
          </div>
        ))}
      </section>
    </>
  );
}
