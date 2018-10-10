import {Injectable} from '@angular/core';
import {MultipleChoiceQuestion} from '../models/MultipleChoice';

const material: {
    question: string,
    answer: string
}[] = [{
    'question': 'What is the capital of the United States?',
    'answer': 'Washington, D.C.'
}, {
    'question': 'What is the capital of your state?',
    'answer': 'The capital of New York is Albany.'
}, {
    'question': 'What ocean is on the East Coast of the United States?',
    'answer': 'Atlantic.'
}, {
    'question': 'What ocean is on the West Coast of the United States?',
    'answer': 'Pacific.'
}, {
    'question': 'Name one state that borders Canada.',
    'answer': 'Alaska.'
}, {
    'question': 'Name one state that borders Mexico.',
    'answer': 'California.'
}, {
    'question': 'Name one U.S. territory.',
    'answer': 'Puerto Rico.'
}, {
    'question': 'Why does the flag have 50 stars?',
    'answer': 'Because there is one star for each state.'
}, {
    'question': 'Why does the flag have 13 stripes?',
    'answer': 'Because there were thirteen original colonies.'
}, {
    'question': 'Where is the Statue of Liberty?',
    'answer': 'New York.'
}, {
    'question': 'Who lived in America before the Europeans arrived?',
    'answer': 'Native Americans.'
}, {
    'question': 'Name on American Indian tribe of the United States.',
    'answer': 'Pueblo.'
}, {
    'question': 'What is one reason colonists came to America?',
    'answer': 'Freedom.'
}, {
    'question': 'There were 13 original states. Name three.',
    'answer': 'New York, New Jersey, Connecticut.'
}, {
    'question': 'Why did the colonists fight the British?',
    'answer': 'Because of high taxes (taxation without representation).'
}, {
    'question': 'When was the Declaration of Independence adopted?',
    'answer': 'July 4, 1776.'
}, {
    'question': 'What did the Declaration of Independence do?',
    'answer': 'Declared our independence from Great Britain.'
}, {
    'question': 'When do we celebrate Independence Day?',
    'answer': 'July 4.'
}, {
    'question': 'Who wrote the Declaration of Independence?',
    'answer': 'Thomas Jefferson.'
}, {
    'question': 'What are two rights in the Declaration of Independence?',
    'answer': 'Life and liberty.'
}, {
    'question': 'What is one thing Benjamin Franklin is famous for?',
    'answer': 'Oldest member of the Constitutional Convention.'
}, {
    'question': 'When was the Constitution written?',
    'answer': '1787.'
}, {
    'question': 'What happened at the Constitutional Convention?',
    'answer': 'The Founding Fathers wrote the Constitution.'
}, {
    'question': 'What does the Constitution do?',
    'answer': 'Sets up the government.'
}, {
    'question': 'What is the supreme law of the land?',
    'answer': 'The Constitution.'
}, {
    'question': 'The idea of self-government is in the first three words of the Constitution. What are these words?',
    'answer': 'We the People.'
}, {
    'question': 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
    'answer': 'James Madison.'
}, {
    'question': 'Who is the Father of Our Country?',
    'answer': 'George Washington.'
}, {
    'question': 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
    'answer': 'To print money.'
}, {
    'question': 'Under our Constitution, some powers belong to the states. What is one power of the states?',
    'answer': 'Schooling and education.'
}, {
    'question': 'Name one branch or part of the government.',
    'answer': 'Legislative, executive, or judicial.'
}, {
    'question': 'What stops one branch of government from becoming too powerful?',
    'answer': 'Separation of powers. Checks and balances.'
}, {
    'question': 'What are the two parts of the U.S. Congress?',
    'answer': 'The Senate and the House of Representatives.'
}, {
    'question': 'Who makes federal laws?',
    'answer': 'Congress.'
}, {
    'question': 'Who is in charge of the executive branch?',
    'answer': 'The President.'
}, {
    'question': 'Who signs bills to become laws?',
    'answer': 'The President.'
}, {
    'question': 'Who vetoes bills?',
    'answer': 'The President.'
}, {
    'question': 'What does the judicial branch do?',
    'answer': 'Reviews laws. Also correct: Decides if a law goes against the Constitution.'
}, {
    'question': 'What is the highest court in the United States?',
    'answer': 'The Supreme Court.'
}, {
    'question': 'How many justices are on the Supreme Court?',
    'answer': 'Nine.'
}, {
    'question': 'How many U.S. Senators are there?',
    'answer': 'One Hundred.'
}, {
    'question': 'We elect a U.S. Senator for how many years?',
    'answer': 'Six.'
}, {
    'question': 'Who does a U.S. Senator represent?',
    'answer': 'All people of the state.'
}, {
    'question': 'The House of Representatives has how many voting members?',
    'answer': 'Four hundred and thirty five.'
}, {
    'question': 'Why do some states have more Representatives than other states?',
    'answer': 'Because some states have more people.'
}, {
    'question': 'We elect a U.S. Representative for how many years?',
    'answer': 'Two.'
}, {
    'question': 'Who is the Commander in Chief of the military?',
    'answer': 'The President.'
}, {
    'question': 'We elect a President for how many years?',
    'answer': 'Four.'
}, {
    'question': 'What does the President\'s Cabinet do?',
    'answer': 'Advise the President.'
}, {
    'question': 'What are two Cabinet-level positions?',
    'answer': 'Secretary of Labor and Secretary of Education.'
}, {
    'question': 'If the President can no longer serve, who becomes President?',
    'answer': 'The Vice President.'
}, {
    'question': 'If both the President and the Vice President can no longer serve, who becomes President?',
    'answer': 'The Speaker of the House.'
}, {
    'question': 'In what month do we vote for President?',
    'answer': 'November.'
}, {
    'question': 'What are the two major political parties in the United States?',
    'answer': 'Democratic and Republican.'
}, {
    'question': 'What is the name of the President of the United States now?',
    'answer': 'Barack Obama.'
}, {
    'question': 'What is the name of the Vice President of the United States now?',
    'answer': 'Joe Biden.'
}, {
    'question': 'What is the political party of the President now?',
    'answer': 'Democratic.'
}, {
    'question': 'What is the name of the Speaker of the House of Representatives now?',
    'answer': 'The Speaker of the House is John Boehner.'
}, {
    'question': 'Who is the Governor of your state?',
    'answer': 'The Governor of New York is Andrew Cuomo.'
}, {
    'question': 'Who is the Chief Justice of the United States?',
    'answer': 'John Roberts.'
}, {
    'question': 'What do we call the first ten amendments to the Constitution?',
    'answer': 'The Bill of Rights.'
}, {
    'question': 'What is an amendment?',
    'answer': 'A change to the Constitution.'
}, {
    'question': 'How many amendments does the Constitution have?',
    'answer': 'Twenty-seven.'
}, {
    'question': 'What are two rights of everyone living in the United States?',
    'answer': 'Freedom of speech and freedom of religion.'
}, {
    'question': 'What is one right or freedom from the First Amendment?',
    'answer': 'Freedom of speech.'
}, {
    'question': 'What is freedom of religion?',
    'answer': 'You can practice any religion, or not practice a religion.'
}, {
    'question': 'What group of people was taken to America and sold as slaves?',
    'answer': 'Africans.'
}, {
    'question': 'What did Susan B. Anthony do?',
    'answer': 'Fought for women\'s rights.'
}, {
    'question': 'There are four amendments to the Constitution about who can vote. Describe one of them.',
    'answer': 'Citizens eighteen and older can vote.'
}, {
    'question': 'How old do citizens have to be to vote for President?',
    'answer': 'Eighteen and older.'
}, {
    'question': 'Name one war fought by the United States in the 1800s.',
    'answer': 'The Civil War.'
}, {
    'question': 'What territory did the United States buy from France in 1803?',
    'answer': 'The Louisiana Territory'
}, {
    'question': 'Name one of the two longest rivers in the United States.',
    'answer': 'The Mississippi.'
}, {
    'question': 'What is the name of the national anthem?',
    'answer': 'The Star-Spangled Banner.'
}, {
    'question': 'Name one problem that led to the Civil War.',
    'answer': 'Slavery.'
}, {
    'question': 'Name the U.S. war between the North and the South.',
    'answer': 'The Civil War.'
}, {
    'question': 'What was one important thing that Abraham Lincoln did?',
    'answer': 'Freed the slaves.'
}, {
    'question': 'What did the Emancipation Declaration do?',
    'answer': 'Freed the slaves.'
}, {
    'question': 'What movement tried to end racial discrimination?',
    'answer': 'Civil Rights movement.'
}, {
    'question': 'What did Martin Luther King, Jr. do?',
    'answer': 'Fought for civil rights.'
}, {
    'question': 'Name one war fought by the United States in the 1900s.',
    'answer': 'World War I.'
}, {
    'question': 'Who was President during World War I?',
    'answer': 'Woodrow Wilson.'
}, {
    'question': 'Who did the United States fight in World War II?',
    'answer': 'Japan, Germany and Italy.'
}, {
    'question': 'Who was President during the Great Depression and World War II?',
    'answer': 'Franklin Roosevelt.'
}, {
    'question': 'Before he was President, Eisenhower was a general. What war was he in?',
    'answer': 'World War II.'
}, {
    'question': 'During the Cold War, what was the main concern of the United States?',
    'answer': 'Communism.'
}, {
    'question': 'What is the economic system in the United States?',
    'answer': 'Capitalist economy.'
}, {
    'question': 'What major event happened on September 11, 2001 in the United States?',
    'answer': 'Terrorists attacked the United States.'
}, {
    'question': 'What are two ways that Americans can participate in their democracy?',
    'answer': 'Vote and run for office.'
}, {
    'question': 'What are two rights only for United States citizens?',
    'answer': 'Vote and run for office.'
}, {
    'question': 'What is one responsibility that is only for United States citizens?',
    'answer': 'Vote.'
}, {
    'question': 'What is one promise you make when you become a United States citizen?',
    'answer': 'Obey the laws of the United States.'
}, {
    'question': 'What is the rule of law?',
    'answer': 'Everyone must follow the law.'
}, {
    'question': 'When must all men register for the Selective Service?',
    'answer': 'At age 18.'
}, {
    'question': 'What is the last day you can send in federal income tax forms?',
    'answer': 'April 15.'
}, {
    'question': 'What do we show loyalty to when we say the Pledge of Allegiance?',
    'answer': 'The flag or the United States.'
}, {
    'question': 'Name two national U.S. holidays.',
    'answer': 'Christmas and New Year\'s Day.'
}, {
    'question': 'Who was the first President?',
    'answer': 'George Washington.'
}];

@Injectable()
export class MaterialUtility {

    static shuffle<T>(array: Array<T>): Array<T> {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    static randomInRange(exclude: number = -1) {
        const index = Math.floor(Math.random() * material.length);

        if (index === exclude) {
            return this.randomInRange(exclude);
        } else {
            return index;
        }
    }

    randomItemInRange(previousIndex: number = -1): { question: string; answer: string, index: number } {
      let index: number;

      if (previousIndex === -1) {
        index = Math.floor(Math.random() * material.length);
      } else {
        index = (previousIndex + 1) % material.length;
      }

      return {...material[index], index};
    }

    getRandomQuestion(choiceCount: number = 4): MultipleChoiceQuestion {
        const index = MaterialUtility.randomInRange();
        const item = material[index];

        return {
          question: item.question,
          answer: item.answer,
          choices: MaterialUtility.shuffle(
              Array.from({ length: choiceCount - 1 }, (v, i) => i)
              .map(() => MaterialUtility.randomInRange(index))
              .map(i => material[i])
              .map(m => m.answer)
              .concat([ item.answer ])
          )
        };
    }
}
