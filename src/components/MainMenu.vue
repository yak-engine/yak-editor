<template>
  <div class="default-component">
    <play></play>
    <div class="mb-0 fill-dark text-light is-shadowed" style="z-index: 1000; border-bottom: 1px solid black;">
        <div class="">
            <ul class="nav nav-menu">
                <div class="nav-left">
                    <ul class="nav-item">
                        <li class="menu-item">
                            <div role="button" tabindex="0" class="dropdown-toggle" y-click="toggleDropdown($elem)">File</div>
                            <ul class="sub-menu">
                                <li>
                                    <div role="button" tabindex="0" class="modal-toggle" data-target="new-scene-modal">New scene</div>
                                </li>
                                <li>
                                    <div role="button" tabindex="0" class="modal-toggle" data-target="accessible-demo-modal">New map</div>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <div role="button" tabindex="0" class="dropdown-toggle" y-click="toggleDropdown($elem)">View</div>
                            <ul class="sub-menu">
                                <li>
                                    <div>
                                        <input type="checkbox" id="toggle-layer-highlighting" name="toggle-layer-highlighting" class="chk-highlight-current-layer" />
                                        <label for="toggle-layer-highlighting">Toggle layer highlighting</label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <div role="button" tabindex="0" y-ref="/options">Options</div>
                        </li>
                    </ul>
                </div>
                <div class="nav-right">
                    <ul class="nav-item">
                        <li class="menu-item">
                            <div role="button" tabindex="0" class="btn-play">
                                <i class="fa fa-play text-green-darken-2 mr-default"></i>
                                <span class="text-white">PLAY</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Play from './Play.vue';

@Component({
    components: {
        Play
    }
})
export default class MainMenu extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">

</style>