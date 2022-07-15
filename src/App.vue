<template>
  <div id="app">
    
  <v-app>
    <v-navigation-drawer color="white"
      v-model="drawer"
      app
    >
      <v-list class="align-center">
        <v-list-item>
          <v-list-item-title class="headline text-center blue--text">io<span class="font-weight-bold">Task</span></v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list >
        <v-list-item
          v-for="item in items"
          :key="item.text"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase grey--text">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
       flat
      color="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-3">fa fa-menu</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title ">Tasks</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout
        row
        align-center
        style="max-width: 650px"
      >
      </v-layout>
    </v-app-bar>
    
    <v-content class="grey lighten-5">
      <TaskBar />
      
        <v-layout
          justify-center
          align-center
        >
          <v-flex>
            
             <Home/>
          </v-flex>
        </v-layout>
       
    </v-content>
  </v-app>
</div>
</template>

<script>
import Home from './components/Home';
import TaskBar from './components/TaskBar';

export default {
  name: 'App',

  components: {
    Home,
    TaskBar
  },
  data: () => ({
    drawer: null,
    items: [
      {  text: 'Dashboard' },
      {  text: 'Projects' },
      { text: 'Tasks' },
      {  text: 'Kanban Desk' },
      { text: 'Calendar' },
    ],
  })
};
</script>
