<script lang="ts">
import CategoryBar from '../components/PageCom/CategoryBar.vue';
import { ref, Ref } from 'vue';
import { CategoryProps } from '../types/home.type';
export default {
  components: { CategoryBar },
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
    const testPreText = ref('# ddsads');

    return {
      categoryList,
      testPreText,
    };
  },
};
</script>

<template>
  <div class="homePageWrap">
    <div class="bgImg"></div>
    <div class="topBg">
      <div class="topSlgon">一句slgon，一句slgon，一句slgon</div>
      <img
        class="topBgImg"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F98%2Faf%2F7b%2F98af7bd0617a4dffe195e41010f40891.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660394506&t=cfecb3b07ffdf4c43477630c748cb63a"
        alt=""
      />
    </div>
    <CategoryBar
      v-for="(val, index) in categoryList"
      :key="index"
      :category-data="val"
    ></CategoryBar>
    <!-- <div class="testpreview">
      <v-md-preview :text="testPreText"></v-md-preview>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.homePageWrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .topBg {
    width: 100%;
    height: 300px;
    background-color: rgba(#000, 1);
    margin-bottom: 20px;
    object-fit: cover;
    position: relative;
    .topSlgon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-weight: bold;
      left: 80px;
      font-size: 30px;
      opacity: 1;
      color: #fff;
      z-index: 2;
    }

    .topBgImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.6;
    }
  }
}
</style>
