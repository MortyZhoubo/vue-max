<template>
  <div id="menuList">
    <!-- <div class="projectImg">
      <img src="../../assets/home.jpg" alt="" srcset="" />
    </div> -->
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      :open-keys="openKeys"
      @openChange="onOpenChange"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="mail" /><span>Navigation One</span></span
        >
        <a-menu-item key="5"> Option 5 </a-menu-item>
        <a-menu-item key="6"> Option 6 </a-menu-item>
        <a-menu-item key="7"> Option 7 </a-menu-item>
        <a-menu-item key="8"> Option 8 </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"
          ><a-icon type="appstore" /><span>Navigation Two</span></span
        >
        <a-menu-item key="9"> Option 9 </a-menu-item>
        <a-menu-item key="10"> Option 10 </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11"> Option 11 </a-menu-item>
          <a-menu-item key="12"> Option 12 </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  data() {
    return {
      collapsed: false,
      openKeys: ["sub1"],
      rootSubmenuKeys: ['sub1', 'sub2'],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  created() {
    eventBus.$on("menuCollapsed", (message) => {
      this.collapsed = message;
    });
  },
};
</script>
<style scoped>
#menuList {
  /* width: 256px; */
  height: 100vh;
  background-color: rgb(0, 21, 41);
}
#menuList .projectImg {
  /* text-align: center; */
  padding: 10px 0 10px 10px;
}
#menuList .projectImg img {
  width: 56px;
}
#menuList .projectImg span {
  color: white;
  font-size: 22px;
}
</style>
