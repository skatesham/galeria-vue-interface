<template>
<div>
    <h1 class="text-dark">Enviar Imagens</h1>
    <!-- ENVIAR IMAGEM -->
    <div class="row">
      <div class="col-sm-8 ml-auto mr-auto card">
        <h5 class="m-2 text-left">Enviar Imagem</h5>
        <div>
            <b-form-input class="mb-2 mt-2" v-model="nome" type="text" placeholder="Insira um nome"></b-form-input>
        </div>
        <b-form-file v-model="file"
          ref="fileinput" :state="Boolean(file)"
           placeholder="Escolha uma imagem..."
            accept="image/*"
            @change="onFileChanged"></b-form-file>
        <b-button class="mb-2 mt-2" id="enviar" :disabled="!ready" @click="onSubmit">Enviar</b-button>
        <small v-if="success" class="alert alert-success">Imagem enviada com sucesso</small>
        <small v-if="erro" class="alert alert-danger">Envio não concluido por atributos faltando</small>
        <input type="text" id="url" hidden/>
      </div>
    </div>
</div>    
</template>

<script>
import { Vue } from "vue-property-decorator";

export default {
  name: "EnviarImagemComp",
  data() {
    return {
      url: "",
      file: "",
      nome: "",
      tamanho: "",
      tipo: "",
      success: false,
      ready: true,
      usuario: "",
      erro: false
    };
  },
  methods: {
    onSubmit() {
      this.url = $("#url").val();
      if (this.ready) {
        this.enviar();
        this.erro = false;
      } else {
        this.erro = true;
      }
      this.update();
      this.$refs.fileinput.reset();
    },
    onFileChanged(evt) {
      this.file = evt.target.files[0];
      this.tipo = this.file.type;
      this.tamanho =
        parseFloat(this.file.size / 1000 / 1000).toFixed(3) + " MB";
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = function() {
        //console.log(reader.result)
        $("#url").val(reader.result);
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
        alert("erro ao carregar imagem!");
      };
      console.log(reader.readAsText(this.file));
    },
    enviar() {
      this.$http
        .post("http://localhost:8888/GaleriaImagens/imagem/save", {
          nome: this.nome,
          tamanho: this.tamanho,
          tipo: this.tipo,
          imagemBase64: this.url,
          usuario: {
            id: this.usuario.id
          }
        })
        .then(function(response) {
          console.log(response);
          this.success = true;
        });
    }
  },
  beforeMount() {
    Vue.http.headers.common["Authorization"] =
      "Bearer " + this.$session.get("token");
    var user = this.$session.get("usuario");
    this.usuario = user;
    console.log(user.papel.descricao)
  }
};
</script>
