function createSnow() {
    const container = document.getElementById('snow-container');
    const snowflakes = 75;
    const width = window.innerWidth;
    
    for(let i = 0; i < snowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        
        const leftPos = (width / snowflakes) * i;
        const duration = 5 + Math.random() * 10;
        const size = 8 + Math.random() * 8;
        const delay = Math.random() * 5;
        const opacity = 0.5 + Math.random() * 0.5;
        
        snowflake.style.left = `${leftPos}px`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.opacity = opacity;
        
        container.appendChild(snowflake);
    }
}

document.getElementById('entry-page').addEventListener('click', function() {
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
        document.getElementById('main-profile').classList.add('show-profile');
    }, 500);
});

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.7) {
        const snowflake = document.createElement('div');
        snowflake.className = 'cursor-snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = `${e.clientX}px`;
        snowflake.style.top = `${e.clientY}px`;
        snowflake.style.fontSize = `${10 + Math.random() * 10}px`;
        document.body.appendChild(snowflake);
        
        setTimeout(() => snowflake.remove(), 2000);
    }
});

createSnow();

const bgMusic = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('musicToggle');

document.body.addEventListener('click', () => {
    bgMusic.play().catch(e => console.log("Autoplay blocked:", e));
}, { once: true });

toggleBtn.addEventListener('click', () => {
    bgMusic.muted = !bgMusic.muted;
    toggleBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
});