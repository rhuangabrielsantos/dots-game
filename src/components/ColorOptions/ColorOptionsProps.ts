import { Colors } from '../../interfaces/Player'

export interface ColorOptionsProps {
  unavailableColors: Colors[]
  selectedColor?: string
  onChange: (color: Colors) => void
}
