<template>
  <div>
    <h1>Talk</h1>
    <h2>Me as a speaker at sharing event</h2>
    <div>
      <div class="notification">
        <h3 class="mt-2">Tech Talk #03 Lion Parcel</h3>
        <p>August 14, 2020 · Lion Parcel HQ</p>
        <script
          type="application/javascript"
          async
          class="speakerdeck-embed"
          data-id="36066cc3674440caa424d1503b2fed44"
          data-ratio="1.77777777777778"
          src="//speakerdeck.com/assets/embed.js"
        ></script>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: `Talk | ${process.env.FULL_NAME}`,
      description: "Erwindo Sianipar as a speaker at sharing event",
      url: `${process.env.BASE_URL}${this.$route.fullPath}`,
      image: process.env.AVATAR_URL,
      username: process.env.USER_NAME,
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
