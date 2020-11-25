<template>
  <div class="transform-component" v-if="inspectorComponentData">
    <div class="text-default" style="padding-bottom: 5px; font-weight: bold; margin-bottom: 5px;">Transform</div>
    <div class="transform-values">
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">X</div>
        <input type="text" v-model="inspectorComponentData.x" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">Y</div>
        <input type="text" v-model="inspectorComponentData.y" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">W</div>
        <input type="text" v-model="inspectorComponentData.width" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">H</div>
        <input type="text" v-model="inspectorComponentData.height" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Transform from '../../../../yak-engine/src/primitives/transform';

@Component
export default class TransformComponent extends Vue {
  @Prop() inspectorComponentData: Transform;
}
</script>

<style>
.transform-values {
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-gap: 1em;
}

.transform-values .transform-value .form-label {
  padding-right: 10px;
}
</style>