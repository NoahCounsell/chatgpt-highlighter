
const tailwindScript = document.createElement('script');
tailwindScript.src = "https://cdn.tailwindcss.com";
document.head.appendChild(tailwindScript);


var buttonContainers = document.getElementsByClassName('flex gap-x-1.5 text-token-text-primary');


if (buttonContainers.length > 0) {
  var buttonContainer = buttonContainers[0];
  

  var highlightButton = document.createElement('div');
  highlightButton.textContent = 'Highlight';
  highlightButton.classList.add('border bg-gray-100 rounded-full');
  

  buttonContainer.appendChild(highlightButton);

}
