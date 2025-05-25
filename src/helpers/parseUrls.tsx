export default function parseUrls(text: string) {
  const urlRegex =
    /(https?:\/\/[^\s]+|\b(?![\w.-]+@)(?:[\w-]+\.)+[\w]{2,}(?:\/[^\s]*)?)/g

  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      const href = part.match(/^https?:\/\//) ? part : `https://${part}`
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-slate-700 decoration-wavy dark:decoration-white"
        >
          {part}
        </a>
      )
    }
    return part
  })
}
