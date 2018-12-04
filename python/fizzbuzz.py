"""
this program prints all the numbers between 1 and n, but replaces every number divisible by 3 with the word 'fizz', every number divisible by 5 with the word 'buzz' and every number divisible by both 3 and 5 by the word 'Fizzbuzz'
"""

#!/usr/bin/python

def fizzbuzz(n):

	#loop from 1 to n
	for i in range(1, n + 1):
		
		#if i is divisible by both 3 and 5
		if ((i % 3 == 0) and (i % 5 == 0)):
			print 'fizzbuzz'

		#if i is divisible by 3
		elif (i % 3 == 0):
			print 'fizz'

		#if i is divisible by 5
		elif (i % 5 == 0):
			print 'buzz'

		#if i is not divisible by 3 or 5 print the number
		else:
			print i



