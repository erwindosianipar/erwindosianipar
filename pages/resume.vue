<template>
  <div>
    <h1>Resume</h1>
    <h2>As far as my carrer as a Software Engineer</h2>
    <p>
      Hi there, this is my resume pages, I had put as far as my career and experience in
      this resume file. If you need my resume you can download it by press the button
      download resume.
    </p>
    <p>
      If you’d like a more updated resume, please remind me to update this by contacting
      me via <nuxt-link to="/contact">contact page</nuxt-link> last updated on
      <strong>Sept 8, 2020</strong>
    </p>
    <div class="buttons mt-5">
      <button class="button is-link">
        <a
          href="https://erwindosianipar.github.io/cdn/documents/Resume%20-%20Erwindo%20Sianipar.pdf"
          class="has-text-white"
        >
          Download Resume <i class="far fa-download ml-3"></i>
        </a>
      </button>
      <button class="button is-link is-light">
        <a
          href="https://erwindosianipar.github.io/cdn/documents/Curriculum%20Vitae%20-%20Erwindo%20Sianipar.pdf"
        >
          Download Curriculum Vitae <i class="far fa-download ml-3"></i>
        </a>
      </button>
    </div>
    <div class="tabs" id="tabs">
      <ul>
        <li class="is-active" data-tab="1">
          <a> Resume </a>
        </li>
        <li data-tab="2">
          <a> Curriculum Vitae </a>
        </li>
      </ul>
    </div>
    <div id="c-tab-content">
      <div class="is-active" data-content="1">
        <object
          data="https://erwindosianipar.github.io/cdn/documents/Resume - Erwindo Sianipar.pdf"
          type="application/pdf"
          width="100%"
          style="height: 100vh"
        >
          <nav class="notification">
            <p>Cannot see the preview? try to downloading the resume instead.</p>
          </nav>
          <embed
            src="https://erwindosianipar.github.io/cdn/documents/Resume - Erwindo Sianipar.pdf"
          />
        </object>
      </div>
      <div data-content="2">
        <object
          data="https://erwindosianipar.github.io/cdn/documents/Curriculum Vitae - Erwindo Sianipar.pdf"
          type="application/pdf"
          width="100%"
          style="height: 100vh"
        >
          <nav class="notification">
            <p>Cannot see the preview? try to downloading the cv instead.</p>
          </nav>
          <embed
            src="https://erwindosianipar.github.io/cdn/documents/Curriculum Vitae - Erwindo Sianipar.pdf"
          />
        </object>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"

export default {
  created: function () {
    if (process.browser) {
      $(document).ready(function () {
        $("#tabs li").on("click", function () {
          var tab = $(this).data("tab")
          $("#tabs li").removeClass("is-active")
          $(this).addClass("is-active")
          $("#c-tab-content div").removeClass("is-active")
          $('div[data-content="' + tab + '"]').addClass("is-active")
        })
      })
    }
  },
  data() {
    return {
      title: `Resume | ${process.env.FULL_NAME}`,
      description: "As far as Erwindo Sianipar carrer as a Software Engineer",
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
