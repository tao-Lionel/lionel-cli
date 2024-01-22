<template>
<h1>普通详情</h1>
  <h3>\{{ sum }}</h3>
  <button @click="handelClick">{{ name }}</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sum = ref(0);

function handelClick() {
  sum.value++;
}
</script>

<style scoped lang="scss"></style>
