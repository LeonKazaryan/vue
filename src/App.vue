<template>
  <div id="app">
    <h2> Мой список задач </h2>

    <div style="text-align: right; margin-bottom: 3rem"> 
      <b-button size="lg" variant="secondary" @click="showFormFunction" v-show="!showForm"> Добавить задачу </b-button>

      <form class="form" v-show="showForm" @submit.prevent="addTodo">

        <b-form-input autocomplete="off" class="form__input" v-model="text" v-model.trim="title" type="text" placeholder="Заголовок"></b-form-input>
        <b-form-textarea
          v-model="text"
          v-model.trim="description" 
          placeholder="Описание" 
          rows="3"
          max-rows="6"
          class="form__input-textarea form__input"
        ></b-form-textarea>

        <div class="form__buttons">
          <b-button size="lg" class="form__button form__button-big" variant="success" type="submit">Добавить</b-button>
          <b-button size="sm" class="form__button form__button-small" variant="danger" @click.prevent="cancel">Отмена</b-button>
        </div>

      </form>

    </div>

    <div v-show="tasks.length" class="tasks">
          <Todo v-for="(todo, idx) in tasks" :key=todo.id :todo="todo" :idx="idx" @del="deleteTodo"/>
    </div>
    
    <div v-show="!tasks.length" class="empty">У вас нет задач, добавьте хотя бы одну </div>

  </div>
</template>

<script>



export default {
  name: 'App',

  data(){
    return{
      tasks: [],
      showForm: false,
      title: "",
      description: "",
    }
  },

  created(){
    window.addEventListener('beforeunload', this.saveTodos)
    const tasks = localStorage.getItem('todos')
    if (tasks){
      this.tasks = JSON.parse(tasks)
    }
  },

  methods: {

    saveTodos(){
      localStorage.setItem('todos', JSON.stringify(this.tasks))
    },
    
    deleteTodo(idx){
      this.tasks.splice(idx, 1)
    },

    showFormFunction() {
      this.showForm = true;
    },

    addTodo(){
      if(!this.title.length || !this.description.length){
        return alert("Пустые поля запрещены законом")
      }
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        isFinished: false,
      }
      this.tasks.push(task);
      this.title = "";
      this.description = "";
      this.showForm = false;
    },

    cancel(){
      this.title = "";
      this.description = "";
      this.showForm = false;
    }
},

  // components:{
  //   Todo: () => import('@/components/Todo.vue')
  // },

  }

  
</script>
