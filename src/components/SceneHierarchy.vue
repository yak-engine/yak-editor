<template>
  <div class="tree-component">
      <ul>
          <li v-for="entity in entitiesArray" :key="entity.id" @click="selectEntity(entity)" v-bind:class="{ 'selected': selectedEntity.id === entity.id }">
              <i class="fa fa-cube"></i>&nbsp;
              <span>{{getName(entity)}}</span>
              <tree v-if="entity.children" :entities="entity.children"></tree>
          </li>
      </ul>
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
    this.$emit('on-entity-clicked', this.selectedEntity);
  }

  getName(entity: any): string {
    if (entity.cameraComponent) {
        return 'Camera';
    }
    else {
        return entity.tagComponent.name.charAt(0).toUpperCase() + entity.tagComponent.name.slice(1);
    }
  }
}
</script>

<style>
.tree-component ul li {
  margin-bottom: 5px;
  padding: 10px 15px;
  cursor: pointer;
}

.tree-component ul li.selected {
  background-color: #007ACC;
}
</style>