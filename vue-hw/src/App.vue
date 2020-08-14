<template>
  <div id="app">
    <div class="container">
      <NewTodo @create="onTodoCreate" />

      <h3>Todo</h3>
      <ul>
        <template v-for="(todoItem, index) in data">
          <li v-if="!todoItem.status" :key="index">
            <TodoComponent v-bind:todo="todoItem" @delete="onDelete" />
          </li>
        </template>
      </ul>

      <h3>Completed</h3>
      <ul>
        <template v-for="(todoItem, index) in data">
          <li v-if="todoItem.status" :key="index">
            <TodoComponent v-bind:todo="todoItem" @delete="onDelete" />
          </li>
        </template>
      </ul>

    </div>
  </div> 
</template>

<script>

import { Todo } from './Todo';

import TodoComponent from './components/Todo';
import NewTodo from './components/NewTodo';

export default {
  name: 'App',
  components: {
    TodoComponent,
    NewTodo
  },

  data() {
    return {
      data: [new Todo('Some 1', 1), new Todo('Some 2', 2), new Todo('Some 3', 3)]
    };
  },

  methods: {

    onDelete(deletedId) {
      this.data = this.data.filter(({id}) => id !== deletedId)
    },

    onTodoCreate(todo) {
      this.data = [...this.data, todo];
    }
  },

  beforeMount() {
    this.data[1].status = true;
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url("./assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

  .container {
    display: block;
    width: 400px;
    margin: 100px auto 0;
  }

  li * {
    float: left;
  }

  li,
  h3 {
    clear: both;
    list-style: none;
  }

  input,
  button {
    outline: none;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 15px;
    width: 60px;
    margin: 10px 0 0;
  }

  button:hover {
    color: #333;
  }

  h3,
  label[for="new-task"] {
    color: #333;
    font-weight: 700;
    font-size: 15px;
    border-bottom: 2px solid #333;
    padding: 30px 0 10px;
    margin: 0;
    text-transform: uppercase;
  }

  input[type="text"] {
    margin: 0;
    font-size: 18px;
    height: 18px;
    padding: 10px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 6px;
    color: #888;
  }

  input[type="text"]:hover {
    color: #333;
  }

  label[for="new-task"] {
    display: block;
    margin: 0 0 20px;
  }

  input#new-task {
    float: left;
    width: 318px;
  }

  p > button:hover {
    color: #0fc57c;
  }

  li {
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }

  li > div input[type="checkbox"] {
    margin: 0 10px;
    position: relative;
    top: 15px;
  }

  li > div label {
    font-size: 18px;
    line-height: 40px;
    width: 237px;
    padding: 0 0 0 11px;
  }

  li > div input[type="text"] {
    width: 226px;
  }

  li > div .delete:hover {
    color: #cf2323;
  }

  .todo.completed-tasks label {
    text-decoration: line-through;
    color: #fff;
  }

  ul li input[type="text"] {
    display: none;
  }

  .editMode input[type="text"] {
    display: block;
  }

  .editMode label {
    display: none;
  }

</style>
