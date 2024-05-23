<template>
  <button :class="computedClass" @click="btn_click">
    Book Now
  </button>
</template>

<script>
export default {
  name: 'ButtonHeader',
  props: {
    primary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClass() {
      return {
        'btn-orange': true,
        'btn-primary': this.primary
      };
    }
  },
  methods: {
    btn_click() {
      this.$emit('click');
      const popupOverlay = document.querySelector('.popup-overlay');
      popupOverlay.classList.add('active');
    }
  }
};
</script>

