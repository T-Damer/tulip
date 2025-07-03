import MainPage from 'pages/Main'
import WorkPage from 'pages/Work'
import { Route, Routes, useLocation } from 'react-router'

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainPage />} />
      <Route path="questions" element={<WorkPage />} />
    </Routes>
  )
}
