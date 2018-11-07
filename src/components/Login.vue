<template>
<div class='my-login-page text-center'>
		<div class='container h-100'>
			<div class='row justify-content-md-center h-100'>
				<div class='card-wrapper'>
					<div class='card fat'>
						<div class='card-body'>
							<h4 class='card-title'>Login</h4>
							<div>

								<div class='form-group'>
									<label for='email'>Nome de Usuário</label>

									<input v-bind='username' id='email' type='text' class='form-control' name='email' value='' required autofocus>
								</div>

								<div class='form-group'>
									<label for='password'>Senha
										<br>
										<a href='forgot.html' class='float-right'>
											<small>Esqueceu a senha?</small>
										</a>
									</label>
									<input v-bind='password' id='password' type='password' class='form-control' name='password' required data-eye>
								</div>

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
</div>
</template>



<script>
export default {
	name: 'login',
	data(){
		return {
			password: '',
			username: ''
		}
	},
  methods: {
    login() {
      this.$http
        .post('http://localhost:8888/GaleriaImagens/login', {
          password: this.password,
          username: this.username
        })
        .then(
          function(response) {
            if (response.status === 200 && 'token' in response.body) {
              this.$session.start()
              this.$session.set('jwt', response.body.token);
              Vue.http.headers.common['Authorization'] =
                'Bearer ' + response.body.token
              this.$router.push('/about')
            }
          },
          function(err) {
            console.log('err', err)
          }
        )
    }
  }
}
</script>

<style>
.my-login-page {
  background-image: url('../assets/img/gallery.jpg');
  height: 100%;
  padding: 50px;
}
</style>
