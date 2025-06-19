export default function Search({
  value,
  setValue,
}: {
  value: string
  setValue: (str: string) => void
}) {
  return (
    <search className="z-10 border-black border-b-2 bg-black p-2 text-white transition-colors focus-within:bg-selection dark:border-white-pale">
      <input
        role="search"
        className="w-full outline-none"
        placeholder="Search"
        value={value}
        onInput={(e) => setValue(e.currentTarget.value)}
      />
    </search>
  )
}
