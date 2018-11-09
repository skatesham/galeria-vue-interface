<template>
<div class='my-login-page text-center'>
		<div class='container h-100'>
			<div class='row justify-content-center h-100'>
				<div class='card-wrapper'>
					<div class='card fat'>
						<div class='card-body'>
							<h4 class='card-title'>Login</h4>
							<div>

								<div class='form-group'>
									<label for='email'>Nome de Usuário</label>

									<input v-model='username' id='email' type='text' class='form-control' name='email' value='' required autofocus>
								</div>

								<div class='form-group'>
									<label for='password'>Senha
										<br>
										<a href='forgot.html' class='float-right'>
											<small>Esqueceu a senha?</small>
										</a>
									</label>
									<input v-model='password' id='password' type='password' class='form-control' name='password' required data-eye>
								</div>
								
								<div v-if="erro" class="alert alert-danger"> Erro ao tentar fazer login</div>

								<div class='form-group'>
									<label>
										<input type='checkbox' name='remember'> Lembrar
									</label>
								</div>

								<div class='form-group no-margin'>
									<button @click='login' type='submit' class='btn btn-primary btn-block'>
										Login
									</button>
								</div>
								<div class='margin-top20 text-center'>
									Não possui uma conta? <router-link to='/registro'>Criar uma conta</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<pre> {{ $session.getAll() }}</pre>
		<br>
		
</div>
</template>



<script>
import { Component, Prop, Vue } from 'vue-property-decorator'

export default {
	name: 'login',
	data(){
		return {
			username: 'login', // Ok user setted
			password: '123',
			erro: false
		}
	},
  methods: {
    login() {
      this.$http.post('http://localhost:8888/GaleriaImagens/login', {
					username: this.username,
					password: this.password
        })
        .then(
          function(response) {
            if (response.status === 200 && 'token' in response.body) {
							//this.$auth.setToken(response.body.token, response.body.expires_in )
              Vue.http.headers.common['Authorization'] =
								'Bearer ' + response.body.token
							this.$session.start()
							this.$session.set('token', response.body.token)
							this.$session.set('expires_in', response.body.expirate)
							this.$session.set('usuario', response.body.usuario)
              this.$router.push('/home')
            }
          },
          function(err) {
						console.log('err', err)
						this.erro = true
						//alert('Erro ao tentar fazer login')
          }
        )
    }
	},
	beforeCreate: function () {
    if (this.$session.exists()) {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
.my-login-page{
	padding: 20px;
}
</style>
