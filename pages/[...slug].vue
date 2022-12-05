<script setup>
let { slug } = useRoute().params

const url = slug && slug.length > 0 ? slug.join('/') : 'home'
const story = await useAsyncStoryblok(url, { version: 'draft' })
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
