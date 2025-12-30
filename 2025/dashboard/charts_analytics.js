document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('trafficCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Draw background grid
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 1;
    for (let y = 40; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Draw sparkline curve
    const points = [50, 75, 60, 110, 95, 140, 130, 175, 160, 210];
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    points.forEach((val, idx) => {
        const x = (canvas.width / (points.length - 1)) * idx;
        const y = canvas.height - val;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
});
