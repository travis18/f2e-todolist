<template>
  <div>
    <div class="d-flex flex-column todo-box shadow">
      <div class="p-3" id="add-task" @dbclick="setEditMode">+ Add Task</div>
    </div>
    <transition name="bounce">
      <todo-detail
        v-if="canShowEditForm"
        mode="new"
        :todo="todo"
        @hide="editMode = false"
      ></todo-detail>
    </transition>
  </div>
</template>

<script>
import TodoDetail from './TodoDetail.vue'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      todo: {},
      editMode: false
    }
  },
  created() {
    this.todo = this.getEmptyTodo
  },
  computed: {
    ...mapGetters(['getEmptyTodo', 'getCurrentEditTodoId']),
    canShowEditForm() {
      let todoId = this.getCurrentEditTodoId
      if (this.editMode === true && this.todo.id === todoId) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    setEditMode() {
      this.editMode = !this.editMode
    }
  },
  components: {
    TodoDetail
  }
}
</script>

<style scoped>
.todo-box {
  border-radius: 0.3rem;
  background: #ffffff;
  margin-top: 8px;
  border: 2px solid #c8c8c8;
  text-align: left;
}

#add-task {
  font-size: 28px;
  color: #c8c8c8;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
