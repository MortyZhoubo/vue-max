<template>
  <div class="tab">
    <span class="tabTitle">{{ title }}</span>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "基础案例",
    },
  },
  data() {
    return {};
  },
  methods: {},
  created(){
  }
};
</script>

<style lang="scss" scoped>
.tab {
  padding: 0 150px;
  .tabTitle{
      font-size: 24px;
      font-weight: 500;
      display: block;
  }
}
</style>