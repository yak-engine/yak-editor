import { ComponentDecorator } from "../../decorators/component-decorator";

@ComponentDecorator({
    tagName: 'scene-hierarchy',
    templateUrl: './src/editor/components/scene-hierarchy/scene-hierarchy.component.html'
})
export default class SceneHierarchyComponent {
    constructor() {

    }

    /**
     * Called after the binding has been configured but before it has been added to the DOM.
     */
    onActivated(): void {

    }

    /**
     * Called after the fragment has been added to the DOM. You can do standard DOM manipulation now.
     */
    onContentLoaded(): void {
        fetch('/scene/scene1').then((response) => response.json()).then((scene) => {
            console.log(scene);
            (window as any).tree.generate(scene.entities);
        })

        // let hierarchy = [
        //     { entity: "Main camera" },
        //     { 
        //         entity: "Player", 
        //         children: [
        //             { entity: "Entity1" },
        //             { entity: "Entity2" },
        //             { entity: "Entity3" },
        //             { entity: "Entity4" } 
        //         ] 
        //     }
        // ];
    }
} 