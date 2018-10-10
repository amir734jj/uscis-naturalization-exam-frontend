export class MultipleChoiceQuestion {
    question: string;
    answer: string;
    choices: string[];
    index: number;
}

export class MultipleChoiceAnswer {
    questionRef: MultipleChoiceQuestion;
    answerVal: string;
    result: boolean;
    index: number;
}
