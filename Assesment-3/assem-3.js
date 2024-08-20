const changeButton = document.getElementById('changeButton');
const displayText = document.getElementById('displayText');
const container = document.getElementById('colorBox');
const displayText1=document.getElementById('textdiscrip');
let isOriginal = true;

changeButton.addEventListener('click', () => {
    if (isOriginal) {
        container.style.backgroundColor = '#7fffd4';
        container.style.borderColor = '#20b2aa';
        displayText.textContent = 'My Current Status';
        displayText1.textContent='Hello, I am Student of VFSTR. I am pursuing CSE.'; 
        displayText.style.color='blue';
        displayText1.style.color='blue';
        changeButton.textContent = 'Press Again!';
        changeButton.style.backgroundColor = '#20b2aa';
        changeButton.style.borderColor = '#fff';
    } else {
        container.style.backgroundColor = '#ffb6c1';
        container.style.borderColor = '#ff69b4';
        displayText.textContent = 'About me';
        displayText1.textContent='Hi, I am Dinesh Gupta. I am from Lumbini, NEPAL.';
        displayText.style.color='white';
        displayText1.style.color='white';
        changeButton.textContent = 'Press Me!';
        changeButton.style.backgroundColor = '#ff69b4';
        changeButton.style.borderColor = '#fff';
    }
    isOriginal = !isOriginal;
});