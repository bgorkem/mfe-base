export default function (url, rootNode) {
  const iFrame = document.createElement('iframe');
  iFrame.setAttribute('src', url);
  iFrame.style.width = '640px';
  iFrame.style.height = '480px';
  rootNode.appendChild(iFrame);
}
