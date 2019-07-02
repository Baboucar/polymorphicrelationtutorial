<template>
    <div>

       <table class="table">
            <thead>
                 <tr >
                 <th>Task Title</th>
                 <th>Priority Level</th>
                 <th>Action</th>
             </tr>
            </thead>
            <tbody>
            <Task/>
                <tr>
                    <td> <input type="text" name="" id=""></td>
                    <td>
                        <select name="" id="select">
                            <option value="">Low</option>
                            <option value="">Medium</option>
                            <option value="">High</option>

                        </select>
                    </td>
                    <td>
                        <button class="btn btn--primary">Save</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import Task from './Task';
    export default {
        components:{
            Task
        },
             data(){
                 return {
                     tasks:[

                     ]
                 }
             },
             mounted:function(){
                 console.log()
             }
    }
</script>

<style lang="scss" scoped>

</style>
