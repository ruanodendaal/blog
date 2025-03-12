// Enhancing code blocks with copy functionality and language detection

document.addEventListener('DOMContentLoaded', function() {
  // Fix for GitHub Pages styling conflicts
  document.querySelectorAll('pre').forEach(function(pre) {
    pre.style.backgroundColor = '#f8f9fa';
    pre.style.borderLeft = '4px solid #4e42ff';
    pre.style.position = 'relative';
    pre.style.overflow = 'auto';
  });
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
  
  // Enhance tables for responsiveness
  const tables = document.querySelectorAll('.post table');
  
  tables.forEach(function(table) {
    // Wrap table in a container for better mobile handling
    const wrapper = document.createElement('div');
    wrapper.className = 'table-container';
    wrapper.style.overflowX = 'auto';
    wrapper.style.display = 'block';
    
    // Replace table with the wrapper
    const parent = table.parentNode;
    parent.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    
    // Ensure table styles are applied correctly
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    
    // Style all table headers
    table.querySelectorAll('th').forEach(function(th) {
      th.style.backgroundColor = '#f8f9fa';
      th.style.borderBottom = '2px solid #4e42ff';
      th.style.padding = '12px 15px';
      th.style.textAlign = 'left';
    });
    
    // Style all table cells
    table.querySelectorAll('td').forEach(function(td) {
      td.style.borderBottom = '1px solid #e6e6e6';
      td.style.padding = '12px 15px';
    });
    
    // Look for specific format in the user manual
    if (table.querySelector('td:first-child') && 
        table.querySelector('td:first-child').textContent.includes('[')) {
      table.classList.add('prefix-table');
    }
  });
});
