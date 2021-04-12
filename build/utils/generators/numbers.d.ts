interface IExample {
    id: number;
    text: string;
}
declare type ExampleType = (maxNumber: number, numbersAmount: number) => IExample[];
export declare const exampleGenerator: ExampleType;
export {};
