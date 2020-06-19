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
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: 'Description of the case',
        options: [
            {
                text: 'First Option',
                setState: {},
                nextText: 2
            },
            {
                text: 'Second Option',
                nextTest: 2
            }
        ]
    }
]

startGame();