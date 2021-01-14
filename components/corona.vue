<template>
  <div>
    <div class="pt-6">
      <div class="notification is-danger c-no-border-radius mb-0" v-if="$nuxt.isOffline">
        No Internet connection. Make sure Wi-Fi or cellular data is turned on, then try again.
      </div>
      <div class="notification c-no-border-radius">
        <div class="has-text-weight-bold mb-4">
          <span class="tag is-danger"><span class="c-blink mr-1">●</span> LIVE</span>
          Coronavirus update in Indonesia
        </div>
        <div class="table-container">
          <nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
            <div v-if="loading">
              <skeleton height="1.6875rem" />
            </div>
            <div v-else-if="error">
              <span class="icon is-small mr-2"><i class="fal fa-info-circle"></i></span>
              <span>Failed to retrieve data, please</span>
              <span class="c-cursor-pointer has-text-link ml-1" @click="getCovid19Data()"
                >try again</span
              >
            </div>
            <ul v-else>
              <li>
                <a :href="covid['confirmed']['detail']" class="c-no-underline">
                  <span class="icon is-small">
                    <i class="fad fa-head-side-virus"></i>
                  </span>
                  <span class="mr-1">Confirmed:</span>
                  <span class="has-text-weight-bold">{{
                    covid["confirmed"]["value"].toLocaleString("id-ID")
                  }}</span>
                </a>
              </li>
              <li>
                <a :href="covid['recovered']['detail']" class="c-no-underline">
                  <span class="icon is-small">
                    <i class="fad fa-heartbeat"></i>
                  </span>
                  <span class="mr-1">Recovered:</span>
                  <span class="has-text-weight-bold">{{
                    covid["recovered"]["value"].toLocaleString("id-ID")
                  }}</span>
                </a>
              </li>
              <li>
                <a :href="covid['deaths']['detail']" class="c-no-underline">
                  <span class="icon is-small">
                    <i class="fad fa-skull"></i>
                  </span>
                  <span class="mr-1">Deaths:</span>
                  <span class="has-text-weight-bold">
                    {{ covid["deaths"]["value"].toLocaleString("id-ID") }}
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="c-no-underline">
                  <span class="icon icon-small">
                    <i class="fad fa-clock"></i>
                  </span>
                  <span class="mr-1">Last update:</span>
                  <span class="has-text-weight-bold">
                    {{ lastCovidUpdate }}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      covid: {},
      loading: false,
      error: false,
    }
  },
  methods: {
    getCovid19Data() {
      this.updateFetchState(true, false)
      this.$axios
        .$get("https://covid19.mathdro.id/api/countries/indonesia")
        .then((res) => {
          this.covid = res
          this.updateFetchState(false, false)
        })
        .catch((err) => {
          this.covid = []
          this.updateFetchState(false, true)
        })
    },
    updateFetchState(loading, error) {
      this.loading = loading
      this.error = error
    }
  },
  computed: {
    lastCovidUpdate() {
      const date = new Date(this.covid["lastUpdate"])
      return `${date.getHours()}:${date.getMinutes()} WIB`
    },
  },
  created() {
    this.getCovid19Data()
  },
}
</script>
