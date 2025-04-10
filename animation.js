function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 60;
    
    const colors = [
        'rgba(107, 172, 204, 0.8)',
        'rgba(255, 255, 255, 0.9)',
        'rgba(125, 178, 122, 0.7)',
        'rgba(213, 97, 226, 0.6)'
    ];
    
    for(let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = 2 + Math.random() * 5;
        const posX = Math.random() * 100;
        const duration = 25 + Math.random() * 30;
        const delay = Math.random() * 20;
        const opacity = 0.4 + Math.random() * 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${100 + (Math.random() * 10)}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = '50%';
        
        if(Math.random() > 0.8) {
            particle.classList.add('glow');
        }
        
        container.appendChild(particle);
    }
}


function createLeaves() {
    const container = document.getElementById('particles-container');
    const leaves = 60;
    
    const leafTypes = ['🍃', '🍂', '🌿', '🍁'];
    const colors = ['#7db27a', '#d561e2', '#6baccc', '#ffffff'];
    
    const columns = 6;
    const rows = 7;
    const colWidth = 100 / columns;
    const rowHeight = 100 / rows;
    
    for(let i = 0; i < leaves; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.innerHTML = leafTypes[i % leafTypes.length];
        
        const col = i % columns;
        const row = Math.floor(i / columns) % rows;
        const leftPos = (col * colWidth) + (Math.random() * colWidth * 0.8);
        const duration = 10 + Math.random() * 15; 
        const delay = Math.random() * 10; 
        const size = 14 + Math.random() * 10;
        const color = colors[i % colors.length];
        
        leaf.style.left = `${leftPos}%`;
        leaf.style.top = `${-10 - (row * rowHeight)}%`;
        leaf.style.animationDuration = `${duration}s`;
        leaf.style.animationDelay = `${delay}s`;
        leaf.style.fontSize = `${size}px`;
        leaf.style.color = color;
        leaf.style.filter = `hue-rotate(${Math.random() * 30}deg)`;
        
        container.appendChild(leaf);
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
    if (Math.random() > 0.95) { 
        const leaf = document.createElement('div');
        leaf.className = 'leaf cursor-leaf';
        const leafTypes = ['🍃', '🍂', '🌿', '🍁'];
        leaf.innerHTML = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        leaf.style.left = `${e.clientX}px`;
        leaf.style.top = `${e.clientY}px`;
        leaf.style.fontSize = `${8 + Math.random() * 10}px`;
        leaf.style.animationDuration = '2s'; 
        document.body.appendChild(leaf);
        
        setTimeout(() => leaf.remove(), 2000); 
    }
});

createParticles();
createLeaves();

const bgMusic = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('musicToggle');

document.body.addEventListener('click', () => {
    bgMusic.play().catch(e => console.log("Autoplay blocked:", e));
}, { once: true });

toggleBtn.addEventListener('click', () => {
    bgMusic.muted = !bgMusic.muted;
    toggleBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
});
