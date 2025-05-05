export default function Search({
  value,
  setValue,
}: {
  value: string
  setValue: (str: string) => void
}) {
  return (
    <search className="p-2 border-b-2 border-black bg-black text-white z-10">
      <input
        role="search"
        className="w-full"
        placeholder="Search"
        value={value}
        onInput={(e) => setValue(e.currentTarget.value)}
      />
    </search>
  )
}
