import { Application, utils } from "pixi.js";
import { gameConfig } from "../data/config.json";

import SceneManager from "./lib/engine/sceneManager";
import StartScene from "./scenes/startScene";

import sprites from "../assets/sprites.png";
import GameScene from "./scenes/gameScene";

let type = "WebGL";
if (!utils.isWebGLSupported()) {
    type = "canvas";
}

utils.sayHello(`${type}`);

let app = new Application(gameConfig);

app.loader
    .add("sprites", sprites)
    .load(setup);


function setup() {
    const scenes = new SceneManager(app);
    scenes.add("start", new StartScene(app, scenes));
    scenes.add("game", new GameScene(app, scenes));

    scenes.start("start");
}

export default app;