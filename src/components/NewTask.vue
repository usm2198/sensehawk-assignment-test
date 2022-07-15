<template>
<div>
<TaskItem :task="task" class="dummy"/>
  <div class="task-box">
    <v-text-field hide-details ref="input" autofocus id="newtask" @keyup.enter.native="onSubmit" 
       color="grey lighten-3" full-width v-model="name" placeholder=""></v-text-field>   
  </div>
  </div>
</template>
<script>
import Events from '../events.js'
import {mapGetters,mapActions} from 'vuex';
import TaskItem from './TaskItem'
export default {
    computed: {
        ...mapGetters(['listItems','isnewTask','changeTask'])
    },
    created(){
        Events.$on('setFocus', ()=>{
            this.$refs.input.focus();
        })
        Events.$on('onEdit',()=>{
            this.name = this.changeTask.title;
            this.editing =true;
            this.$refs.input.focus();
        })
    },
    methods: {
        ...mapActions(['addTask','updateTask','editingTask']),
        onSubmit(){
            if(this.name){
                if(this.editing){
                    this.updateTask({id:this.changeTask.id,title:this.name,type:this.changeTask.type,completed:this.changeTask.completed});
                    this.name = '';
                    this.editingTask({});
                    this.editing = false;
                    return;
                }else {
                    this.addTask({title:this.name,id:this.$store.state.list.length+1,type:'spotify',completed:false});
                    this.name = '';
                }
            }
        }
    },
    data(){
        return {
            task: {
                id:'#',
                title: '',
                completed: false,
                type: 'spotify'
            },
            name: this.$store.getters.title,
            editing: false
            // editId: this.$store.getters.editingTask.id
        }
    },
    components: {
        TaskItem
    },
}
</script>

<style>

.task-box{
    
    margin-top: -4.6rem;
}
.dummy {
    /* background: linear-gradient(0deg, rgba(250, 250, 250, 0.993) 28.21%, #fffefef5 134.95%); */
    opacity: 0.3;
    background-color: white;
}

#newtask {
    
}
input {
    text-indent: 4.7rem;
    caret-color: black;
}

</style>