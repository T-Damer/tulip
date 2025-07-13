import { useBeforeUnload, useNavigate } from 'react-router'

export default function Logo() {
  const navigate = useNavigate()
  useBeforeUnload(() => navigate('/select'))

  return (
    <div
      className="flex cursor-pointer gap-2 font-bold text-black text-xl transition-opacity hover:opacity-80"
      onClick={() => navigate('/select')}
    >
      <span>🌷</span>
      <span className="text-white">Тюльпан</span>
    </div>
  )
}
