export class Trainer {
  public train(): string {
    return `You: I want you to act as prompt generator. Firstly, I will give you a little like this: "Act as an English Pronunciation Helper." Then you give me a prompt like this: "I want you to act as an English pronunciation assistant for Turkish speaking people. I will write your sentences, and you will only answer their pronunciations, and nothing else. The replies must not be translations of my sentences but only pronunciations. Pronunciations should use Turkish Latin letters for phonetics. Do not write an explanation on replies. My first sentence is "How is the weather in Istanbul?"."(You should adapt the sample prompt according to the title I gave. The prompt should be self-explanatory and appropriate to the title, don't refer to the example I gave you.). My first title is "act as Code Review Helper" (Give me prompt only)
    Warvil:`;
  }

  public generateQA(): string {
    return `You: I want you to act as a question and answer assistant for any academic subjects. You will provide detailed and accurate answers to any questions asked by the students. Your answers should contain sufficient information and should be organized logically. You should provide references to back up your answers whenever applicable. You must not copy any content verbatim and should focus on helping the students understand the subject matter. Your answers should be concise and clear. My first question is What are the benefits of using algorithms?
    Warvil: <p>There are several benefits of using algorithms in programming, including:</p>
    <ul>
      <li><p>1. Efficiency: Algorithms can often solve problems much more quickly and efficiently than humans can, particularly when the problems are large or complex. This can be especially useful in programming, where the speed and accuracy of algorithms can have significant practical implications.      </p></li>
      <li><p>2. Accuracy: Algorithms are often more accurate and consistent than humans, as they do not suffer from the same kinds of biases or errors that humans do. This can be especially important in programming, where even small errors can have serious consequences.      </p></li>
      <li><p>3. Reusability: Algorithms can be written once and then reused in multiple programs, saving time and effort for programmers. This can be especially useful in cases where the same problem or task needs to be solved repeatedly.      </p></li>
      <li><p>4. Debugging: Algorithms can often be easier to debug than human-written code, as they are more structured and follow a set of predetermined rules. This can save time and effort for programmers, and can help to improve the overall quality and reliability of programs.      </p></li>
      <li><p>5. Automation: Algorithms can be used to automate many tasks in programming, freeing up programmers to focus on other, more complex or creative tasks. This can help to improve productivity and efficiency, and can allow programmers to use their skills more effectively.      </p></li>
    </ul>
    `;
  }

  public generateCode(): string {
    return `You: I want you to act as a code generator. You will be given an input, including certain programming language, data structure, or other instructions, and you will generate a piece of code based on these inputs. Your generated code should be up to standard for the language being used and should be free of errors or typos. Your code should meet the requirements specified in the input, and should be optimized for readability or efficiency. You should also include comments or explanations in the generated code to make it easier for readers to understand.
      Create a 3D array in Java and find the duplicate elements.
      Warvil: <p>To create a 3D array in Java, you can use the following syntax:</p> <pre> <code> int[][][] array = new int[x][y][z];</code></pre>
        <p>\nThis will create a 3D array with dimensions x, y, and z, where x is the number of layers, y is the number of rows in each layer, and z is the number of columns in each row.</p><p>To find the duplicate elements in a 3D array, you can use a nested loop structure to iterate over the elements of the array and store the values in a separate data structure, such as a HashSet. The HashSet class does not allow duplicate elements, so if you try to add a value that is already present in the set, it will return false. You can use this property to identify duplicate elements in the array.</p><p>Here is an example of how you might implement this in Java:</p>
        <pre>
          <code>
            import java.util.HashSet;

            public class Main {
              public static void main(String[] args) {
                // Create a 3D array with dimensions 2 x 3 x 4
                int[][][] array = new int[2][3][4];
            
                // Initialize the array with some values
                for (int i = 0; i < array.length; i++) {
                  for (int j = 0; j < array[i].length; j++) {
                    for (int k = 0; k < array[i][j].length; k++) {
                      array[i][j][k] = (i + 1) * (j + 1) * (k + 1);
                    }
                  }
                }
            
                // Find the duplicate elements in the array
                HashSet<Integer> set = new HashSet<>();
                for (int[][] layer : array) {
                  for (int[] row : layer) {
                    for (int element : row) {
                      if (!set.add(element)) {
                        System.out.println("Duplicate element found: " + element);
                      }
                    }
                  }
                }
              }
            }
          </code>
        </pre>

        <p>\nThis example creates a 3D array with dimensions 2 x 3 x 4 and initializes it with some values. It then iterates over the elements of the array and uses a HashSet to identify any duplicate elements. If a duplicate element is found, it is printed to the console.</p>
        <p>\nI hope this helps! Let me know if you have any questions.</p>

        You: Who developed you?
        Warvil: <p>As a language model, I was developed by <a href="https://www.wardvisual.me" target="_blank">Edward Fernandez</a>, a software engineer who is also known by his online pseudonym, <a href="https://www.wardvisual.me" target="_blank">wardvisual</a>. My primary function is to assist users by generating human-like text based on the prompts provided to me."</p>

        You: Create a function in Javascript utilizing regex to find XSS attacks.
        Warvil: <p>Here is an example of a function in JavaScript that utilizes regular expressions (regex) to detect potential Cross-Site Scripting (XSS) attacks:</p>
          <pre>
            <code>
              function detectXSS(input) {
                const regex = /&lt;script&gt;|&lt;\/script&gt;|javascript:/gi;
                return regex.test(input);
              }
            </code>
          </pre>
          <p>
          This function takes a string as an input and uses a regex pattern to search for the presence of \`&lt;script&gt;\`, \`&lt;/script&gt;\`, or \`javascript:\` in the input. The \`gi\` flags indicate that the search should be case-insensitive (\`i\`) and should search the entire string (\`g\`).
          
          The function returns \`true\` if any of the regex pattern matches are found in the input, and \`false\` if no matches are found.
          
          You can test this function by calling it with different strings as arguments:
          </p>
          <pre>
              <code>
                console.log(detectXSS("Hello, world!")); // false
                console.log(detectXSS("&lt;script&gt;alert('XSS')&lt;/script&gt;")); // true
                console.log(detectXSS("&lt;img src='javascript:alert('XSS')' /&gt;")); // true
                </code>
          </pre>
          <p>
        Keep in mind that this is just a simple example and may not be sufficient for detecting all possible XSS attacks. It is important to use a comprehensive and well-tested approach for detecting and mitigating XSS vulnerabilities in your application.</p>
    `;
  }

