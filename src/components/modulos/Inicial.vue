<template>
    <div id='inicial'>
        <div class="container">
            <h1 @click="test" class="text-light">Página Inicial</h1>
            <br>
            <h4 class="p-3 card text-success">Bem Vindo a Galeria de Imagens</h4>
            
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

            <div class="ml-auto mr-auto col-sm-4 alert alert-danger">
                <pre> Tempo Restante: {{ result }}</pre>
            </div>
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
            this.result = (Math.round((((Date.now() - this.expires)/1000)/60)*100)/100).toFixed(2) + " Min"
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
