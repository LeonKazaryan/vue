<template>
<!-- здесь хтмл -->
   <header style="margin-bottom: 1rem">
       {{ logo }}
       <button @click="showDetails">Показать подробности</button>
   </header>

</template>

<script>
// здесь жэс
export default {
    name: 'AppHeader',

    props: {
        logo: {
            type: String,
            required: true,
            default: 'Шапка сайта',
         }
    },

    methods:{
        showDetails(){
            this.$emit('show', true)
        }
    }
}  

// дальше можно стили <style</style>
</script>
