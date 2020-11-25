<template>
  <div class="component default-component">
<div class="component new-scene-component">
    <div class="form-section">
        <span class="form-label" for="scene-name">Name</span>
        <input type="text" class="input-element scene-name" id="scene-name" name="scene-name" y-bind="sceneName" />
    </div>

    <button type="button" class="btn-add-scene" y-click="addScene()">Add scene</button>
</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NewScene extends Vue {
  @Prop() private msg!: string;

  sceneName: string = 'Default';

    addScene(): void {
        let scene = {
            name: this.sceneName
        };

        // fetch('/scene/add', {
        //     method: 'POST',
        //     body: JSON.stringify(scene),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }).then((response) => {
        //     console.log(response);
        // });
    }
}
</script>

<style scoped lang="scss">
</style>