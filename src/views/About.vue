<template>
  <div class="about">
    <navbar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/navbar/Navbar.vue'

@Component({
  components: {
  Navbar
  },
  })
export default class About extends Vue {}
</script>
