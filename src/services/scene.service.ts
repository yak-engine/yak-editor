import Scene from '../../../yak-engine/src/graphics/scene';
import BaseService from "./base.service";

export default class SceneService extends BaseService<Scene> {
    get api(): string {
        return `${this.baseUrl}/scene`;
    }

    // add

    // update

    // delete

    // get
    async getScene(sceneName: string): Promise<Scene> {
        return this.get(`${this.api}/get/${sceneName}`);
    }

    // list
}