# README
## Enviroments
- NodeJS version: v16.13.1

## How To Run
  In the project root.
1. Part A: `node partA.js` to see the result. [result: `665321`]
2. Part B: `node partB.js` to see the result.

## Questions

### 1. Part A
By starting at the top of the triangle and moving to adjacent numbers on the row below, the maximum total from top to bottom is 27.

   5 
  9 6
 4 6 8  
0 7 1 5
i.e. 5 + 9 + 6 + 7 = 27.

Write a program using a language of your choice to find the maximum total from top to bottom in a text file containing a triangle with 100 rows.

The data file can be accessed here.

### 2. Part B
The sentence A quick brown fox jumps over the lazy dog contains every single letter in the alphabet. Such sentences are called pangrams.

You are to write a method GetMissingLetters using a language of your choice, which takes a String, a sentence, and returns all the letters it is missing (which prevent it from being a pangram).

You should ignore the case of the letters in sentence, and your return should be all lower case letters, in alphabetical order. You should also ignore all non US-ASCII characters.

The code you submit must contain a method that conforms to the expected method signature, as follows:

Public Class: MissingLetters

Method signature: public String GetMissingLetters(String sentence)

