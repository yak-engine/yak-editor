<template>
  <div class="inspector-component">
    <component v-for="entityComponent in entityComponents" :key="entityComponent.component" :is="entityComponent.component" :inspector-component-data="entity[entityComponent.property]" style="margin-bottom: 30px;"></component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import TagComponent from './Inspector/TagComponent.vue';
import TransformComponent from './Inspector/TransformComponent.vue';
import CameraComponent from './Inspector/CameraComponent.vue';
import ColliderComponent from './Inspector/ColliderComponent.vue';
import MaterialComponent from './Inspector/MaterialComponent.vue';
import SpriteComponent from './Inspector/SpriteComponent.vue';

@Component({
  components: {
    TagComponent,
    TransformComponent,
    CameraComponent,
    ColliderComponent,
    MaterialComponent,
    SpriteComponent
  }
})
export default class Inspector extends Vue {
  @Prop() entity: Array<any>;

  availableComponents: Array<string> = ['tag', 'transform', 'sprite', 'material', 'collider', 'camera'];
  entityComponents: Array<any> = [];

  created() {
    this.bootstrapAvailableComponents();
  }

  bootstrapAvailableComponents(): void {
    this.entityComponents = Object.keys(this.entity).filter(x => x.toLowerCase().endsWith('component')).map((property) => {
      return {
        component: property.charAt(0).toUpperCase() + property.slice(1),
        property: property
      };
    });
  }

  @Watch('entity')
  onEntityChanged(newValue: any, oldValue: any): void {
    this.bootstrapAvailableComponents();
  }
}
</script>

<style>
.inspector-component {
  padding: 15px;
}
</style>