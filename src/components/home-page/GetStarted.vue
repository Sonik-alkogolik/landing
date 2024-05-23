<template>
  <div class="get-started-wrapp">
    <div class="get-started-tite">
      <h2>GET STARTED FOR AS LOW AS $0.50</h2>
      <p>
        How it works: Complete our service request form and provide all the
        required details.
      </p>
      <span
        >Once you are ready, send your products and custom packaging directly
        from your manufacturer or wholesaler to one of our three prep centers.
        Create an abbreviated shipping plan and grant Empire FBA Prep Services
        limited secure access via the Assistant Account on Amazon.</span>
        <ButtonGetStarted />
    </div>
    <div class="get-started-wrapp-description">
      <div class="get-started-item">
        <img src="/img/get-started.svg" alt="" />
        <div class="get-started-description">
          <p>CREATE AN ABBREVITED SHIPPING PLAN</p>
          <span
            >Create a new shipping plan in Seller Central. List the products you
            are sending along with quantities and then you are done!</span
          >
        </div>
      </div>
      <div class="get-started-item">
        <img src="/img/get-started-2.svg" alt="" />
        <div class="get-started-description">
          <p>SEND US YOUR INSTRUCTION</p>
          <span
            >Complete our service request form with detailed instructions or
            anything special you’d like for us to do.</span
          >
        </div>
      </div>
      <div class="get-started-item">
        <img src="/img/get-started-3.svg" alt="" />
        <div class="get-started-description">
          <p>WE’LL TAKE IT FROM THERE</p>
          <span
            >Using your input our experts will carefully prepare your shipment
            start to finish with impeccable care and attention to detail.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonGetStarted from '@/components/base/ButtonGetStarted.vue';
export default {
  name: "GetStarted",
  components:{
        ButtonGetStarted,
    }
};
</script>
