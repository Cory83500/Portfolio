var divElement = document.getElementById('viz1698789264583');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='1016px';
vizElement.style.height='1014px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);