import { shuffle } from "../shuffle";
import { numbersArrayGenerator } from "./numbersArrayGenerator";

interface IExample {
  serialNumber: number;
  text: string;
}

type ExampleType = (maxNumber: number, numbersAmount: number) => Array<IExample>;

const generateAddition = (value: number) => {
  let string = `${value}`;
  if (string.length <= 2) {
    const tmpNumber1 = string.length === 1 ? Phaser.Math.Between(1, value - 1) : Phaser.Math.Between(1, 9);
    const tmpNumber2 = value - tmpNumber1
    string = `${tmpNumber2} + ${tmpNumber1}`
  }
  return string
}

const generateSubtraction = (value: number) => {
  let string = `${value}`;
  if (string.length <= 2) {
    const tmpNumber1 = Phaser.Math.Between(value + 1, value + 9);
    const tmpNumber2 = tmpNumber1 - value
    string = `${tmpNumber1} - ${tmpNumber2}`
  }
  return string
}

const generateText = (value: number) => {
  return Math.random() - Math.random() > 0 && value < 90 || value === 1 ? generateSubtraction(value) : generateAddition(value)
}

const checkTwoDigitalElements = (array: Array<number>, numbersAmount: number) => {
  let count = 0;
  for (let i = 0; i < numbersAmount; i += 1) {
    if (`${array[i]}`.length <= 2) {
      count += 1;
    }
  }
  return count;
}

export const exampleGenerator: ExampleType = (maxNumber, numbersAmount) => {
  const randArray = shuffle(numbersArrayGenerator(maxNumber));
  const count = checkTwoDigitalElements(randArray, numbersAmount);
  const indexForExample = Phaser.Math.Between(0, count - 1);
  let tmpArray = Array.from(
    {length: numbersAmount},
    (item, index) => {
      return randArray[index]
    }
  ).sort((a, b) => {
    return a - b
  })

  return Array.from(
    {length: numbersAmount},
    (item, index) => {
      let string = `${tmpArray[index]}`;
      if (index === indexForExample) {
        string = generateText(tmpArray[index]);
      }
      return {
        serialNumber: index,
        text: string
      }
    }
  );
};
