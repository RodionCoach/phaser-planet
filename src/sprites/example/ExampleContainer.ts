export default class ExampleContainer extends Phaser.GameObjects.Container {
  sprite: Phaser.GameObjects.Sprite;
  textObject: Phaser.GameObjects.Text;
  answer: number;
  planetTextureNumber: number;
  serialNumber: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    scene.add.existing(this);

    this.planetTextureNumber = 1;
    this.serialNumber = 0;
    this.sprite = scene.add.sprite(0, 0, "", "");
    this.add(this.sprite);
    this.textObject = scene.add.text(0, 0, "", {}).disableInteractive();
    this.add(this.textObject);
  }

  SetStatus(status: boolean, answer: number) {
    if (status) {
      this.answer = answer;
    }
  }
}
