export default class TemplateEngine {
    public static async loadTemplate(component: any): Promise<DocumentFragment> {
        let template = (await (await fetch(component.prototype.templateUrl)).text());
        return TemplateEngine.formatTemplate(template);
    }

    public static formatTemplate(templateContent: string): DocumentFragment {
        let componentRoot = document.createElement(null);

        componentRoot.innerHTML = templateContent;
        componentRoot = componentRoot.firstChild;

        let templateFragment: DocumentFragment = document.createDocumentFragment();
        templateFragment.appendChild(componentRoot);

        return templateFragment;
    }
}