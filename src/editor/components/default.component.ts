import { ComponentDecorator } from "../decorators/component-decorator";

@ComponentDecorator({
    tagName: 'default',
    templateUrl: './src/editor/components/default.component.html'
})
export default class DefaultComponent {
    lbl: string = 'My input label';
    inputValue: string = 'My input value';

    onContentLoaded(): void {
        let modalToggleElems = document.querySelectorAll('.modal-toggle');

        (window as any).a11yModal.modalLayer = document.querySelector(`.${(window as any).a11yModal.options.modalLayerClass}`);

        console.log((window as any).a11yModal.modalLayer);

        modalToggleElems.forEach((modalToggleElem: HTMLElement) => {
            let modalTarget = modalToggleElem.dataset.target;

            modalToggleElem.addEventListener('click', () => {
                (window as any).a11yModal.open(modalTarget);
            });
        });
    }
} 