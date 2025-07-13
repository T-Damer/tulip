import MainPage from 'pages/Main'
import ResultPage from 'pages/Result'
import SelectPage from 'pages/Select'
import WorkPage from 'pages/Work'
import { Route, Routes, useLocation } from 'react-router'

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainPage />} />
      <Route path="select" element={<SelectPage />} />
      <Route path="questions" element={<WorkPage />} />
      <Route path="result" element={<ResultPage />} />
    </Routes>
  )
}
