import { Command, Direction, go, IRover } from "../../src/rover/rover"

describe("Rover", () => {
  describe("turns", () => {
    it.each([
      [Command.Left, Direction.North, Direction.West],
      [Command.Left, Direction.West, Direction.South],
      [Command.Left, Direction.South, Direction.East],
      [Command.Left, Direction.East, Direction.North],
      [Command.Right, Direction.North, Direction.East],
      [Command.Right, Direction.East, Direction.South],
      [Command.Right, Direction.South, Direction.West],
      [Command.Right, Direction.West, Direction.North],
    ])(`%s from %s to %s`, (command: Command, startingDirection: Direction, expectedDirection: Direction) => {
      const rover: IRover = go({ direction: startingDirection, position: { x: 0, y: 0 } }, command)
      expect(rover).toEqual({ direction: expectedDirection, position: { x: 0, y: 0 } })
    })
  })

  describe("moves", () => {
    it.each([
      [Command.Forward, 5, 6, Direction.North],
      [Command.Forward, 6, 5, Direction.East],
      [Command.Forward, 5, 4, Direction.South],
      [Command.Forward, 4, 5, Direction.West],
      [Command.Back, 5, 4, Direction.North],
      [Command.Back, 4, 5, Direction.East],
      [Command.Back, 5, 6, Direction.South],
      [Command.Back, 6, 5, Direction.West],
    ])("%s to x: %d, y: %d when facing %s", (command: Command, x: number, y: number, direction: Direction) => {
      const rover: IRover = go({ direction, position: { x: 5, y: 5 } }, command)
      expect(rover).toEqual({ direction, position: { x, y } })
    })
  })
})
