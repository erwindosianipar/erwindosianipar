<template>
  <div>
    <h1>👋 Halu World!</h1>
    <h2>I'm <span class="c-underscore">Erwindo Sianipar</span>.</h2>
    <blockquote class="mb-3">
      People who are always on the move, but never settle for less.
    </blockquote>
    <div class="notification is-link is-light">
      <p class="has-text-link">
        Hello, how are you? What happen today? Wish you have the best right now. It's me,
        Erwindo Sianipar and I was born
        <span class="tag is-link is-rounded c-cursor-pointer c-tooltip">
          <span id="age-seconds">0</span>
          <span class="c-tooltip-text" id="age-years">0</span>
        </span>
        seconds ago. A young man and energic but just a mere human, who still pursuing my
        dreams. Let us know more, and be friend for sake of humanity and freedom 😁🎉
      </p>
      <p class="has-text-link">
        I'm from Pematangsiantar, Indonesia and now live in Jakarta, currently working as
        iOS Developer on a Indonesia-based company. I don’t have important things to do
        except sitting in front of my laptop.
        <strong>I'm interested in programming, photography, and UI/UX design</strong>, I
        also like to watch movies and listening musics.
      </p>
      <p class="has-text-link">
        Maybe that the things if you want to know me more wkwkwk.
      </p>
    </div>
    <div class="mt-5">
      <div>
        <h3>Clients I have worked for</h3>
      </div>
      <div class="tile">
        <div class="tile c-center">
          <img
            src="@/assets/img/lionparcel.svg"
            class="c-height-50 c-grayscale"
            alt="PT Lion Parcel"
          />
        </div>
        <div class="tile c-center">
          <img
            src="@/assets/img/enigmacamp.svg"
            class="c-height-50 c-grayscale"
            alt="PT Enigma Cipta Humanika"
          />
        </div>
        <div class="tile c-center">
          <img
            src="@/assets/img/tobatronik.svg"
            class="c-height-50 c-grayscale"
            alt="CV Tojai Baru Tronik"
          />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <ul class="menu-list">
        <li>
          <span class="panel-icon"> 🖥 </span>
          <span class="has-text-weight-bold"> I Love coding and programming </span>
          <p>
            I'm so interested in coding and programming since 2015. Now I'm currently
            working as iOS Developer and working with Swift and learn with all programming
            language that help me to build a good apps.
          </p>
        </li>
        <li>
          <span class="panel-icon"> 🗺 </span>
          <span class="has-text-weight-bold">
            I'm currently located in Jakarta, Indonesia
          </span>
          <p>
            I was born in June 2000 and raised in North Sumatra. Since December 2019, I
            moved to the capital city of Indonesia: Jakarta.
          </p>
        </li>
        <li>
          <span class="panel-icon"> 🙌 </span>
          <span class="has-text-weight-bold"> Just my favourite quote </span>
          <p>
            He who experiences the unity of life sees his own Self in all beings, and all
            beings in his own Self, and looks on everything with an impartial eye.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var $ = require("jquery")

var born = new Date("2000-06-03")

export default {
  data() {
    return {
      title: `Home | ${process.env.FULL_NAME}`,
      description: "People who are always on the move, but never settle for less",
      url: `${process.env.BASE_URL}${this.$route.fullPath}`,
      image: process.env.AVATAR_URL,
      username: process.env.USER_NAME,
    }
  },
  created: function () {
    if (process.browser) {
      function updateAge(time) {
        $(document).ready(function () {
          $("#age-seconds").html(time.toLocaleString())
        })
      }
      $(document).ready(function () {
        $("#age-years").html(
          `${new Date().getFullYear() - born.getFullYear()} years ago`
        )
      })
      setInterval(function () {
        var time = Math.floor((new Date().getTime() - born) / 1000)
        updateAge(time)
      }, 1000)
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
