import { Colors } from '@/interfaces/Player'

export interface ColorOptionsProps {
  colors: string[]
  unavailableColors: Colors[]
  selectedColor?: string
  onChange: (color: Colors) => void
}
