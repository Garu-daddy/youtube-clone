import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/core/Header";
import getDetail from "../../lib/get-detail";

export default function VideoDetail() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    getDetail(router.query.id as string)
      .then((data) => setVideoId(data))
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, [router.query.id]);

  console.log(videoId);

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

        <div className="w-3/4 p-5">
          <h2 className="text-white">{}</h2>
          <h3 className="text-white">Channel ID</h3>
          <h4 className="text-white">Video Description</h4>
        </div>
      </section>
    </>
  );
}
