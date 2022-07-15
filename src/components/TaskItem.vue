<template>
  <div class="rect" :data-id="task.id">
                    <div class="layout align-center">
                        <v-btn icon @click="onEdit"><i class="far grey--text fa-edit"></i></v-btn>
                        <v-checkbox class="ml-1" filled v-model="task.completed"></v-checkbox> 
                        <div><span :class="{'grey--text':task.completed}">{{task.title}}</span></div>
                    </div>
                    <div class="mx-4 grey--text"><i class="scale-up  mr-2 far fa-folder"></i><span>0/3</span></div>
                    
                    <div class="mr-2 grey--text"><i class="fab scale-up  mr-2 fa-reddit"></i><span>3</span></div>
                    <div class="align-center mr-2">
                        <v-select solo class=" transparent dropdown-select" v-model="task.type"
                        :items="['spotify','sketch','dribble','iotask']"
                        flat hide-details>
                        <template v-slot:selection="{ item, index }">
                            <v-chip :class="classList" label  v-if="index === 0">
                                <span class="text-center">{{ item }}</span>
                            </v-chip>
                            <span
                            v-if="index === 1"
                            class="grey--text caption"
                            >(+{{ value.length - 1 }} others)</span>
                        </template></v-select>
                        
                        <!-- <select :class="classList" class="selector chip mr-3 label px-3 py-2" v-model="task.type">
                            <option value="spotify"><span id="dropdown" class="">spotify</span></option>
                            <option value="sketch"><span>sketch</span></option>
                            <option value="dribble"><span>dribble</span></option>
                            <option value="iotask"><span>iotask</span></option>
                        </select> -->
                    </div>
                </div>
</template>

<script>
import Events from '../events.js'
import { mapActions } from 'vuex';
export default {
    props: ['task'],
    methods: {
        ...mapActions(['editingTask']),
        onEdit(){
            this.editingTask(this.task);
            Events.$emit('onEdit');
        }
    },
    computed: {
        classList(){
            var classlist = '';
                switch(this.task.type) {
                case "spotify":
                    classlist='yellow lighten-4 orange--text'
                    break;
                case "sketch":
                    classlist='green lighten-4 green--text'
                    break;
                case "dribble":
                    classlist='purple lighten-4 purple--text'
                    break;
                default:
                    classlist='blue lighten-4 blue--text'
                }
                return classlist;
        }
    }
}
</script>

<style>
.rect {
    width: 100%;
    display: inline-flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(224, 221, 221, 0.616);
    background-color: white;
    transition: all 0.5s;
}
.rect:hover {
    background-color: rgba(240, 238, 238, 0.712);
}
.title {
    float: left;
}

.dropdown-select {
    width: 120px;
}
</style>