import { ComponentDecorator } from "../decorators/component-decorator";

@ComponentDecorator({
    tagName: 'default',
    templateUrl: './src/editor/components/default.component.html'
})
export default class DefaultComponent {
    lbl: string = 'My input label';
    inputValue: string = 'My input value';
} 