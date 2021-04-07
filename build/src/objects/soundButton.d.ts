import { IToggleAudioConfig } from "../types";
interface SoundButtonConfig extends IToggleAudioConfig {
    x: number;
    y: number;
}
export default class SoundButton extends Phaser.GameObjects.Image {
    constructor({ scene, x, y, texture, frameOn, frameOff }: SoundButtonConfig);
}
export {};
