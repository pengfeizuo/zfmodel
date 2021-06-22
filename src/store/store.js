import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)
export var store = new Vuex.Store({
    state: {
        fileIp: "",
        ClassroomListD:{},
        outsideActive:"first",
    },
    mutations: {
        SET_FILEIP(state, fileIp) {
            state.fileIp = fileIp
            // console.log(state.fileIp,222)
        },
        setclassList(state,ClassroomListD){
            state.ClassroomListD = ClassroomListD
            // console.log(state.ClassroomListD,"mutations中的打印")
        },
        SET_OUTSIDE_ACTIVE(state,outsideActive){
            state.outsideActive = outsideActive
            // console.log(state.ClassroomListD,"mutations中的打印")
        },

    },
    actions: {

    }
})