// --- FUNÇÃO RELÓGIO ---
function updateClock() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" + 
                 now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').innerText = time;
}
setInterval(updateClock, 1000);
updateClock();

// --- FUNÇÃO FECHAR/ABRIR JANELA ---
function toggleWin(id) {
    const win = document.getElementById(id);
    if (win.style.display === 'none' || win.style.display === '') {
        win.style.display = 'block';
    } else {
        win.style.display = 'none';
    }
}

// --- EFEITO DE DIGITAÇÃO NO TERMINAL ---
const text = "A agricultura do futuro começa aqui no Paraná. Carregando modo sustentável...";
let i = 0;
function typeWriter() {
    const typedElement = document.getElementById("typed");
    if (typedElement && i < text.length) {
        typedElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
setTimeout(typeWriter, 1500);

// --- LÓGICA DE ARRASTAR JANELAS (DRAG & DROP) ---
document.querySelectorAll('.title-bar').forEach(header => {
    header.onmousedown = function(event) {
        let win = header.parentElement;
        let shiftX = event.clientX - win.getBoundingClientRect().left;
        let shiftY = event.clientY - win.getBoundingClientRect().top;

        win.style.zIndex = 1000;

        function moveAt(pageX, pageY) {
            win.style.left = pageX - shiftX + 'px';
            win.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.clientX, event.clientY);
        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };
    
    header.ondragstart = function() { return false; };
});