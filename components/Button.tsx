export default function IndexBtn({ category }) {
  return (
    <button className="px-3 py-1 mt-3 hover:bg-zinc-600 ease-in-out duration-200 focus:bg-white focus:text-zinc-900 border-zinc-500 border bg-zinc-800 rounded-2xl text-sm text-zinc-200">
      {category}
    </button>
  );
}
