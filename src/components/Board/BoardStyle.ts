import styled from 'styled-components'

export const Container = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  zoom: ${(props) => {
    switch (props.size) {
      case '4x4':
        return '100%'
      case '6x6':
        return '80%'
      case '8x8':
        return '65%'
      case '10x10':
        return '50%'
    }
  }};
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
