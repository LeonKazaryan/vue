<template>
    <div class="todo" :class="{'todo-finished': todo.isFinished}">

        <p class="todo__header"> Задача № {{idx+1}} </p>
        <hr/> 

        <p class="todo__title"> {{todo.title}} </p>
        <p class="todo__description"> {{todo.description}} </p>
        <hr/>

        <b-button variant="secondary" class="todo__done" @click="toggleTodo"> {{todo.isFinished? 'Возобновить' :'Завершить'}} задачу</b-button>
        <b-button variant="dark" class="todo__delete" @click="deleteTodo" >Удалить задачу</b-button>

        <p style="padding-top:10px" class="todo__time"> {{todo.id | formatDate}} </p>

    </div>
</template>

<script>
import filters from '@/mixins/filters.js'

export default {
    name: 'Todo',

    // data(){
    //     return{
    //     todo: []
    //     }
    // },

    props:{
        todo: {
            type: Object,
            required: true,
            default: () => ({title: 'Заголовок', description: 'Описание', isFinished: false})
        },

        idx: Number
    },

    mixins: [filters],
    
    methods: {
       toggleTodo(){   
            this.todo.isFinished = !this.todo.isFinished;
        }, 

        deleteTodo(){
            this.$emit('del', this.idx)
        },
    }
}
</script>

