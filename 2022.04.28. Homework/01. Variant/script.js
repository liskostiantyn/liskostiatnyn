const createTooltip = (element, text) => {
    const tooltip = document.createElement("div");
    tooltip.classList.add('tooltip');
    tooltip.innerText = text;
    
    document.body.append(tooltip);
       
    const coords = element.getBoundingClientRect();

    let tooltipTop = coords.top - tooltip.offsetHeight - 10;
    let tooltipLeft = coords.left + (coords.width - tooltip.offsetWidth)/2;
    
    tooltip.style.top = tooltipTop + 'px';
    tooltip.style.left = tooltipLeft + 'px';

      
}

const button = document.getElementById("button");
    button.classList.add('button');


const divButton = document.getElementById('div-button');

    divButton.classList.add('div-button')

createTooltip(button, "Це є підказка, яка випливає зверху");


