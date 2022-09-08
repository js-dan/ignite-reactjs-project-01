import { AsideContainer, Profile } from "./style";
import { GithubLogo } from 'phosphor-react';

export function Sidebar() {
  return (
    <AsideContainer>
      <img
        className='cover'
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <Profile>
        <img
          src="https://github.com/js-dan.png"
        />
        <strong>Daniel Silva</strong>
        <span>Web Developer</span>
      </Profile>
      <footer>
        <a href="#">
          <GithubLogo size={20} />
          Perfil do Github
        </a>
      </footer>
    </AsideContainer>
  )
}
