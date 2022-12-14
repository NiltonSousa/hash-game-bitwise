# HASH GAME BITWISE

A simple hash game using bitwise operators.

## Before all, let's to remember how to convert decimal number to binary

Basically, we should separate in 5 steps:

- Divide the given decimal number by 2 and note down the remainder.
  Ex: 13 (decimal number) / 2 = 6 (remainder 1).
- Now, divide the obtained quotient by 2, and note the remainder again.
  Ex: 6 / 2 = 3 (remainder 0).
- Repeat the above steps until you get 0 as the quotient.
  Ex:
  3 / 2 = 1 (remainder 1).
  1 / 2 = 0 (remainder 1).
- Finally, writesthe remainders values in reverse order.
  Ex: 1 1 0 1 (binary value).

For explaine the operators we will use a table reference below

| Decimal number | Binary | Decimal number | Binary |
| -------------- | ------ | -------------- | ------ |
| 0              | 0      | 11             | 1011   |
| 1              | 1      | 12             | 1100   |
| 2              | 10     | 13             | 1101   |
| 3              | 11     | 14             | 1110   |
| 4              | 100    | 15             | 1111   |
| 5              | 101    | 16             | 10000  |
| 6              | 110    | 17             | 10001  |
| 7              | 111    | 18             | 10010  |
| 8              | 1000   | 19             | 10011  |
| 9              | 1001   | 20             | 10100  |
| 10             | 1010   | 21             | 10101  |

## Bitwise operators

According Wikipedia, "In computer programming, a bitwise operation operates on a bit string, a bit array or a binary numeral (considered as a bit string) at the level of its individual bits. It is a fast and simple action, basic to the higher-level arithmetic operations and directly supported by the processor. Most bitwise operations are presented as two-operand instructions where the result replaces one of the input operands."

In the other words, bitwise operators are an operation of bit by bit where normally this operation receive two values and the result replaces one of the input operands.

## Bitwise Operators

#### AND(&)

A bitwise AND is a binary operation that takes the bit equivalence between two binary representations. Thus, if example both bits in the compared position are 1, the bit in the resulting binary representation is 1.

#### OR (|)

A bitwise OR is a binary operation that takes the bit equivalence or not between two binary representations. Thus, if example both bits in the compared position are 0, the bit in the resulting binary representation is 0 or different this resulting 1.

#### XOR (^)

A bitwise XOR is a binary operation that different AND operator where have two 1 equivalence bit returns 0.

## Bit shifts

According Wikipedia , "The bit shifts are sometimes considered bitwise operations, because they treat a value as a series of bits rather than as a numerical quantity. In these operations, the digits are moved".

In the other words, the bits are moved with this operators

#### LEFT SHIFT (<<)

The left shift operator move binary value to left.

Ex:

Decimal number = 13 -> Binary conversion = 00001101

- 13 << 1 = 0001101**0**
- 13 << 2 = 001101**00**

#### RIGHT SHIFT (>>)

The right shift operator move binary value to right.

Ex:

Decimal number = 13 -> Binary conversion = 00001101

- 13 >> 1 = **0**00001101
- 13 >> 2 = **00**000011

## Game proposal

Explaining game here... TODO
