<script lang="ts">
// import { ref, onMounted, nextTick } from 'vue';
import router from '../router/index';

export default {
  methods: {
    goHome() {
      console.log(123);
      router.push('home');
    },
  },
};
</script>

<template>
  <div class="coverPageWrap" @click="goHome">
    <div class="coverPage">
      <!-- <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-08-28%2F5f48c87981f5d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660284091&t=18c04d788566d69f86739f79c176087d"
        alt=""
      /> -->
      <!-- <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-c68c7ff7c75f9d4ff9487998a9f8dc38_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660285224&t=06991ed4d6b9bd834f34de6f16b67fdb"
        alt=""
      /> -->
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcz-video-photo.oss-cn-beijing.aliyuncs.com%2F20191008%2F8e691edf29bc10bffe6ff34d82e473dd_00002.jpg&refer=http%3A%2F%2Fcz-video-photo.oss-cn-beijing.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660285339&t=8c4f16a7c6847039843f1c054ca8c37e"
        alt=""
      />
    </div>
    <div class="homeInner">
      <div class="hellowText">个人的博客</div>
      <div class="slogan">每天一句slogan，每天一句slogan，每天一句slogan</div>
    </div>
    <div class="start">
      <img src="../assets/images/start.png" alt="" />
      <div class="desc">进入</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
body {
  background-color: #000;
}
@keyframes identifier {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
}

@keyframes innerShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}
.coverPageWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .coverPage {
    height: 100vh !important;
    position: absolute;
    top: 0;
    width: 100%;

    background-color: #000;
    // opacity: 0.4;
    // overflow: hidden;
    img {
      opacity: 0.5;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .start {
    position: absolute;
    margin: 0 auto;
    bottom: 150px;
    opacity: 0.7;

    animation: identifier 2s ease-in-out;
    img {
      width: 50px;
      height: 50px;
    }
    .desc {
      font-size: 20px;
      color: #fff;
    }
  }
  .homeInner {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 200px;
    animation: innerShow 1s ease-in-out;

    .hellowText {
      font-size: 48px;
      color: #fff;
      font-weight: bold;
      position: relative;
      margin-bottom: 20px;
      &::after {
        content: '';
        display: flex;
        position: absolute;
        background-color: #2474b5;
        height: 2px;
        width: 100px;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }
    .slogan {
      color: #fff;
      font-size: 20px;
      opacity: 0.6;
      white-space: nowrap;
    }
  }
}
</style>
