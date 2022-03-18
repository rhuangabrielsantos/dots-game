import styled from 'styled-components'

import { Colors } from '../../interfaces/Player'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`

export const ColorButton = styled.button<{ color: Colors; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border: none;
  border-radius: 5px;

  background: ${(props) => props.color};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    ${(props) => !props.disabled && `box-shadow: 0 0 0 2px ${props.color}}`};
  }
`
