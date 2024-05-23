<template>
    <div class="header-wrapp">
            <div class="header-top-info">
                <ContactInfo />
                <ButtonHeader />
            </div>
    </div>
</template>
      
<script>
import ContactInfo from '@/components/base/ContactInfo.vue';
import ButtonHeader from '@/components/base/ButtonHeader.vue';


 export default {
    name: 'InfoHeader',
    components:{
        ContactInfo,
        ButtonHeader,
    }
      };
</script>
      

<style scoped>

</style>
