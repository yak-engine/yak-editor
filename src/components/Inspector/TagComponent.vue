<template>
  <div class="tag-component">
    <div class="text-default" style="padding-bottom: 5px; font-weight: bold; margin-bottom: 5px;">Tag</div>
    <input class="tag-name" type="text" v-model="inspectorComponentData.name" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TagComponent extends Vue {
  @Prop() inspectorComponentData: string;
}
</script>

<style>
.tag-name {
  width: 50%;
}
</style>