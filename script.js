function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
}
setInterval(updateClock, 1000);
updateClock();

function toggleWin(id) {
    const win = document.getElementById(id);
    win.style.display = (win.style.display === 'none' || win.style.display === '') ? 'block' : 'none';
}

const text = "Carregando evolução sustentável 2026...";
let i = 0;
function typeWriter() {
    const el = document.getElementById("typed");
    if (el && i < text.length) { el.innerHTML += text.charAt(i); i++; setTimeout(typeWriter, 50); }
}
setTimeout(typeWriter, 1000);

document.querySelectorAll('.title-bar').forEach(header => {
    header.onmousedown = function(e) {
        let win = header.parentElement;
        let ox = e.clientX - win.offsetLeft;
        let oy = e.clientY - win.offsetTop;
        win.style.zIndex = 1000;
        document.onmousemove = function(e) {
            win.style.left = e.clientX - ox + 'px';
            win.style.top = e.clientY - oy + 'px';
        };
        document.onmouseup = function() { document.onmousemove = null; };
    };
});