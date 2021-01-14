<template>
  <div>
    <h1>Project</h1>
    <h2>Several list of my open source project</h2>
    <div v-if="loading">
      <div v-for="i in 3" :key="i">
        <div class="notification is-light mb-3">
          <skeleton width="30%" class="mb-5" />
          <skeleton class="mb-5" />
          <skeleton width="40%" />
        </div>
      </div>
    </div>
    <div v-else-if="error">
      <div class="notification is-light mb-3">
        <h3 class="mt-0">Couldn't load data from server</h3>
        <p>
          Sorry, an error occurred when retreive data from server. Please try again later
          or contact support, If you contact support please provide these details.
        </p>
        <div class="buttons">
          <button @click="getProjectList" class="button is-link is-rounded">
            Try Again
          </button>
          <nuxt-link to="/contact" class="button is-rounded">Contact Support</nuxt-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="project in projects" :key="project.id">
        <div class="columns">
          <div class="column">
            <div class="notification">
              <div class="media">
                <div class="media-left">
                  <i class="fad fa-book"></i>
                </div>
                <div class="media-content">
                  <a :href="project.url" class="has-text-weight-bold">
                    {{ project.name }}
                  </a>
                </div>
              </div>
              <p>{{ project.description }}</p>
              <div class="media">
                <div class="media-left">
                  <i class="far fa-brackets-curly"></i> {{ project.language }}
                </div>
                <div class="media-left">
                  <a :href="project.stargazers_url">
                    <span class="icon is-small">
                      <i class="far fa-star"></i>
                    </span>
                    <span>
                      {{ project.stargazers_count }}
                    </span>
                  </a>
                </div>
                <div class="media-content">
                  <a :href="project.forks_url">
                    <i class="far fa-code-branch"></i> {{ project.forks_count }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: `Project | ${process.env.FULL_NAME}`,
      description: "Several list of Erwindo Sianipar open source project",
      url: `${process.env.BASE_URL}${this.$route.fullPath}`,
      image: process.env.AVATAR_URL,
      username: process.env.USER_NAME,
      loading: false,
      error: false,
      projects: [],
    }
  },
  methods: {
    updateFetchState(loading, error) {
      this.loading = loading
      this.error = error
    },
    getProjectList() {
      this.updateFetchState(true, false)
      this.$axios
        .$get("https://api.github.com/users/erwindosianipar/starred")
        .then((res) => {
          this.projects = res
          this.updateFetchState(false, false)
        })
        .catch((err) => {
          this.projects = []
          this.updateFetchState(false, true)
        })
    }
  },
  created() {
    this.getProjectList()
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
