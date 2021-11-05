<template>
  <div class="header">
    <a-button type="primary" class="collapsedBtn" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <!-- <a-button type="primary" class="collapsedBtn" @click="redo">
      <a-icon type="redo" />
    </a-button> -->
    <a-button style="float:right" type="primary" class="collapsedBtn" @click="logout">
      <a-icon type="logout" />
    </a-button>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  components: {},
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      eventBus.$emit("menuCollapsed", this.collapsed);
    },
    logout(){
      
    }
  },
  created() {
    eventBus.$emit("menuCollapsed", this.collapsed);
  },
};
</script>

<style scoped>
.header{
    vertical-align: middle;
}
.header .collapsedBtn {
  display: inline-block;
  height: 100%;
  background-color: white;
  color: rgba(0, 0, 0, 0.65);
  font-size: 20px;
  border: none;
  box-shadow: none;
}
</style>