<script lang="ts">
import { ref, Ref, onMounted, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const selectNavIndex: Ref<number> = ref(0);
    const showNavBg = ref(false);
    const changeSelectIndex = (index: number) => {
      selectNavIndex.value = index;
    };

    const navList: Ref<{ name: string; url: string }[]> = ref([
      {
        name: '首页',
        url: 'home',
      },
      {
        name: '分类',
        url: 'das',
      },
      {
        name: '列表',
        url: 'das',
      },
      {
        name: '关于',
        url: 'das',
      },
    ]);

    const watchScroll = () => {
      console.log(123);
      console.log(window);
      window.onscroll = () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        showNavBg.value = scrollTop > 100;
      };
    };
    onMounted(watchScroll);

    return {
      navList,
      showNavBg,
      selectNavIndex,
      changeSelectIndex,
    };
  },
});
</script>

<template>
  <div class="navWrap" :class="{ showNavBg }">
    <!-- <img class="logo" src="../../assets/images/logo.png" alt="" /> -->

    <div class="leftList">
      <div
        v-for="(val, index) in navList"
        :key="index"
        class="navItem"
        :class="{ active: selectNavIndex === index }"
        @click="changeSelectIndex(index)"
      >
        {{ val.name }}
      </div>
    </div>
    <div class="rightList"></div>
  </div>
</template>

<style scoped lang="scss">
.navWrap {
  height: 50px;
  // box-shadow: 13px -29px 39px 7px #000;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 80px;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 10;
  left: 0;
  &.showNavBg {
    background-color: rgba($color: #000000, $alpha: 0.7);
  }
  .logo {
    width: 200px;
    opacity: 0.2;
  }
  .leftList {
    display: flex;
    height: 100%;
    .navItem {
      color: #fff;
      font-size: 16px;
      padding: 0 20px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-right: 20px;
      &::after {
        content: '';
        width: 0;
        display: flex;
        position: absolute;
        height: 1px;
        opacity: 0;
        background-color: #fff;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      &:hover {
        &::after {
          opacity: 1;
          width: 100%;
        }
      }
      &.active {
        &::after {
          opacity: 1;
          width: 100%;
        }
      }
    }
  }
}
</style>
