<template>
    <div id='inicial'>
        <div class="container">
        <h1 @click="test"> HOME PAGE</h1>
        <br>
        <p class="text-success">{{ texto }}</p>

        <button @click="login">Get Token</button>
        <div class="row">
            Token gerado é:
            <div class="col-sm-12 alert alert-danger">
                <pre>{{ token }}</pre>
            </div>
        </div>
        
        </div>
    </div>
</template>

<script>
export default {
    name: 'inicial',
    data () {
        return {
            texto: '',
            token: ''
        }
    },
    methods:{
        test () {
        this.$http.get('http://localhost:8888/GaleriaImagens/',{headers: {'Access-Control-Allow-Origin':'*'}})
        .then(function (response) {
            console.log(response);
            this.texto = response.bodyText
        })
        },
        login () {
        this.$http
            .post('http://localhost:8888/GaleriaImagens/login', {
            username: 'login',
            password: '123'
            }).then(function (response){
                console.log(response)
                this.token = response.body.senha
            })
        }
    },
    beforeMount() {
        this.test()
    }
}
</script>
