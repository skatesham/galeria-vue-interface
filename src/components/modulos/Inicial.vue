<template>
    <div id='inicial'>
        <div class="container">
            <h1 @click="test" class="text-light"> HOME PAGE</h1>
            <br>
            <p class="text-success">{{ texto }}</p>
            
            <div class="row">
                <div class="col-sm-6 ml-auto mr-auto">
                    <table class="table">
                        <thead>
                            <td>Id</td>
                            <td>Nome</td>
                            <td>Email</td>
                            <td>Usuario</td>
                        </thead>
                        <tbody>
                            <tr>
                                <th> {{ usuario.id }}</th>
                                <th> {{ usuario.nome }}</th>
                                <th> {{ usuario.email }}</th>
                                <th> {{ usuario.usuario }}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <button @click="login">Get Token</button>
            <div class="row">
                Token gerado é:
                <div class="col-sm-12 alert alert-success">
                    <pre>{{ token }}</pre>
                </div>
                <div class="col-sm-12 alert alert-info">
                    <pre>{{ session }}</pre>
                </div>
                <div class="col-sm-12 alert alert-warning">
                    <pre> Expires in: {{ expires }}</pre>
                </div>
                <div class="col-sm-12 alert alert-danger">
                    <pre> Result time: {{ result }}</pre>
                </div>
            </div>
        	<!-- pre> {{ $session.getAll() }}</pre -->
        </div>
        <br>
        <br>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default {
    name: 'inicial',
    data () {
        return {
            texto: '',
            token: '',
            session: '',
            expires: '',
            result: '',
            usuario: ''
        }
    },
    methods:{
        test () {
        this.$http.get('http://localhost:8888/GaleriaImagens/',{headers: {'Access-Control-Allow-Origin':'*'}})
        .then(function (response) {
            console.log(response);
            this.texto = response.bodyText
            this.session = this.$session.get('token')
            this.expires = this.$session.get('expires_in')
            this.result = Date.now() - this.expires
            this.usuario = this.$session.get('usuario')
        })
        },
        login () {
        this.$http.post('http://localhost:8888/GaleriaImagens/login', {
            username: 'login',
            password: '123'
            }).then(function (response){
                console.log(response)
                this.token = response.body.token
            })
        }
    },
    beforeMount() {
        this.test()
    }
}
</script>
