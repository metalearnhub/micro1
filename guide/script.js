function copyPrompt(b){
    const t = document.getElementById('prompt').innerText;
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(
      () => { b.textContent = 'Copied ✓'; setTimeout(() => b.textContent = 'Copy', 1800); },
      () => { b.textContent = 'Select & copy'; }
    );
  }