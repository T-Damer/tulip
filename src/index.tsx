import App from 'App'
import 'index.css'
import { createRoot } from 'react-dom/client'
import 'react-medium-image-zoom/dist/styles.css'
import { HashRouter } from 'react-router'

createRoot(document.getElementById('root') as Element).render(
  <HashRouter>
    <App />
  </HashRouter>
)
