## To start using the starter template:

### :mega: (Only Windows) In case you get a build error, add the root folder to the exclusion list of the windows defender.

1) ### Run command:
``` 
cargo generate --git https://github.com/Tushar12222/Crust
```
2) ### Then you will be prompted for the project name and extension name.
3) ### Run the command:
```
npm install
```
4) ### Thats it!!! You can start building your extension.
5) ### To run the development server:
```
npm run dev
```

6) ### To build the extension and test it on chrome , run command:
```
npm run prod
```
7) ### Then add the manifest.json (present in the root) to the dist folder generated.
8) ### Open index.html and move the content within the script tag to another new file within dist named "init.js".
9) ### To the script tag add the following attribute:
```
src="init.js"
```
10) ### Make sure nothing is present within the script tag once you have moved the contents to init.js.
11) ### Remove the attribute "integrity="hash"" from the two link tags present in the head of index.html.
12) ### Then head over to:
```
chrome://extensions
```
13) ### Toggle the developer mode on.
14) ### Select the "Load Unpacked" option.
15) ### Select the dist folder within your root directory.
16) ### Voila!!! YOu have your extension on chrome.
 