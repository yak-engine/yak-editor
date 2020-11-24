

<template>
  <div class="default-component">
    <div class="component scene-listing">
      <div y-for="scene in scenes">
        <!-- {{ scene }} -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SceneListing extends Vue {
  @Prop() private msg!: string;

  get scenes(): Array<any> {
    return new Array();
  }

  /**
   * Called after the fragment has been added to the DOM. You can do standard DOM manipulation now.
   */
  onContentLoaded(): void {
    // fetch('/scene/list').then((response) => response.json()).then((scenes) => {
    //     console.log(scenes);
    //     this.scenes = scenes;
    // });
  }
}
</script>

<style scoped lang="scss">
</style>