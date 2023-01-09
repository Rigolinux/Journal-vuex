<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-lg-center">No hay elementos seleccionados</h1>
        <Fab />
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default({
    components: {
        Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue')),
    },
})
</script>

<style lang="scss" scoped>
div{
    height: 100vh;
}
</style>