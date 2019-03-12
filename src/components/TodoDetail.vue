<template>
  <div :class="['d-flex', 'flex-column', 'todo-detail-box', 'shadow']">
    <div class="detail-form">
      <div class="form-group d-flex flex-column">
        <label for="title">
          <font-awesome-icon :icon="['fas', 'heading']" />Title
        </label>
        <input
          type="text"
          class="form-control-file"
          name="title"
          v-model="todo.title"
        />
      </div>
      <div class="form-group d-flex flex-column">
        <label for="title">
          <font-awesome-icon :icon="['far', 'calendar-alt']" />Deadline
        </label>
        <input
          type="date"
          class="form-control"
          name="Deadline"
          v-model="todo.dueDate"
        />
      </div>
      <label for="customFile" class="d-flex flex-row">
        <font-awesome-icon :icon="['far', 'file']" />File
      </label>
      <div class="custom-file d-flex flex-column">
        <label class="custom-file-label" for="customFile">
          <font-awesome-icon :icon="['fas', 'plus-square']" size="lg" />
        </label>
        <input
          type="file"
          class="custom-file-input"
          name="file"
          id="customFile"
        />
      </div>
      <div class="form-group d-flex flex-column">
        <label for="comment">
          <font-awesome-icon :icon="['far', 'comment-dots']" />comment
        </label>
        <textarea class="form-control" name="comment" v-model="todo.comment" />
      </div>
    </div>
    <div class="btn-group test" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-lg btn-light">
        <font-awesome-icon icon="times" color="#d0021b" />
        <span class="btn-cancel" @click="$emit('hide')">Cancel</span>
      </button>
      <button type="button" class="btn btn-lg btn-primary">
        <font-awesome-icon icon="plus" color="#ffffff" />
        <span class="btn-save" @click="saveTodo">{{ saveBtnLabel }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    mode: {
      type: String,
      default: '' //there are 2 mdoes: 'edit' and 'new'
    },
    todo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    ...mapMutations(['createTodo']),
    saveTodo() {
      if (this.mode === 'new') {
        let newTodo = this.getEmptyTodo
        let todo = this.todo
        newTodo.title = todo.title
        newTodo.dueDate = todo.dueDate
        newTodo.comment = todo.comment
        newTodo.done = todo.done
        newTodo.star = todo.star
        newTodo.id = 10
        console.log(newTodo)
        this.createTodo(newTodo)
        this.todo = this.getEmptyTodo
      }
      this.$emit('hide')
    }
  },
  computed: {
    ...mapGetters(['getEmptyTodo']),
    saveBtnLabel() {
      if (this.mode === 'edit') {
        return 'Save'
      } else if (this.mode === 'new') {
        return 'Add Task'
      }
      return 'Save'
    }
  }
}
</script>

<style scoped>
.btn-cancel {
  color: #d0021b;
  font-size: 24px;
  font-family: sans-serif;
  padding-left: 13px;
}

.btn-save {
  color: #ffffff;
  font-size: 24px;
  font-family: sans-serif;
  padding-left: 13px;
}
.todo-detail-box {
  border-radius: 0rem 0rem 0.3rem 0.3rem;
  background: #f2f2f2;
  margin-top: 1px;
}

.detail-form {
  margin: 10px 75px;
}

svg {
  margin-right: 10px;
}

label {
  text-align: left;
}
</style>
