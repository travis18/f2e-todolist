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
          placeholder="+ Add Task">
      </div>
      </section>
      <section class="content">
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
        </div> -->
        <div class="d-flex flex-row">
          <div class="w-auto p-3 todo-box">Flex item 1</div>
          <div class="w-75 p-3 todo-box">
            <div class="d-flex flex-column">
              <div class="todo-box todo-title">title</div>
              <div class="todo-box">bottom</div>
            </div>
          </div>
          <div class="w-auto p-3 todo-box">Flex item 3<i class="fas fa-igloo"></i></div>
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
    border-radius: .3rem;
    background: #F2F2F2;
    border: 1px solid black;
  }
  .todo-title {
    font-family: Roboto-Medium;
    font-size: 24px;
    color: #000000;
    text-align: left
  }
  .test {
    padding: 24px 0;
  }
</style>

<script>


export default {
  name: 'home'
}
</script>
