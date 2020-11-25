<template>
  <div class="material-component">
    <div class="text-default" style="padding-bottom: 5px; font-weight: bold; margin-bottom: 5px;">Material</div>
    <input class="fill-style" type="text" v-model="inspectorComponentData.fillStyle" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MaterialComponent extends Vue {
  @Prop() inspectorComponentData: string;
}
</script>

<style>
.fill-style {
  width: 50%;
}
</style>