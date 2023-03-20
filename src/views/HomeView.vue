<script setup lang="ts">
  import Knight, { useKnightsStore } from "@/stores/knights.store";
  import { onBeforeMount } from "vue";
  import Mod from "@/domain/enum/mod";
  import { AttrKeys } from "@/domain/enum/attr.keys";

  let page = 1

  const store = useKnightsStore()
  const data = () => store.getKnights(page, 10)


  const getKeyAttributeValue = (knight: Knight) => {
    switch(knight.keyAttribute) {
      case AttrKeys.strength: {
        return knight.attributes.strength
      }

      case AttrKeys.dexterity: {
        return knight.attributes.dexterity
      }

      case AttrKeys.constitution: {
        return knight.attributes.constitution
      }

      case AttrKeys.intelligence: {
        return knight.attributes.intelligence
      }

      case AttrKeys.wisdom: {
        return knight.attributes.wisdom
      }

      default: {
        return knight.attributes.charisma
      }
    }
  }
  const knights = () => {
    return store.knights.map((knight) => {
      const year = Number(knight.birthday.split('/')[2])
      const currentYear = new Date().getFullYear()

      const age = currentYear - year

      const equippedWeapon = knight.weapons.find((k) => k._id === knight.equippedWeapon)

      const exp =  Math.floor((age - 7) * Math.pow(22, 1.45))

      return {
        ...knight,
        keyAttribute: knight.keyAttribute.toUpperCase(),
        age,
        attack: 10 + Mod.mod(getKeyAttributeValue(knight)).value + (equippedWeapon?.mod ? equippedWeapon.mod : 0),
        exp,
        weapons: knight.weapons.length
      }
    })
  }

  const tableConfig = {
      thead: ['Name', 'Age', 'Weapons', 'Key Attribute', 'Attack', 'Exp'],
      tbody: ['name', 'age', 'weapons', 'keyAttribute', 'attack', 'exp']
  }

  onBeforeMount(async () => data())
</script>

<template>
  <main>
    <ui-table
      fullwidth
      :data="knights()"
      :thead="tableConfig.thead"
      :tbody="tableConfig.tbody"
      defaultColWidth="150">
      <ui-pagination
        v-model="page"
        :total="knights().length"
        show-total
        @change="() => {}"
      ></ui-pagination>
    </ui-table>
  </main>
</template>
