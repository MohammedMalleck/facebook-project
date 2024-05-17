let objectHover = {};

document.addEventListener('mousemove', (event) => {
    handleHover(event);
});

function handleHover(event){
  document.querySelectorAll('.js-facebook-post-tooltip-holder')
    .forEach((accountNameEl)=>{
      
      const containerRect = accountNameEl.getBoundingClientRect();

      const accountNameTooltipEl = accountNameEl.children[1];

      const leftBoundary = Math.floor(containerRect.left);
      const rightBoundary = Math.floor(containerRect.right);
      const bottomBoundary = Math.floor(containerRect.bottom);

      const currentBoundaryX = event.clientX;
      const currentBoundaryY = event.clientY

      if(
        currentBoundaryX < leftBoundary || 
        currentBoundaryX > rightBoundary ||
        currentBoundaryY > bottomBoundary
        ){
          const elementUniqueClass = accountNameTooltipEl.classList[1];
          objectHover[elementUniqueClass] ? displayTooltip(accountNameTooltipEl) : hideTooltip(accountNameTooltipEl);
      }else {
        accountNameEl.addEventListener('mousemove' ,()=>{
          displayTooltip(accountNameTooltipEl)
        })
      }

      accountNameTooltipEl.addEventListener('mouseenter' , ()=>{
        const elementUniqueClass = accountNameTooltipEl.classList[1];
        objectHover[elementUniqueClass] = true;
      })

      accountNameTooltipEl.addEventListener('mouseleave' , ()=>{
        const elementUniqueClass = accountNameTooltipEl.classList[1];
        objectHover[elementUniqueClass] = false;
      })

    })
}
function displayTooltip(accountNameTooltipEl){
  accountNameTooltipEl.style.opacity = '1';
  accountNameTooltipEl.style.pointerEvents = 'all';
}
function hideTooltip(accountNameTooltipEl){
accountNameTooltipEl.style.opacity = '0';
accountNameTooltipEl.style.pointerEvents = 'none';
}