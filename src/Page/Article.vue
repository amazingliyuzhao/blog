<script lang="ts">
import { ref, Ref } from 'vue';
import { CategoryProps } from '../types/home.type';
export default {
  components: {},
  setup() {
    const testPreText = ref('# ddsads');

    return {
      testPreText,
    };
  },
};
</script>

<template>
  <div class="articalWrap">
    <div class="topBg">
      <div class="topSlgon">介绍，介绍，介绍，介绍，</div>
    </div>
    <div class="previewContainer">
      <v-md-preview :text="testPreText"></v-md-preview>
    </div>
  </div>
</template>

<style scoped lang="scss">
.articalWrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .topBg {
    width: 100%;
    height: 200px;
    background-color: #211e55;
    margin-bottom: 20px;
    object-fit: cover;
    position: relative;
    .topSlgon {
      position: absolute;
      font-weight: bold;
      top: 120px;
      left: 80px;
      font-size: 30px;
      opacity: 1;
      color: #fff;
      z-index: 2;
    }
  }
}
</style>
