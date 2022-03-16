import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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
    margin-right: ${({ horizontalLine }) => (horizontalLine ? '15px' : '70px')};

    :last-child {
      margin-right: 0;
    }
  }
`
