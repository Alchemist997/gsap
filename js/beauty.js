let s1Blocks = document.querySelectorAll('.s1__block');
let beauty = document.querySelector('#beauty');
let beautyCount = 0;
beauty.addEventListener('click', () => {
    beautyCount++;
    if (beautyCount >= 5) {
        alert('Переход в красивый режим :)')
        s1Blocks.forEach(block => {
            block.style.display = 'none';
            block.style.paddingTop = '320px';
        });
    }
});