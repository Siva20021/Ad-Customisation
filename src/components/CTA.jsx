import React,{useEffect,useState} from 'react'
import { modifyCTA } from '../utils';

const CTA = ({ ctaData ,canvasRef ,max_characters_per_line=20 , alignment = "center", font_size =30}) => {
    const [cta,setCta]=useState(ctaData?.text ?? '');
    useEffect(() => {
        // This condition is to check whether currentRef of the canvas is null or not . In case if it is passed before calling of Canvas 
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
       
        const { position , background_color , text_color } = ctaData;
        
        const { x, y } = position;
        modifyCTA(context, cta, x, y, max_characters_per_line, font_size, alignment, text_color , background_color);
        
    }, [cta, ctaData, canvasRef]);
  return (
    <label
            htmlFor="CTA"
            className="relative block w-full overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
            <input
                id="CTA"
                placeholder="CTA"
                type="text"
                value={cta}
                onChange={(e) => setCta(e.target.value)}
                maxLength={20}
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
                CTA
            </span>
        </label>
  )
}

export default CTA

