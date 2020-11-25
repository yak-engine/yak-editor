<template>
  <div class="camera-component">
    <div class="text-default" style="padding-bottom: 5px; font-weight: bold; margin-bottom: 5px;">Camera</div>
    Not yet implemented
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CameraComponent extends Vue {
  @Prop() inspectorComponentData: string;
}
</script>

<style>

</style>