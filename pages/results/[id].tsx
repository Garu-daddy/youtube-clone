import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/core/Header";
import getResult from "../../lib/get-result";

export default function Results() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    getResult(router.query.id as string)
      .then((data) => setVideos(data))
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, [router.query.id]);
  return (
    <>
      <Header />
      {loading && <div className="text-white">Loading...</div>}
      {videos && (
        <main className="bg-zinc-900 text-zinc-300 py-6">
          <h2 className="px-32 mb-6">{`"${router.query.id}" 에 대한 검색결과`}</h2>
          {videos.map((video) => (
            <Link href={`/video/${video.id.videoId}`} key={video.id.videoId}>
              <a>
                <div className="px-32 mb-3 mx-auto flex min-w-fit">
                  <div className="w-80 overflow-hidden">
                    <img
                      className="hover:scale-110 ease-in-out duration-300"
                      src={video.snippet.thumbnails.medium.url}
                      alt="video thumbnail"
                    />
                  </div>
                  <div className="ml-6 md:text-xs">
                    <h3 className="overflow-hidden text-xl">
                      {video.snippet.title}
                    </h3>
                    <h2 className="text-zinc-500 hover:text-zinc-100 transition ease-in-out duration-200">
                      {video.snippet.channelTitle}
                    </h2>
                    <h2 className="text-zinc-500">
                      {video.snippet.description}
                    </h2>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </main>
      )}
    </>
  );
}
