import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Header, Post, Wrapper } from "./components"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Wrapper />
      <GlobalStyle/>
    </ThemeProvider>
  )
}
