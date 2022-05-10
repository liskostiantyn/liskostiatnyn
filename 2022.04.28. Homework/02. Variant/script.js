const createTooltip = (element, text) => {
    const tooltip = document.createElement("div");
    tooltip.classList.add('tooltip');
    tooltip.innerText = text;
    
     
    const coords = element.getBoundingClientRect();

    let tooltipTop = coords.top - tooltip.offsetHeight - 50;
    let tooltipLeft = coords.left - (coords.width - tooltip.offsetWidth)/2;

    tooltip.style.top = tooltipTop + 'px';
    tooltip.style.left = tooltipLeft + 'px';

    document.getElementById("button").addEventListener("mouseover", function(event) {
        event.target.style = document.body.append(tooltip);
    });

    document.getElementById("button").addEventListener("mouseout", function() {
        if (tooltip) {
        tooltip.remove();
        }
    });
   
}

const button = document.getElementById("button");
    button.classList.add('button');


const divButton = document.getElementById('div-button');

    divButton.classList.add('div-button')

createTooltip(button, "Це є підказка, яка випливає зверху");


