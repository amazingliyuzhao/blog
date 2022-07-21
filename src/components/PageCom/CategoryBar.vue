<script lang="ts">
import { ref, Ref, defineComponent, PropType } from 'vue';
import HomeCard from './HomeCard.vue';
import { CategoryProps, CardItem } from '../../types/home.type';

export default defineComponent({
  components: { HomeCard },
  props: {
    categoryData: {
      type: Object as PropType<CategoryProps['categoryData']>,
      required: true,
    },
  },

  setup(props: CategoryProps) {
    console.log(props.categoryData);
    return {};
  },
});
</script>

<template>
  <div class="cateGoreyWrap">
    <div class="sideClass">
      <div class="innerBox1">{{ categoryData.className }}</div>
      <div class="innerBox2"></div>
    </div>
    <div class="cardList">
      <HomeCard
        v-for="(val, index) in categoryData.cardList"
        :key="index"
        :card-data="val"
      ></HomeCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cateGoreyWrap {
  height: 380px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  .sideClass {
    width: 100px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #734338;
    position: relative;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    // margin-right: 20px;

    .innerBox1 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      position: absolute;
      left: 0;
      z-index: 1;
      top: 0;
      height: 100%;
      background-color: #908440;
      padding: 0 10px;
      animation: showOutbox 0.8s ease-in-out;
      @keyframes showOutbox {
        0% {
          transform: translateX(-100px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
    .innerBox2 {
      display: flex;
      width: 200px;
      height: 200px;
      position: absolute;
      z-index: 0;
      left: -200px;
      top: 100px;
      border-radius: 50%;
      background-color: #c73e3a;
      animation: showOut 1s ease-in-out 0.5s forwards;

      @keyframes showOut {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(95px);
        }
      }
    }
  }
  .cardList {
    display: flex;
    max-width: calc(100vw - 100px);
    overflow-x: scroll;
    padding: 20px 0 20px 30px;
    margin: -20px 0;
  }
}
</style>
