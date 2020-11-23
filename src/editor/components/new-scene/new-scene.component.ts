import { ComponentDecorator } from "../../decorators/component-decorator";

@ComponentDecorator({
    tagName: 'new-scene',
    templateUrl: './src/editor/components/new-scene/new-scene.component.html'
})
export default class NewSceneComponent {
    sceneName: string = 'Default';

    constructor() {
 
    }

    addScene(): void {
        let scene = {
            name: this.sceneName
        };

        fetch('/scene/add', {
            method: 'POST',
            body: JSON.stringify(scene),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            console.log(response);
        });
    }
} 