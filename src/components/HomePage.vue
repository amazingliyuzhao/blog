<script lang="ts">
import HeadNav from './PageCom/HeadNav.vue';
import CategoryBar from './PageCom/CategoryBar.vue';
import { ref, Ref } from 'vue';
import { CategoryProps } from '../types/home.type';
export default {
  components: { HeadNav, CategoryBar },
  setup() {
    const testIntroduction =
      '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述';
    const categoryList: Ref<CategoryProps['categoryData'][]> = ref([
      {
        className: '第一分类',
        cardList: [
          {
            cardTextName: '文章1',
            introduction: testIntroduction,
            tipName: 'VUE',
            time: '07-13 17:34:1',
            authorName: 'AMAZ',
            authorAvator: '',
            commentNum: 123,
            watchNum: 332,
          },
          {
            cardTextName: '文章2',
            introduction: testIntroduction,
            tipName: 'VUE',
            time: '07-13 17:34:1',
            authorName: 'AMAZ',
            authorAvator: '',
            commentNum: 123,
            watchNum: 332,
          },
          {
            cardTextName: '文章3',
            introduction: testIntroduction,
            tipName: 'VUE',
            time: '07-13 17:34:1',
            authorName: 'AMAZ',
            authorAvator: '',
            commentNum: 123,
            watchNum: 332,
          },
        ],
      },
      {
        className: '第二分类',
        cardList: [
          {
            cardTextName: '文章1',
            introduction: testIntroduction,
            tipName: 'VUE',
            time: '07-13 17:34:1',
            authorName: 'AMAZ',
            authorAvator: '',
            commentNum: 123,
            watchNum: 332,
          },
          {
            cardTextName: '文章2',
            introduction: testIntroduction,
            tipName: 'VUE',
            time: '07-13 17:34:1',
            authorName: 'AMAZ',
            authorAvator: '',
            commentNum: 123,
            watchNum: 332,
          },
        ],
      },
    ]);
    return {
      categoryList,
    };
  },
};
</script>

<template>
  <div class="homePageWrap">
    <HeadNav></HeadNav>
    <div class="bgImg"></div>
    <div class="topBg">
      <img class="topBgImg" src="../assets/images/topBgImg.png" alt="" />
    </div>
    <CategoryBar
      v-for="(val, index) in categoryList"
      :key="index"
      :category-data="val"
    ></CategoryBar>
  </div>
</template>

<style scoped lang="scss">
.homePageWrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;
  .topBg {
    width: 100%;
    height: 300px;
    background-color: rgba(#000, 1);
    margin-bottom: 20px;
    .topBgImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.6;
    }
  }
}
</style>
