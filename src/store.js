import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'This is a test todo - all',
        dueDate: '2019-03-14',
        dueTime: '15:00',
        attachments: [],
        comment:
          '聖安東尼奧馬刺隊今日（2號）宣布與38歲的老將加索（Pau Gasol）達成買斷協議，加索接下來預計轉戰公鹿隊，季後賽有機會與同區效力多倫多暴龍隊的小加索（Marc Gasol）上演兄弟鬩牆。',
        done: false,
        star: true
      },
      {
        id: 2,
        title: 'This is a test todo - no comment',
        dueDate: '2019-03-14',
        dueTime: '15:00',
        attachments: [],
        done: false,
        star: false
      },
      {
        id: 3,
        title: 'This is a test todo - no due date ',
        attachments: [],
        comment:
          '聖安東尼奧馬刺隊今日（2號）宣布與38歲的老將加索（Pau Gasol）達成買斷協議，加索接下來預計轉戰公鹿隊，季後賽有機會與同區效力多倫多暴龍隊的小加索（Marc Gasol）上演兄弟鬩牆。',
        done: false,
        star: false
      },
      {
        id: 4,
        title: 'This is a test todo - only title ',
        star: true,
        done: true
      },
      {
        id: 5,
        title: 'This is a test todo - only title ',
        star: true,
        done: true
      }
    ],
    emptyTodo: {
      id: 0,
      title: '',
      dueDate: undefined,
      dueTime: undefined,
      attachments: [],
      comment: '',
      done: false,
      star: false
    },
    currentEditTodId: -1
  },
  getters: {
    getDoneTodos: state => {
      // return state.todos.filter(todo => todo.done === true)
      return state.todos.filter(todo => todo.done === true)
    },
    getAllTodos: state => {
      return state.todos
    },
    getUnDoneTodos: state => {
      return state.todos.filter(todo => todo.done !== true)
    },
    //duplicate a new todo object from state: emptyTodo and return
    getEmptyTodo: state => {
      return Object.assign({}, state.emptyTodo)
    },
    getCurrentEditTodoId: state => {
      return state.currentEditTodId
    }
  },
  mutations: {
    createTodo(state, payload) {
      let newTodo = Object.assign({}, payload)
      state.todos.push(newTodo)
    },
    setCurrentEditTodoId(state, payload) {
      state.currentEditTodId = payload
    }
  },
  actions: {}
})
