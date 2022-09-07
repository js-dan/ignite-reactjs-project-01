import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Post } from "./components"

export function App() {
  return (
    <>
      <Post
        author='Daniel Silva'
        content='Drawnings'
      />

      <Post
        author='Caio Barreto'
        content='Music'
      />
    </>
  )
}
