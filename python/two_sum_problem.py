"""
 this function takes an array and a number S as arguments and determines if any two numbers within the array sum to S
"""

#!/usr/bin/python

def two_sum(arr, S):

	hash_table = {}

	# check each array in array
	for i in range(0, len(arr)):

		# calculate S minus current element
		difference = S - arr[i]

		# check if this number exists in the hash table
		if difference in hash_table:
			return True	

		# add the current number to the hash table
		hash_table[arr[i]] = True

	return False

