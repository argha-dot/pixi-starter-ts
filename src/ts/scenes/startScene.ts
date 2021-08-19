import { Application, Sprite, Texture } from "pixi.js";
import Scene from "../lib/engine/scene";
import SceneManager from "../lib/engine/sceneManager";

export default class StartScene extends Scene {

    private background: Sprite;

    constructor(app: Application, sceneManager: SceneManager) {
        super(app, sceneManager);
        this.background = new Sprite(Texture.WHITE);
        this.background.tint = 0x333333
        this.background.width = this.app.view.width;
        this.background.height = this.app.view.height;
    }

    public init(): void {
        this.addChild(this.background);
    }

    public start(): void {
        setTimeout(() => {
            this.scenes.start("game");
        }, 1000);
    }


    public update(_delta: number): void {

    }
}
