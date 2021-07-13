<template> 
    <div class="user">
        <p>Welcome, {{user.first_name}} {{user.last_name}} </p>

        <ul v-if="test.length">
            <li 
            v-for="element in test" 
            :key="element.id" 
            @click="setActive(element.id)" 
            :class="{ 'active': element.isActive 
             }"> 
                Имя: {{ element.first_name }}, Фамилия: {{ element.last_name }}
            </li>
        </ul>
        
        <p v-else> Список пользователей пуст </p>
        <div class="loader-wrapper">
            <div class="loader" :style="{width: percent + '%'}"></div>
        </div>
        <button class="button_start" @click="start">Start</button>
    </div>
</template>

<script>

export default{
    props: {
        user: {
            type: Object,
            required: true,
            default: () => ({
                first_name:"Unknown",
                last_name:"Unknown",
            })
        }
    },

    data: () =>({
        percent: 0,
        intervalId: 0,
        test: [
            {
                first_name: 'John',
                last_name: 'West',
                id: '001',
                isActive: false,
            },

            {
                first_name: 'Nataly',
                last_name: 'Portman',
                id: '002',
                isActive: false,
            },

            {
                first_name: 'Vladimir',
                last_name: 'Putin',
                id: '003',
                isActive: false,
            },

            {
                first_name: 'Nikol',
                last_name: 'Pashinyan',
                id: '004',
                isActive: false,
            }
        ]
    }),

    methods: {
        start() {
            if (this.intervalId) {
                return
            }
            this.intervalId = setInterval(() => {
                this.percent += 2
                if (this.percent >= 99) {
                    clearInterval(this.intervalId)
                }
            }, 100)
        },
        
        setActive(id){
            // const element = this.test.find(el => el.id === id)
            // if (element) {
            //     element.isActive = true
            // }

            const activeEl = this.test.find(el => el.isActive)
            if (activeEl && id === activeEl.id){
                return
            } 

            this.test.forEach(element => {
                if (element.id === id) return (element.isActive = true)
                element.isActive = false
            })
        }
    }
}
</script>

<style>

.active{
    color:green;
    border: 1px solid greenyellow;
    margin: 10 0px;
}

li {
    cursor: pointer;
}

.loader-wrapper{
    width: 400px;
    height: 15px;
    margin: 0 auto; 
    border: 2px solid red;
    border-radius: 8px;
}

.loader{
    height: 100%;
    width: 0;
    background-color: orange
}

.button_start{
    margin: 10px;
}

</style>
