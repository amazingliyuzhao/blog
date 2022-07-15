<script lang="ts">
import { ref, Ref, PropType } from 'vue';
import { CategoryProps } from '../../types/home.type';
import router from '../../router/index';

export default {
  props: {
    cardData: {
      type: Object as PropType<CategoryProps['categoryData']['cardList']>,
      required: true,
    },
  },
  setup() {
    const testPreText = ref('#ddsads');
    return { testPreText };
  },
  methods: {
    goArticlePage() {
      console.log(123);
      router.push('article');
    },
  },
};
</script>

<template>
  <div class="cardWrap" @click="goArticlePage">
    <div class="cardImg">
      <img
        src="https://img1.baidu.com/it/u=1950584475,1461582710&fm=253&fmt=auto&app=120&f=JPEG?w=960&h=800"
        alt=""
      />
    </div>
    <div class="cardTitle">《{{ cardData.cardTextName }}》</div>
    <div class="cardIntroduction">
      {{ cardData.introduction }}
    </div>
    <div class="authorLine">
      <div class="author">
        <img src="../../assets/images/headImg.png" alt="" />
        <div>{{ cardData.authorName }}</div>
      </div>
      <div class="tip"><i></i> {{ cardData.tipName }}</div>
    </div>

    <div class="cardBottom">
      <div class="time"><i></i>{{ cardData.time }}</div>
      <div class="commentNum"><i></i>{{ cardData.commentNum }}</div>
      <div class="watchNum"><i></i>{{ cardData.watchNum }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cardWrap {
  height: 380px;
  width: 280px;
  box-shadow: 0px 1px 30px 1px #d7c4bb;
  display: flex;
  flex-shrink: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: upCard 1s ease-in-out;
  margin-right: 30px;

  @keyframes upCard {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .cardImg {
    width: 100%;
    height: 120px;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cardTitle {
    color: $main-color;
    font-size: 20px;
    font-weight: bold;
    padding: 8px;
  }

  .authorLine {
    height: 30px;
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .author {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: $main-color;
      img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-right: 10px;
        box-shadow: 2px 2px 2px 2px #3333;
      }
    }
    .tip {
      width: 100px;
      height: 30px;
      display: flex;
      position: relative;
      right: -10px;
      align-items: center;
      padding-left: 20px;
      color: #fff;
      font-size: 16px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background-color: #908440;
      font-weight: bold;
      i {
        display: flex;
        width: 20px;
        height: 20px;
        background-size: contain;
        margin-right: 4px;
        background-image: url('../../assets/images/tipIcon.png');
      }
    }
  }

  .cardIntroduction {
    padding: 0 10px;
    height: 120px;
    text-align: left;
    line-height: 1.4;
    font-size: 14px;
    display: -webkit-box;
    text-indent: 20px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    color: $desc-color;
    margin-bottom: 10px;
  }
  .cardBottom {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    .time,
    .commentNum,
    .watchNum {
      font-size: 14px;
      display: flex;
      align-items: center;
      color: $desc-color;
      i {
        display: flex;
        width: 20px;
        height: 20px;
        background-size: contain;
        margin-right: 4px;
      }
    }
    .time {
      i {
        background-image: url('../../assets/images/timeIcon.png');
      }
    }
    .commentNum {
      i {
        background-image: url('../../assets/images/commentIcon.png');
      }
    }
    .watchNum {
      i {
        background-image: url('../../assets/images/watchIcon.png');
      }
    }
  }
}
</style>
