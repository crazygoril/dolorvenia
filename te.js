// Create a function to embed Vega visualization
function embedVega(url, target) {
  return new Promise((resolve, reject) => {
    // Load the Vega visualization from the provided URL
    fetch(url)
      .then(response => response.json())
      .then(spec => {
        // Embed the Vega visualization in the specified target element
        vegaEmbed(target, spec)
          .then(() => {
            resolve("Vega visualization embedded successfully");
          })
          .catch(error => {
            reject("Error embedding Vega visualization: " + error);
          });
      })
      .catch(error => {
        reject("Error loading Vega visualization: " + error);
      });
  });
}

// Example usage
const url = 'path/to/vega-visualization.json';
const target = '#vega-container';
embedVega(url, target)
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });
