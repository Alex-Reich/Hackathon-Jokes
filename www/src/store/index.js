import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


var api=axios.create({
  baseURL:'https://bcw-gregslist.herokuapp.com/api/', // EDIT THIS
  timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
  state:{

  },
  mutations:{

  },
  actions:{

  }
})