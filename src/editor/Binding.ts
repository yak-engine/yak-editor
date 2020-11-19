import ComponentEngine from "./ComponentEngine";
import EditorApplication from "./EditorApplication";

export default class Binding {
    templateFragment: DocumentFragment;
    instance: any;
    children: Array<Binding> = new Array();

    private expressionTokenRegex: RegExp = /{{(.*?)}}/;

    constructor(component: any, templateFragment: DocumentFragment) {
        this.templateFragment = templateFragment;

        this.instance = new component();

        this.queryComponents();
        this.queryBindings();
        this.queryExpressions();
        this.queryNavigationLinks();

        if (this.instance.onActivated) {
            this.instance.onActivated();
        }
    }

    queryComponents(): void {
        EditorApplication.components.forEach((component) => {
            this.templateFragment.querySelectorAll(component.prototype.tagName).forEach(async (componentSlot) => {
                let binding = await ComponentEngine.bootstrap(component, componentSlot);
                // let templateFragment = await TemplateEngine.loadTemplate(component);
                // this.children.push(new Binding(component, templateFragment, componentSlot));
                // this.routerOutlet = componentSlot;
            });
        })
    }

    queryBindings(): void {
        this.templateFragment.querySelectorAll('[y-bind]').forEach((bindableElement: HTMLInputElement) => {
            let attribute = bindableElement.getAttribute('y-bind');

            console.log(this.instance[attribute]);

            let defaultValue = null;

            attribute.split('.').forEach((accessor) => {
                if (defaultValue) {
                    defaultValue = defaultValue[accessor];
                }
                else {
                    defaultValue = this.instance[accessor];
                }
            });

            bindableElement.value = defaultValue;
        });
    }

    queryExpressions(): void {
        const textWalker = document.createTreeWalker(this.templateFragment, NodeFilter.SHOW_TEXT, null, false);

        var textNode = null;

        while(textNode != textWalker.nextNode()) {
            if (textNode && textNode.nodeValue) {
                const expression = textNode.nodeValue.trim();
                const oneWayBindingExpression = expression.substring(expression.lastIndexOf("{") + 1, expression.lastIndexOf("}}"));

                let defaultValue = null;

                oneWayBindingExpression.split('.').forEach((accessor) => {
                    if (defaultValue) {
                        defaultValue = defaultValue[accessor];
                    }
                    else {
                        defaultValue = this.instance[accessor];
                    }
                });

                // Cache reference to this.
                textNode.value = textNode.value.replace(this.expressionTokenRegex, defaultValue);
            }
        }
    }

    private queryNavigationLinks() {
        let navigationLinks = this.templateFragment.querySelectorAll('[y-ref]');

        navigationLinks.forEach((navigationLink: HTMLElement) => {
            navigationLink.addEventListener('click', async () => {
                const navigationState = navigationLink.getAttribute('y-ref');
                
                let defaultRoute = EditorApplication.router.routes.find(x => x.displayUrl === '');
                this.templateFragment = await EditorApplication.router.goByUrl(navigationState);
                // this.children.push(new Binding(defaultRoute.component, this.templateFragment, this.routerOutlet, this));
            });
        })
    }
}