export default class Mod {
  static MOD_0_8 = { mod: -2, value: 8, verify(value: number) { return value <= 8 } }
  static MOD_9_10 = { mod: -1, value: 10, verify(value: number) { return value > 8 && value <= 10 } }
  static MOD_11_12 = { mod: 0, value: 12, verify(value: number) { return value > 10 && value <= 12 } }
  static MOD_13_15 = { mod: 1, value: 15, verify(value: number) { return value > 12 && value <= 15 } }
  static MOD_16_18 = { mod: 2, value: 18, verify(value: number) { return value > 15 && value <= 18 } }
  static MOD_19_20 = { mod: 3, value: 20, verify(value: number) { return value > 18 && value <= 20 } }

  static getMods() {
    return [
      this.MOD_0_8,
      this.MOD_9_10,
      this.MOD_11_12,
      this.MOD_13_15,
      this.MOD_16_18,
      this.MOD_19_20,
    ]
  }
  static mod(value: number) {
    const mod = this
      .getMods()
      .find((mod) => mod.verify(value))

    return mod ?? { value: 0 }
  }
}
