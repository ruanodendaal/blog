---
title: Testing Code Styling
description: A quick test of various code blocks and their styling
author: ruan
image-name: posts/bear-notes-mcp.jpg
image-alt: Digital notebook with code
tags: [test]
---

This post tests various code styles and snippets to demonstrate the new code styling.

## Inline Code

Let's see how `inline code` looks in a paragraph. You might use inline code for things like variable names like `user_id` or quick commands like `npm install`.

## Code Blocks

### JavaScript

```javascript
// A simple JavaScript function
function calculateTotal(items) {
  return items
    .filter(item => item.inStock)
    .reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
}

// ES6 arrow function
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
```

### CSS/SCSS

```scss
// SCSS Mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  @include flex-center;
  background-color: #f8f9fa;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
}
```

### Python

```python
# A simple Python class
class DataProcessor:
    def __init__(self, data):
        self.data = data
        
    def filter_items(self, min_value):
        return [item for item in self.data if item > min_value]
        
    def calculate_average(self):
        if not self.data:
            return 0
        return sum(self.data) / len(self.data)
        
# Usage
processor = DataProcessor([1, 5, 7, 10, 12])
filtered = processor.filter_items(5)
average = processor.calculate_average()
```

### Bash

```bash
#!/bin/bash
# Deploy script example

echo "Starting deployment..."

# Build the project
npm run build

# Copy files to server
scp -r ./build/* user@server:/var/www/html/

echo "Deployment complete!"
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to My Site</h1>
  </header>
  <main>
    <article>
      <h2>Article Title</h2>
      <p>This is a sample paragraph.</p>
    </article>
  </main>
  <script src="main.js"></script>
</body>
</html>
```

### JSON

```json
{
  "user": {
    "id": 1234,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "preferences": {
      "theme": "dark",
      "notifications": true
    },
    "roles": ["admin", "editor"]
  },
  "settings": {
    "apiKey": "abc123",
    "maxItems": 50
  }
}
```

## Line Wrapping Test

This tests how long lines are handled with scrolling:

```javascript
// This is a very long line that should trigger horizontal scrolling in the code block to ensure we're handling long lines properly without breaking the layout of the page or making the text unreadable through improper wrapping
const reallyLongVariableName = "This is a really long string value that goes on and on and shouldn't wrap but instead should create a horizontal scrollbar in the pre element";
```

That's it for the code test!
