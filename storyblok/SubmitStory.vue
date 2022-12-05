<template>
  <div
    v-editable="blok"
    class="text-center"
  >
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok.headline }}
    </h3>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
