<template>
  <div class="new-features__popup-container">
    <div class="new-features__popup">
      <h2 class="new-features__popup-h2">New Features Available</h2>
      <p class="new-features__popup-p">
        The name of your workspace will be visible to your customers. For us, it
        is "SAAS First". You will NOT be able to change this later.
      </p>
      <div class="new-features__popup-container--new-employees">
        <span class="new-features__popup-span--new-employees">New UI/UX Designer</span>
        <div class="new-features__popup-container--info-bubble">
          <img class="new-features__popup--info-bubble-icon" src="../assets/popup_info_icon.png" alt="Popup info icon" />
          <div class="new-features__popup-tooltip-container--info-bubble">
            <img class="new-features__popup--info-bubble new-features__popup--info-bubble-first"
              src="../assets/new_features_bubble.png" alt="Popup info bubble" />
            <span class="new-features__popup--info-bubble-tooltip">Lorem Ipsum is simply dummy text of the
              printing…</span>
          </div>
        </div>
      </div>
      <div class="new-features__popup-container--new-employees">
        <span class="new-features__popup-span--new-employees">New FE Developer</span>
        <div class="new-features__popup-container--info-bubble">
          <img class="new-features__popup--info-bubble-icon" src="../assets/popup_info_icon.png" alt="Popup info icon" />
          <div class="new-features__popup-tooltip-container--info-bubble">
            <img class="new-features__popup--info-bubble new-features__popup--info-bubble-second"
              src="../assets/new_features_bubble.png" alt="Popup info bubble" />
            <span class="new-features__popup--info-bubble-tooltip">Lorem Ipsum is simply dummy text of the
              printing…</span>
          </div>
        </div>
      </div>
      <form @submit.prevent class="new-features__popup-form">
        <label class="new-features__popup-form--label" for="requestNewFeatures">Request new features</label>
        <div class="new-features__popup-container--info-bubble">
          <img class="new-features__popup--info-bubble-icon" src="../assets/popup_info_icon.png" alt="Popup info icon" />
          <div class="new-features__popup-tooltip-container--info-bubble">
            <img class="new-features__popup--info-bubble new-features__popup--info-bubble-third"
              src="../assets/new_features_bubble.png" alt="Popup info bubble" />
            <span class="new-features__popup--info-bubble-tooltip">Lorem Ipsum is simply dummy text of the
              printing…</span>
          </div>
        </div>
        <br />
        <input @keyup="userInput" v-model.trim="inputMessage" class="new-features__popup-form--input" type="text"
          id="requestNewFeatures" name="requestNewFeatures" placeholder="e.g. mobile app developer" />
        <br />
        <div class="new-features__popup-form-container--buttons">
          <button @click="cancelHandler" class="new-features__popup-form--cancel-button" type="button">
            Cancel
          </button>
          <button @click="sendHandler" :class="[inputMessage ? 'validInput' : 'invalidInput']" type="button"
            class="new-features__popup-form--submit-button">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMessage: "",
    };
  },
  emits: ["cancel-new-features", "request-sent"],
  methods: {
    cancelHandler() {
      this.$emit("cancel-new-features");
    },
    sendHandler() {
      if (!this.inputMessage.length) {
        alert("Request new feature cannot be empty!");
      } else {
        this.$emit("request-sent");
      }
    },
  },
};
</script>

<style scoped>
.new-features__popup-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(154, 167, 175, 0.35);
  z-index: 2;
}

.new-features__popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 26rem;
  width: 36rem;
  padding: 2rem;
  background: white;
  border-radius: 25px;
  box-shadow: 0px 12px 9px 1px rgba(156, 156, 156, 0.68);
}

.new-features__popup-h2 {
  margin-bottom: 2rem;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
}

.new-features__popup-p {
  margin-bottom: 2rem;
}

.new-features__popup-container--new-employees {
  margin-bottom: 0.4rem;
}

.new-features__popup-span--new-employees {
  font-weight: 700;
}

.new-features__popup-container--info-bubble {
  display: inline;
  position: relative;
}

.new-features__popup--info-bubble-icon {
  margin-left: 0.5rem;
  vertical-align: middle;
}

.new-features__popup--info-bubble {
  position: absolute;
  top: -70px;
  left: -103px;
  z-index: 2;
}

.new-features__popup-tooltip-container--info-bubble {
  visibility: hidden;
}

.new-features__popup--info-bubble-tooltip {
  position: absolute;
  width: 180px;
  top: -55px;
  left: -60px;
  color: #6c7880;
  font-size: 12px;
  z-index: 3;
}

.new-features__popup--info-bubble-icon:hover+.new-features__popup-tooltip-container--info-bubble {
  visibility: visible;
}

.new-features__popup-form {
  margin-top: 2rem;
}

.new-features__popup-form--label {
  font-weight: 700;
}

.new-features__popup-form--input {
  margin-top: -0.7rem;
  padding: 0.5rem;
  padding-left: 0.8rem;
  width: 100%;
  font-size: 16px;
  border: 1px solid #c2ccd1;
  border-radius: 10px;
  line-height: 24px;
}

.new-features__popup-form-container--buttons {
  margin-top: 1.5rem;
  text-align: center;
}

.new-features__popup-form--cancel-button,
.new-features__popup-form--submit-button {
  width: 245px;
  padding: 0.8rem;
  background: #e9eff2;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.new-features__popup-form--cancel-button {
  margin-right: 1.2rem;
}

.new-features__popup-form--cancel-button:hover {
  color: white;
  background: #3d22cf;
}

.validInput {
  color: white;
  background: #3d22cf;
}

.invalidInput {
  pointer-events: none;
}
</style>
