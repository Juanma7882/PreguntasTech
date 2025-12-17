
export default function Buscador() {
    
    return (
        <div className="relative w-full max-w-md">
            <input
                type="search"
                placeholder="Buscar..."
                className="
      w-full
      pl-10 pr-4 py-2
      rounded-xl
      bg-zinc-900 text-white
      placeholder-zinc-400
      border border-zinc-700
      focus:outline-none
      focus:ring-2 focus:ring-blue-500
      focus:border-blue-500
      transition
    "
            />
            <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
            </svg>
        </div>
    )
}