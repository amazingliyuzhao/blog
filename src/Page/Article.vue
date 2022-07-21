<script lang="ts">
import { ref, Ref } from 'vue';
import { CategoryProps } from '../types/home.type';
import { json } from 'stream/consumers';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const mdT = require('../docs/test.md');
// import HelloWorld from '../docs/test.md';

export default {
  components: {},
  setup() {
    // console.log(Docu);
    const testPreText = ref(`
    # das
    \`\`\`json\`\`\`
      dsda
    \`\`\`
    `);

    return {
      testPreText,
    };
  },
  data() {
    return {
      text: '',
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
      <v-md-editor v-model="text" height="400px"></v-md-editor>

      <!-- <v-md-preview :text="testPreText"></v-md-preview> -->
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
