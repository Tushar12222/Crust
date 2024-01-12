## To start using the starter template:

1) ### Run command:
``` 
cargo generate --git https://github.com/Tushar12222/Crust
```
2) ### Then you will be prompted for the project name and extension name.
3) ### Thats it!!! You can start building your extension.
4) ### To build the extension run command:
```
wasm-pack build --target web
```
5) ### To test the extension head over to "chrome://extensions". Toggle developer mode. Select "Load unpacked". Select the root directory.
6) ### Voila!!! There you go you have a working extension written in rust.
7) ### To develop the extension , run command: (make sure node and npm are installed)
```
npm run setup
```
8) ### Make sure to comment the following code while serving with trunk (during development):
```
[lib]
crate-type = ["cdylib"]
```
9) ### To build the extension , revert change mentioned in point (8) and run command:
```
npm run prod
```
