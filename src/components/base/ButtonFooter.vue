<template>
  <button class="book-now" @click="btn_click">
    Book Now
  </button>
</template>

<script>

export default {
  name: 'ButtonFooter',
  methods: {
    btn_click() {
      this.$emit('click');
      const popupOverlay = document.querySelector('.popup-overlay');
      popupOverlay.classList.add('active');
      console.log(true);
    }
  }
};
</script>