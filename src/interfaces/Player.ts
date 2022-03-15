export interface Player {
  id: string
  name: string
  color: Colors
  pontuation: number
}

export type Colors =
  | '#FF2329'
  | '#0030f3'
  | '#02c913'
  | '#ffff28'
  | 'primary'
  | undefined
