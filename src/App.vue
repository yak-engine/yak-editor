<template>
  <div id="app">
    <Default msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Default from './components/Default.vue';

@Component({
  components: {
    Default,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
