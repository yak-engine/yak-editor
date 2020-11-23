import Scene from "../../../../yak-engine/src/graphics/scene";
import { ComponentDecorator } from "../../decorators/component-decorator";
import EditorRenderer from "../../editor-renderer";

@ComponentDecorator({
    tagName: 'map-editor',
    templateUrl: './src/editor/components/map-editor/map-editor.component.html'
})
export default class MapEditorComponent {
    editorRenderer: EditorRenderer;
    isLoading: boolean = true;
    scene: Scene;

    constructor() {
        fetch('./bundle/scenes/scene1.json').then((response) => response.json()).then((scene: Scene) => {
            this.scene = scene;

            this.editorRenderer = new EditorRenderer();
            this.editorRenderer.currentLayer = this.scene.layers[0];
    
            window.requestAnimationFrame((time: number) => this.mainLoop(time));
        })
        .finally(() => this.isLoading = false);
    }

    onActivated(): void {
        console.log('map-editor component activated');
    }

    mainLoop(time: number) {
        window.requestAnimationFrame((time: number) => this.mainLoop(time));
        this.editorRenderer.run();
    }
} 