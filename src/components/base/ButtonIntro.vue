<template>
  <button :class="computedClass" @click="btn_click">
    Contact Us
  </button>
</template>

<script>
export default {
  name: 'ContactUsButton',
  props: {
    primary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClass() {
      return {
        'btn-contact': true,
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
