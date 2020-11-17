import EditorRenderer from "./editor-renderer";

export default class Startup {
    editorRenderer: EditorRenderer = new EditorRenderer();

    /**
     * Actually begins the game instance. Processes the configuration.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    start(): void {
        window.requestAnimationFrame((time: number) => this.mainLoop(time));

        // fetch('./bundle/scaffold.json').then((response) => response.json()).then(async (scaffold: Scaffold) => {
        //     this.graphics.scene = await SceneManager.load(scaffold.scenes[0]);

        //     let loadedTilesets = 0;
            
        //     this.graphics.scene.tilesets.forEach((tilesetPath: string) => {
        //        let image = new Image();

        //        image.onload = () => {
        //            this.graphics.tilesets.push(new Tileset(image));
                   
        //            loadedTilesets++;

        //             if (loadedTilesets === this.graphics.scene.tilesets.length) {
        //                 window.requestAnimationFrame((time: number) => this.mainLoop(time));
        //             }
        //        }

        //        image.onerror = () => {
        //            Logger.data('failed to load tileset');
        //        }
               
        //        image.src = tilesetPath;
        //     });
        // })
    }

    /**
     * The main loop contains all the rendering logic will be called from within this function.
     * 
     * @param time The time between the animation frames.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    mainLoop(time: number) {
        window.requestAnimationFrame((time: number) => this.mainLoop(time));

        // Time.calculateDeltaTime(time);
        
        this.editorRenderer.run();

        // this.graphics.draw(time);
        // this.graphics.render();
    }
}

let startup = new Startup();
startup.start();