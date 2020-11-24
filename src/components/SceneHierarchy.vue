<template>
  <div class="default-component">
<div class="component scene-hierarchy">
    <div class="tree"></div>
</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SceneHierarchy extends Vue {
  @Prop() private msg!: string;

    mounted(): void {
        fetch('/scene/get/scene1').then((response) => response.json()).then((scene) => {
            console.log(scene);
            (window as any).tree.generate(scene.entities);
        })
    }
}
</script>

<style scoped lang="scss">
</style>