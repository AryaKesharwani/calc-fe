import { useRef, useState,useEffect } from "react";
import { SWATCHES } from "@/constants";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color,setColor] = useState('rgb(255,255,255)');
  const [reset,setReset] = useState(false);

  useEffect(()=>{
    if(reset){
      
    }
  })

  useEffect(()=>{
    const canvas = canvasRef.current;
    if(canvas){
      const ctx = canvas.getContext("2d");
      if(ctx){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight - canvas.offsetTop;
        ctx.lineCap = "round";
        ctx.lineWidth = 3;
      }
    }
  },[])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.background = color;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };


  const draw = (e:React.MouseEvent<HTMLCanvasElement>) => {
    if(!isDrawing) return;
    const canvas = canvasRef.current;
    if(canvas){
      const ctx = canvas.getContext("2d");
      if(ctx){
        ctx.strokeStyle = "white";
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="absolute top-0 left-0 w-full h-full"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    />
  );
};

export default Home;
