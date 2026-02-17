export const pythonExperiments = [
    {
        id: 1,
        title: "Simple Statements, Operators and Expressions",
        difficulty: "Easy",
        description: "Learn basic Python syntax using simple statements, variables, operators, and expressions.",
        objective: "The aim of this experiment is to understand and implement basic Python programs using simple statements, variables, operators, and expressions. This experiment helps students learn how Python executes instructions and performs calculations using different types of operators such as arithmetic, relational, and logical operators. Students will also learn how to declare variables, assign values, and display output using Python statements.",
        theory: "Python is a high-level, easy-to-learn programming language used for software development, data science, web development, and automation.\n\nA simple statement in Python is an instruction that the interpreter executes. Examples include variable assignment, arithmetic operations, and print statements.\n\nVariables are used to store data values. For example:\nx = 10\n\nOperators are used to perform operations on variables and values.\n\nTypes of operators in Python include:\n\nArithmetic operators:\n+ Addition\n- Subtraction\n* Multiplication\n/ Division\n% Modulus\n\nRelational operators:\n== Equal to\n!= Not equal to\n> Greater than\n< Less than\n\nLogical operators:\nand\nor\nnot\n\nExpressions are combinations of variables, operators, and values that produce a result.\n\nExample:\nc = a + b\n\nPython executes statements line by line and produces output accordingly.\n\nUnderstanding simple statements, operators, and expressions is the foundation of Python programming and is essential for writing advanced programs.",
        algorithm: [
            "Step 1: Start the program.",
            "Step 2: Declare variables and assign values.",
            "Step 3: Use arithmetic operators to perform calculations.",
            "Step 4: Store results in variables.",
            "Step 5: Use print statement to display output.",
            "Step 6: Execute the program.",
            "Step 7: Stop the program."
        ],
        procedure: [
            "Step 1: Open the Virtual Programming Lab.",
            "Step 2: Select Python Programming Lab.",
            "Step 3: Select Experiment 1: Simple Statements, Operators and Expressions.",
            "Step 4: Read the Aim and Theory of the experiment.",
            "Step 5: Observe the algorithm carefully.",
            "Step 6: Load the default Python code in the editor.",
            "Step 7: Click the Run button to execute the program.",
            "Step 8: Observe the output in the Console Output panel.",
            "Step 9: Verify the results.",
            "Step 10: Modify values and run again to understand better."
        ],
        defaultCode: `# Python program to demonstrate simple statements, operators, and expressions\n\n# Declare variables\na = 10\nb = 5\n\n# Arithmetic operations\nsum = a + b\ndifference = a - b\nproduct = a * b\ndivision = a / b\n\n# Display results\nprint("Value of a =", a)\nprint("Value of b =", b)\n\nprint("Addition =", sum)\nprint("Subtraction =", difference)\nprint("Multiplication =", product)\nprint("Division =", division)`,
        result: "The program was successfully executed, and the results of arithmetic operations using simple Python statements, variables, and operators were displayed correctly in the output console.",
        conclusion: "From this experiment, we learned how to write basic Python programs using simple statements, variables, operators, and expressions. We understood how Python performs arithmetic operations and displays output. This experiment provides the foundation for writing more advanced Python programs.",
        language: "python",
        language_id: 71
    },
    {
        id: 2,
        title: "Writing codes using conditional statements",
        difficulty: "Easy",
        description: "Learn how to use conditional statements like if, if-else, and nested if to control program flow in Python.",
        objective: "The aim of this experiment is to understand and implement conditional statements in Python. Conditional statements allow the program to make decisions based on certain conditions. Students will learn how to use if, if-else, and nested if statements to control the flow of execution and solve logical problems such as checking even or odd numbers, finding greatest numbers, and decision-based execution.",
        theory: "Conditional statements are used to perform different actions based on different conditions.\n\nIn Python, conditional statements are implemented using:\n\nif statement  \nif-else statement  \nif-elif-else statement  \nnested if statement  \n\nThe if statement executes a block of code only if the condition is true.\n\nExample:\n\nif x > 0:\n    print(\"Positive number\")\n\nThe if-else statement executes one block if the condition is true and another block if it is false.\n\nExample:\n\nif x % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")\n\nThe if-elif-else statement is used when there are multiple conditions.\n\nExample:\n\nif x > 0:\n    print(\"Positive\")\nelif x < 0:\n    print(\"Negative\")\nelse:\n    print(\"Zero\")\n\nNested if means using an if statement inside another if statement.\n\nConditional statements help implement decision-making in programs and are essential for logical problem solving.",
        algorithm: [
            "Step 1: Start the program.",
            "Step 2: Declare variables or take input.",
            "Step 3: Apply conditional statement (if condition).",
            "Step 4: Check whether the condition is true or false.",
            "Step 5: Execute appropriate block of code.",
            "Step 6: Display the result.",
            "Step 7: Stop the program."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Programming Lab.",
            "Step 3: Select Experiment 2: Conditional Statements.",
            "Step 4: Read the Aim and Theory carefully.",
            "Step 5: Study the algorithm.",
            "Step 6: Observe the default Python code.",
            "Step 7: Click Run button.",
            "Step 8: Observe output in output console.",
            "Step 9: Modify input values and run again.",
            "Step 10: Verify the results."
        ],
        defaultCode: `# Python program to demonstrate conditional statements\n\n# Take input\nnum = int(input(\"Enter a number: \"))\n\n# Check even or odd\nif num % 2 == 0:\n    print(\"The number is Even\")\nelse:\n    print(\"The number is Odd\")\n\n# Check positive, negative, or zero\nif num > 0:\n    print(\"The number is Positive\")\nelif num < 0:\n    print(\"The number is Negative\")\nelse:\n    print(\"The number is Zero\")`,
        result: "The program was successfully executed, and the conditional statements correctly evaluated the conditions and displayed the appropriate output based on the input value.",
        conclusion: "From this experiment, we learned how to use conditional statements such as if, if-else, and if-elif-else in Python. We understood how Python makes decisions based on conditions and executes specific blocks of code accordingly. Conditional statements are essential for developing logical and decision-based programs.",
        language: "python",
        language_id: 71
    },
    {
        id: 3,
        title: "Iterative Statements (Loops)",
        difficulty: "Easy",
        description: "Learn how to use loops such as for and while to execute statements repeatedly in Python.",
        objective: "The aim of this experiment is to understand and implement iterative statements (loops) in Python. Loops allow a set of instructions to be executed repeatedly based on a condition. Students will learn how to use for loops and while loops to perform repetitive tasks such as printing numbers, calculating sums, and iterating through sequences.",
        theory: "Iterative statements, also called loops, are used to execute a block of code repeatedly.\n\nPython provides two main types of loops:\n\n1. for loop  \n2. while loop  \n\nThe for loop is used when the number of iterations is known.\n\nExample:\n\nfor i in range(1, 6):\n    print(i)\n\nThis prints numbers from 1 to 5.\n\nThe while loop is used when the number of iterations is not fixed and depends on a condition.\n\nExample:\n\ni = 1\nwhile i <= 5:\n    print(i)\n    i += 1\n\nLoops help reduce code repetition and make programs efficient.\n\nLoops can also be used with arrays, lists, and sequences.\n\nLoops are essential for solving many programming problems such as summation, searching, and traversal.",
        algorithm: [
            "Step 1: Start the program.",
            "Step 2: Initialize a variable.",
            "Step 3: Use for loop to repeat statements.",
            "Step 4: Use while loop with a condition.",
            "Step 5: Execute statements inside loop.",
            "Step 6: Increment or update loop variable.",
            "Step 7: Display output.",
            "Step 8: Stop the program."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Programming Lab.",
            "Step 3: Click Experiment 3: Iterative Statements.",
            "Step 4: Read Aim and Theory.",
            "Step 5: Study algorithm carefully.",
            "Step 6: Observe default code in editor.",
            "Step 7: Click Run button.",
            "Step 8: Observe output.",
            "Step 9: Modify values and run again.",
            "Step 10: Verify loop execution."
        ],
        defaultCode: `# Python program demonstrating loops\n\n# For loop example\nprint("For Loop Output:")\nfor i in range(1, 6):\n    print(i)\n\n# While loop example\nprint("\\nWhile Loop Output:")\ni = 1\nwhile i <= 5:\n    print(i)\n    i += 1\n\n# Sum using loop\nsum = 0\nfor i in range(1, 6):\n    sum += i\n\nprint("\\nSum of numbers from 1 to 5 is:", sum)`,
        result: "The program executed successfully, and the loops correctly repeated the statements and displayed the expected output. The for loop and while loop both demonstrated iterative execution.",
        conclusion: "From this experiment, we learned how to use iterative statements such as for loop and while loop in Python. We understood how loops help execute instructions repeatedly and reduce code duplication. Loops are essential for solving problems involving repetition and data processing.",
        language: "python",
        language_id: 71
    },
    {
        id: 4,
        title: "Arrays and Array Operations",
        difficulty: "Easy",
        description: "Learn how to create arrays (lists), access elements, and use array methods in Python.",
        objective: "The aim of this experiment is to understand how to create arrays in Python and perform operations on them. Students will learn how to store multiple values in arrays (lists), access elements using indexing, iterate through array elements using loops, and use built-in array methods such as append(), remove(), and pop().",
        theory: "An array is a collection of elements stored in a single variable. In Python, arrays are implemented using lists.\n\nLists can store multiple values of different data types.\n\nExample:\narr = [10, 20, 30, 40]\n\nElements can be accessed using index values.\n\nExample:\nprint(arr[0])\n\nPython provides various list methods:\n\nappend() – adds element to list  \nremove() – removes element  \npop() – removes last element  \nlen() – returns length  \n\nLists can also be traversed using loops.\n\nExample:\nfor i in arr:\n    print(i)\n\nArrays are useful for storing and processing large amounts of data efficiently.",
        algorithm: [
            "Step 1: Start the program.",
            "Step 2: Create an array (list).",
            "Step 3: Display array elements.",
            "Step 4: Add new element using append().",
            "Step 5: Remove element using remove().",
            "Step 6: Traverse array using loop.",
            "Step 7: Display updated array.",
            "Step 8: Stop the program."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Lab.",
            "Step 3: Click Experiment 4.",
            "Step 4: Read Aim and Theory.",
            "Step 5: Observe default code.",
            "Step 6: Click Run button.",
            "Step 7: Observe output.",
            "Step 8: Modify array values.",
            "Step 9: Run program again.",
            "Step 10: Verify array operations."
        ],
        defaultCode: `# Python program demonstrating array operations\n\n# Create array\narr = [10, 20, 30, 40]\n\nprint("Original Array:", arr)\n\n# Access elements\nprint("First element:", arr[0])\n\n# Add element\narr.append(50)\nprint("After append:", arr)\n\n# Remove element\narr.remove(20)\nprint("After remove:", arr)\n\n# Traverse array\nprint("Array elements:")\nfor i in arr:\n    print(i)`,
        result: "The program executed successfully, and array operations such as creation, insertion, deletion, and traversal were performed correctly.",
        conclusion: "From this experiment, we learned how to create arrays in Python and perform various operations such as accessing, inserting, and removing elements. Arrays are important for storing and processing multiple values efficiently.",
        language: "python",
        language_id: 71
    },
    {
        id: 5,
        title: "Using Standard Python Modules",
        difficulty: "Easy",
        description: "Learn how to use standard Python modules such as math, random, and datetime.",
        objective: "The aim of this experiment is to understand how to use standard Python modules. Modules provide predefined functions that help perform various operations such as mathematical calculations, random number generation, and date/time operations.",
        theory: "A module is a file containing Python functions and variables.\n\nPython provides many standard modules such as:\n\nmath module  \nrandom module  \ndatetime module  \n\nThese modules provide ready-to-use functions.\n\nExample math module:\nimport math\nmath.sqrt(25)\n\nExample random module:\nimport random\nrandom.randint(1, 10)\n\nExample datetime module:\nimport datetime\ndatetime.datetime.now()\n\nModules make programming easier by providing reusable code.",
        algorithm: [
            "Step 1: Start program.",
            "Step 2: Import standard modules.",
            "Step 3: Use module functions.",
            "Step 4: Perform calculations.",
            "Step 5: Display results.",
            "Step 6: Stop program."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Lab.",
            "Step 3: Click Experiment 5.",
            "Step 4: Read Aim and Theory.",
            "Step 5: Observe default code.",
            "Step 6: Click Run button.",
            "Step 7: Observe output.",
            "Step 8: Modify values.",
            "Step 9: Run program again.",
            "Step 10: Verify module usage."
        ],
        defaultCode: `# Python program demonstrating standard modules\n\nimport math\nimport random\nimport datetime\n\n# Math module\nprint("Square root of 25:", math.sqrt(25))\nprint("Power 2^3:", math.pow(2,3))\n\n# Random module\nprint("Random number:", random.randint(1,100))\n\n# Datetime module\nprint("Current date and time:", datetime.datetime.now())`,
        result: "The program executed successfully, and standard Python modules were used to perform mathematical calculations, generate random numbers, and display date and time.",
        conclusion: "From this experiment, we learned how to use Python standard modules such as math, random, and datetime. Modules help simplify programming by providing useful built-in functions.",
        language: "python",
        language_id: 71
    },
    {
        id: 6,
        title: "Functions and Recursion",
        difficulty: "Medium",
        description: "Learn how to create functions and implement recursion in Python.",
        objective: "The aim of this experiment is to understand how to create functions in Python and implement recursion. Functions help organize code into reusable blocks, and recursion allows a function to call itself to solve problems such as factorial calculation.",
        theory: "A function is a block of code that performs a specific task.\n\nFunctions improve code reuse and readability.\n\nExample:\ndef greet():\n    print(\"Hello\")\n\nRecursion is when a function calls itself.\n\nExample:\nFactorial using recursion.\n\nfactorial(n) = n × factorial(n-1)\n\nBase condition stops recursion.\n\nFunctions and recursion are important in problem solving, tree traversal, and algorithm design.",
        algorithm: [
            "Step 1: Start program.",
            "Step 2: Define function.",
            "Step 3: Take input.",
            "Step 4: Call function.",
            "Step 5: Apply recursion logic.",
            "Step 6: Display result.",
            "Step 7: Stop program."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Lab.",
            "Step 3: Select Experiment 6.",
            "Step 4: Read Aim and Theory.",
            "Step 5: Observe default code.",
            "Step 6: Click Run button.",
            "Step 7: Observe output.",
            "Step 8: Modify input.",
            "Step 9: Run again.",
            "Step 10: Verify result."
        ],
        defaultCode: `# Function and recursion example\n\ndef factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nnum = int(input(\"Enter number: \"))\nprint(\"Factorial =", factorial(num))`,
        result: "The program executed successfully, and the factorial was calculated using recursion.",
        conclusion: "From this experiment, we learned how to create functions and use recursion to solve problems efficiently.",
        language: "python",
        language_id: 71
    },
    {
        id: 7,
        title: "Constructors and Destructors",
        difficulty: "Medium",
        description: "Managing object lifecycle in Object Oriented Programming.",
        objective: "To understand constructors and destructors in Python classes.",
        theory: "Constructor initializes object.\n\n__init__() is constructor.\n\nDestructor deletes object.\n\n__del__() is destructor.\n\nUsed in Object Oriented Programming.\n\nConstructor is called when object is created.\n\nDestructor is called when object is deleted or program ends.",
        algorithm: [
            "Step 1: Define class.",
            "Step 2: Define constructor.",
            "Step 3: Create object.",
            "Step 4: Execute constructor.",
            "Step 5: Delete object.",
            "Step 6: Execute destructor."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Lab.",
            "Step 3: Select Experiment 7.",
            "Step 4: Read Aim and Theory.",
            "Step 5: Observe default code.",
            "Step 6: Click Run button.",
            "Step 7: Observe output.",
            "Step 8: Verify constructor and destructor calls.",
            "Step 9: Modify class.",
            "Step 10: Run again."
        ],
        defaultCode: `class Test:\n\n    def __init__(self):\n        print(\"Constructor called\")\n\n    def __del__(self):\n        print(\"Destructor called\")\n\nobj = Test()\ndel obj`,
        result: "Constructor and destructor executed successfully.",
        conclusion: "Learned object initialization and destruction.",
        language: "python",
        language_id: 71
    },
    {
        id: 8,
        title: "Object Oriented Programming: Inheritance",
        difficulty: "Medium",
        description: "Learn how to implement inheritance in Python to reuse code from parent class.",
        objective: "The aim of this experiment is to understand and implement inheritance in Python. Inheritance allows one class to acquire properties and methods of another class. It helps in code reuse, improves efficiency, and supports object-oriented programming concepts.",
        theory: "Inheritance is an important concept in Object-Oriented Programming (OOP).\n\nInheritance allows one class (child class) to inherit properties and methods from another class (parent class).\n\nParent class is also called base class.\n\nChild class is also called derived class.\n\nSyntax:\n\nclass Parent:\n    pass\n\nclass Child(Parent):\n    pass\n\nAdvantages of inheritance:\n\nCode reuse  \nImproves efficiency  \nReduces redundancy  \n\nExample:\n\nIf Parent class has method show(), Child class can use show() without redefining it.\n\nInheritance is widely used in software development to create reusable and scalable programs.",
        algorithm: [
            "Step 1: Start the program.",
            "Step 2: Define Parent class.",
            "Step 3: Define Child class inheriting Parent class.",
            "Step 4: Create object of Child class.",
            "Step 5: Call inherited method.",
            "Step 6: Display output.",
            "Step 7: Stop the program."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Programming Lab.",
            "Step 3: Select Experiment 8.",
            "Step 4: Read Aim and Theory.",
            "Step 5: Observe default code.",
            "Step 6: Click Run button.",
            "Step 7: Observe output.",
            "Step 8: Verify inherited method works.",
            "Step 9: Modify code and run again.",
            "Step 10: Observe changes."
        ],
        defaultCode: `# Python program demonstrating inheritance\n\nclass Parent:\n    def show(self):\n        print("This is Parent class method")\n\nclass Child(Parent):\n    def display(self):\n        print("This is Child class method")\n\nobj = Child()\n\nobj.show()\nobj.display()`,
        result: "The program executed successfully, and the child class inherited and used the parent class method.",
        conclusion: "From this experiment, we learned how inheritance works in Python. We understood how child class inherits properties and methods from parent class. Inheritance helps improve code reuse and program efficiency.",
        language: "python",
        language_id: 71
    },
    {
        id: 9,
        title: "Object Oriented Programming: Polymorphism",
        difficulty: "Medium",
        description: "Learn how polymorphism allows objects to use same method with different behavior.",
        objective: "The aim of this experiment is to understand polymorphism in Python. Polymorphism allows the same method name to behave differently for different objects.",
        theory: "Polymorphism means many forms.\n\nIn Python, polymorphism allows same method name to perform different tasks depending on object.\n\nExample:\n\nDog class sound() prints Bark  \nCat class sound() prints Meow  \n\nBoth use same method name sound().\n\nAdvantages:\n\nImproves flexibility  \nSupports dynamic programming  \nImproves code readability  \n\nPolymorphism is important concept in object-oriented programming.",
        algorithm: [
            "Step 1: Start program.",
            "Step 2: Create multiple classes.",
            "Step 3: Define same method name in each class.",
            "Step 4: Create objects.",
            "Step 5: Call method using objects.",
            "Step 6: Display output.",
            "Step 7: Stop program."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Lab.",
            "Step 3: Select Experiment 9.",
            "Step 4: Read Aim and Theory.",
            "Step 5: Observe default code.",
            "Step 6: Click Run button.",
            "Step 7: Observe output.",
            "Step 8: Verify polymorphism.",
            "Step 9: Modify code.",
            "Step 10: Run again."
        ],
        defaultCode: `# Python program demonstrating polymorphism\n\nclass Dog:\n    def sound(self):\n        print("Dog barks")\n\nclass Cat:\n    def sound(self):\n        print("Cat meows")\n\nanimals = [Dog(), Cat()]\n\nfor animal in animals:\n    animal.sound()`,
        result: "The program executed successfully, and different outputs were produced using the same method name.",
        conclusion: "From this experiment, we learned how polymorphism allows the same method name to behave differently. It improves flexibility and supports object-oriented programming.",
        language: "python",
        language_id: 71
    },
    {
        id: 10,
        title: "Exception Handling",
        difficulty: "Medium",
        description: "Handling runtime errors gracefully using try-except blocks.",
        objective: "The aim of this experiment is to understand and implement exception handling in Python. Exception handling prevents program crashes and handles errors properly.",
        theory: "Exception is an error that occurs during program execution.\n\nExample:\n\nDivision by zero.\n\nPython provides try and except blocks to handle exceptions.\n\nSyntax:\n\ntry:\n    code\nexcept:\n    handle error\n\nAdvantages:\n\nPrevents program crash  \nImproves program reliability  \nHandles runtime errors safely",
        algorithm: [
            "Step 1: Start program.",
            "Step 2: Write code inside try block.",
            "Step 3: Exception occurs.",
            "Step 4: Except block handles error.",
            "Step 5: Display result.",
            "Step 6: Stop program."
        ],
        procedure: [
            "Step 1: Open Virtual Programming Lab.",
            "Step 2: Select Python Lab.",
            "Step 3: Select Experiment 10.",
            "Step 4: Read Aim and Theory.",
            "Step 5: Observe default code.",
            "Step 6: Click Run button.",
            "Step 7: Observe error handling.",
            "Step 8: Modify input.",
            "Step 9: Run again.",
            "Step 10: Verify exception handling."
        ],
        defaultCode: `# Python program demonstrating exception handling\n\ntry:\n    num = int(input(\"Enter number: \"))\n    result = 10 / num\n    print(\"Result:\", result)\n\nexcept ZeroDivisionError:\n    print(\"Error: Cannot divide by zero\")\n\nexcept ValueError:\n    print(\"Error: Invalid input\")`,
        result: "The program executed successfully, and errors were handled properly using exception handling.",
        conclusion: "From this experiment, we learned how to handle runtime errors using exception handling. It prevents program crashes and improves reliability.",
        language: "python",
        language_id: 71
    },
    {
        id: 11,
        title: "File Operations",
        difficulty: "Hard",
        description: "Reading from and writing to local files.",
        objective: "To understand basic file I/O operations (write and read).",
        theory: "### File Handling\nPython has functions for creating, reading, updating, and deleting files.\n- `open(filename, mode)`: Opens a file.\n- `'w'`: Write mode.\n- `'r'`: Read mode.",
        algorithm: [
            "Step 1: Start",
            "Step 2: Open a file in write mode ('w')",
            "Step 3: Write a string into the file",
            "Step 4: Close the file",
            "Step 5: Open the file in read mode ('r')",
            "Step 6: Read content and print it",
            "Step 7: Close the file",
            "Step 8: Stop"
        ],
        procedure: [
            "Step 1: Select Experiment 11",
            "Step 2: Run the program",
            "Step 3: Verify that the text written to the file is read back correctly"
        ],
        defaultCode: `file = open("test.txt", "w")\nfile.write("Hello from Virtual Python Lab!")\nfile.close()\n\nfile = open("test.txt", "r")\nprint("File Content:", file.read())\nfile.close()`,
        result: "Data was successfully stored in and retrieved from a text file.",
        conclusion: "Learned how to persist data across sessions using file operations.",
        language: "python",
        language_id: 71
    },
    {
        id: 12,
        title: "Real-world Problem Solving",
        difficulty: "Easy",
        description: "Applying logic to solve common scenarios like Even/Odd checks.",
        objective: "To apply basic programming logic to solve common real-world problems.",
        theory: "Many real-world problems can be solved using simple parity logic or mathematical checks. The modulo operator is key for divisibility problems.",
        algorithm: [
            "Step 1: Start",
            "Step 2: Input a number",
            "Step 3: Check if number % 2 is 0",
            "Step 4: Print 'Even' if true, else 'Odd'",
            "Step 5: Stop"
        ],
        procedure: [
            "Step 1: Select Experiment 12",
            "Step 2: Input various numbers in the user panel",
            "Step 3: Verify the classification"
        ],
        defaultCode: `num = int(input("Enter number: "))\n\nif num % 2 == 0:\n    print(num, "is an Even number")\nelse:\n    print(num, "is an Odd number")`,
        result: "The program correctly identifies integers as even or odd.",
        conclusion: "Learned how to map real-world conditions to programming logic.",
        language: "python",
        language_id: 71
    },
    {
        id: 13,
        title: "Data Science and ML Basics",
        difficulty: "Hard",
        description: "An introduction to processing numerical data with NumPy.",
        objective: "To learn the basics of data manipulation using the NumPy library.",
        theory: "### NumPy\nNumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions.",
        algorithm: [
            "Step 1: Start",
            "Step 2: Import numpy as np",
            "Step 3: Create a numpy array",
            "Step 4: Perform a calculation (e.g., mean)",
            "Step 5: Stop"
        ],
        procedure: [
            "Step 1: Select Experiment 13",
            "Step 2: Run the program",
            "Step 3: Observe NumPy array handling"
        ],
        defaultCode: `import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\n\nprint("NumPy Array:", arr)\nprint("Mean of elements:", arr.mean())`,
        result: "Data processing using NumPy was successfully demonstrated.",
        conclusion: "Learned how specialized libraries can simplify mathematical data processing.",
        language: "python",
        language_id: 71
    },
    {
        id: 14,
        title: "Graph Plotting",
        difficulty: "Hard",
        description: "Visualizing data using Matplotlib.",
        objective: "To learn how to create simple plots and graphs.",
        theory: "### Matplotlib\nMatplotlib is a plotting library for Python. It provides an object-oriented API for embedding plots into applications.",
        algorithm: [
            "Step 1: Start",
            "Step 2: Import matplotlib.pyplot as plt",
            "Step 3: Define X and Y coordinates",
            "Step 4: Call plot() and show()",
            "Step 5: Stop"
        ],
        procedure: [
            "Step 1: Select Experiment 14",
            "Step 2: Run the plotting script",
            "Step 3: Observe the terminal output (Visual graphs require specific support)"
        ],
        defaultCode: `import matplotlib.pyplot as plt\n\nx = [1, 2, 3]\ny = [4, 5, 2]\n\nplt.plot(x, y)\nprint("Graph coordinates plotted: X={}, Y={}".format(x, y))\n# plt.show() - Note: UI window requires local desktop GUI`,
        result: "Graph data was correctly initialized and prepared for visualization.",
        conclusion: "Learned how to represent numerical data visually using Python tools.",
        language: "python",
        language_id: 71
    },
    {
        id: 15,
        title: "Advanced Python Programs",
        difficulty: "Hard",
        description: "Using functional programming concepts like Lambda and Map.",
        objective: "To explore advanced features like lambda functions and functional mapping.",
        theory: "### Lambda Functions\nA lambda function is a small anonymous function. It can take any number of arguments but can only have one expression.\n\n### Map Function\nThe `map()` function executes a specified function for each item in an iterable.",
        algorithm: [
            "Step 1: Start",
            "Step 2: Define a list of numbers",
            "Step 3: Use map() with a lambda to square all numbers",
            "Step 4: Convert result back to list and print",
            "Step 5: Stop"
        ],
        procedure: [
            "Step 1: Select Experiment 15",
            "Step 2: Run the script",
            "Step 3: Verify the squared results in the console"
        ],
        defaultCode: `nums = [1, 2, 3, 4, 5]\n\nsquares = list(map(lambda x: x * x, nums))\n\nprint("Original list:", nums)\nprint("Squared list:", squares)`,
        result: "Successfully used functional programming to transform a data collection.",
        conclusion: "Learned advanced, concise ways to process data in Python.",
        language: "python",
        language_id: 71
    }
];
