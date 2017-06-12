Word Count
==========

A javascript app that counts occurrences of each word given a txt file and displays result. Also displays wether the number of times each word appears is a prime number.

My Approach
===========

## User Stories

```
(Output words and count)
As a user,
so that I can see the number of times a word appears in a given txt file,
I want to be able to print out the individual words and how many times it appears.

(Prime number?)
As a user,
so that I can get a better understanding of the amount of times a word appears,
I want to know if the number of times a word appears is a prime number.
```

## Pseudo-Code for algorithm

### Part 1
Use basic examples not txt file, but be aware of how txt will translate
Split words into an array by delimiter
Iterate through this array of words
With each word:
   - if it is a new word, put it into a hash with the counter value of one
   - else add 1 to the counter value

### Part 2
A prime number is a number that is divisible only by itself and 1
Have a method that returns boolean if the value given is a prime number
Value given in hash in part one to be evaluated
New hash e.g. { "word":[number, boolean] }  

### Part 3
Implement external txt file

Getting Started
===============

### Prerequisites
- All txt files for counting are saved in ```lib/data``` folder.
- Node.js v6.11.0

### Technologies Used
- Jasmine
- Node.js

### Installation
- ```git clone git@github.com:ayanit1/word-count.git ```
- ```cd word-count```
- ```npm install```

### How to use
- run ```node lib/app.js lib/data/test.txt``` (for smaller scale example)
- run ```node lib/app.js lib/data/railway-children-by-e-nesbit.txt``` (output too large for commandline)


### Running Tests
- run ```jasmine```

Improvements
============
- A better way to output large amount of data in command line.
- Test more edge casing.  

Author
======
Albert Yanit
