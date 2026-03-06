export function UserSearch({
  value,
  onSearchChange,
}: {
  value: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <label className="flex items-center gap-2 border rounded-md px-3 py-2 w-full md:w-80 bg-white focus-within:ring-1 focus-within:ring-primary/30 transition">
      <svg
        className="h-4 w-4 text-muted-foreground"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </g>
      </svg>

      <input
        type="search"
        placeholder="Search users..."
        value={value}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
      />
    </label>
  );
}