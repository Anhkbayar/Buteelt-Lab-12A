interface GameState {
  cells: Cell[];
  currentPlayer: String;
  winner: String | null;
  history: GameState[];
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }