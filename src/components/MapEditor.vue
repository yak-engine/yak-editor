<template>
  <div class="component default-component">
      <div
        class="main"
        style="height: 100%; flex: 1; display: flex; flex-direction: row"
      >
        <div class="editor-left" style="width: 300px; background-color: #212121; display: flex; flex-direction: column;">
            <div style="flex: 1;">
              <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
                <span style="font-weight: bold; color: #e7e7e7;">Scene Hierarchy</span>
              </div>
              <scene-hierarchy :entities="scene.entities" v-on:on-entity-clicked="entity = $event"></scene-hierarchy>
            </div>
            <div style="flex: 1;">
              <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
                <span style="font-weight: bold; color: #e7e7e7;">Manage Scene Layers</span>
              </div>
            </div>
        </div>
        <div style="flex: 1">
          <scene-listing></scene-listing>

          <ul
            class="nav nav-menu mb-0 fill-dark text-white is-shadowed"
            style="z-index: 500; border-bottom: 1px solid black;"
          >
            <div class="">
              <div class="nav-left"></div>
              <div class="nav-right">
                <ul class="nav-item">
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="1"
                      title="Select"
                    >
                      <i
                        class="fa fa-mouse-pointer text-blue-lighten-5"
                      ></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="2"
                      title="Stamp"
                    >
                      <i class="fa fa-cube text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="3"
                      title="Shape fill"
                    >
                      <i class="fa fa-object-group text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="4"
                      title="Bucket fill"
                    >
                      <i class="fa fa-flask text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="5"
                    >
                      <i class="fa fa-object-group text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="6"
                      title="Eraser"
                    >
                      <i class="fa fa-eraser text-red-lighten-2"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
          <div
            class="canvas-container"
            style="
            background-color: #323232;
              display: flex;
              height: 100%;
              flex: 1;
              justify-content: center;
              align-items: center;
            "
          >
            <div style="min-width: 512px; overflow: auto">
              <canvas
                id="editor-canvas"
                tabindex="-1"
                width="512"
                height="512"
              ></canvas>
            </div>
          </div>
        </div>
        <div class="editor-right" style="width: 400px; background-color: #212121; display: flex; flex-direction: column;">
          <div style="flex: 1;">
            <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
              <span style="font-weight: bold; color: #e7e7e7;"><i class="fa fa-cube fa-lg"></i> Inspector</span>
            </div>
            <inspector v-if="scene && scene.entities" :entity="entity"></inspector>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import EditorRenderer from '@/editor-renderer';
import { Component, Prop, Vue } from "vue-property-decorator";

import SceneHierarchy from './SceneHierarchy.vue';
import SceneListing from './SceneListing.vue';
import Inspector from './Inspector.vue';

import SceneService from '../services/scene.service';
import Scene from '../../../yak-engine/src/graphics/scene';

@Component({
  components: {
    SceneHierarchy,
    SceneListing,
    Inspector
  }
})
export default class MapEditor extends Vue {
  @Prop() private msg!: string;

  scene: any = {};
  sceneService: SceneService = new SceneService();

  entity: any = {};

  editorRenderer: EditorRenderer;
  isLoading: boolean = true;
  // scene: Scene;

  constructor() {
      super();

    // fetch("./bundle/scenes/scene1.json")
    //   .then((response) => response.json())
    //   .then((scene: Scene) => {
    //     this.scene = scene;

    //     this.editorRenderer = new EditorRenderer();
    //     this.editorRenderer.currentLayer = this.scene.layers[0];

    //     window.requestAnimationFrame((time: number) => this.mainLoop(time));
    //   })
    //   .finally(() => (this.isLoading = false));
  }

  test(entity) {
    this.entity = entity;
    console.log(this.entity);
  }

  async mounted() {
    this.sceneService.getScene('default-scene').then((scene) => {
      this.scene = scene;
      this.entity = this.scene.entities[1];
      console.log(this.scene);
    });

    this.editorRenderer = new EditorRenderer();
    window.requestAnimationFrame((time: number) => this.mainLoop(time));
  }

  mainLoop(time: number) {
    window.requestAnimationFrame((time: number) => this.mainLoop(time));
    this.editorRenderer.run();
  }
}
</script>

<style scoped lang="scss">
</style>