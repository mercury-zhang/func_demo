<template>
  <div>
    <div v-for="item in arr">
      <img height="500" :data-index="item" v-lazy="item" width="360" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { Directive } from 'vue';

let imageList: Record<string, { default: string }> = import.meta.glob('./assets/images/*.*', { eager: true })
console.log(imageList)
let arr = Object.values(imageList).map(v => v.default)
console.log(arr)

let vLazy: Directive<HTMLImageElement, string> = async (el, binding) => {
  const def = await import('./assets/vue.svg')
  el.src = def.default
  const observer = new IntersectionObserver((enr) => {
    if (enr[0].intersectionRatio > 0) {
      setTimeout(() => {
        el.src = binding.value
        observer.unobserve
      }, 1000);
    }
  })
  observer.observe(el)
}
</script>

<style scoped></style>
