<template>
  <div class="container">
    <div class="row justify-content-center">
      <section class="main">
        <todo-creater></todo-creater>
      </section>
      <section class="content" id="All-Tasks">
        <todo-item
          :todo="todo"
          v-for="todo in starTodos"
          :key="'item_' + todo.id"
        ></todo-item>
        <todo-item
          :todo="todo"
          v-for="todo in todos"
          :key="'item_' + todo.id"
        ></todo-item>
        <div class="note">{{ allTodos.length }} tasks left</div>
      </section>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import TodoCreater from '@/components/TodoCreater.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      allTodos: [],
      newTodo: {
        title: 'Hello world'
      }
    }
  },
  mounted() {
    this.allTodos = this.getAllTodos
  },
  computed: {
    ...mapGetters(['getAllTodos']),
    todos() {
      return this.allTodos.filter(todo => todo.star == false)
    },
    starTodos() {
      return this.allTodos.filter(todo => todo.star === true)
    },
    newTitle() {
      if (this.newTodo) {
        let title = this.newTodo.title || ''
        if (title === '') {
          return null
        } else {
          return title
        }
      }
      return null
    }
  },
  components: {
    TodoItem,
    TodoCreater
  }
}
</script>
