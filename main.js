import init, { run_app } from './pkg/{{crate_name}}.js';
async function main() {
   await init('./pkg/{{crate_name}}.wasm');
   run_app();
}
main()