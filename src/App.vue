<template>
  <div id="app">
    <AppHeader :logo="header" @show="showAppDetails"/>
    <button @click="changeStyle"> Изменить стиль шапки сайта </button>
    <p v-show="showDetails">Подробности нашего приложения </p>
<!-- v-bind - делает атрибут реактивным (сразу берет значение из даты) -->
<!-- v-model="login" - дать название для синхронизации в методах  -->
<!-- пищем название ивентлисенера @ и передаем название функции, которая в методах  -->
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',

  data() {
    return{
      header: 'Первый варинт шапки',
      showDetails: false,
    }
  },

  methods: {
    changeStyle(){
      this.header= 'Второй вариант шапки'
    },

    showAppDetails(value){
      console.log(value)
      this.showDetails = value
    }
  },

  components: {
    AppHeader
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
