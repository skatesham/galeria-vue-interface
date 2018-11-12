<template>
<div class="my-login-page">
    <section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-center h-100">
				<div class="card-wrapper">
					<div class="brand">
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title">Criar Conta</h4>
							<div>
							 
								<div class="form-group">
									<label for="name">Nome</label>
									<input v-model="name" id="name" type="text" class="form-control" name="name" required autofocus>
								</div>

								<div class="form-group">
									<label for="email">Nome de usuário</label>
									<input v-model="username" id="usuario" type="text" class="form-control" name="usuario" required>
								</div>

								<div class="form-group">
									<label for="email">Email</label>
									<input v-model="email" id="email" type="email" class="form-control" name="email" required>
								</div>								

								<div class="form-group">
									<label for="password">Senha</label>
									<input v-model="password" id="password" type="password" class="form-control" name="password" required data-eye>
								</div>

								<div class="form-group">
									<label>
										<input type="checkbox" name="aggree" value="1" required> Eu concordo com termos e condições
									</label>
								</div>

								<div class="form-group no-margin">
									<button @click="registro" class="btn btn-primary btn-block">
										Registrar
									</button>
								</div>
								<div class="margin-top20 text-center">
									Já possui uma conta? <router-link to="/">Login</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<br>
	<br>
	<br>
</div>
</template>


<script>
import Mostrar from '@/assets/js/my-login.js'

export default {
	name: 'Cadastro',
	data(){
		return {
			name: '',
			username: '',
			email: '',
			password: ''
		}
	},
    methods: {
		registro () {
			this.$http.post("http://localhost:8888/GaleriaImagens/usuario/save", {
				nome: this.name,
				usuario: this.username,
				email: this.email,
				senha: this.password,
				papel: {
					id: 2,
					descricao: 'Usuario Comum'
				}
			}).then(function () {
				this.$router.push('/')
			},
			function (err) {
				console.log('err', err)
				alert('Dados incorretos ou já consumidos')
			})
		}
    },
	beforeCreate: function () {
		if (this.$session.exists()) {
		this.$router.push('/home')
		}
  }
}
</script>
<!-- script src="@/assets/js/my-login.js" -->

<style>
.my-login-page{
	padding: 20px;
}
</style>
