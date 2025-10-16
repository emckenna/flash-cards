# Design Patterns for Job Interviews

## Creational Patterns

### Card 1
**Q:** What is the Singleton pattern and what problem does it solve?
**A:** The Singleton pattern is a creational design pattern that ensures only one instance of a class exists throughout the entire application and provides a global point of access to that instance. It solves the problem of having multiple instances when only one is needed, saving memory and providing centralized control.

### Card 2
**Q:** What are the advantages of using the Singleton pattern?
**A:** Key advantages include: (1) Memory efficiency - the single instance is reused rather than creating new objects, (2) Global access point - accessible throughout the application, (3) Controlled object creation, and (4) Useful for shared resources like database connections.

### Card 3
**Q:** What is the Factory pattern and when would you use it?
**A:** The Factory pattern is a creational design pattern that provides a way to create objects without exposing the creation logic to the client. It separates object creation from the code that uses the objects. Use it when: (1) you need to decouple object creation from usage, (2) you have multiple object types to choose from, or (3) you want to hide complex creation logic.

### Card 4
**Q:** What is the difference between Factory and Abstract Factory patterns?
**A:** The Factory pattern creates a single object through inheritance and produces only one product. The Abstract Factory pattern creates families of related or dependent objects and is used when you need to create multiple families of objects. Abstract Factory can be thought of as "a factory of factories."

### Card 5
**Q:** Explain the Builder pattern and its advantages.
**A:** The Builder pattern constructs complex objects step-by-step by separating the construction and representation of an object. Advantages include: (1) improved readability and maintainability, (2) encapsulates construction logic, (3) reduces required constructor parameters, (4) allows building multiple representations, and (5) enables creation of immutable objects.

## Structural Patterns

### Card 6
**Q:** What is the Decorator pattern and how does it differ from inheritance?
**A:** The Decorator pattern allows adding new functionality to an existing object without altering its structure or using inheritance. Instead of modifying the original class, you wrap the object with decorator classes that add behavior. This is more flexible than inheritance because decorators can be combined and applied dynamically at runtime.

### Card 7
**Q:** Explain the Proxy pattern and provide a use case.
**A:** The Proxy pattern provides a surrogate or placeholder for another object to control access to it. Types include: (1) remote proxy - controls access to remote objects, (2) caching proxy - caches results to improve performance, and (3) smart proxy - performs additional checks before allowing access. Use cases include lazy loading, access control, and logging.

## Behavioral Patterns

### Card 8
**Q:** What is the Observer pattern and where is it commonly used?
**A:** The Observer pattern defines a one-to-many relationship where multiple observer objects watch a subject object. When the subject changes, all observers are notified automatically. It's commonly used in: (1) UI event handling frameworks (like AWT and Swing), (2) real-time update systems, and (3) MVC architectures where views observe model changes.

### Card 9
**Q:** Explain the Strategy pattern and why it's useful.
**A:** The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it. It's useful because: (1) it eliminates conditional statements, (2) makes algorithms easy to swap at runtime, (3) improves code maintainability, and (4) enables different behaviors without modifying the client code.

### Card 10
**Q:** What is the Iterator pattern and what problem does it solve?
**A:** The Iterator pattern provides a way to access elements of a collection object sequentially without exposing its underlying representation. It solves the problem of needing different ways to traverse a collection and decouples the collection from the code that uses it. It's especially useful for traversing complex data structures uniformly.

## Architecture & Advanced Concepts

### Card 11
**Q:** What is Dependency Injection and how does it relate to design patterns?
**A:** Dependency Injection is a technique where an object receives its dependencies from external sources rather than creating them itself. It's an implementation of the Inversion of Control principle and helps decouple components. Benefits include: (1) improved testability, (2) loose coupling, (3) easier maintenance, and (4) flexible configuration of dependencies.

### Card 12
**Q:** What are SOLID principles and why are they important?
**A:** SOLID is an acronym for five design principles: (1) **S**ingle Responsibility - one reason to change, (2) **O**pen/Closed - open for extension, closed for modification, (3) **L**iskov Substitution - subclasses replaceable with parent class, (4) **I**nterface Segregation - clients only depend on what they use, (5) **D**ependency Inversion - depend on abstractions, not concrete implementations. They promote maintainable, scalable, and testable code.