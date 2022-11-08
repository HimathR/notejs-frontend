# Welcome To NoteJS! 

<p align="center">
  <img src="https://user-images.githubusercontent.com/59962329/200509270-e7b7674d-4e1d-40d0-ba7d-49c4085376d1.png" />
</p>
This is a JavaScript + Markdown editor inspired by Jupyter Notebook. This repository contains the web version of NoteJS which lacks proper data persistence but can still quickly showcase the basic functionalities of the app. 


The app is deployed at the following site: https://notejs.himathsprojects.xyz/

This project is written React + TypeScript with Redux being used for state management. The project also utilises Atlassian's Design system for component styling and modals. Bundling is carried out using ESBuild, allowing for super speedy code execution

The code editor used is the Monaco Editor and includes formatting using prettier, as well as some custom functions. Currently, these include:
* show(variable) which allows users to show a variable in the sandboxed iframe, rather than cumbersomely console logging and checking devtools
* recolor("colour") which allows users to change the colour of the iframe output to their desired choice

Moreover, just like Jupyter notebook, NoteJS can handle consecutive code execution. For example, if you declare a variable in cell A, then you can still access that variable in cell B, allowing for a more convenient user experience. 
NoteJS is also able to handle some basic imports, including previewing of React components and CSS. 

A link to the npx version of this project can be found at this repo. This includes local APIs for data persistence too! 
https://github.com/HimathR/notejs

Anyone can have the npx version running straight away by simply running `npx himath-notejs serve` on a terminal that has npm installed! 

