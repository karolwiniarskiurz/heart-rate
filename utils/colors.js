export default class Hsl {
  /**
   *
   * @param hue {number} - range 0, 360
   * @param saturation {number} - range 0,1
   * @param light {number} - range 0,1
   */
  constructor(hue, saturation, light) {
    this.hue = hue;
    this.saturation = saturation;
    this.light = light;
  }

  toString() {
    return `hsl(${this.hue}, ${this.saturation * 100}%, ${this.light * 100}%)`;
  }

  /**
   * return {Hsl} clone of the object
   */
  spawn() {
    return new Hsl(this.hue, this.saturation, this.light);
  }
}

export const lighten = (hsl, percent) => {
  const clone = hsl.spawn();
  clone.light += percent;
  return clone;
};

export const darken = (hsl, percent) => {
  const clone = hsl.spawn();
  clone.light -= percent;
  return clone;
};
