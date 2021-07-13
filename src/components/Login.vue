<template>

    <div class='Login'>
        <form @submit.prevent="loginUser" class="form" v-show="!isLoading"> 
            <h3> Login </h3>
            <input v-model="phone" type="text" placeholder="Telephon number">
            <input v-model="password" type="password" placeholder="Password">
            <p v-show="errorMessage"> {{errorMessage}} </p>
            <button type="submit">Войти</button>
        </form>

    <p v-show="isLoading" > Loading...</p>

    </div>

</template>

<script>
export default{
    name: "Login",

    data(){
        return{
            phone: '',
            password: '',
            isLoading: false,
            errorMessage: '',
        }
    },

    methods: {
        async loginUser(){
            try {
                this.errorMessage = ''
                this.isLoading = true
                const response = await fetch('http://localhost:5000/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        phone: this.phone,
                        password: this.password
                    }),
                    headers: {
                        'Content-type': 'Application/json',
                    },
                })

                const data = await response.json()

                if (response.ok) {
                  return this.$emit('success', data.user)
                } 

                throw new Error(data.message)

            } catch (error) {
                console.log(error)
                this.errorMessage = error
            } finally {
                this.isLoading = false
            }
        },
    }

}
</script>

<style>

.form{
    display:flex;
    flex-direction: column;
    width: 300px;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 10px;
    margin: 0 auto;
}

.form input{
    margin-bottom: 1rem;
}

</style>