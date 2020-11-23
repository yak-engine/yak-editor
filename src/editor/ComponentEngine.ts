import Binding from "./Binding";
import TemplateEngine from "./TemplateEngine";

export default class ComponentEngine {
    public static async bootstrap(component: any, domTarget: HTMLElement): Promise<Binding> {
        let templateFragment = await TemplateEngine.loadTemplate(component);
        let binding = new Binding(component, templateFragment);
        domTarget.parentElement.replaceChild(binding.templateFragment, domTarget);
        
        if (binding.instance.onContentLoaded) {
            binding.instance.onContentLoaded();
        }

        return binding;
    }

    public static processRouterOutlet(templateFragment: DocumentFragment): void {
        let routerOutlet = templateFragment.querySelector('router-outlet');
    }
}