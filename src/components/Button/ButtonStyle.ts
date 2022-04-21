import styled from 'styled-components'

export const ButtonStyle = styled.button<{ color?: string }>`
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  cursor: pointer;

  min-width: 300px;

  transition: shadow 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:enabled {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`
