export default function Menu() {
  return (
    <nav className="bg-gray-800 flex justify-between">
      <button
        type="button"
        className="flex items-center gap-3 font-semibold text-lg"
      >
        <span>Portal Soluções</span>
      </button>
      <div className="flex gap-4 items-center mr-5 mt-1 mb-1">
        <div className=" border rounded-full w-14 h-14"></div>
        <div>Nome</div>
      </div>
    </nav>
  );
}
