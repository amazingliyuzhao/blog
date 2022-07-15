<script lang="ts">
import HeadNav from './components/PageCom/HeadNav.vue';
import { ref, onMounted, nextTick, watch } from 'vue';

import { useRouter, useRoute } from 'vue-router';
export default {
  components: { HeadNav },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const showNav = ref(false);
    const noNavlist = ['cover'];

    const mountedHandel = () => {
      const currenRouterName: string = (route.name as string) || '';
      showNav.value = !noNavlist.includes(currenRouterName);
    };

    watch(route, mountedHandel);

    // onMounted(mountedHandel);

    return { showNav };
  },
};
</script>

<template>
  <HeadNav v-if="showNav"></HeadNav>
  <RouterView></RouterView>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
