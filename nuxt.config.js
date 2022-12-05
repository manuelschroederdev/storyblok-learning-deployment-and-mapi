export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        bridge: process.env.IS_PREVIEW === 'true' ? true : false,
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  ssr: false,
  runtimeConfig: {
    public: {
      isPreview: process.env.IS_PREVIEW,
    },
  },
})
