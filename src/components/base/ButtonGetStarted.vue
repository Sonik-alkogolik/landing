<template>
       <button :class="computedClass" @click="btn_click">
            SEND A SHIPMENT FORM
        </button>
  </template>

  
<script>
export default {
  name: 'ButtonGetStarted.vue',
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
