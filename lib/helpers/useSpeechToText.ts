// import { useState, useEffect } from 'react';

// const useSpeechToText = () => {
//   const [transcript, setTranscript] = useState('');
//   const [isRecording, setIsRecording] = useState(false);

//   useEffect(() => {
//     if (isRecording) {
//       window.SpeechRecognition =
//         window.SpeechRecognition || window.webkitSpeechRecognition;
//       const recognition = new SpeechRecognition();
//       recognition.interimResults = true;
//       recognition.maxAlternatives = 10;
//       recognition.continuous = true;
//       recognition.onresult = (event) => {
//         let interimTranscript = '';
//         for (let i = event.resultIndex; i < event.results.length; i++) {
//           const transcript = event.results[i][0].transcript;
//           if (event.results[i].isFinal) {
//             setTranscript(transcript);
//           } else {
//             interimTranscript += transcript;
//           }
//         }
//         setTranscript(interimTranscript);
//       };
//       recognition.start();
//     } else {
//       const recognition = new SpeechRecognition();
//       recognition.stop();
//     }
//   }, [isRecording]);

//   const startRecording = () => {
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//   };

//   return { transcript, startRecording, stopRecording };
// };

// export default useSpeechToText;
