const Assessment = () => {
	/**
	 * #1. Compare two objects to determine if all of the first object’s properties are contained in the second object, and that the values of those properties match; for example, all properties of `person3` below are contained in `person1` below, and those values match, and so `person3` matches `person1` and should be `true`, while `person2` is not contained in `person3`.
	 */

	const step1 = () => {
		const matches = ({ firstObj, secondObj }) => {
			for (const [key, value] of Object.entries(firstObj)) {
				if (value !== secondObj[key]) {
					return false;
				}
			}
			return true;
		}

		const person1 = { age: 25, hair: 'long', beard: true }
		const person2 = { age: 26, hair: 'short', beard: true }
		const person3 = { hair: 'long', beard: true }

		console.log(matches({ firstObj: person1, secondObj: person2 }))
		console.log(matches({ firstObj: person2, secondObj: person3 }))
		console.log(matches({ firstObj: person3, secondObj: person1 }))
	}

	step1()

	/**
	 * #2. Filter out the specified values from a specified array. Return the original array without the filtered values.
	 */

	const step2 = () => {
		const remove = ({ array, values }) => {
				return array.filter( val => {
					if (values.includes(val)) {
						return false;
					}
					return true;
				});
		}
		const values = ['e', 'h', 'z']
		const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		const array2 = ['l', 'o', 'g', 'q', 'z', 'f', 'j', 'r']

		console.log(remove({ array: array1, values }))
		console.log(remove({ array: array2, values }))
	}

	step2()

	/**
	 * #3. Write a function to generate a random hexadecimal color code.
	 */
	const step3 = () => {
		const hex = () => {
			let output = "";
			for (let i = 0; i < 3; i++) {
				// .toString(16) converts a number to a hexadecimal value.
				// The RGB values are calculated separately to ensure the color generated is truly random.
				output += Math.floor(Math.random() * 255).toString(16);
			}
			return output;
		}

		console.log(hex())
	}

	step3()

	/**
	 * #4. Write a function to implement the Luhn Algorithm used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
	 */

	const step4 = () => {
		const luhn = input => {
			// Convert input into an array of strings representing the digits.
			let verificationNum = input.toString().replace(/ /g, "").split("");
			// Double every second digit, counting from the right.
			for (let i = verificationNum.length - 2; i >= 0; i -= 2) {
				let newDigit = Number(verificationNum[i]) * 2;
				// If the doubled digit is greater than 9, subtract 9 (which has the same effect as adding the digits together). 
				if (newDigit > 9) newDigit -= 9;
				verificationNum[i] = newDigit;
			}
			// Convert the remaining digits back to numbers and sum them.
			let total = 0;
			verificationNum.forEach( val => {
				total += Number(val);
			})
			return total % 10 === 0? true : false;
		}

		console.log(luhn('5221320000307276'))
		console.log(luhn(6011329933655299))
		console.log(luhn(123456789))
		console.log(luhn('4242 4242 4242 4242'))
	}

	step4()

	// return <h1>Open developer console to read logs.</h1>
}

Assessment();

// export default Assessment
