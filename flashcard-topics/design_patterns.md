# Design Patterns for Job Interviews

## Creational Patterns

### Card 1
**Q:** What is the Singleton pattern?
**A:** The Singleton pattern is a creational design pattern that ensures only one instance of a class exists throughout the entire application and provides a global point of access to that instance.

### Card 2
**Q:** When would you use the Singleton pattern?
**A:** Use the Singleton pattern when you need only one instance of a class to be shared across the entire application. Common use cases include: database connections, logging services, configuration managers, and thread pools. It saves memory by reusing a single instance rather than creating multiple objects.

### Card 3
**Q:** What is the Factory pattern?
**A:** The Factory pattern is a creational design pattern that provides a method to create objects without exposing the exact creation logic to the client. It decouples object creation from the code that uses the objects by centralizing instantiation logic in a factory class.

### Card 4
**Q:** When should you use the Factory pattern?
**A:** Use the Factory pattern when: (1) you need to decouple object creation from the code that uses the objects, (2) you have multiple related object types to choose from at runtime, (3) you want to hide complex creation logic, or (4) object instantiation depends on external conditions or configurations.

### Card 5
**Q:** What is the difference between Factory and Abstract Factory patterns?
**A:** The Factory pattern creates a single object and produces one product type. The Abstract Factory pattern creates families of related or dependent objects and is used when you need multiple families of objects. Abstract Factory can be thought of as "a factory of factories."

### Card 6
**Q:** What is the Builder pattern?
**A:** The Builder pattern constructs complex objects step-by-step by separating the construction logic from the object's representation. Instead of using a complex constructor with many parameters, you use a builder object to set properties incrementally and then build the final object.

### Card 7
**Q:** What are the advantages of the Builder pattern?
**A:** Key advantages include: (1) improved readability - clearer code without many parameters, (2) reduces constructor complexity, (3) allows creating immutable objects, (4) enables flexible object configuration, and (5) makes code more maintainable by separating construction from representation.

## Structural Patterns

### Card 8
**Q:** What is the Decorator pattern?
**A:** The Decorator pattern allows adding new functionality to an existing object dynamically without altering its structure. Instead of modifying the original class or using inheritance, you wrap the object with decorator classes that add behavior.

### Card 9
**Q:** How does the Decorator pattern differ from inheritance?
**A:** Decorator is more flexible than inheritance because decorators can be combined and applied dynamically at runtime. Inheritance requires the class hierarchy to be defined at compile-time and is less flexible. Decorators allow composing behaviors, while inheritance creates rigid hierarchies.

### Card 10
**Q:** What is the Proxy pattern?
**A:** The Proxy pattern provides a surrogate or placeholder for another object to control access to it. The proxy acts as an intermediary between the client and the real object, allowing you to add behavior before or after delegating to the real object.

### Card 11
**Q:** What are the common types of Proxy?
**A:** Common types include: (1) **Remote Proxy** - controls access to remote objects over a network, (2) **Caching Proxy** - caches results to improve performance, and (3) **Smart Proxy** - performs additional checks or logging before allowing access to the real object.

## Behavioral Patterns

### Card 12
**Q:** What is the Observer pattern?
**A:** The Observer pattern defines a one-to-many relationship where multiple observer objects watch a subject object. When the subject's state changes, all observers are notified automatically without the subject needing to know who the observers are.

### Card 13
**Q:** Where is the Observer pattern commonly used?
**A:** The Observer pattern is commonly used in: (1) UI event handling frameworks like AWT and Swing, (2) real-time update systems where multiple components need to react to changes, and (3) MVC architectures where views observe model changes and update automatically.

### Card 14
**Q:** What is the Strategy pattern?
**A:** The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the algorithm to vary independently from clients that use it by selecting the appropriate strategy at runtime.

### Card 15
**Q:** Why is the Strategy pattern useful?
**A:** The Strategy pattern is useful because: (1) it eliminates complex conditional statements, (2) makes algorithms easy to swap at runtime, (3) improves code maintainability and clarity, and (4) enables adding new behaviors without modifying existing client code.

### Card 16
**Q:** What is the Iterator pattern?
**A:** The Iterator pattern provides a way to access elements of a collection object sequentially without exposing its underlying representation. It allows you to traverse different types of collections with a uniform interface.

### Card 17
**Q:** What problem does the Iterator pattern solve?
**A:** The Iterator pattern solves the problem of needing different ways to traverse a collection without exposing its internal structure. It decouples the collection from the traversal algorithm and enables uniform access to elements regardless of the underlying data structure type.

## Architecture & Advanced Concepts

### Card 18
**Q:** What is Dependency Injection?
**A:** Dependency Injection is a technique where an object receives its dependencies from external sources rather than creating them itself. Instead of an object instantiating its own dependencies, they are injected into it (typically through constructor, setter, or interface parameters).

### Card 19
**Q:** What are the benefits of Dependency Injection?
**A:** Key benefits include: (1) improved testability - easier to mock dependencies in unit tests, (2) loose coupling between components, (3) easier maintenance and refactoring, and (4) flexible configuration of dependencies without changing class code.

### Card 20
**Q:** What is the Single Responsibility Principle (SRP)?
**A:** The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one job or responsibility. This promotes code maintainability and clarity by ensuring each class focuses on a single aspect of functionality.

### Card 21
**Q:** What is the Open/Closed Principle (OCP)?
**A:** The Open/Closed Principle states that software entities (classes, modules, functions) should be open for extension but closed for modification. You should be able to add new functionality without changing existing code, typically achieved through inheritance and interfaces.

### Card 22
**Q:** What is the Liskov Substitution Principle (LSP)?
**A:** The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. Derived classes must be substitutable for their base classes to maintain expected behavior.

### Card 23
**Q:** What is the Interface Segregation Principle (ISP)?
**A:** The Interface Segregation Principle states that clients should not be forced to depend on interfaces they don't use. Create smaller, specific interfaces tailored to client needs rather than one large interface with many methods, reducing coupling between components.

### Card 24
**Q:** What is the Dependency Inversion Principle (DIP)?
**A:** The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions. Additionally, abstractions should not depend on details, but details should depend on abstractions. This promotes loose coupling and flexibility.