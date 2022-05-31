/**
 * EZuid
 *
 */

function createUID(minLen = 1) {
	let tries = 0;
	let charLen = minLen;;
	let usedChars = [];

	const POSSIBILITIES = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
		'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
		'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
		'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
		'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
		'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
		'w', 'x', 'y', 'z', '_'
	  ];

	function generate() {
		let result = "";

		[...Array(charLen)].forEach(
			() => (result += POSSIBILITIES[Math.floor(Math.random() * 53)])
		);

		if (usedChars.includes(result)) {
			tries++;

			if (tries > 10) {
				charLen++;
				tries = 0;
			}

			return generate();
		}

		usedChars.push(result);

		return result;
	}

	return {
		generate,
	};
}

export default createUID;
