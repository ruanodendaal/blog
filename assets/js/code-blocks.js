// Enhancing code blocks with copy functionality and language detection

document.addEventListener('DOMContentLoaded', function() {
  // Find all pre > code blocks
  const codeBlocks = document.querySelectorAll('pre > code');
  
  codeBlocks.forEach(function(codeBlock) {
    const pre = codeBlock.parentNode;
    
    // Try to detect the language
    let language = '';
    codeBlock.classList.forEach(function(className) {
      if (className.startsWith('language-')) {
        language = className.replace('language-', '');
        pre.setAttribute('data-lang', language);
      }
    });
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    
    // Copy functionality
    copyButton.addEventListener('click', function() {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(function() {
        // Visual feedback
        copyButton.textContent = 'Copied!';
        setTimeout(function() {
          copyButton.textContent = 'Copy';
        }, 2000);
      }).catch(function() {
        copyButton.textContent = 'Failed!';
        setTimeout(function() {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
    
    // Add button to pre element
    pre.appendChild(copyButton);
  });
});
