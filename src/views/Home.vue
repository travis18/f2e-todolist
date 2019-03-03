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
        <!-- <div class="col-md-12 ">
          <div class="todo-box shadow">
            <div class="row test">
              <div class="d-flex todo-box-left">sss</div>
              <div class="d-flex flex-column todo-box-middle">
                <div class="p-2 todo-title">Cloud project with Dannie</div>
                <div class="p-2 bd-highlight">ddddd</div>
              </div>
              <div class="todo-box-right"></div>
            </div>
            <div class="row"></div>
          </div>
        </div>-->
        <div class="d-flex flex-row todo-box shadow">
          <div class="w-auto p-3">
            <font-awesome-icon
              :icon="['fas', 'square']"
              color="#ffffff"
              size="lg"
            />
          </div>
          <div class="w-75 p-3">
            <div class="d-flex flex-column">
              <div class="todo-title">Type something here...</div>
              <div class="d-flex flex-row justify-content-start">
                <font-awesome-icon
                  class="icon-row-items"
                  :icon="['far', 'calendar-alt']"
                  size="sm"
                />
                <span class="icon-row-text">6/18</span>
                <font-awesome-icon
                  class="icon-row-items"
                  :icon="['far', 'file']"
                  size="sm"
                />
                <font-awesome-icon
                  class="icon-row-items"
                  :icon="['far', 'comment-dots']"
                  size="sm"
                />
              </div>
            </div>
          </div>
          <div class="w-auto p-3">
            <font-awesome-icon :icon="['far', 'star']" size="lg" pull="left" />
            <font-awesome-icon :icon="['far', 'edit']" size="lg" pull="right" />
          </div>
        </div>
        <div class="d-flex flex-row todo-box shadow">
          <div class="w-auto p-3">
            <font-awesome-icon
              :icon="['fas', 'check-square']"
              style="color:#4A90E2"
              size="lg"
            />
          </div>
          <div class="w-75 p-3">
            <div class="d-flex flex-column">
              <div class="todo-title done">Type something here...</div>
              <div class="d-flex flex-row justify-content-start">
                <font-awesome-icon
                  class="icon-row-items"
                  :icon="['far', 'calendar-alt']"
                  size="sm"
                />
                <span class="icon-row-text">6/18</span>
                <font-awesome-icon
                  class="icon-row-items"
                  :icon="['far', 'file']"
                  size="sm"
                />
                <font-awesome-icon
                  class="icon-row-items"
                  :icon="['far', 'comment-dots']"
                  size="sm"
                />
              </div>
            </div>
          </div>
          <div class="w-auto p-3">
            <font-awesome-icon :icon="['far', 'star']" size="lg" pull="left" />
            <font-awesome-icon :icon="['far', 'edit']" size="lg" pull="right" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.todo-box {
  /* border-color: black; */
  /* border-width: 1px; */
  /* border-style: solid; */
  border-radius: 0.3rem;
  background: #f2f2f2;
  margin-top: 8px;
  /* border: 1px solid black; */
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
</style>

<script>
export default {
  name: 'home'
}
</script>
