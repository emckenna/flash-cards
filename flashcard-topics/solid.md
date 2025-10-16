# SOLID Principles

## Single Responsibility Principle

### Card 1
**Q:** What is the Single Responsibility Principle?
**A:** A class should have only one reason to change, meaning it should have only one job or responsibility. Example: A `User` class handles user data but delegates email sending to an `EmailService` class. Analogy: A chef cooks, but a waiter serves.

### Card 2
**Q:** What is an example of violating SRP?
**A:** A `Report` class that both generates report data and formats it for printing. Fix: Split into `ReportGenerator` and `ReportFormatter`.

### Card 3
**Q:** Why is SRP important?
**A:** It makes code easier to understand, test, and maintain. Each class has a single, well-defined purpose, reducing complexity and making changes less risky.

## Open-Closed Principle

### Card 1
**Q:** What is the Open-Closed Principle?
**A:** Software entities should be open for extension but closed for modification. Example: Use inheritance or interfaces to add new functionality without changing existing code. Analogy: A LEGO set where you add new pieces without altering the base structure.

### Card 2
**Q:** How do you implement OCP?
**A:** Use polymorphism (e.g., interfaces or abstract classes). Example: A `PaymentProcessor` interface allows new payment methods (e.g., `CreditCard`, `PayPal`) without modifying the core processor.

### Card 3
**Q:** What are the benefits of OCP?
**A:** Reduces risk of breaking existing functionality when adding new features. Makes the codebase more stable and easier to extend over time.

## Liskov Substitution Principle

### Card 1
**Q:** What is the Liskov Substitution Principle?
**A:** Subtypes must be substitutable for their base types without altering program correctness. Example: A `Bird` class with `fly()` can be replaced by `Sparrow` but not `Penguin` unless `fly()` is handled appropriately. Analogy: A USB-C cable fitting any USB-C port.

### Card 2
**Q:** What is a common LSP violation?
**A:** A subclass that throws unexpected exceptions or breaks parent class behavior. Example: A `Rectangle` base class with a `Square` subclass that restricts width/height equality, breaking the rectangle's behavior contract.

### Card 3
**Q:** How do you ensure LSP compliance?
**A:** Make sure derived classes can replace base classes without changing the program's behavior. Don't strengthen preconditions or weaken postconditions in subclasses.

## Interface Segregation Principle

### Card 1
**Q:** What is the Interface Segregation Principle?
**A:** Clients should not be forced to depend on interfaces they don't use. Example: Split a large `IMachine` interface into `IPrinter` and `IScanner` for devices that only print or scan. Analogy: A TV remote with only relevant buttons.

### Card 2
**Q:** Why should you avoid fat interfaces?
**A:** They lead to unnecessary code and complexity. Example: A `Worker` class implementing an `IEmployee` interface with unused methods like `attendMeeting()` for a `Freelancer`.

### Card 3
**Q:** What is the benefit of ISP?
**A:** Creates more focused, cohesive interfaces that are easier to implement and understand. Reduces coupling and makes the system more flexible.

## Dependency Inversion Principle

### Card 1
**Q:** What is the Dependency Inversion Principle?
**A:** High-level modules should not depend on low-level modules; both should depend on abstractions. Example: A `NotificationService` depends on an `IMessage` interface, not a concrete `Email` class. Analogy: Using a power adapter for different devices.

### Card 2
**Q:** How do you apply DIP?
**A:** Use dependency injection or factories. Example: Inject an `ILogger` interface into a `UserService` instead of hardcoding a `ConsoleLogger`.

### Card 3
**Q:** What are the advantages of DIP?
**A:** Reduces coupling between modules, makes code more testable (you can inject mock dependencies), and makes it easier to swap implementations without changing high-level code.
