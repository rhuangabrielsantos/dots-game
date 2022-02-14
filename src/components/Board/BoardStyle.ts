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
    margin-right: ${({ horizontalLine }) => (horizontalLine ? '1rem' : '5rem')};

    :last-child {
      margin-right: 0;
    }
  }
`
