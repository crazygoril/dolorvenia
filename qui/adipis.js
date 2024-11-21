function createNewLoessTransformNode() {
    let currentTransform = {
        // Example transform settings
        bandwidth: 0.3,
        robustnessIterations: 2
        // Other properties according to your needs
    };

    // Assuming 'this.transform' is set to 'currentTransform' somewhere in your code
    this.transform = currentTransform;

    return new LoessTransformNode(null, duplicate(this.transform));
}

// Usage
let newNode = createNewLoessTransformNode();
console.log(newNode);
