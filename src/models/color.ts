export class Color {
  red: number = 0;
  green: number = 0;
  blue: number = 0;

  toString(): string {
    return this.rgbToHex(this.red, this.green, this.blue);
  }

  componentToHex(c: number): string {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r: number, g: number, b: number): string {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
}
