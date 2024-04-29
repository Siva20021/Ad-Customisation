# AD Customisation 

## Overview
This project is a simple canvas-like editor implemented using React for the UI and vanilla HTML Canvas with Classes and OOP concepts for the canvas functionality. Users can select an image to be placed within a mask on the canvas, change the caption text, modify the call to action (CTA) text, and adjust the background color of the template.

## Features
- Users can select an image to be placed within a mask on the canvas.
- Caption text can be changed by the users.
- Call to action (CTA) text can be modified with a text input.
- Users can change the background color of the template.
- The canvas implementation is done using Classes and OOP concepts.
- No external libraries like fabric.js are used.
- The UI is designed using React functional components.
- Tailwind CSS is used for styling.

## Template JSON Data
The template data is provided in JSON format, including information about the caption, CTA, image mask, and URLs for mask, mask stroke, and design pattern.

## Instructions
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm start`.
4. Open your browser and navigate to `http://localhost:3000`.

## Canvas Implementation Logic
The canvas height and width are set to 1080px * 1080px, and CSS or inline styles are used to scale down the canvas for display. The original canvas dimensions are kept as 1080 x 1080. The canvas functionality is implemented using OOP concepts and Classes.

## Template Data Breakdown
- **Caption**: The main caption text within the image.
  - Text
  - Position
  - Font Size
  - Alignment
  - Text Color
  - Max Characters Per Line

- **CTA**: The call to action part of the template.
  - Text
  - Position
  - Font Size
  - Text Color
  - Background Color
  - Wrap Length

- **Image Mask**: The mask area within which the user-selected image is displayed.

- **URLs**: URLs for mask, mask stroke, and design pattern.

Preview 



- **Template Background**: The default background color and the option for users to change it.


## Order of Elements
Elements are considered as layers, with the background color being the first layer and the text being the last layer. The order of elements is: background color < design pattern < mask < mask stroke < text.
