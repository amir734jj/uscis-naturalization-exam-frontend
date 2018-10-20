export type Question = string;
export type Answer = string;
export type LongAnswer = string[];

export class MultipleChoiceQuestion {
    question: Question;
    answer: Answer;
    choices: Answer[];
    index: number;
    longAnswer: LongAnswer;
}

export class MultipleChoiceAnswer {
    questionRef: MultipleChoiceQuestion;
    answerVal: string;
    result: boolean;
    index: number;
}
