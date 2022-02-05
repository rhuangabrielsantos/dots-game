import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Row = styled.div<{ horizontalLine: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: ${({ horizontalLine }) => (horizontalLine ? '1rem' : '5rem')};

    :last-child {
      margin-right: 0;
    }
    ${(props) =>
      props.horizontalLine &&
      `
      ::after {
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: ${props.theme.colors.gray};
        margin-left: -3.75rem;
        z-index: 2;
      }
      ::before {
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: ${props.theme.colors.gray};
        margin-right: -3.75rem;
        z-index: 2;
      }
    `}
  }
`
