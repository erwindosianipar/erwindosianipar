<template>
  <div>
    <h1>Award</h1>
    <h2>List of my achieves in programming stuff</h2>
    <div>
      <div class="notification">
        <h3 class="mt-2">1st IT Competition 2019 Methodist University of Indonesia</h3>
        <p>Apr 2019 · IT Competition 2019 Methodist University of Indonesia</p>
      </div>
      <div class="notification">
        <h3 class="mt-2">3th Lomba Kreatif Siswa (LKS) Tingkat Nasional Tahun 2016</h3>
        <p>March 2016 · Dispendik Lomba Kreatif Siswa Tingkat Nasional 2016</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: `Award | ${process.env.FULL_NAME}`,
      description: "List of Erwindo Sianipar achieves in programming stuff",
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
