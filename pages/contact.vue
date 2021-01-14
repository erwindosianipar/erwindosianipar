<template>
  <div>
    <h1>Contact</h1>
    <h2>Let’s make something great together! 🤩</h2>
    <div class="level mt-5">
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-48x48">
            <img
              class="is-rounded"
              src="https://erwindosianipar.github.io/cdn/images/erwindosianipar.jpeg"
              alt="Erwindo Sianipar"
            />
            <i class="c-online-indicator"></i>
          </figure>
        </div>
        <div class="level-item">
          <span>Reply time:</span>
          <span class="has-text-weight-bold">1-3 working days</span>
        </div>
      </div>
    </div>
    <p>
      Just send me message from this form, I will receive your message via email and I
      will reach as soon as possible 📭😉
    </p>
    <p>
      Or you can find all my social media account at sidebar of this website. I will be
      happy to listen to you 😉 If you have a something trouble to find me at internet,
      you can call my name three times btw hahahaha, feel free to contact me.
    </p>
    <div v-if="error">
      <div class="notification is-danger is-light mt-5 mb-5">
        <i class="fal fa-info-circle mr-2"></i> {{ errorMessage }}
      </div>
    </div>
    <div class="field">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            autocomplete="off"
            placeholder="e.g. Erwindo Sianipar"
            v-model="name"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            autocomplete="off"
            placeholder="e.g. erwindosianipar@gmail.com"
            v-model="email"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="e.g. Hello world, how area you?"
            v-model="message"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link" id="button" @click="sendMessage">
          Send me a message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
var $ = require("jquery")

export default {
  data() {
    return {
      title: `Contact | ${process.env.FULL_NAME}`,
      description:
        "Get in touch with Erwindo Sianipar and Let’s make something great together",
      url: `${process.env.BASE_URL}${this.$route.fullPath}`,
      image: process.env.AVATAR_URL,
      username: process.env.USER_NAME,
      name: null,
      email: null,
      message: null,
      error: false,
      errorMessage: null
    }
  },
  methods: {
    validEmail(email) {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(String(email).toLowerCase())
    },
    updateErrorState(error, message) {
      this.error = error
      this.errorMessage = message
    },
    updateEmptyState() {
      this.name = null
      this.email = null
      this.message = null
    },
    sendMessage() {
      if (this.name == null || this.email == null || this.message == null) {
        this.updateErrorState(true, "Please complete all field to send message")
      } else {
        if (this.validEmail(this.email)) {
          this.updateErrorState(false, null)
          $("button").toggleClass("is-loading")
          $("button").prop("disabled", true)
          var body = new FormData()
          body.append('name', this.name)
          body.append('email', this.email)
          body.append('message', this.message)
          this.$axios({
            method: 'POST',
            url: 'https://formspree.io/maypjpvv',
            data: body
          })
          .then((res) => {
            $("button").toggleClass("is-loading")
            $("button").html('Message sent successfully')
            this.updateEmptyState()
          })
          .catch((err) => {
            $("button").toggleClass("is-loading")
            $("button").prop("disabled", false)
            this.updateErrorState(true, "Failed to send message, please try again")
          })
        } else {
          this.updateErrorState(true, "Please insert a valid email address")
        }
      }
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
