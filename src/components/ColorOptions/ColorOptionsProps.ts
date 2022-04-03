import { Colors } from '../../interfaces/Player'

export interface ColorOptionsProps {
  id: string
  unavailableColors?: Colors[]
  selectedColor?: string
  onChange: (color: Colors) => void
}
