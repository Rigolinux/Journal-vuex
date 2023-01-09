<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2 ">
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        v-model="searchText"
      />
      <div class="entry-scrollarea"> 
        <Entry
          v-for="item in 100"
          :key="item"
        ></Entry>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
     Entry: defineAsyncComponent(() => import("@/modules/daybook/components/Entry.vue")),
    },
};
</script>

<style lang="scss" scoped >
input{
    height: 55px;
}
.entry-list-container{
   border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);

}
.entry-scrollarea{
    height: calc(100vh - 120px);
    overflow-y: scroll;

}
</style>
