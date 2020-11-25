<template>
  <div class="collider-component" v-if="inspectorComponentData">
    <div class="text-default" style="padding-bottom: 5px; font-weight: bold; margin-bottom: 5px;">Collider</div>
    
    <div class="checkbox">
      <input type="checkbox" id="isTrigger" name="isTrigger" v-model="inspectorComponentData.isTrigger" />
      <label for="isTrigger">Is Trigger?</label>
    </div>
    
    <div class="transform-values">
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">X</div>
        <input type="text" v-model="inspectorComponentData.transform.x" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">Y</div>
        <input type="text" v-model="inspectorComponentData.transform.y" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">W</div>
        <input type="text" v-model="inspectorComponentData.transform.width" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">H</div>
        <input type="text" v-model="inspectorComponentData.transform.height" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ColliderComponent extends Vue {
  @Prop() inspectorComponentData: string;
}
</script>

<style>

</style>