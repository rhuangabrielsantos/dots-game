import styled from 'styled-components'

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  margin-top: 0.5rem;

  background-color: $(props) => props.theme.colors.primary;
`
