/**
         * Wrap Text - This function is used to wrap the text based on the max_characters_per_line 
         * @param {Object} context 
         * @param {String} text 
         * @param {Number} x 
         * @param {Number} y 
         * @param {Number} max_characters_per_line 
         * @param {Number} font_size 
         */
export function wrapText(context, text, x, y, max_characters_per_line, font_size ) {
    

    let words = text.split(' ');
    let line = '';
    let count = 0; // Count of characters in the current line
    for (let i = 0; i < words.length; i++) {
       
        if (count + words[i].length + 1 <= max_characters_per_line) {
            line += words[i] + ' '; 
            count += words[i].length + 1; 
        } else {
            context.fillText(line, x, y); 
            line = words[i] + ' ';
            y += font_size+10; 
            count = words[i].length + 1; 
        }
    }
    if (line.trim() !== '') {
        context.fillText(line, x, y);
    }
}

/**
 * modifyCaption - This function is used to modify the caption on the canvas
 * @param {*} context 
 * @param {*} text 
 * @param {*} x 
 * @param {*} y 
 * @param {*} max_characters_per_line 
 * @param {*} font_size 
 * @param {*} alignment 
 * @param {*} text_color 
 */
export const modifyCaption = (context, text , x, y, max_characters_per_line, font_size , alignment , text_color, color)=>{
    context.clearRect(x, y-font_size,max_characters_per_line*font_size*0.6, 200);
    const backgroundCanvas = document.getElementById('backgroundCanvas'); // Assuming the ID of the background canvas is 'backgroundCanvas'
    if (backgroundCanvas) {
        const backgroundContext = backgroundCanvas.getContext('2d');
        backgroundContext.fillStyle = color;
        backgroundContext.fillRect(x, y-font_size,max_characters_per_line*font_size*0.6, 200);
    }
    context.font = `${font_size}px Times New Roman`;
    context.fillStyle = text_color;
    
    context.textAlign = alignment; 
    wrapText(context, text, x, y, max_characters_per_line,font_size);
}

/**
 * clearRoundedButton Area - This function is used to clear the rounded button area
 * @param {Object} context 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} width 
 * @param {Number} height 
 * @param {Number} cornerRadius 
 */
const clearRoundedButtonArea = (context, x, y, width, height, cornerRadius) => {
    context.beginPath();
    context.moveTo(x + cornerRadius, y);
    context.lineTo(x + width - cornerRadius, y);
    context.arcTo(x + width, y, x + width, y + cornerRadius, cornerRadius);
    context.lineTo(x + width, y + height - cornerRadius);
    context.arcTo(x + width, y + height, x + width - cornerRadius, y + height, cornerRadius);
    context.lineTo(x + cornerRadius, y + height);
    context.arcTo(x, y + height, x, y + height - cornerRadius, cornerRadius);
    context.lineTo(x, y + cornerRadius);
    context.arcTo(x, y, x + cornerRadius, y, cornerRadius);
    context.closePath();
    context.clearRect(x +10, y, width-40, height);
};

/**
 * modifyCTA - This function is used to modify the CTA on the canvas
 * @param {Object} context 
 * @param {Number} text 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} max_characters_per_line 
 * @param {Number} font_size 
 * @param {String} alignment 
 * @param {String} text_color 
 * @param {String} background_color 
 */
export const modifyCTA = (context, text, x, y, max_characters_per_line, font_size, alignment, text_color, background_color) => {
    // Clear the area for the button
   
    // Draw rounded rectangle for the button background
    const buttonWidth = max_characters_per_line * font_size * 0.6;
    const buttonHeight = ((font_size*1.6)>(Math.ceil((text.length / max_characters_per_line)) + 0.6) * font_size)?(font_size*1.6):(Math.ceil((text.length / max_characters_per_line)) + 0.6) * font_size;
    const cornerRadius = 10; // Adjust as needed
    clearRoundedButtonArea(context, x - ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size, buttonWidth, buttonHeight, cornerRadius);
    context.beginPath();
    context.moveTo(x - ((max_characters_per_line) / 2 * font_size * 0.6) + cornerRadius, y - font_size);
    context.lineTo(x + ((max_characters_per_line) / 2 * font_size * 0.6) - cornerRadius, y - font_size);
    context.arcTo(x + ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size, x + ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size + cornerRadius, cornerRadius);
    context.lineTo(x + ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size + (Math.ceil((text.length / max_characters_per_line)) + 0.6) * font_size - cornerRadius);
    context.arcTo(x + ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size + (Math.ceil((text.length / max_characters_per_line)) + 0.6) * font_size, x + ((max_characters_per_line) / 2 * font_size * 0.6) - cornerRadius, y - font_size + (Math.ceil((text.length / max_characters_per_line)) + 0.6) * font_size, cornerRadius);
    context.lineTo(x - ((max_characters_per_line) / 2 * font_size * 0.6) + cornerRadius, y - font_size + (Math.ceil((text.length / max_characters_per_line)) + 0.6) * font_size);
    context.arcTo(x - ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size + (Math.ceil((text.length / max_characters_per_line)) + 0.6) * font_size, x - ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size + (Math.ceil((text.length / max_characters_per_line)) + 0.6) * font_size - cornerRadius, cornerRadius);
    context.lineTo(x - ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size + cornerRadius);
    context.arcTo(x - ((max_characters_per_line) / 2 * font_size * 0.6), y - font_size, x - ((max_characters_per_line) / 2 * font_size * 0.6) + cornerRadius, y - font_size, cornerRadius);
    context.closePath();
    
    context.fillStyle = text_color;
    context.fill();

    // Draw text on the button
    context.fillStyle = background_color;
    context.font = `${font_size}px Times New Roman`;
    context.textAlign = alignment;
    wrapText(context, text, x, y, max_characters_per_line, font_size);
};

/**
 * modifyImage - This function is used to modify the image on the canvas
 * @param {*} context 
 * @param {*} image 
 */
export const modifyImage = (context , image)=>{
        context.clearRect(56, 442, 970, 600);
        const patternImage = new Image();
        patternImage.onload = () => {
          context.drawImage(patternImage, 56, 442, 970, 600);
        };
        patternImage.src = "./pattern.png";
        context.drawImage(image, 56, 442, 970, 600);
        const strokeImage = new Image();
        strokeImage.onload = () => {
         context.drawImage(strokeImage, 56, 442+600, 970, 600);
        };
        strokeImage.src = "./stroke.png";
}

