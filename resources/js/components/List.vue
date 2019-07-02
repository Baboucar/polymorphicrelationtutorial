<template>
    <div>
        <h1>List Posts</h1>
     <!-- {{posts}} -->
     <div>
         <ul class="jumbotron">
             <li v-for="p in posts" :key="p.id">
                  <h2>  {{p.title}}</h2>
                  <div>
                      {{p.content}}
                  </div>
                  <button class="btn btn-danger" @click="deletePost(post)">delete</button>
             </li>
         </ul>
     </div>

     <form action=""  @submit="createPost(post)">

      <h4> Create Post </h4>
      <input type="text"  id="" v-model="post.title" class="form-control">

      <div class="form--group">
          <textarea  v-model ="post.content" cols="30" rows="10" class="form-control">

          </textarea>
      </div>

      <div class="form--group">
          <button  :disabled="!isValid" @click.prevent="createPost(post)" class="btn btn-primary"> Submit</button>
      </div>

     </form>
    </div>
</template>

<script>
 import {mapGetters} from 'vuex';
    export default {
        data(){
          return {
             post:{
                 title:'',
                 content:'',
             }
          }
        },
       computed:{
           ...mapGetters([
               'posts'
           ]),

           isValid(){
               return this.post.title !== "" && this.post.content !== ''
           }
       },
       mounted(){
           this.$store.dispatch('fetchPosts');
       },
       methods:{
           createPost(post){
               this.$store.dispatch('createPost', post);
            //    window.alert("Post Created");
            //    this.post.title = '';
            //    this.post.content = '';
           },
           deletePost(post){
            //    console.log("button clicked");
               this.$store.dispatch('deletePost',post);

           }
       }
    }
</script>

<style lang="scss" scoped>

</style>
