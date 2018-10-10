export class MultipleChoiceQuestion {
    question: string;
    answer: string;
    choices: string[];
}

export class MultipleChoiceAnswer {
    questionRef: MultipleChoiceQuestion;
    answerVal: string;
    result: boolean;
}
