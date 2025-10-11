import React, { useEffect, useRef, useState } from 'react'
import "./DotsBackGround.css"


export default function DotsBackGround() {
    const canvasRef = useRef(null);
    const [LastPath, setLastPath] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");
        const dotSize = 8;
        const gap = 20;

        const dotCountX = Math.round(canvas.width / (dotSize + gap));
        const dotCountY = Math.round(canvas.height / (dotSize + gap));
        const dotMoveVal = 20;



        let mouse = { x: 0, y: 0 };

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let y = gap; y < canvas.height; y += gap) {
                for (let x = gap; x < canvas.width; x += gap) {

                    const dist = Math.hypot(mouse.x - x, mouse.y - y);
                    const maxDist = 150;
                    const t = Math.max(0, 1 - dist / maxDist);
                    const offsetx = ((canvas.width - dotCountX * (dotSize + gap)) / 2 + t * dotMoveVal);
                    const offsety = ((canvas.height - dotCountY * (dotSize + gap)) / 2 + t * dotMoveVal);

                    ctx.beginPath();
                    ctx.arc(x + offsetx, y + offsety, dotSize / 2, 0, Math.PI * 2);
                    if (LastPath != null) {
                        LastPath.fillStyle = (`rgb(${39 + 1 * 50},${30 - 1 * 9},${55 + 1 * 200})`)
                        LastPath.fill();
                    }
                    ctx.fillStyle = (`rgb(${39 + t * 50},${30 - t * 9},${55 + t * 200})`)
                    ctx.fill();
                    setLastPath(ctx);
                }
            }
            requestAnimationFrame(drawGrid);
        }
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        resize();
        drawGrid();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMove);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMove);
        };
    }, [])


    return (
        <canvas className='canvas-class'
            ref={canvasRef}
        >

        </canvas>
    )
}
