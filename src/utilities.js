export const drawRect = (detections, ctx) => {
    detections.forEach(predections => {
        const [x,y,w,h] = predections['bbox'];
        const text = predections['class'];

        const color = 'green';
        ctx.strokeStyle = color;
        ctx.font = '24px Arial';
        ctx.fillStyle = color;

        ctx.beginPath()
        ctx.fillText(text, x , y);
        ctx.rect(x,y,w,h);
        ctx.stroke();

    })
}