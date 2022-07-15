<template>
   <div>
    <v-app-bar px-0 
      color="grey lighten-5"
       flat 
    >
      <v-card-text class="px-0"><span class="mr-5 grey--text"><i class="fas mr-1 fa-sort-amount-up-alt"></i>SORT:</span> <span>A-Z</span>
   <span class="ml-5 grey--text">PROJECT:</span> <span>SPOTIFY WEBSITE DESIGN</span></v-card-text>

      <v-spacer></v-spacer>
        <v-btn @click="setNewTask(true);setFocus();" class="blue--text"  text>new task</v-btn>
    </v-app-bar>
   </div>
</template>

<script>
import Events from '../events.js'
import {mapActions} from 'vuex';
export default {
methods: {
        ...mapActions(['setNewTask']),
        setFocus(){
          Events.$emit('setFocus')
        }
    }
}
</script>

<style>
</style>