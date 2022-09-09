import styled from "styled-components";

export const ArticleContainer = styled.article`
  background: ${(props) => props.theme.colors.gray800};
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  :last-child {
    margin-bottom: 0rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  time {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray400};
  }
  .postInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      box-sizing: initial;
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
      border: 4px solid ${(props) => props.theme.colors.gray800};
      outline: 2px solid ${(props) => props.theme.colors.green500};
    }
  }
  .titles {
    display: flex;
    flex-direction: column;
    line-height: 1.6;
    strong {
      color: ${(props) => props.theme.colors.gray100};
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.gray400};
    }
  }
`;

export const PostContent = styled.div`
  line-height: 1.6;
  color: ${(props) => props.theme.colors.gray300};
  margin-top: 1.5rem;
  p {
    margin-top: 1rem;
  }
  a {
    margin-top: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.green500};
    text-decoration: none;
    :hover {
      color: ${(props) => props.theme.colors.green300};
    }
  }
`;
