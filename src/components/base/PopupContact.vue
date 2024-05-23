<template>
  <div class="popup-overlay" @click="hidePopup">
    <div class="popup-content" @click.stop>
      <h3>Popup</h3>
      <a>This is the content of the popup.</a>
      <button class="close-btn" @click="hidePopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupContact',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    visible(newValue) {
      console.log('Popup visibility changed:', newValue);
    }
  },
  methods: {
    hidePopup() {
      const popupOverlay = document.querySelector('.popup-overlay');
      popupOverlay.classList.remove('active');
    }
  }
};
</script>

