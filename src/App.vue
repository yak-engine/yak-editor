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
export default class App extends Vue {
  constructor() {
    super();
    console.log(process.env.VUE_APP_API_BASE_URL);
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
