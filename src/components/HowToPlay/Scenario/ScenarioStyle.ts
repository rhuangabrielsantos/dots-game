import styled from 'styled-components'

export const NextButton = styled.button`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  padding: 1rem 2rem;
  margin-top: 3rem;

  transition: shadow 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:enabled {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`
