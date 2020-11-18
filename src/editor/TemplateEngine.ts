import Binding from "./Binding";

export default class TemplateEngine {
    public static async loadTemplate(component: any, root: HTMLElement): Promise<void> {
        let template = (await (await fetch(component.prototype.templateUrl)).text());
        new Binding(component, template, root);
    }
}