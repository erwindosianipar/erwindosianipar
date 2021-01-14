<template>
  <div>
    <h1>Blog</h1>
    <h2>Maintenance in progress</h2>
    <h3>
      This feature is undergoing for maintenance right now. Please check back later, I
      will work as soon as possible.
    </h3>
    <p>
      If you have something question, please let me now by drop me an email or you can
      contact me via contact page.
    </p>
    <nuxt-link to="/contact">contact page</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: `Blog | ${process.env.FULL_NAME}`,
      description: "List of Erwindo Sianipar opinion and post archive",
      url: `${process.env.BASE_URL}${this.$route.fullPath}`,
      image: process.env.AVATAR_URL,
      username: process.env.USER_NAME,
      covid: {},
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "description", content: this.description },

        { name: "og:title", content: this.title },
        { name: "og:description", content: this.description },
        { name: "og:image", content: this.image },
        { name: "og:url", content: this.url },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.title },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: this.image },
        { name: "twitter:url", content: this.url },
        { name: "twitter:site", content: this.username },
        { name: "twitter:creator", content: this.username },
      ],
      link: [{ rel: "canonical", href: this.url }],
    }
  },
}
</script>
