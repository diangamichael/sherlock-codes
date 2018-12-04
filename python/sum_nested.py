# this program finds the sum of a given array, the array can also contain nested arrays

def sumNested(arr):
	# the value to hold the summation
	result = 0

	# iterate through the array
	for i in range(0, len(arr)):
		# if the element is a nested array use a recursive function to find the sum independently
		if (type(arr[i]) is not int):
			result += sumNested(arr[i])
		else:
			result += arr[i]
	return result

