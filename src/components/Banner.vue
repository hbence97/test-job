<template>
  <div v-if="showBanner" id="banner__container">
    <div id="banner__items">
      <img class="banner__image" src="../assets/banner_image.png" alt="Banner image">
      <h2 class="banner__h2">New features available!</h2>
      <span class="banner__span">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      <button class="banner__button" @click="viewNewFeatures">View new features</button>
      <img class="banner__x" @click="closeBanner" src="../assets/banner_x.png" alt="Banner close button">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: false,
      newFeaturesClicked: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.showBanner = true;
    }, "1000")
  },
  methods: {
    viewNewFeatures() {
      this.newFeaturesClicked = true;
      this.closeBanner();

      this.$emit("new-feature-clicked", this.newFeaturesClicked);
    },

    closeBanner() {
      this.showBanner = false;
    }
  },
}
</script>

<style scoped>
#banner__container {
  position: absolute;
  top: 0;
  background: radial-gradient(ellipse at 20% 0%, rgba(38, 209, 176, 1) 0%, rgba(38, 110, 209, 1) 40%);
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 2;
}

#banner__items {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 0.4fr 1fr 1fr 1fr;
  grid-template-areas:
    "banner__image ..."
    "banner__image banner__h2"
    "banner__image banner__span"
    "banner__image banner__button";
}

.banner__image {
  grid-area: banner__image;
  justify-self: right;
  margin-right: 2rem;
}

.banner__h2,
.banner__span,
.banner__button {
  margin-left: 2rem;
}

.banner__h2 {
  grid-area: banner__h2;
  align-self: end;
  color: white;
  font-size: 48px;
  font-weight: 800;
}

.banner__span {
  grid-area: banner__span;
  margin-top: 1rem;
  color: #E9EFF2;
  font-weight: 200;
}

.banner__button {
  grid-area: banner__button;
  align-self: start;
  margin-top: -1.3rem;
  width: 11rem;
  height: 2.7rem;
  color: white;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
}

.banner__x {
  position: absolute;
  top: 1rem;
  right: 1.3rem;
  cursor: pointer;
}
</style>
