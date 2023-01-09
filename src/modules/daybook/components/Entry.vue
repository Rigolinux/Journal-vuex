<template>
  <div
   class="entry-cointainer mb-3 pointer p-2"
   @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-tittle d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Enero</span>
        <span class="mx-2 fw-light  ">2021,jueves</span>
    </div>
    <div class="entry-description">
        Pariatur ullamco deserunt occaecat enim commodo sunt enim magna do in incididunt. Voluptate excepteur est eiusmod non consectetur voluptate anim id aliqua voluptate. Non ea commodo elit cupidatat anim magna sit. Officia ad quis eu adipisicing. Eu adipisicing ipsum ipsum dolore duis. Nostrud excepteur nostrud sint cillum ea sunt ut ut aliquip incididunt deserunt pariatur Lorem aliqua.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-cointainer{
    border: 1px solid #2c3e50;
    transition: .2s all ease-in;

    &:hover{
        background-color: #2c3e50;
        transition: .2s all ease-in;
        color: #fff;
    }
}

.entry-tittle{
    border-bottom: 1px solid #2c3e50;
}

.entry-description{
    font-size: 12px;
    padding: 10px;
}

</style>