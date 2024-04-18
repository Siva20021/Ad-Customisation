import React,{useRef} from 'react';
import Caption from './components/Caption';
// import CTA from './components/CTA';

const App = () => {
  const canvasRef = useRef(null); 
  return (

    <div className=" lg:px-20 md:px-16 px-10 lg:py-20 md:py-16 py-10">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="relative  bg-purple-400 flex items-center justify-center ">
        <canvas ref={canvasRef} height="1080" width="1080" className='w-full h-full'></canvas>
        </div>
        <div className="mb-10 lg:pr-5 lg:mb-0 p-10 flex flex-col items-center">
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
          />
          {/* <CTA
           canvasRef={canvasRef}
           captionData={
            {
              text: "Shop Now",
              position: {
                x: 190,
                y: 320
              },
              text_color: "#FFFFFF",
              background_color: "#000000"
            }
           }/> */}
        </div>

      </div>
    </div>
  );
};

export default App;