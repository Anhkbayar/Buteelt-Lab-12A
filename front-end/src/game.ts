interface GameState {
  cells: Cell[];
  currentPlayer: String;
  winner: String | null;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }