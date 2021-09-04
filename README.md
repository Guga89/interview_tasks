# interview_tasks
tasks completed

**Task 1**

Input format
Input is a list of strings.
Each string in the list contains the same first 4 characters, and the last 2 characters are all different.
Each string in the list is 6 characters long.
Example:
658101
658102
658103
658104
658105
658106
Instructions
Write a method that takes a parameter structured as above input and returns a result formatted as below expected output format.
Method can be written in any language, or pseudo-code.
Expected output format
Method returns a string that concatenates the first 4 characters with each last 2 characters from the list.

Example:
658101 02 03 04 05 06


**Task 2**

Input format
Input is a list of strings.
The list contains one or more blocks, each block contains one or more strings formatted the same way as exercise 1.
Example:
658101
658102
658103
658104
658105
658106
658201
658202
658203
658301
658302
658303
658305
Instructions
Write a method that takes a parameter structured as above input and returns a result formatted as below expected output format.
Method can be written in any language, or pseudo-code.
You may re-use the function from exercise 1 to complete this exercise.
Expected output: 
Method returns a string that concatenates each block separately, the same way as exercise 1, and concatenates the result for each block together with the ‘+’ character.
Example:
658101 02 03 04 05 06+658201 02 03+658301 02 03 05
