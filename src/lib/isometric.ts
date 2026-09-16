export function project(x: number, y: number, z = 0): [number, number] {
  return [450 + (x - y) * 0.86, 180 + (x + y) * 0.48 - z];
}
