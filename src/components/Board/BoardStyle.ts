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
    margin-right: ${(props) =>
      props.horizontalLine
        ? props.theme.size.web.thickness
        : props.theme.size.web.breadth};

    :last-child {
      margin-right: 0;
    }

    ${(props) => props.theme.media.mobile} {
      margin-right: ${(props) =>
        props.horizontalLine
          ? props.theme.size.mobile.thickness
          : props.theme.size.mobile.breadth};
    }
  }
`
