<template>
    <div class="todo" :class="{'todo-finished': todo.isFinished}">

        <p class="todo__header"> Задача № {{idx+1}}</p>
        <hr/>

        <p class="todo__title"> {{todo.title}} </p>
        <p class="todo__description"> {{todo.description}} </p>
        <hr/>

        <button class="todo__done" @click="toggleTodo"> {{todo.isFinished? 'Возобновить' :'Завершить'}} задачу</button>
        <button class="todo__delete" @click="deleteTodo" >Удалить задачу</button>

        <p class="todo__time"> {{todo.id | formatDate}} </p>

    </div>
</template>

<script>
import filters from '@/mixins/filters.js'

export default {
    name: 'Todo',

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

