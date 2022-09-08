import styled from "styled-components";

export const AsideContainer = styled.aside`
  background: ${(props) => props.theme.colors.gray800};
  border-radius: 8px;
  overflow: hidden;
  .cover {
    width: 100%;
    height: 72px;
    object-fit: cover;
  }
  footer {
    border-top: 1px solid ${(props) => props.theme.colors.gray600};
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    a {
      background: transparent;
      color: ${(props) => props.theme.colors.green500};
      border: 1px solid ${(props) => props.theme.colors.green500};
      border-radius: 8px;
      height: 50px;
      padding: 0 1.5rem;
      font-weight: bold;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem
    }
    a:hover {
      background: ${(props) => props.theme.colors.green500};
      color: ${(props) => props.theme.colors.white};
      transition: 0.1s;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(0px - 1.5rem - 6px);
  img {
    box-sizing: initial;
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    border: 4px solid ${(props) => props.theme.colors.gray800};
    outline: 2px solid ${(props) => props.theme.colors.green500};
  }
  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.gray100};
    line-height: 1.6;
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray400};
    line-height: 1.6;
  }
`
