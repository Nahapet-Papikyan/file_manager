<template>
  <div class="page">
    <FMHeader />
    
    <FMContent />

  </div>
</template>

<script>
import FMContent from '../components/FMContent/FMContent.vue'
import FMHeader from './FMHeader.vue'

export default {

  name: "FMLayout",

  components: {
    FMHeader,
    FMContent,
  }

}
</script>
