/**
         * Wrap Text - This function is used to wrap the text based on the max_characters_per_line 
         * @param {Object} context 
         * @param {String} text 
         * @param {Number} x 
         * @param {Number} y 
         * @param {Number} max_characters_per_line 
         * @param {Number} font_size 
         * @param {String} alignment 
         * @param {String} text_color 
         */
export function wrapText(context, text, x, y, max_characters_per_line, font_size , alignment , text_color) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); 
    context.font = `${font_size}px Times New Roman`;
    context.fillStyle = text_color ;
    context.textAlign = alignment; 

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

