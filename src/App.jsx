import React,{useEffect, useRef,useState} from 'react';
import Caption from './components/Caption';
import CTA from './components/CTA';
import Color from './components/Color';
import UploadImage from './components/UploadImage';
const App = () => {
  const canvasRef = useRef(null); 
  const [color,setColor]=useState('#000000');
  
  
  return (

    <div className=" lg:px-20 md:px-16 px-10 lg:py-20 md:py-16 py-10">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="relative flex items-center justify-center ">
          <canvas
            id="backgroundCanvas"
            height="1080"
            width="1080"
            className={`absolute z-0 w-full h-full bg-$[${color}]`}
          ></canvas>
          <canvas ref={canvasRef} height="1080" width="1080" className={`w-full h-full bg-[${color}] z-10`}></canvas>
        </div>
        <div className="mb-10 lg:pr-5 lg:mb-0 p-10 flex flex-col-reverse items-center justify-center gap-y-10">
          <div className='flex flex-col-reverse w-full gap-y-10 '>

          <Color canvasRef={canvasRef} color={color} setColor={setColor}/>
          
          <CTA
           canvasRef={canvasRef}
           ctaData={
             {
               text: "Shop Now",
               position: {
                 x: 190,
                 y: 320
                },
                text_color: "#FFFFFF",
                background_color: "#000000"
              }
            }/>
          <Caption
            canvasRef={canvasRef}
            captionData={{
              text: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
              position: { x: 50, y: 50 },
              max_characters_per_line: 31,
              font_size: 44,
              alignment: "left",
              text_color: "#FFFFFF"
            }}
            color={color}
          />
          </div>
          <div className='text-center space-y-20 w-full'>
            <div className='space-y-5 w-full'>
              <h1 className='font-bold text-xl'>Ad Customisation</h1>
              <h3>Customisation your ad and get the templates accordingly </h3>
              <UploadImage canvasRef={canvasRef} color={color}/>
            </div>
          <div className='w-full h-[0.5px] bg-slate-300 flex items-center justify-center'>
              <h1 className='bg-white p-5'>Edit contents</h1>
          </div>
          </div>
          
          
            
        </div>

      </div>
    </div>
  );
};

export default App;