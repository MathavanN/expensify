const add = (a,b) => a + b;

const generatingGreeting = (name) => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should greet the person', () => {
    const result = generatingGreeting("Mathavan");
    expect(result).toBe("Hello Mathavan!");
});