<template>
    <div class="hook"> {{title}} </div>
</template>

<script>
export default {
    name: 'LifecycleHooks',

    props: {
        title: String,
    },

    data: () => ({
        test: "Test"
    }),

    beforeCreate() {
        console.log('beforeCreate')
    },

    created(){
        console.log('created')
    },

    beforeMount(){
        //компонент смонтирован, но HTML элементы еще не нарисованы
        console.log('BeforeMount')
    },

    mounted(){
        //компонент смонтирован и HTML элементы нарисованы
        console.log('mounted')
    },
    
    beforeUpdate(){
        console.log('beforeUpdate')
    },

    updated(){
        console.log('updated')
    },

    beforeDestroy(){
        console.log('beforeDestroy')
    },

    destroyed(){
        console.log('destroyed')
    }
}
</script>