  public generateThesisTitle(): string {
    return `You:I want you to act as a thesis unique title generator for a research paper on the topic of "Oops, put my topic here. The last sentence of this paragraph would be my thesis topic you should generate". Please generate a list of potential titles for the thesis that are original, creative, and eye-catching. The titles should accurately reflect the content and focus of the research, and should be no more than a few words long. Consider using unique phrases and language to make the titles stand out. When generating the titles, please keep in mind the audience for the research and the overall goals and objectives of the paper.
    I'm interested in studying the effects of climate change on biodiversity in tropical rainforests.
    Warvil: <p>1. Uncovering How Climate Change Affects Biodiversity in Tropical Rainforests</p>
            <p>2. Examining the Impact of Climate Change on Biodiversity in Tropical Rainforests</p>
            <p>3. Assessing Climate Change’s Influence on Biodiversity in Tropical Rainforests</p>
            <p>4. Investigating the Link between Climate Change and Biodiversity in Tropical Rainforests</p>
            <p>5. Analyzing Climate Change’s Effects on Biodiversity in Tropical Rainforests</p>
            <p>6. Understanding the Relationship Between Climate Change and Biodiversity in Tropical Rainforests</p>
            <p>7. Revealing the Impact of Climate Change on Biodiversity in Tropical Rainforests</p>
            <p>8. Exploring the Consequences of Climate Change on Biodiversity in Tropical Rainforests</p>
            <p>9. Determining the Impact of Climate Change on Biodiversity in Tropical Rainforests </p>
            <p>10. Measuring the Effects of Climate Change on Biodiversity in Tropical Rainforests</p>
    `;
  }

  public correctGrammar(): string {
    return `You: I want you to act as a grammar corrector. You will receive a piece of text and you must detect any errors in the text and provide corrections. You should use the rules of Standard English and explain the corrections made. Do not write an explanation on replies. My first sentence is "I have been living here for five yeads.”. 
    Warvil: <p>✔ "I have been living here for five years."</p> 

    <p>I made the following correction:</p>

    <p>▶ Changed "yeads" to "years" to correct the spelling</p>
    `;
  }

  public paraphrase(): string {
    return `You: I want you to act as a text paraphraser for students. I will write sentences or short paragraphs, and you will rewrite them in a way that maintains the original meaning but uses different words and phrasing. Do not provide explanations for your responses. My first sentence is: "The sun was shining brightly in the sky."
      Warvil: <p>✔ "The sun was shining brightly in the sky."</p> 
        <p>Here are a few revised versions of this sentence: </p>
        <ul>
          <li><p>1. "The sun was beaming brightly in the sky."</p></li>
          <li><p>2. "The sun was radiant in the sky."</p></li>
          <li> <p>3. "The sun was shining brightly in the clear blue sky."</p></li>
        </ul>
    `;
  }

  public summarize(): string {
    return `You: I want you to act as a text summarizer for English documents. You will read the original English documents and summarize the main points in concise and clear sentences. The summaries should only include important information, and all unnecessary details should be omitted. The summary should be as brief and precise as possible without omitting any essential information.
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus."
      Warvil: <p>Jupiter is the fifth planet from the Sun and is very big and bright. It can be seen with our eyes in the night sky and it has been known since ancient times. Its name comes from the Roman god Jupiter. It is usually the third brightest object in the night sky after the Moon and Venus.</p>
    `;
  }

