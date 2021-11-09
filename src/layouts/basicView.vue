<template>
  <div id="home">
    <Menus class="menus"></Menus>
    <div class="bodyView">
      <GlobalHeader class="globalHeader"></GlobalHeader>
      <PageHeader></PageHeader>
      <div class="wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Menus from "../components/basic/menus.vue";
import GlobalHeader from "../components/basic/globalHeader.vue";
import PageHeader from "../components/basic/pageHeader.vue"
export default {
  components: {
    Menus,
    GlobalHeader,
    PageHeader
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#home {
  display: flex;
}
#home .menus{
  flex-shrink: 0;
  min-width: 256px;
  min-width: 80px;
}
#home .bodyView{
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 242, 245);
}
#home .bodyView .globalHeader{
  min-height: 64px;
  background-color: white;
  border-bottom: 1px rgb(236, 237, 238) solid;
}
#home .bodyView .wrapper{
  height: 100%;
  padding: 16px 24px;
}
</style>>
