import { ComponentDecorator } from "../../decorators/component-decorator";
import EditorRenderer from "../../editor-renderer";

@ComponentDecorator({
    tagName: 'map-editor',
    templateUrl: './src/editor/components/map-editor/map-editor.component.html'
})
export default class MapEditorComponent {
    editorRenderer: EditorRenderer;

    onActivated(): void {
        this.editorRenderer = new EditorRenderer();
        window.requestAnimationFrame((time: number) => this.mainLoop(time));
    }

    mainLoop(time: number) {
        window.requestAnimationFrame((time: number) => this.mainLoop(time));
        this.editorRenderer.run();
    }
} 