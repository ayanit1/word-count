# word-count

My approach

User Stories

(Output words and count)
As a user,
so that I can see the number of times a word appears in a given txt file,
I want to be able to print out the individual words and how many times it appears.

(Prime number?)
As a user,
so that I can get a better understanding of the amount of times a word appears,
I want to know if the number of times a word appears is a prime number.

Psuedo Code for algorithm

part 1
format txt file ensuring white space is ignored
split everything into an array by delimiter
iterate through this array of words
with each word:
   - if it is a new word, put it into a hash with the counter value of one
   - else add 1 to the counter value

part 2
A prime number is a number that is divisible only by itself and 1
have a method that returns boolean if the value given is a prime number
value given in hash in part one to be evaluated
new hash e.g. { "word":[number, boolean] }  
