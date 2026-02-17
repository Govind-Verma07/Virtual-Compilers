export const experiments = [
    {
        id: 1,
        title: "Basic Programs and Control Statements",
        difficulty: "Easy",
        category: "Basics",
        description: "Fundamental Java syntax: variables, conditionals, loops, and arrays.",
        objective: "To understand and implement basic Java programs using simple statements, conditional statements, loops, and arrays.",
        theory: "Java provides control structures such as if-else, loops (for, while), and arrays to control program flow and store multiple values. These help solve logical problems efficiently.",
        algorithm: [
            "Start the program.",
            "Declare variables.",
            "Take input from user using Scanner class.",
            "Use conditional statements (if-else) to check parity.",
            "Use loop (for) to repeat statements and count numbers.",
            "Use array to store and display multiple values.",
            "Print result to console.",
            "Stop."
        ],
        procedure: [
            "Create a public class named Main.",
            "Inside the main method, initialize a Scanner object for input.",
            "Prompt user for an integer and use if-else to determine if it is even or odd.",
            "Implement a for loop to print numbers from 1 to 5.",
            "Declare an integer array with values {10, 20, 30, 40, 50} and iterate through it to print elements.",
            "Compile and run the program to see the outputs."
        ],
        result: "Basic Java control statements and arrays were successfully implemented.",
        conclusion: "The experiment demonstrates how Java manages execution flow through conditions and iterations, and how data structures like arrays store sequential information.",
        defaultCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Conditional Statement
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        if(num % 2 == 0)
            System.out.println("Even number");
        else
            System.out.println("Odd number");

        // Iterative Statement
        System.out.println("Numbers from 1 to 5:");
        for(int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

        // Array Example
        int arr[] = {10,20,30,40,50};
        System.out.println("Array elements:");
        for(int i=0;i<arr.length;i++) {
            System.out.println(arr[i]);
        }
    }
}`
    },
    {
        id: 2,
        title: "Object Oriented Programming Concepts",
        difficulty: "Medium",
        category: "OOP",
        description: "Heritage, Polymorphism, Abstraction, and Interfaces.",
        objective: "To understand object-oriented concepts like inheritance and interface.",
        theory: "Inheritance allows one class to inherit properties of another class (reusability). Interface allows implementation of abstraction by defining methods that must be implemented by classes.",
        algorithm: [
            "Start.",
            "Define Base Class 'Animal' with an eat method.",
            "Define Derived Class 'Dog' that extends 'Animal' with a bark method.",
            "Define Interface 'Shape' with an abstract draw method.",
            "Implement Interface in 'Circle' class.",
            "In Main, create objects and invoke methods to demonstrate inheritance and abstraction.",
            "Stop."
        ],
        procedure: [
            "Define a class Animal with a method eat().",
            "Define a class Dog using extends Animal and add a bark() method.",
            "Define an interface Shape with a method draw().",
            "Create a class Circle that implements Shape and provide the method body.",
            "In the Main class, instantiate Dog and Circle.",
            "Call the inherited and implemented methods to verify behavior."
        ],
        result: "Inheritance and interface concepts were successfully implemented.",
        conclusion: "This experiment confirms that Java supports clean code organization through hierarchical inheritance and strictly defined interfaces.",
        defaultCode: `// Inheritance Example
class Animal {
    void eat() {
        System.out.println("Animal eats food");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Interface Example
interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing circle");
    }
}

public class Main {
    public static void main(String[] args) {

        Dog d = new Dog();
        d.eat();
        d.bark();

        Circle c = new Circle();
        c.draw();
    }
}`
    },
    {
        id: 3,
        title: "Exception Handling and Event Handling",
        difficulty: "Medium",
        category: "Core Java",
        description: "Graceful error handling using try-catch blocks.",
        objective: "To understand exception handling using try-catch.",
        theory: "Exception handling helps prevent program crash during runtime errors by catching the error and providing an alternative flow or message.",
        algorithm: [
            "Start.",
            "Initialize try block.",
            "Perform risky operation (e.g., division by zero).",
            "Caught the Exception using catch block if it occurs.",
            "Execute code inside catch (print error message).",
            "Execute finally block (optional cleanup).",
            "Stop."
        ],
        procedure: [
            "Use the try keyword to enclose code that might throw an exception.",
            "Specifically, attempt to divide an integer by zero.",
            "Use the catch keyword to capture the resulting ArithmeticException.",
            "Inside catch, print a diagnostic message.",
            "Use the finally block to print a \"Program ended\" message regardless of the outcome."
        ],
        result: "Exception handling was successfully implemented.",
        conclusion: "Exception handling is vital for building robust Java applications that don't terminate unexpectedly on common input or logic errors.",
        defaultCode: `public class Main {
    public static void main(String[] args) {

        try {
            int a = 10;
            int b = 0;
            int c = a / b;
        }

        catch(Exception e) {
            System.out.println("Exception caught: Division by zero");
        }

        finally {
            System.out.println("Program ended");
        }
    }
}`
    },
    {
        id: 4,
        title: "Threads and Multithreading",
        difficulty: "Hard",
        category: "Concurrency",
        description: "Concurrent execution using Thread and Runnable.",
        objective: "To understand multithreading in Java.",
        theory: "A Thread allows concurrent execution of programs. Multithreading allows a program to run multiple tasks simultaneously to maximize CPU utilization.",
        algorithm: [
            "Start.",
            "Define Class extending 'Thread'.",
            "Override the run() method for thread logic.",
            "In Main, create an instance of the class.",
            "Call start() method to invoke thread's run().",
            "Stop."
        ],
        procedure: [
            "Create a class MyThread that extends the built-in Thread class.",
            "Inside run(), use a loop to print counter values.",
            "In the Main class, instantiate MyThread.",
            "Trigger the thread using t1.start().",
            "Observe and verify that the run logic executes independently."
        ],
        result: "Multithreading was successfully implemented.",
        conclusion: "Multithreading enables Java to handle high-performance tasks by running sub-processes in parallel.",
        defaultCode: `class MyThread extends Thread {

    public void run() {
        for(int i=1;i<=5;i++) {
            System.out.println("Thread running: " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {

        MyThread t1 = new MyThread();
        t1.start();
    }
}`
    },
    {
        id: 5,
        title: "Java Swing GUI Programs",
        difficulty: "Hard",
        category: "GUI",
        description: "Building desktop apps with Swing components.",
        objective: "To create GUI using Swing.",
        theory: "Swing is used to create graphical user interfaces. It provides a set of reusable components like buttons, text fields, and panels for window-based desktop applications.",
        algorithm: [
            "Start.",
            "Import javax.swing.",
            "Create JFrame object.",
            "Create JButton object.",
            "Configure bounds and layout for the button/frame.",
            "Add button to the frame.",
            "Set visible property of frame to true.",
            "Stop."
        ],
        procedure: [
            "Initialize a JFrame with a title string.",
            "Initialize a JButton with a label.",
            "Set the button's position and size using setBounds.",
            "Add the button to the frame content pane.",
            "Set frame size to 300x300 and layout to null.",
            "Make the frame visible."
        ],
        result: "Swing GUI program was successfully implemented.",
        conclusion: "Swing remains a powerful foundational toolkit for building platform-independent graphical interfaces in Java.",
        defaultCode: `import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        // Swing logic simulation
        System.out.println("Initializing JFrame...");
        System.out.println("Adding JButton 'Click Me'...");
        System.out.println("Setting layout to null...");
        System.out.println("Frame Visibility set to True");
    }
}`
    },
    {
        id: 6,
        title: "Java Beans and Servlets",
        difficulty: "Hard",
        category: "Web Dev",
        description: "Reusable components and server-side logic.",
        objective: "To understand JavaBeans concept.",
        theory: "JavaBeans are reusable software components that follow specific naming conventions for properties (private fields with public getters/setters).",
        algorithm: [
            "Start.",
            "Create Bean Class 'Student'.",
            "Define Private property 'id'.",
            "Define public getter/setter methods.",
            "In Main, create a Student object.",
            "Set value using setter.",
            "Get and print value using getter.",
            "Stop."
        ],
        procedure: [
            "Create a class with private member variables.",
            "Ensure there is a no-argument constructor (implicitly provided here).",
            "Implement public getter and setter methods for the private variables.",
            "In Main, use the setter to assign a value (e.g., 101).",
            "Use the getter to retrieve and print the value to the console."
        ],
        result: "JavaBeans concept was successfully implemented.",
        conclusion: "JavaBeans provide a standardized way to encapsulate data, making components easily manageable in complex enterprise systems.",
        defaultCode: `class Student {

    private int id;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}

public class Main {
    public static void main(String[] args) {

        Student s = new Student();
        s.setId(101);

        System.out.println("Student ID: " + s.getId());
    }
}`
    }
];
