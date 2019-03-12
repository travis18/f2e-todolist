<template>
  <div>
    <div
      :class="['d-flex', 'flex-row', 'todo-box', 'shadow', { star: todo.star }]"
    >
      <div class="w-auto p-3">
        <font-awesome-icon
          :icon="doneIcon.icon"
          :color="doneIcon.color"
          size="lg"
          @click="setDone"
        />
      </div>
      <div class="w-75 p-3">
        <div class="d-flex flex-column">
          <div :class="['todo-title', { done: todo.done }]">
            {{ todo.title }}
          </div>
          <div class="d-flex flex-row justify-content-start">
            <font-awesome-icon
              class="icon-row-items"
              :icon="['far', 'calendar-alt']"
              size="sm"
              v-if="hasDue"
            />
            <span class="icon-row-text" v-if="hasDue">{{ todo.dueDate }}</span>
            <font-awesome-icon
              class="icon-row-items"
              :icon="['far', 'file']"
              size="sm"
              v-if="hasAttach"
            />

            <font-awesome-icon
              class="icon-row-items"
              :icon="['far', 'comment-dots']"
              size="sm"
              v-if="hasComment"
            />
          </div>
        </div>
      </div>
      <div class="w-auto p-3">
        <font-awesome-icon
          :icon="starIcon.icon"
          :color="starIcon.color"
          size="lg"
          pull="left"
          @click="setStar"
        />
        <font-awesome-icon
          :icon="editIcon.icon"
          :color="editIcon.color"
          size="lg"
          pull="right"
          @click="setEditMode"
        />
      </div>
    </div>
    <transition name="bounce">
      <todo-detail
        v-if="canShowEditForm"
        :todo="todo"
        @hide="editMode = false"
      />
    </transition>
  </div>
</template>

<script>
import TodoDetail from './TodoDetail.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      test: ['far', 'edit'],
      editMode: false,
      iconDone: {
        icon: ['fas', 'check-square'],
        color: '#4a90e2'
      },
      iconNotDone: {
        icon: ['fas', 'square'],
        color: '#ffffff'
      },
      iconUnStar: {
        icon: ['far', 'star'],
        color: '#000000'
      },
      iconStar: {
        icon: ['fas', 'star'],
        color: '#f5a623'
      },
      iconEdit: {
        icon: ['fas', 'edit'],
        color: '#4a90e2'
      },
      iconNotEdit: {
        icon: ['far', 'edit'],
        color: '#000000'
      }
    }
  },
  computed: {
    ...mapGetters(['getCurrentEditTodoId']),
    hasComment() {
      if (this.todo === null) {
        return false
      } else {
        let res = this.todo.comment || ''
        return res.length > 0
      }
    },
    hasDue() {
      if (this.todo === null) {
        return false
      } else {
        let res = this.todo.dueDate || ''
        return res.length > 0
      }
    },
    hasAttach() {
      if (this.todo === null) {
        return false
      } else {
        let res = this.todo.attachments || []
        return res.length > 0
      }
    },
    doneIcon() {
      let todo = this.todo || { done: false }
      if (todo.done) {
        return this.iconDone
      } else {
        return this.iconNotDone
      }
    },
    starIcon() {
      let todo = this.todo || { star: false }
      if (todo.star) {
        return this.iconStar
      } else {
        return this.iconUnStar
      }
    },
    editIcon() {
      if (this.canShowEditForm) {
        return this.iconEdit
      } else {
        return this.iconNotEdit
      }
    },
    canShowEditForm() {
      let todoId = this.getCurrentEditTodoId
      if (this.editMode === true && this.todo.id === todoId) {
        return true
      } else {
        this.disableEditMode()
        return false
      }
    }
  },
  methods: {
    ...mapMutations(['setCurrentEditTodoId']),
    setStar() {
      this.todo.star = !this.todo.star
    },
    setDone() {
      this.todo.done = !this.todo.done
    },
    setEditMode() {
      this.editMode = !this.editMode
      this.setCurrentEditTodoId(this.todo.id)
    },
    disableEditMode() {
      this.editMode = false
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
  background: #f2f2f2;
  margin-top: 8px;
}

.star {
  background: #fff2dc;
}

.todo-title {
  font-family: Roboto-Medium;
  padding-bottom: 20px;
  font-size: 24px;
  color: #000000;
  text-align: left;
}

.done {
  text-decoration: line-through;
  color: #9b9b9b;
}
.icon-row-items {
  margin-left: 15px;
  color: #757575;
}
.icon-row-text {
  margin-left: 8px;
  margin-top: -1px;
  font-size: 10px;
  color: #757575;
}
.p-3 > svg:hover {
  cursor: pointer;
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
