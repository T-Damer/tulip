export default function ExternalFrame() {
  return (
    <iframe
      src="https://eggs.name"
      allow="clipboard-write 'src'"
      sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
      className="scrollbar-hide size-full flex-1 bg-[#c9fd50] opacity-100"
    ></iframe>
  )
}
