import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    list: [],
    newTask: false,
    title: '',
    selectCompleted: false,
    changeTask: null
}

const getters = {
    listItems: (state)=>{
        return state.list;
    },
    completed: (state)=>{
        return state.list.filter(item=>item.completed==true)
    },
    isnewTask: (state)=>{
        return state.newTask;
    },
    showCompleted: (state)=>{
        return state.selectCompleted;
    },
    changeTask: (state)=>{
        return state.changeTask
    }
}

const actions = {
    addTask: ({commit},payload)=>{
        commit('addTask',payload)
    },
    setNewTask: ({commit},val)=>{
        commit('setNewTask',val)
    },
    setShowCompleted: ({commit},val)=>{
        commit('setShowCompleted',val)
    },
    updateList: ({commit},val)=>{
        commit('updateList',val)
    },
    updateTask: ({commit}, payload)=>{
        commit('updateTask',payload)
    },
    editingTask: ({commit}, payload)=>{
        commit('setEditingTask',payload)
    }
}

const mutations = {
    addTask: (state,payload)=>{
        state.list.push(payload);
    },
    setNewTask: (state,val)=>{
        state.newTask = val;
    },
    setShowCompleted: (state,val)=>{
        state.selectCompleted = val;
    },
    updateList: (state,val)=>{
        state.list= val;
    },
    updateTask: (state, payload)=>{
        let index  = state.list.findIndex(task=>task.id == payload.id);
            state.list.splice(index,1,payload);
    },
    setEditingTask: (state,payload)=>{
        state.changeTask = payload;
    }
}
export default new Vuex.Store({
    state, 
    getters,
    actions,
    mutations
})
