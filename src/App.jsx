import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Header, Post } from "./components"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Post
        author='Daniel Silva'
        content='Drawnings and movies'
      />

      <Post
        author='Caio Barreto'
        content='Music and entrepreneurship'
      />
      <GlobalStyle/>
    </ThemeProvider>
  )
}
