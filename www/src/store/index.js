import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


var api=axios.create({
  baseURL:'http://localhost:3000/api/', // EDIT THIS
  timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
  state:{
    user:{},
    users: [],
    posts:[]
  },
  mutations:{
    setUser(state, user){
      state.user=user
    },
    setPosts(state, posts){
      state.posts = posts
    },
    setUsers(state,users){
      state.users=users
    }
  },
  actions:{
    getUsers({dispatch, commit}){
      api.get('users/')
      .then(res=>{
        commit('setUsers', res.data)
      })
    },

    getUser({dispatch, commit}, user){
      api.get('users/byname/' + user)
      .then(res=>{
        console.log(res)
        commit('setUser', res.data)
      })
    },
    addUser({dispatch, commit}, user){
      api.post('users', user)
      .then(res=>{
        dispatch('setUser',)
        console.log('user added', res)
      })
    },
    getPosts({dispatch, commit}){
      api.get('posts')
      .then(res=>{
        commit('setPosts', res.data)
      })
    }



  
  }
})