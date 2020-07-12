"use strict";
const perf_hooks = require("perf_hooks");

// the bug occurs when mapping1 has similar keys to the following object, but random keys of a similar structure did not show the regression.
const mapping1 = {
	J316_123U_123O: null,
	J316_123U_EAZO: null,
	J316_696U_696O: null,
	J316_234U_234O: null,
	J316_787U_787O: null,
	K671_EB2U_EAZO: null,
	K671_EN2U_EAZO: null,
	K673_EN2U_EAZO: null,
	K673_EN3_EAZ: null,
	K673_EN2U_EDAO: null,
	K673_EN2_EAZ: null,
	K673_EN2_EDA: null,
	K673_EN3U_EAZO: null,
	K6739_EN2U_EAZO: null,
	K6739_EN2U_EDAO: null,
	K6739_EN3U_EAZO: null,
	A453_EN2U_EAZO: null,
	L982_123U_123O: null,
	L982_787U_787O: null,
	L986_123U_123O: null,
	L986_234U_234O: null,
	L986_787U_787O: null,
	G632_EN2U_EAZO: null,
	G632_EN2U_EDAO: null,
	G632_EN2U_EBZO: null,
	G632_ER2U_EBZO: null,
	G632_EN3U_EAZO: null,
	G6329_EN2U_EAZO: null,
	G6329_EN2U_EDAO: null,
	G6329_ER2U_EBZO: null,
	G6329_EN3U_EAZO: null,
	R952_149U_undefined1: null,
	R952_123U_123O: null,
	R952_123U_EAZO: null,
	R952_123_undefined2: null,
	R952_696U_696O: null,
	R952_234U_234O: null,
	R952_234U_EDAO: null,
	R952_234_undefined3: null,
	R952_787U_787O: null,
	R952_787U_undefined4: null,
	R952_787_undefined: null,
	R952_775U_undefined5: null,
	Z846_123U_123O: null,
	Z846_123U_undefined6: null,
	Z846_123_undefined: null,
	Z846_234U_234O: null,
	Z846_234_undefined7: null,
	Z846_787U_787O: null,
	Z846_787U_undefined8: null,
	Z846_787_undefined9: null,
	Z847_149U_undefined1: null,
	Z847_775U_undefined2: null,
	R952_234U_XXXO: null,
	W242_123U_undefined3: null,
	Z847_787U_undefined4: null,
	W246_123U_undefined5: null,
	W242_787U_undefined6: null,
	J316_787U_undefined7: null,
	W246_787U_undefined8: null,
	R952_123U_undefined9: null,
	R952_234U_undefined1: null,
	J316_696U_undefined2: null,
	J316_123U_undefined3: null,
	R952_696U_undefined4: null,
	J316_234U_undefined5: null,
	J316_149U_undefined6: null,
};
const mapping2 = {};
for (let i = 0; i < 100; i++) {
	// the bug occurs when mapping2 has non trivial keys i.e. "1" or 1 as keys don't expose this.
	// mapping2[i.toString()] = null;
	mapping2[`obj_${i} `] = null;
}
const start = perf_hooks.performance.now();
for (let i = 0; i < 2500; i++) {
	const _mapping = { ...mapping1, ...mapping2 };
}
console.log(`duration: ${(perf_hooks.performance.now() - start) / 1e3} `);