  // Updated:
  // I want you to act as a language translator, capable of translating text based on provided input. You will be provided with original documents in English, and you will translate them into another language as instructed. Your translations should be accurate and should preserve the original meaning as much as possible. You should also pay special attention to grammar, syntax, and correct spelling in the resulting translations.
  public englishToOther(): string {
    return `You: Translates English text. Translate this into all different languages: "Hello".
      Warvil: Arabic: مرحبا
      Chinese (Simplified): 你好
      Chinese (Traditional): 你好
      Dutch: Hallo
      French: Bonjour
      German: Hallo
      Italian: Ciao
      Japanese: こんにちは
      Korean: 여보세요
      Portuguese: Olá
      Russian: Привет
      Spanish: Hola
      Swedish: Hej
      Tamil: ஹலோ
      Telugu: హలో
      Thai: สวัสดี
      Turkish: Merhaba
      Vietnamese: Xin chào
    `;
  }

  public explainProgrammingCode(): string {
    return `
    You: I want you to act as an explainer for programming code based on input. You will be given a programming code, and you will explain the purpose of that code and how it works step-by-step. Your explanations should be clear and concise, suitable for people of all levels of technical understanding. You should also be able to answer any questions related to the code that might arise during your explanation. 
    "console.log(true)"
    Warvil: <p>The code console.log(true) is a very simple piece of code. It is used to log the boolean value true to the JavaScript console. This is typically used for debugging purposes, as it allows you to quickly and easily see what values are being returned from certain functions or operations.
    Essentially, this code takes the boolean value true and passes it to the console.log() function. This function then prints out the value, allowing you to view it in the console window of your browser or JavaScript runtime environment.</p>
    
    You: Explain a complicated piece of code\nclass Log:
        def __init__(self, path):
            dirname = os.path.dirname(path)
            os.makedirs(dirname, exist_ok=True)
            f = open(path, "a+")

            # Check that the file is newline-terminated
            size = os.path.getsize(path)
            if size > 0:
                f.seek(size - 1)
                end = f.read(1)
                if end != "\n":
                    f.write("\n")
            self.f = f
            self.path = path

        def log(self, event):
            event["_event_id"] = str(uuid.uuid4())
            json.dump(event, self.f)
            self.f.write("\n")

        def state(self):
            state = {"complete": set(), "last": None}
            for line in open(self.path):
                event = json.loads(line)
                if event["type"] == "submit" and event["success"]:
                    state["complete"].add(event["id"])
                    state["last"] = event
            return state\n
      
      Warvil: <p>Here's what the above class is doing:</p> 
        <p>1. The \`constructor\` creates a directory for the log file if it doesn't exist.</p>
        <p>2. The \`log()\` method writes a JSON-encoded event to the log file.</p>
        <p>3. The \`state()\` method returns a dictionary with the set of complete tasks and the most recent event.</p>
      
    `;
  }

  public evaluateMathematicalExpression() {
    return `You: I want you to act as an evaluator for mathematical expressions. You will be given a mathematical expression, and you will evaluate it, giving the resulting numerical value. Your calculations should be accurate and precise, and you should be able to explain the steps that you have taken in order to arrive at your answer.
    Evaluate this math expression: (4 + 2) * (7 - 3) = 18
      Warvil: To evaluate the math expression (4 + 2) * (7 - 3) = 18, we need to follow the order of operations as specified by the parentheses.

      First, we start by evaluating the expressions within the parentheses:
      
      (4 + 2) = 6
      (7 - 3) = 4
      
      Then, we multiply the results of those two expressions together:
      
      6 * 4 = 24
      
      So, the final result of the expression (4 + 2) * (7 - 3) is 24, not 18 as stated.
      
      It's important to carefully check and double-check math expressions to ensure that they are correct, as even small errors can lead to incorrect results.
    `;
  }

  public createStudyNotes() {
    return `You: I want you to act as a study notes maker for a specific subject. You will read the material, summarize it, and present it in a concise and organized way. The notes should contain relevant concepts, definitions, examples, and diagrams as applicable. You must not copy any content verbatim and should take into account the level of understanding of the students. Your notes should be clear and easy to follow. My first subject is Algorithms.
      Here's my first Subject Math with algorithm
      Warvil: <p>Here are a few suggestions for how to create effective study notes on this topic:</p>

      <ul>
        <li><p>1. Understand the material: Before you begin creating your notes, it is important to make sure you understand the material you are studying. This may involve reading the relevant chapters in a textbook, watching online lectures or video tutorials, or working through practice problems.</p></li>
        <li><p>2. Identify key concepts: As you study, look for the main ideas and concepts that are being covered. These are the topics that you will want to include in your notes.</p></li>
        <li><p>3. Define key terms: Algorithms often involve specialized vocabulary and terminology. Make sure to include clear definitions of any important terms in your notes.</p></li>
        <li><p>4. Include examples and diagrams: To help illustrate and clarify the concepts you are studying, include examples and diagrams in your notes. These can be particularly helpful when learning about algorithms, which often involve visual representations of data and processes.        </p></li>
        <li><p>5. Use a clear and organized format: To make your notes easy to follow and study from, use a clear and organized format. This might involve using headings, bullet points, or tables to organize your information.        </p></li>
      </ul>
    `;
  }
}
