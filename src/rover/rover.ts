export enum Direction {
  North = "north",
  South = "south",
  West = "west",
  East = "east",
}

export enum Command {
  Forward = "forward",
  Back = "back",
  Left = "left",
  Right = "right",
}

export interface IRover {
  position: IPosition
  direction: Direction
}

export interface IPosition {
  x: number
  y: number
}

const compass: ReadonlyArray<Direction> = [Direction.North, Direction.East, Direction.South, Direction.West]
const moves: ReadonlyArray<IPosition> = [
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: -1, y: 0 },
]

function right(rover: IRover): IRover {
  return turn(rover, compass)
}

function left(rover: IRover): IRover {
  return turn(rover, [...compass].reverse())
}

function turn(rover: IRover, compass: ReadonlyArray<Direction>): IRover {
  return { ...rover, direction: compass[(compass.indexOf(rover.direction) + 1) % compass.length] }
}

function forward(rover: IRover): IRover {
  return move(rover, moves[compass.indexOf(rover.direction)])
}

function back(rover: IRover): IRover {
  return move(rover, moves[(compass.indexOf(rover.direction) + 2) % compass.length])
}

function move(rover: IRover, vector: IPosition): IRover {
  return {
    ...rover,
    position: {
      x: rover.position.x + vector.x,
      y: rover.position.y + vector.y,
    },
  }
}

export function go(rover: IRover, ...commands: Command[]): IRover {
  const execute: Record<Command, (rover: IRover) => IRover> = {
    [Command.Forward]: forward,
    [Command.Back]: back,
    [Command.Left]: left,
    [Command.Right]: right,
  }

  return commands.reduce((r: IRover, command: Command) => execute[command](r), rover)
}
