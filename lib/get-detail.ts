export default async function getDetail(videoId: string) {
  const { items } = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  ).then((res) => res.json());

  return items;
}
