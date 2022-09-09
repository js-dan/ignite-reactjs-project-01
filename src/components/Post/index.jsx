import { ArticleContainer, Header, PostContent } from './style'

export function Post(props) {
  return (
    <ArticleContainer>
      <Header>
        <div className='postInfo'>
          <img
            className='cover'
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
          />
          <div className='titles'>
            <strong> Titulo Principal</strong>
            <span> Sub-título </span>
          </div>
        </div>
        <time
          title='9 de setembro de 2022 às 09:13'
          dateTime='2022-09-09 09:13:30'
        >
          Publicado há 1h
        </time>
      </Header>
      <PostContent>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href='#'>link</a>
      </PostContent>
    </ArticleContainer>
  )
}
