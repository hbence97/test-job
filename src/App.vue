<template>
  <inbox-page />
  <banner @new-feature-clicked="newFeatureClicked" />
  <new-features @cancel-new-features="closeNewFeatures" @request-sent="closeNewFeatures" v-if="showNewFeaturesPopup" />
</template>

<script>
export default {
  data() {
    return {
      showNewFeaturesPopup: false
    }
  },
  methods: {
    newFeatureClicked(isNewFeatureClicked) {
      if (isNewFeatureClicked) {
        this.showNewFeaturesPopup = true;
      }
    },
    closeNewFeatures() {
      this.showNewFeaturesPopup = false;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
}
</style>
