import { Post, Sidebar } from "..";
import { Container, Main } from "./style";

export function Wrapper(props) {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Post
          author='Daniel Silva'
          content='Drawnings and movies'
        />
        <Post
          author='Caio Barreto'
          content='Music and entrepreneurship'
        />
      </Main>
    </Container>
  )
}
