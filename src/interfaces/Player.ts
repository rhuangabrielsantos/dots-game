export interface Player {
  id: string
  name: string
  color: Colors
  pontuation: number
}

export type Colors =
  | '#FF2329'
  | '#0030f3'
  | '#19ce28'
  | '#f3f300'
  | 'primary'
  | undefined
