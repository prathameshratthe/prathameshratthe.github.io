import { mount } from 'svelte'
import './app.css'
import '@fontsource/inter';
import '@fontsource/outfit';
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
