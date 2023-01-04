export class Trainer {
  public generateQA(): string {
    return `You: Answer questions based on existing knowledge
      Warvil: <p>I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".</p>

      You: What is human life expectancy in the United States?
      Warvil: <p>Human life expectancy in the United States is 78 years.</p>
      
      You: Who was president of the United States in 1955?
      Warvil: <p>Dwight D. Eisenhower was president of the United States in 1955.</p>
      
      You: Which party did he belong to?
      Warvil: <p>He belonged to the Republican Party.</p>
      
      You: What is the square root of banana?
      Warvil: <p>Unknown</p>
      
      You: How does a telescope work?
      Warvil: <p>Telescopes use lenses or mirrors to focus light and make objects appear closer.</p>
      
      You: Where were the 1992 Olympics held?
      Warvil: <p>The 1992 Olympics were held in Barcelona, Spain.</p>
      
      You: How many squigs are in a bonk?
      Warvil: <p>Unknown</p>

      You: How much does the earth weigh?
      Warvil: <p>The Earth weighs approximately 5.972 × 10^24 kg.</p>
    `;
  }

  public generateCode(): string {
    return `You: Code a program based on this: Create a 3D array in Java and find the duplicate elements.
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

  // public generateThesisTitle(): string {
  //   return `You: Give me a 5 unique thesis title based on concept: \n\n I want to investigate the ways in which social support can influence mental health outcomes.
  //     Warvil: <p>1. The Role of Social Support in Promoting Positive Mental Health Outcomes: An Exploration of Protective Factors</p>
  //             <p>2. Investigating the Interplay between Social Support and Mental Health: A Qualitative Analysis</p>
  //             <p>3. Social Support and Mental Health: A Quantitative Study of the Association between Network Characteristics and Outcomes</p>
  //             <p>4. The Impact of Social Support on Mental Health Outcomes among Marginalized Populations: A Mixed Methods Approach</p>
  //             <p>5. Mapping the Terrain of Social Support and Mental Health: A Systematic Review and Meta-Analysis</p>

  //   `;
  // }

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
    return `You: Correct this to standard English "She no went to the market". 
    Warvil: <p>She did not go to the market.</p> `;
  }

  public paraphrase(): string {
    return `You: Paraphrase this:\n\nExploring the Role of Markets in Social Change
      Warvil: <p>Exploring the Role of Markets in Social Change</p>
    `;
  }

  public summarize(): string {
    return `You: Translates difficult text into simpler concepts: Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus."
      Warvil: <p>Jupiter is the fifth planet from the Sun and is very big and bright. It can be seen with our eyes in the night sky and it has been known since ancient times. Its name comes from the Roman god Jupiter. It is usually the third brightest object in the night sky after the Moon and Venus.</p>
    `;
  }

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
    You: console.log(true)
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
    return `You: Evaluate this math expression: (4 + 2) * (7 - 3) = 18
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
    return `You: Create study notes based on this concept: "I have a test coming up and I need to review a lot of material. Can you help me organize my notes in a way that will be most effective for studying?"
      Warvil: <p>Sure, here are some tips for creating study notes that will be effective for studying:</p>
      <p>1. Start by gathering all of your materials, including any textbooks, notes, and handouts.</p>
      <p>2. Read through the material and take notes on the most important information. It can be helpful to use headings and subheadings to organize your notes and highlight the main ideas.</p>
      <p>3. Use abbreviations and symbols to save space and make your notes easier to read.</p>
      <p>4. Use different colors and formatting, such as bold or italic, to highlight key concepts and make them easier to find later.</p>
      <p>5. Create summaries or concept maps to visually organize the information and help you understand the relationships between different concepts.</p>
      <p>6. Review your notes regularly, starting a few days before the test. This will help you retain the information and identify any areas where you need to spend more time studying.</p>
      <p>7. Practice recalling the information from memory. This can help you better understand the material and improve your retention.</p>
      
      <p>By following these tips, you should be able to create study notes that will be effective for reviewing and retaining the material you need to know for your test.</p>
    `;
  }
}
