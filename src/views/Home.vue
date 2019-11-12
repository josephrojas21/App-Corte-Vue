<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Table msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '../components/tablaOrdenCorte/Table.vue'

export default {
  name: 'home',
  components: {
    Table
  }
}
</script>
