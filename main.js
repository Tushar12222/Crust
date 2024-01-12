import init, { run_app } from './pkg/{{crate_name}}.js';
async function main() {
   await init('./pkg/{{crate_name}}_bg.wasm');
   run_app();
}
main()