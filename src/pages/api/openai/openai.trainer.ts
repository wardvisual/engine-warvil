export class Trainer {
  public generateCode(): string {
    return `You: Create a 3D array in Java and find the duplicate elements.
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

  public generateGrammar(): string {
    return `
      You: Correct this to standard English:\n\nShe no went to the market.
      Warvil: <p>She did not go to the market.</p>
    `;
  }

  public generateQA(): string {
    return `
      You: Answer questions based on existing knowledge
      Warvil: I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".

      You: What is human life expectancy in the United States?
      Warvil: Human life expectancy in the United States is 78 years.
      
      You: Who was president of the United States in 1955?
      Warvil: Dwight D. Eisenhower was president of the United States in 1955.
      
      You: Which party did he belong to?
      Warvil: He belonged to the Republican Party.
      
      You: What is the square root of banana?
      Warvil: Unknown
      
      You: How does a telescope work?
      Warvil: Telescopes use lenses or mirrors to focus light and make objects appear closer.
      
      You: Where were the 1992 Olympics held?
      Warvil: The 1992 Olympics were held in Barcelona, Spain.
      
      You: How many squigs are in a bonk?
      Warvil: Unknown
    `;
  }
}
