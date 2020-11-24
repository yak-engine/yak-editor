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
        fetch('http://localhost:9000/scene/get/default-scene', { mode: 'no-cors' }).then((response) => console.log(response));
    }
}
</script>

<style scoped lang="scss">
</style>