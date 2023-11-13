import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import 'notyf/notyf.min.css'
import App from 'components/App'
;(window as any).global = window
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
