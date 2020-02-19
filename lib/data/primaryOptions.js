const options = [
	{ value: "add", name: "add" },
	{ value: "commit", name: "commit" },
	{ value: "revert", name: "revert/reset" },
	{ value: "initialize", name: "initialize" },
	{ value: "modify", name: "modify" },
	{ value: "show", name: "show/view" },
	{ value: "delete", name: "delete/remove" },
	{ value: "compare-two-commits", name: "compare two commits" },
	{ value: "configure", name: "configure" },
	{ value: "clone", name: "clone" },
	{ value: "ignore", name: "ignore" },
	{ value: "rename", name: "rename" },
	{ value: "merge", name: "merge" },
	{ value: "squash", name: "squash" },
	{ value: "stash", name: "stash" },
	{ value: "debug", name: "debug" },
	{ value: "recover", name: "recover" },
	{ value: "synchronize", name: "synchronize" },
	{ value: "rebase", name: "rebase" }
];

module.exports = options.sort((x, y) => {
	if (x.value < y.value) {
		return -1;
	}
	if (x.value > y.value) {
		return 1;
	}
	return 0;
});
