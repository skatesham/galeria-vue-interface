<template>
    <div id="enviarImagem">
        <Navbar/>
        <EnviarImagemComp/>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/navbar/Navbar.vue'
import EnviarImagemComp from '@/components/modulos/EnviarImagemComp.vue'

@Component({
    components: {
        Navbar,
        EnviarImagemComp,
    },
})

export default class EnviarImagem extends Vue {}
</script>
