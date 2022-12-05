<script setup>
const config = useRuntimeConfig()
let { slug } = useRoute().params

const url = slug && slug.length > 0 ? slug.join('/') : 'home'
const story = await useAsyncStoryblok(url, {
  version: config.public.isPreview === 'true' ? 'draft' : 'published',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
