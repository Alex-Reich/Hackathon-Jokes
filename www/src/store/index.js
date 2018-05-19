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
    posts:[],
    comments: {},
    subComments: {}
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
    },
    setComments(state, comments){
      state.comments = comments
    },
    setSubComments(state, subComments){
      state.subComments = subComments
    },
    logout(state){
      state.user = {}
    }
  },
  actions:{
    getUsers({dispatch, commit}){
      api.get('users/')
      .then(res=>{
        commit('setUsers', res.data)
      })
    },
    logout({commit, dispatch}){
      commit('logout')
    },

    getUser({dispatch, commit}, user){
      api.post('users/byname/' + user.name)
      .then(res=>{
        //console.log(res)
        commit('setUser', res.data)
      })
      .catch(err=>{
        alert(err)
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
    },
    addPost({dispatch, commit}, post){
      api.post('posts', post)
      .then(res=>{
        dispatch('getPosts')
      })
    },
    deletePost({dispatch, commit}, post){
      api.delete('posts/'+post._id,post)
      .then (res=>{
        dispatch('getPosts')
      })
    },
    votePostUp({dispatch,commit},post){
      api.put('posts/'+post._id, post)
        .then(res=>{
          dispatch('getPosts')
        })
    },
    votePostDown({dispatch, commit}, post){
      api.put('posts/'+post._id, post)
      .then(res=>{
        dispatch('getPosts')
      })
    },
    voteCommentUp({dispatch,commit},comment){
      api.put('comments/'+comment._id, comment)
        .then(res=>{
          dispatch('getComments')
        })
    },
    voteCommentDown({dispatch, commit}, comment){
      api.put('comments/'+comment._id, comment)
      .then(res=>{
        dispatch('getComments')
      })
    },
    voteSubCommentUp({dispatch,commit},subComment){
      api.put('subComments/'+subComment._id, subComment)
        .then(res=>{
          dispatch('getSubComments')
        })
    },
    voteSubCommentDown({dispatch, commit}, subComment){
      api.put('subComments/'+subComment._id, subComment)
      .then(res=>{
        dispatch('getSubComments')
      })
    },

    //COMMENTS
    getComments({dispatch,  commit}){
      api.get('comments')
        .then(comments=>{
          let commentObj={}
          comments.data.forEach(com => {
            if(!commentObj[com.parentId]){
              commentObj[com.parentId] = []
            }
            commentObj[com.parentId].push(com)
          })
          commit('setComments', commentObj)
        })
    },
    addComment({dispatch,commit}, comment){
      api.post('comments', comment)
        .then(res=>{
          dispatch('getComments')
        })
    },
    deleteComment({dispatch,commit},comment){
      api.delete('comments/'+comment._id)
        .then(res=>{
          dispatch('getComments')
        })
    },
    //SUBCOMMENTS
    getSubComments({dispatch,  commit}){
      api.get('subComments')
        .then(subComments=>{
          let subCommentObj={}
          subComments.data.forEach(com => {
            if(!subCommentObj[com.parentId]){
              subCommentObj[com.parentId] = []
            }
            subCommentObj[com.parentId].push(com)
          })
          commit('setSubComments', subCommentObj)
        })
    },
    addSubComment({dispatch,commit}, subComment){
      api.post('subComments', subComment)
        .then(res=>{
          dispatch('getSubComments')
        })
    },
    deleteSubComment({dispatch,commit},subComment){
      api.delete('subComments/'+subComment._id)
        .then(res=>{
          dispatch('getSubComments')
        })
    },

  
  }
})