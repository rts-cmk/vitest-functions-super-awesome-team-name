/**
 * Beregner summen af to tal.
 * @param {number} a - Det første tal.
 * @param {number} b - Det andet tal.
 * @returns {number} Summen af de to tal.
 */
export function calculateSum(a, b) {
	const calculatedValue = a + b
	return calculatedValue
}

/**
 * Kontrollerer om et tal er et primtal.
 * @param {number} number - Tallet der skal kontrolleres.
 * @returns {boolean} True hvis tallet er et primtal, ellers false.
 */
export function checkIfPrime(number) {
	let isPrime = true

	if (number <= 1) {
		isPrime = false
	} else {
		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				isPrime = false
			}
		}
	}

	return isPrime
}

/**
 * Finder det største tal i en liste.
 * @param {number[]} array - Listen af tal.
 * @returns {number} Det største tal i listen.
 */
export function findMaximumNumber(array) {
	let currentMax = 0

	for (let i = 0; i < array.length; i++) {
		if (array[i] > currentMax) {
			currentMax = array[i]
		}
	}

	return currentMax
}

/**
 * Fjerner dubletter fra en liste.
 * @param {any[]} array - Listen der skal renses for dubletter.
 * @returns {any[]} Listen uden dubletter.
 */
export function removeDuplicateElements(array) {
	let newArray = []

	for (let i = 0; i < array.length; i++) {
		if (!newArray.includes(array[i])) {
			newArray.push(array[i])
		}
	}

	return newArray
}