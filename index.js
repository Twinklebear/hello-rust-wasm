function run() {
	console.log("hi");
	wasm_bindgen.greet();
}

wasm_bindgen("pkg/hello_wasm_bg.wasm").then(o => {
	wasm_bindgen = o;
	run()
});

