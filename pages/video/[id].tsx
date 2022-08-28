import { useRouter } from "next/router";
import Header from "../../components/core/Header";

export default function VideoDetail() {
  const router = useRouter();

  return (
    <>
      <Header />
      <h1 className="text-white">hi</h1>
      <iframe
        className="w-1/3 aspect-video"
        id="player"
        src={`http://www.youtube.com/embed/${router.query.id}?enablejsapi=1`}
      ></iframe>
    </>
  );
}
