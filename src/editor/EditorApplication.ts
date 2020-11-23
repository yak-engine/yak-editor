import Binding from "./Binding";
import ComponentEngine from "./ComponentEngine";
import DefaultComponent from "./components/default.component";
import MainMenuComponent from "./components/main-menu/main-menu.component";
import MapEditorComponent from "./components/map-editor/map-editor.component";
import NewSceneComponent from "./components/new-scene/new-scene.component";
// import OptionsComponent from "./components/options/options.component";
import VersionComponent from "./components/options/version/version.component";
import SceneHierarchyComponent from "./components/scene-hierarchy/scene-hierarchy.component";
import Route from "./router/Route";
import Router from "./router/Router";

export default class EditorApplication {
    public static root: HTMLElement;

    public static components: Array<any> = [
        DefaultComponent,
        MainMenuComponent,
        MapEditorComponent,
        // OptionsComponent,
        SceneHierarchyComponent,
        NewSceneComponent
    ];

    public static defaultRouteComponent: any = MapEditorComponent;

    public static defaultBinding: Binding;

    public static router: Router;

    constructor() {
        try {
            let routes: Array<Route> = [
                {
                    displayUrl: '',
                    component: MapEditorComponent
                }
                // {
                //     displayUrl: '/options',
                //     component: OptionsComponent,
                //     children: [
                //         {
                //             displayUrl: '',
                //             component: VersionComponent
                //         }
                //     ]
                // }
            ];

            EditorApplication.router = new Router(routes);

            EditorApplication.root = document.querySelector('#app-root');

            ComponentEngine.bootstrap(DefaultComponent, EditorApplication.root).then((binding: Binding) => {
                EditorApplication.defaultBinding = binding;
            });
        }
        catch(ex) {
            let errorNode = document.createElement('div');

            errorNode.style.zIndex = '9999';

            errorNode.innerHTML = 
            `
                <div style="color: white;">
                    <h1 style="color: #DA4B3E;">Compile Error</h1>
                    <div>
                        <span style="font-size: 1.50rem; color: #DA4B3E;">${ex}</span><br><br>
                        <span style="font-size: 1.25rem; color: #FFCD42;">${ex.stack}</span>
                    </div>
                </div>
            `;

            console.log(ex);

            errorNode.style.backgroundColor = '#282828';
            errorNode.style.color = '#DA4B3E';
            errorNode.style.position = 'absolute';
            errorNode.style.top = '0';
            errorNode.style.bottom = '0';
            errorNode.style.left = '0';
            errorNode.style.right = '0';
            errorNode.style.padding = '50px';

            document.body.appendChild(errorNode);
        }
    }
}