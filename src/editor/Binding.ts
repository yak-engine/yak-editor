import EditorApplication from "./EditorApplication";
import TemplateEngine from "./TemplateEngine";

export default class Binding {
    templateFragment: DocumentFragment;
    instance: any;

    private markup: string;

    private expressionTokenRegex: RegExp = /{{(.*?)}}/;

    constructor(component: any, template: string, root: HTMLElement) {
        this.instance = new component();

        let componentRoot = document.createElement('div');
        componentRoot.innerHTML = template;

        this.templateFragment = document.createDocumentFragment();
        this.templateFragment.appendChild(componentRoot);

        this.queryComponents();
        this.queryRouterOutlet();
        this.queryBindings();
        this.queryExpressions();

        root.parentElement.replaceChild(this.templateFragment, root);

        if (this.instance.onActivate) {
            console.log(this.templateFragment);
            this.instance.onActivate();
        }

        // EditorApplication.root.appendChild(this.templateFragment);
    }

    queryComponents(): void {
        EditorApplication.components.forEach((component) => {
            this.templateFragment.querySelectorAll(component.prototype.tagName).forEach(async (componentSlot) => {
                await TemplateEngine.loadTemplate(component, componentSlot);
            });
        })
    }

    queryRouterOutlet(): void {
               // Only process router outlet if the user has defined a router for their application.
               if (EditorApplication.router) {
                let routerOutlet = this.templateFragment.querySelectorAll('router-outlet')[0] as HTMLElement;
    
                if ('default' === this.instance.constructor.prototype.tagName) {
                    if (!routerOutlet) {
                        throw new Error('Router is not defined for this component please define a router outlet');
                    }
    
                    EditorApplication.router.rootOutletElement = routerOutlet;
                    let defaultRoute = EditorApplication.router.routes.find(x => x.displayUrl === '');
                    // this.children.push(new BindingBase(new defaultRoute.component(), routerOutlet));
                    TemplateEngine.loadTemplate(EditorApplication.defaultRouteComponent, routerOutlet);
                }
                else {
                    // if (routerOutlet) {
                    //     let bindingBaseRoute: Route = SPApplication.router.routes.find(x => x.tagName === this.proxy.tagName);
                
                    //     if (!bindingBaseRoute) {
                    //         throw new Error(`This current binding context (${this.proxy.tagName}) is not a registered route so <router-outlet> can not be used.`);
                    //     }
                    // }
                }
            }
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
}