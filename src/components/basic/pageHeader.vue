<template>
  <div class="pageHeader">
    <a-page-header
      style="border-top: 1px solid rgb(235, 237, 240)"
      title="Title"
      :breadcrumb="{ props: { routes } }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          path: "index",
          breadcrumbName: "1级",
        },
        {
          path: "first",
          breadcrumbName: "2级",
        },
        {
          path: "second",
          breadcrumbName: "3级",
        },
      ],
    };
  },
};
</script>
<style scoped>
.pageHeader {
  background-color: white;
}
</style>
