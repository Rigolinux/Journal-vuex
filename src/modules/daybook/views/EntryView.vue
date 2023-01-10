<template>
  <div v-if="entry" 
     class="entry-tittle d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="fs-3 mx-1">{{ month }}</span>
        <span class="fs-4 mx-2 fw-light">{{ yearDay }}</span>
    </div>
    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary mx-2">
            Subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>
  <hr>
  <div 
  v-if="entry"
   class="d-flex flex-column px-3 h-75">

    <textarea 
      
       class="form-control mb-3" rows="3" 
       placeholder="Que estas pensando?"
       v-model="entry.text"
       ></textarea>
  </div>
    <Fab icon ="fa-save"/>
    <img
    alt="img"
     src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
     class="img-thumbnail"
     >
    </template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
import getMonthYear from '../helpers/getDayMonthYear';
export default {
    props:{
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'))
    },
    data(){
        return{
            entry:null
        }
    },
    created(){
        this.loadEntry()
    },
    watch:{
        id(){
            this.loadEntry()
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day(){
            const date = getMonthYear(this.entry.date)
            return date.day
        },
        month(){
            const date = getMonthYear(this.entry.date)
            return date.month
        },
        yearDay(){
            const date = getMonthYear(this.entry.date)
            return date.yearDay
        }
    },
    methods:{
        loadEntry(){
            const entry = this.getEntryById(this.id)
            if(!entry) return this.$router.push({ name: 'no-entry' })
            this.entry = entry
        }
    }
}
</script>

<style lang="scss" scoped>
textarea{
   font-size: 20px;
   border: none;
   height: 100%;
   
   &:focus{
         outline: none;
    }
}
img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);


}
</style>