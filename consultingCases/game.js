const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while(optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    })
}

function showOption(){
    return true;
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Case Study: BioPharma Expansion',
        options: [
            {
                text: 'Start',
                setState: {},
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Your client is BioPharma, a multinational healthcare company headquartered in the Netherlands',
        options: [
            {
                text: "I'd like to know more about BioPharma's revenue",
                setState: {},
                nextText: 3
            },
            {
                text: "I'd like to know more about BioPharma's cost structure",
                setState: {},
                nextText: 3
            }   
        ]
    },
    {
        id: 3,
        text: "BioPharma's revenue has increased year on year by 12% since 2014",
        options: [
            {
                text: "What about costs?",
                setState: {},
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: "BioPharma's cost structure is shown below in Figure 1",
        options: [
            {
                text: "Here is some stuff",
            }
        ]
    }
]

startGame();