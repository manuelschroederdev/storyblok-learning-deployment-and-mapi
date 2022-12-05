<template>
  <div v-editable="blok" class="text-center">
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok.headline }}
    </h3>
    <form
      class="py-12 flex flex-col max-w-xl mx-auto gap-y-6"
      @submit.prevent="submitStory"
    >
      <input
        type="text"
        name="story-title"
        id="story-title"
        class="rounded-lg border-2 border-[#50b0ae] focus:outline-none py-2 px-4"
        placeholder="Story title"
        v-model="storyTitle"
        required
      />
      <input
        type="text"
        name="story-slug"
        id="story-slug"
        class="rounded-lg border-2 border-[#50b0ae] focus:outline-none py-2 px-4"
        placeholder="Story slug"
        v-model="storySlug"
        required
      />
      <textarea
        name="story-content"
        id="story-content"
        cols="30"
        rows="10"
        class="rounded-lg border-2 border-[#50b0ae] focus:outline-none py-2 px-4"
        placeholder="Story content"
        v-model="storyContent"
        required
      ></textarea>
      <button type="submit" class="rounded-lg px-4 py-2 font-bold bg-[#f7f6fd]">
        Send
      </button>
    </form>
    <!-- <pre>{{ stories }}</pre>
    <ul v-if="stories">
      <li v-for="story in stories" :key="story.uuid">
        {{ story.name }}
      </li>
    </ul> -->
  </div>
</template>

<script setup>
import StoryblokClient from 'storyblok-js-client'
defineProps({ blok: Object })

const storyTitle = ref(null)
const storySlug = ref(null)
const storyContent = ref(null)

const Storyblok = new StoryblokClient({
  oauthToken: '',
  https: true,
})

const submitStory = () => {
  Storyblok.post('spaces/186541/stories/', {
    story: {
      name: storyTitle.value,
      slug: storySlug.value,
      parent_id: 229135019,
      content: {
        component: 'user-story',
        headline: storyTitle.value,
        content: storyContent.value,
      },
    },
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

const storyblokApi = useStoryblokApi()
const stories = ref(null)

const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'user-submitted-stories',
})

stories.value = data.stories
</script>
