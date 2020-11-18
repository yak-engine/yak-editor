import { ComponentDecorator } from "../../decorators/component-decorator";

@ComponentDecorator({
    tagName: 'map-editor',
    templateUrl: './src/editor/components/options/options.component.html'
})
export default class OptionsComponent {
    constructor() {

    }

    onActivated(): void {
        
    }
} 