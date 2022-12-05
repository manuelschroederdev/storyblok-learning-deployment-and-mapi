<template>
  <div v-editable="blok" class="text-center">
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok.headline }}
    </h3>
    <form class="py-12 flex flex-col max-w-xl mx-auto gap-y-6">
      <input
        type="text"
        name="story-title"
        id="story-title"
        class="rounded-lg border-2 border-[#50b0ae] focus:outline-none py-2 px-4"
        placeholder="Story title"
      />
      <textarea
        name="story-content"
        id="story-content"
        cols="30"
        rows="10"
        class="rounded-lg border-2 border-[#50b0ae] focus:outline-none py-2 px-4"
        placeholder="Story content"
      ></textarea>
      <button type="submit" class="rounded-lg px-4 py-2 font-bold bg-[#f7f6fd]">
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
