<template>

    <hot-table v-on:click="greet()" v-if="charge"  ref="dat" :settings="hotSettings"  :columnSummary="columnSummary"></hot-table>

    <h1 v-else>Cargando...</h1>
  
    
</template>

<script src="./Table.js" ></script>
<style src="../../../node_modules/handsontable/dist/handsontable.full.css"></style>

