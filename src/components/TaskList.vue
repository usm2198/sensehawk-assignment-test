<template>
    <div>
        <v-layout justify-end mt-3 v-if="isnewTask">
            <v-spacer></v-spacer>
                <v-btn  small outlined color="orange" 
                @click="showCompleted?handleList(false):handleList(true)" >
                {{showCompleted?'Show All':'Show Completed'}}
                </v-btn>
        </v-layout>
        <v-container class="white" mt-2 pt-1 pb-0 mb-0>
            <v-layout mt-4 column>
            <v-flex >
                <div >
                    <draggable v-model="list">
                        <transition-group>
                            <div class="drag" v-for="task in list" :key="task.id">
                                <TaskItem :task="task"/>
                            </div>
                        </transition-group>
                    </draggable>
                    
                </div>
                
            </v-flex>
            <NewTask v-if="$store.getters.isnewTask"/>
        </v-layout>
        </v-container>
        
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapGetters, mapActions} from 'vuex';
import NewTask from './NewTask';
import TaskItem from './TaskItem';
// import store from '../store';
export default {
    components: {
        NewTask,
        TaskItem,
        draggable,
    },
    methods: {
        ...mapActions(['setShowCompleted']),
        handleList(val){
            this.setShowCompleted(val)
        }
    },
    computed: {
        ...mapGetters(['showCompleted','completed','listItems','isnewTask']),
        list: {
            get(){
                return this.showCompleted?this.completed:this.listItems;
            },
            set(value) {
            this.$store.dispatch('updateList', value)
            }
        }
    }
}
</script>

<style>


</style>