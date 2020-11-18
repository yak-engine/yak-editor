class ComponentConfig {
    tagName: string;
    templateUrl: string;
}

function ComponentDecorator(componentConfig: ComponentConfig) {
    return function (constructor: Function) {
        constructor.prototype.tagName = componentConfig.tagName;
        constructor.prototype.templateUrl = componentConfig.templateUrl;
    }
}

export { ComponentConfig, ComponentDecorator };