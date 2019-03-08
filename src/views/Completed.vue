<template>
  <div class="container">
    <div class="row justify-content-center">
      <section class="main">
        <div class="col-md-12 input-group input-group-lg">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="+ Add Task"
          />
        </div>
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
      </section>
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      allTodos: []
    }
  },
  mounted() {
    this.allTodos = this.getDoneTodos
  },
  computed: {
    ...mapGetters(['getDoneTodos']),
    todos() {
      return this.allTodos.filter(todo => todo.star === false)
    },
    starTodos() {
      return this.allTodos.filter(todo => todo.star === true)
    }
  },
  components: {
    TodoItem
  }
}
</script>
