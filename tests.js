import createUID from "./index.js";

const idGenerator = createUID();

let ids = new Map();

let startTime = performance.now();

[...Array(1e4)].map(() => {
	const id = idGenerator.generate();
    ids.set(id, id);
});

console.log(
	`Generated ${1e4} Unique ids in ${performance.now() - startTime}ms`
);

