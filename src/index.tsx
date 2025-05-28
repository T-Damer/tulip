import App from 'App'
import 'index.css'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'

createRoot(document.getElementById('root') as Element).render(
  <HashRouter>
    <App />
  </HashRouter>
)
