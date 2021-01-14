<template>
  <div>
    <h1>Changelog</h1>
    <h2>Improvement log of this website</h2>
    <div>
      <h3>Nuxt version</h3>
      <h4>[v1.0.0] - January 15, 2021</h4>
      <p>
        This website is run on Nuxt JS serve with Express/Webpack and hosted on
        <a href="https://www.netlify.com/">Netlify</a>.
      </p>
      <hr />
      <h3>Vue version</h3>
      <h4>[v0.1.0] - December 10, 2020</h4>
      <p>
        This website is run on Vue JS serve with Express/Webpack and hosted on
        <a href="https://www.netlify.com/">Netlify</a>.
      </p>
      <hr />
      <h3>Old version</h3>
      <h4>[v2.0.3] - October 27, 2020</h4>
      <p>
        Previous version of this website is run on Ruby (Jekyll) and hosted on
        <a href="https://pages.github.com">Github pages</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: `Changelog | ${process.env.FULL_NAME}`,
      description: "Improvement log of this website",
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
