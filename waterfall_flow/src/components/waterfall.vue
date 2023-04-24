<template>
  <div class="wraps">
    <div
      :style="{ height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px' }"
      v-for="item in waterList" class="items"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue'
const props = defineProps<{
  list: any[]
}>()

const waterList = reactive<any[]>([])
const heightList: number[] = []

const init = () => {
  const width = 130;
  const x = document.body.clientWidth
  const column = Math.floor(x / width)
  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].left = i * width
      props.list[i].top = 20
      waterList.push(props.list[i])
      heightList.push(props.list[i].height + 20)
    } else {
      let current = heightList[0]
      let index = 0
      heightList.forEach((h, i) => {
        if (h < current) {
          current = h
          index = i
        }
      })
      props.list[i].top = current + 20
      props.list[i].left = index * width
      heightList[index] = heightList[index] + props.list[i].height + 20
      waterList.push(props.list[i])
    }
  }
}

onMounted(() => {
  init()
})

</script>

<style scoped lang="less">
.wraps {
  position: relative;

  .items {
    position: absolute;
    width: 120px;
  }
}
</style>
