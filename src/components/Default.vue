<template>
  <div class="component default-component">
    <main-menu></main-menu>
    <map-editor></map-editor>

    <!-- <router-outlet></router-outlet> -->

    <div class="a11y-modal-layer a11y-hidden">
        <div class="a11y-modal-container">
            <div class="a11y-modal" id="new-scene-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div class="a11y-modal-banner">
                    <h1 class="a11y-modal-title" id="modal-title">New scene</h1>
                </div>
                <div class="a11y-modal-content">
                    <new-scene></new-scene>
                </div>
                <div class="a11y-modal-footer">
                    <button type="button" class="a11y-modal-dismiss">Cancel</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MainMenu from './MainMenu.vue';
import MapEditor from './MapEditor.vue';
import NewScene from './NewScene.vue';

@Component({
  components: {
    MainMenu,
    MapEditor,
    NewScene
  }
})
export default class Default extends Vue {

  @Prop() private msg!: string;

  mounted(): void {
    // TODO: Fix this. This is an issue with the order in which components get added to the DOM. Add way to query template fragment.
    setTimeout(() => {
        // let modalToggleElems = document.querySelectorAll('.modal-toggle');

        // console.log(modalToggleElems);

        // (window as any).a11yModal.modalLayer = document.querySelector(`.${(window as any).a11yModal.options.modalLayerClass}`);

        // console.log((window as any).a11yModal.modalLayer);

        // modalToggleElems.forEach((modalToggleElem: HTMLElement) => {
        //     let modalTarget = modalToggleElem.dataset.target;

        //     modalToggleElem.addEventListener('click', () => {
        //         (window as any).a11yModal.open(modalTarget);
        //     });
        // });
    }, 2000);
  }
}
</script>

<style scoped lang="scss">

</style>