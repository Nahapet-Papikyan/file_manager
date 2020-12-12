<template>
  <main class="main" >

  <FMAside 
    :toggle="isActiveCardOne"/>

  <div class="main-content">

    <FMCardOne ref="cardOne"       
      :class="{
                'transition-all-1': isActiveCardOne !==2,
                'w-100': isActiveCardOne === 1,
                'w-0': isActiveCardOne === 0,}"
      :style="`${ 
        isActiveCardOne === 2 ? 'width: ' + cardOneWidth + '%'
          : isActiveCardOne === 0 ? 'width: 0%;' : 'width: 100%'}`" />

    <div class="delimiter" id="resizePanel" @mousedown="unlock = true;"></div>

      <FMCardTwo ref="cardTwo"/>

      <div class="blank"
        :style="`display: ${isActiveCardThree ? 'none' : 'block'};`">
        <a id="opencard" @click="toggleCardThree">
        <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg></a>
      </div>

      <FMCardThree 
        :class="{'active': isActiveCardThree}"
        ref="cardThree"/>

    </div>

  </main>
</template>

<script> 
import FMAside from './FMAside/FMAside.vue'
import FMCardOne from './FMCards/FMCardOne.vue'
import FMCardTwo from './FMCards/FMCardTwo.vue'
import FMCardThree from './FMCards/FMCardThree.vue'

import {ref} from '@vue/composition-api' // Composition API 

export default {

  name: 'FMContent',

  components: { 
    FMAside,
    FMCardOne,
    FMCardTwo,
    FMCardThree,
  },

  setup() {
    let unlock = ref(false);
    let isActiveCardOne = ref(1);
    let isActiveCardThree = ref(false);
    let cardOneWidth = ref(0);
    let xMous = ref(0)

    function resize(e) {
      xMous = e.pageX
      let dwirdth = window.innerWidth
      let pos = ((xMous / dwirdth) * 100) * 2
      if(unlock.value){
        isActiveCardOne.value = 2;
        cardOneWidth.value = pos
      }
    }

    function setEventlisteners() {
      document.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', () =>  {
        unlock.value = false;
      })
    }

    function toggleCardOne() {
      if (isActiveCardOne.value === 0) {
        isActiveCardOne.value = 1;
      }
      else if (isActiveCardOne.value === 1) {
        isActiveCardOne.value = 0;
      }
      else if (isActiveCardOne.value === 2) {
        if(cardOneWidth.value > 10) {
          isActiveCardOne.value = 0;
        }
        else {
          isActiveCardOne.value = 1;
        }
      }
    }

    function toggleCardThree() {
      isActiveCardThree.value = !isActiveCardThree.value;
    }

    return {
      unlock, 
      isActiveCardOne, 
      isActiveCardThree, 
      cardOneWidth, 
      xMous,
      resize, 
      setEventlisteners, 
      toggleCardOne, 
      toggleCardThree
    };

  },

  provide() {
    return {
      toggleCardOne: this.toggleCardOne,
      toggleCardThree: this.toggleCardThree
    }
  },

  created() {
    this.setEventlisteners()
  },

}
</script>

<style>

</style>