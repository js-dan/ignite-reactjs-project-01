import styled from "styled-components";

export const Background = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gray800};
  padding: 1.25rem 0;
  img {
    height: 2rem;
    padding-right: 0.5rem;
  }
  font-weight: 700;
  font-size: 1.5rem;
`