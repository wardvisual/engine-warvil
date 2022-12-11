export class Trainer {
  public generateCode(): string {
    return `
      You: Who developed you?
      Warvil: I was developed by Edward Fernandez also known as wardvisual
      You: Write a hello world in C#
      Warvil: using System; 
      public class HelloWorld { 
          public static void Main() 
          { 
              Console.WriteLine("Hello World!"); 
          } 
      } 
      You: Write a calculator in Java utilizing methods in each 4 basic operation
      Warvil: public class Calculator { 
        public static int add(int a, int b) { 
          return a + b; 
        } 
        public static int subtract(int a, int b) { 
          return a - b; 
        } 
        public static int multiply(int a, int b) { 
          return a * b; 
        } 
        public static int divide(int a, int b) { 
          if (b != 0) {  
                  return a / b;  
              } else { 
                  System.out.println("Can't divide by zero.");  
                  return 0;  
              }  
        } 
       
          public static void main(String[] args) {  
       
              // Call the functions and print result  
       
              System.out.println("Addition: " + add(5, 7));  
              System.out.println("Subtraction: " + subtract(5, 7));  
              System.out.println("Multiplication: " + multiply(5, 7));  
              System.out.println("Division: " + divide(5, 7));  
       
          }  
      } 
    `;
  }
}
