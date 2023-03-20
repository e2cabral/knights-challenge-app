import { defineStore } from "pinia";

export default interface Knight {
  name: string
  nickname: string
  birthday: string
  class: string
  weapons: Weapon[]
  equippedWeapon: string
  attributes: Attributes
  keyAttribute: string
}

export interface Attributes {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

export interface Weapon {
  _id: string
  name: string
  mod: number
  attr: string
}
export const useKnightsStore = defineStore('knights', {
  state: () => ({ knights: [] as Knight[] }),
  actions: {
    async getKnights(page: number, itemsPerPage: number) {
      fetch(`http://127.0.0.1:3001/knights?page=${page}&itemsPerPage=${itemsPerPage}`)
        .then((response) => response.json())
        .then(res => this.knights = res.body)
    }
  }
})
