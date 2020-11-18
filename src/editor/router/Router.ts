import TemplateEngine from "../TemplateEngine";
import Route from "./Route";

export default class Router {
    public routes: Array<Route>;

    public currentRoute: Route;

    public rootOutletElement: HTMLElement;

    constructor(routes: Array<Route>) {
        if (routes && routes.length > 0) {
            this.routes = routes;

            window.onpopstate = (event) => {
                console.log("location: " + document.location.pathname + ", state: " + JSON.stringify(event.state));

                let path = document.location.pathname;

                if (path === '/') {
                    path = ''
                }

                // go by url.
            }
        }
    }

    goByName = (name: string, params?: any) => {
        this.initializeRoutingChange('name', name, params);
    }

    goByUrl = (url: string, params?: any) => {
        this.initializeRoutingChange('displayUrl', url, params)
    }

    initializeRoutingChange(property: string, value: any, params: string) {
        // If we find the route here we have a top level route and need to change the application root html.
        let route = this.routes.find((x: any) => x[property] === value);

        if (route) {
            TemplateEngine.loadTemplate(route.component, null);
            this.finalizeRoutingChange(route, null);
        }
    }

    finalizeRoutingChange(route: Route, params: any) {
        if (params) {
            for (let property in params) {
                route.displayUrl = route.displayUrl.replace(`:${property}`, params[property]);
            }
        }

        this.currentRoute = route;

        // Title is currently ignored by Firefox. Need to figure out how we want to set title.
        history.pushState({}, '', route.displayUrl);
    }
}