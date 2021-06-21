<template>
  <p id="msg">{{ state.count }}</p>
  <button id="test-btn" @click="add">test</button>
</template>

<script lang="ts">
/**
 * @author GKing19
 */
import { reactive, defineComponent } from "vue"
export default defineComponent({
  name: "Green",
  setup() {
    const state = reactive({
      count: 0
    })

    const add = () => {
      state.count += 1
    }

    return {
      state,
      add
    }
  }
})
</script>
<style scoped lang="less"></style>
