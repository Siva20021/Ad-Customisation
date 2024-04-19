import React,{useState,useEffect} from 'react'
import { modifyImage } from '../utils';

const UploadImage = ({canvasRef,color}) => {
    const [image,setImage]=useState(null);
    console.log(image);
    useEffect(()=>{
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if(image!=null){
        modifyImage(context,image);
      }
    },[image,color,canvasRef]);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        const reader = new FileReader();
    
        reader.onload = () => {
          const img = new Image();
          img.onload = () => setImage(img);
          img.src = reader.result;
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      }
  return (
    <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none p-2"
        id="file_input"
        type="file"
        accept='image/*'
        onChange={handleImageChange}
    />
  )
}

export default UploadImage