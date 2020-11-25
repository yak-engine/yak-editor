
<template>
  <div class="play-component">
    <div
      class=""
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1000;
      "
    >
      <div
        class="play-overlay is-shadowed"
        style="
          position: absolute;
          top: 60px;
          left: 60px;
          right: 60px;
          bottom: 60px;
          background-color: #181818;
          border-radius: 8px;
        ">

        <iframe src="http://localhost:9000/bundle/play" frameborder="0"></iframe>

        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SceneHierarchy extends Vue {
  @Prop() entities: Array<any>;

  selectedEntity: any = {};

  get entitiesArray(): Array<any> {
    if (this.entities) {
      return this.entities;
    }

    return new Array();
  }

  selectEntity(entity: any): void {
    this.selectedEntity = entity;
    this.$emit("on-entity-clicked", this.selectedEntity);
  }

  getName(entity: any): string {
    if (entity.cameraComponent) {
      return "Camera";
    } else {
      return (
        entity.tagComponent.name.charAt(0).toUpperCase() +
        entity.tagComponent.name.slice(1)
      );
    }
  }
}
</script>

<style lang="scss" scoped>
iframe {
    width: 100%;
    height: 100%;
}
</style>