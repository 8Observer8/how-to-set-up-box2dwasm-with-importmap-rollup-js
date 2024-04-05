import { box2d, initBox2D } from "./init-box2d.js";
import { mat4, glMatrix } from "gl-matrix";

async function init() {
    await initBox2D();

    const {
        b2Vec2
    } = box2d;

    const vec = new b2Vec2(1, 2);
    console.log(`vec = (x: ${vec.x}, y: ${vec.y})`);

    const mat = mat4.create();
    console.log(mat);

    console.log(glMatrix.toRadian(45));
}

init();
