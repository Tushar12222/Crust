## To start using the starter template:

1) ### Run command:
``` 
cargo generate --git https://github.com/Tushar12222/Crust
```
2) ### Then you will be prompted for the project name and extension name.
3) ### Thats it!!! You can start building your extension.
4) ### To run the development server:
```
npm run dev
```
5) ### To build the extension and test it on chrome , run command:
```
npm run prod
```
6) ### Then add the manifest.json (present in the root) to the dist folder generated.
7) ### Open index.html and move the content within the script tag to another new file within dist named "init.js".
8) ### To the script tag add the following attribute:
```
src="init.js"
```
9) ### Make sure nothing is present within the script tag once you have moved the contents to init.js.
10) ### Remove the attribute "integrity="hash"" from the two link tags present in the head of index.html.
11) ## Then head over to:
```
chrome://extensions
```
12) ### Toggle the developer mode on.
13) ### Select the "Load Unpacked" option.
14) ### Select the dist folder within your root directory.
15) ### Voila!!! YOu have your extension on chrome.
 