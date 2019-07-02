<template>
    <div>
      <h1>{{title}}</h1>
       <ul>
           <li v-for="(lang,index) in languages" :key="index">
                        {{lang}}
           </li>

           <p>
               The number of languages is {{countlang}}
           </p>
       </ul>

       <form @submit.prevent="addLanguage">
           <input type="text"  placeholder="addlangugage"  v-model="language">

       </form>
    </div>
</template>

<script>
import {mapState}  from 'vuex';
import {mapGetters} from 'vuex';
    export default {
        data(){
         return{
             newLanguage: '',
         }
        },
       computed:{
            ...mapState([
            'title',
             'languages'
        ]),
        ...mapGetters(
           [
               'countlang'
           ]
           ),
       }
    }
</script>

<style lang="scss" scoped>

</style>
