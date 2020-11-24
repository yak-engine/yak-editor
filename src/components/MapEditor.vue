<template>
  <div class="default-component">
    <div class="map-editor-component">
      <div
        class="main"
        style="height: 100%; flex: 1; display: flex; flex-direction: row"
      >
        <div class="editor-left" style="width: 300px">
          <scene-hierarchy></scene-hierarchy>
        </div>
        <div style="flex: 1">
          <scene-listing></scene-listing>

          <ul
            class="nav nav-menu mb-0 fill-dark text-white is-shadowed"
            style="z-index: 500"
          >
            <div class="container">
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
                        class="fa fa-mouse-pointer fa-lg text-blue-lighten-5"
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
                      <i class="fa fa-cube fa-lg text-white"></i>
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
                      <i class="fa fa-object-group fa-lg text-white"></i>
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
                      <i class="fa fa-flask fa-lg text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="5"
                    >
                      <i class="fa fa-object-group fa-lg text-white"></i>
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
                      <i class="fa fa-eraser fa-lg text-red-lighten-2"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
          <div
            class="canvas-container"
            style="
              background-color: #484848;
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import SceneHierarchy from './SceneHierarchy.vue';
import SceneListing from './SceneListing.vue';

@Component({
  components: {
    SceneHierarchy,
    SceneListing
  }
})
export default class MapEditor extends Vue {
  @Prop() private msg!: string;

  // editorRenderer: EditorRenderer;
  // isLoading: boolean = true;
  // scene: Scene;

  // constructor() {
  //     super();

  //   fetch("./bundle/scenes/scene1.json")
  //     .then((response) => response.json())
  //     .then((scene: Scene) => {
  //       this.scene = scene;

  //       this.editorRenderer = new EditorRenderer();
  //       this.editorRenderer.currentLayer = this.scene.layers[0];

  //       window.requestAnimationFrame((time: number) => this.mainLoop(time));
  //     })
  //     .finally(() => (this.isLoading = false));
  // }

  // onActivated(): void {
  //   console.log("map-editor component activated");
  // }

  // mainLoop(time: number) {
  //   window.requestAnimationFrame((time: number) => this.mainLoop(time));
  //   this.editorRenderer.run();
  // }
}
</script>

<style scoped lang="scss">
</style>