import { commands } from '../constants/commands';

export const content = {
  [commands['BASIC_QUESTION']]: {
    title: 'Basic Question',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
  [commands['GENERATE_CODE']]: {
    title: 'Generate code',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [
      {
        name: 'Create a hello world program in Assembly language',
        icon: 'microchip',
      },
      {
        name: 'How do I make an HTTP request in Javascript?',
        icon: 'hand-paper',
      },
      {
        name: 'Create a function in Javascript utilizing regex to find XSS attacks',
        icon: 'search',
      },
      {
        name: 'How to configure CORS in Laravel',
        icon: 'robot',
      },
    ],
  },
  [commands['GENERATE_THESIS_TITLE']]: {
    title: 'Generate thesis title',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
  [commands['GRAMMAR_CORRECTION']]: {
    title: 'Grammar correction',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [
      {
        name: 'She no went to the market.',
        icon: 'microchip',
      },
      {
        name: 'How do I make an HTTP request in Javascript?',
        icon: 'hand-paper',
      },
      {
        name: 'Create a function in Javascript utilizing regex to find XSS attacks',
        icon: 'search',
      },
      {
        name: 'How to configure CORS in Laravel',
        icon: 'robot',
      },
    ],
  },
  [commands['PARAPHRASE']]: {
    title: 'Praphrase',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
  [commands['SUMMARIZE_FOR_A_STUDENT_GRADE']]: {
    title: 'Summarize for a student grade',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
  [commands['ENGLISH_TO_OTHER_LANGUAGE']]: {
    title: 'English to other langauge',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
  [commands['EXPLAIN_PROGRAMMING_CODE']]: {
    title: 'Explain programming code',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
  [commands['EVALUATE_A_MATHEMATICAL_EXPRESSION']]: {
    title: 'Evaluate a mathematical expression',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
  [commands['EVALUATE_A_MATH_EXPRESSION']]: {
    title: 'Evaluate a math expression',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
  [commands['CREATE_STUDY_NOTES']]: {
    title: 'Create study notes',
    subtitle: 'Say goodbye to tedious coding tasks',
    templateInstructions: [],
  },
};
