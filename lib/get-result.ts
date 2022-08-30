export default async function getResult(searchTerm: string) {
  const { items } = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchTerm}&type=video&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  ).then((res) => res.json());

  return items;
}
