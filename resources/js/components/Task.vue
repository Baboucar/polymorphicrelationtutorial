<template>
              <div>
             <!-- <tr  v-for="t in tasks" :key="t.id" >
                  <td>{{t.title}}</td>
                  <td>{{t.priority}}</td>
                  <button>Remove</button>

             </tr> -->
              </div>





</template>

<script>

    export default {

        data(){
            return {
                tasks:[]
            }
        },
         methods:{
            //   getTasks(){
            //       window.axios.get('/api/tasks')
            //       .then((data)=>{
            //           data.foreach(task=>{
            //            this.tasks.push(task)
            //           });
            //       })
            //   }
         },
         mounted(){

             axios.get('/api/task')
             .then(response=>(this.tasks = response))
         },

         created:function(){
             console.log("the tasks"+this.tasks);
         }
    }
</script>

<style lang="scss" scoped>

</style>
