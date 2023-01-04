import { commands } from 'lib/constants/constant.command';

export const content = {
  [commands['GENERATE_THESIS_TITLE']]: {
    title: 'Generate Thesis Titles',
    icon: 'fa-book',
    subtitle: 'Generate Compelling Thesis Titles with Ease!',
    templateInstructions: [
      {
        name: "I'm currios to learn more about utilizing Java to create applications that can be useful to students",
        icon: 'laptop',
      },
      {
        name: "I'm interested in studying the effects of climate change on biodiversity in tropical rainforests.",
        icon: 'leaf',
      },
      {
        name: "I'm planning to write my thesis on the relationship between parenting styles and adolescent development.",
        icon: 'child',
      },
      {
        name: 'Thesis topics in digital image processing.',
        icon: 'image',
      },
    ],
    isDisabled: false,
  },
  [commands['BASIC_QUESTION']]: {
    title: 'Answer Basic Questions',
    icon: 'fa-question-circle',
    subtitle: 'Get basic answers to your questions quickly and easily!',
    templateInstructions: [
      {
        name: 'How far away is the sun?',
        icon: 'sun',
      },
      {
        name: 'How much does the earth weigh?',
        icon: 'globe',
      },
      {
        name: 'How do I create a budget plan for my personal finances?',
        icon: 'dollar-sign',
      },
      {
        name: 'How do airplanes fly?',
        icon: 'plane',
      },
    ],
    isDisabled: false,
  },
  [commands['GENERATE_CODE']]: {
    title: 'Generate Code',
    icon: 'fa-code',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [
      {
        name: 'Create a hello world program in Assembly language',
        icon: 'microchip',
      },
      {
        name: 'Setting up automatic testing and deployment for Java code',
        icon: 'cogs',
      },
      {
        name: 'Converting C++ data structures into a more readable format',
        icon: 'project-diagram',
      },
      {
        name: 'Translating Ruby code into Python',
        icon: 'language',
      },
    ],
    isDisabled: false,
  },
  [commands['GRAMMAR_CORRECTION']]: {
    title: 'Correct Grammar',
    subtitle: 'Polish Your Writing Quickly & Easily!',
    templateInstructions: [
      {
        name: 'I done my homework',
        icon: 'pencil-alt',
      },
      {
        name: 'She done it yesterday.',
        icon: 'check-circle',
      },
      {
        name: 'We was at the store.',
        icon: 'book',
      },
      {
        name: 'He give me the book',
        icon: 'keyboard',
      },
    ],
    isDisabled: false,
  },
  [commands['PARAPHRASE']]: {
    title: 'Paraphrase Text',
    icon: 'fa-quote-right',
    subtitle: 'Reword Text Effortlessly!',
    templateInstructions: [
      {
        name: 'The cat sat on the mat.',
        icon: 'pen',
      },
      {
        name: 'I went to the store and bought some milk.',
        icon: 'edit',
      },
      {
        name: 'The weather was nice today.',
        icon: 'keyboard',
      },
      {
        name: 'I have a lot of work to do.',
        icon: 'lightbulb',
      },
    ],
    isDisabled: false,
  },
  [commands['SUMMARIZE_FOR_A_STUDENT_GRADE']]: {
    title: 'Summarize',
    icon: 'fa-book-reader',
    subtitle: 'Summarize Text Easily for Better Grades!',
    templateInstructions: [
      {
        name: 'Summarizing the main points of a chapter in a textbook',
        icon: 'book',
      },
      {
        name: 'Condensing a long research paper into a one-page summary',
        icon: 'file-alt',
      },
      {
        name: 'Summarizing the key arguments in a debate or discussion',
        icon: 'comments',
      },
      {
        name: 'Creating a summary of a news article for a class presentation',
        icon: 'newspaper',
      },
    ],
    isDisabled: true,
  },
  [commands['ENGLISH_TO_OTHER_LANGUAGE']]: {
    title: 'Translate to Other Languages',
    icon: 'fa-globe',
    subtitle: 'Accurately Translate English to Any Language!',
    templateInstructions: [
      {
        name: 'Hello',
        icon: 'comments',
      },
      {
        name: 'Goodbye',
        icon: 'comments',
      },
      {
        name: 'Are you alright?',
        icon: 'comments',
      },
      {
        name: 'How are you?',
        icon: 'comments',
      },
    ],
    isDisabled: false,
  },
  [commands['EXPLAIN_PROGRAMMING_CODE']]: {
    title: 'Explain Programming Code',
    icon: 'fa-file-code',
    subtitle: 'Understand Difficult Programming Code with Ease!',
    templateInstructions: [
      {
        name: "I'm having trouble following the logic in this Python function",
        icon: 'code',
      },
      {
        name: "I'm trying to debug this C++ program, but I don't understand the syntax of this if statement.",
        icon: 'laptop-code',
      },
      {
        name: "I'm new to programming and I'm having a hard time grasping the concepts in this Java tutorial.",
        icon: 'terminal',
      },
      {
        name: `for (let file of files) {
          const fileName = file.trim();
          if(fileName) {
            const filePath = \n'~/cool_app/project';
            filePaths.push(filePath);
          }
        }`,
        icon: 'question-circle',
      },
    ],
    isDisabled: true,
  },
  [commands['EVALUATE_A_MATHEMATICAL_EXPRESSION']]: {
    title: 'Evaluate Mathematical Expressions',
    icon: 'fa-calculator',
    subtitle: 'Evaluate Mathematical Expressions Quickly and Accurately!',
    templateInstructions: [
      {
        name: 'Evaluating a calculus integral',
        icon: 'calculator',
      },
      {
        name: 'Calculating the area of a circle',
        icon: 'square-root-alt',
      },
      {
        name: 'Determining the value of a polynomial expression',
        icon: 'pencil-ruler',
      },
      {
        name: 'Evaluating complex equations',
        icon: 'brain',
      },
    ],
    isDisabled: false,
  },
  [commands['CREATE_STUDY_NOTES']]: {
    title: 'Create Study Notes',
    icon: 'fa-book-open',
    subtitle: 'Create Comprehensive Study Notes in No Time!',
    templateInstructions: [
      {
        name: 'I have a test coming up and I need to review a lot of material. ',
        icon: 'sticky-note',
      },
      {
        name: "I'm struggling to keep track of all the information I need to remember for my exams",
        icon: 'book',
      },
      {
        name: 'Having trouble creating effective study notes for a complex course. Need help.',
        icon: 'pencil-alt',
      },
      {
        name: "I'm trying to prepare for a certification exam and I need to review a large amount of information in a short amount of time. ",
        icon: 'graduation-cap',
      },
    ],
    isDisabled: true,
  },
};
