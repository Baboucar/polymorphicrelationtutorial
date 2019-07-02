import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
   state:{
       posts:[],
       title: 'my custom title',
       languages:[
        'Java',
         'PHP',
          'Python'
       ]
   },
   // use getters if you want do some computations on the data
   getters:{
    countlang: state =>{
           return state.languages.length;
       },

       posts:state =>{
           return state.posts;
       }
   },
   // Mutations help us to change the data of the state
   mutations:{
       ADD_LANGUAGE:(state,post) =>{
           state.languages.push(post)
       },

    // mutations for posts begin here

       CREATE_POST(state,post){
           state.posts.unshift(post)
       },
       FETCH_POSTS(state,post){
           return state.posts = post;
       },
       DELETE_POST(state,post){

           let index =  state.posts.findIndex(item => item.id === post.id)
            state.posts.splice(index,1)
       }
   },
   actions:{
       createPost({commit},post){
           axios.post('/api/post',post)
           .then(res=>{
               commit('CREATE_POST',res.data) // commiting the CREATE_POST mutations in the action because you cannot commit in a mutation
           }).catch(err=>{
               console.log(err)
           })
       },
       fetchPosts({commit}){
           axios.get('/api/post')
           .then(res=>{
               commit('FETCH_POSTS',res.data)
           }).catch(err=>{
               console.log(err)
           })
       },
       deletePost({commit},post){
           axios.delete(`/api/post/${post.id}`)
              .then(res=>{
                  if(res.data == "ok")
                    commit('DELETE_POST',post)

              }).catch(err=> {
                  console.log(err)
              })
       }
   }






});
