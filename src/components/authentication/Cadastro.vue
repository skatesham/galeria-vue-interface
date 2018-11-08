<template>
<div class="my-login-page">
    <section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="brand">
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title">Criar Conta</h4>
							<form method="POST">
							 
								<div class="form-group">
									<label for="name">Nome</label>
									<input v-model="name" id="name" type="text" class="form-control" name="name" required autofocus>
								</div>

								<div class="form-group">
									<label for="email">Nome de usuário</label>
									<input v-model="username" id="email" type="text" class="form-control" name="email" required>
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
									<button type="submit" class="btn btn-primary btn-block">
										Registrar
									</button>
								</div>
								<div class="margin-top20 text-center">
									Já possui uma conta? <router-link to="/">Login</router-link>
								</div>
							</form>
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
export default {
	name: 'Cadastro',
	data(){
		return {
			name: '',
			username: '',
			password: ''
		}
	},
    methods: {
    }
}
</script>
<!-- script src="@/assets/js/my-login.js" -->

<style>
.my-login-page{
	padding: 20px;
}
</style>
