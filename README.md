# credit_card_validation

**Brief descriptions that explains the regex pattern I used in my code**.

In the const cleanNumber = cardNumber.replace(/[-/s]/g, ''), / marks the start and the end of the regular expression. in [-\s] and '', empty spaces ('') was used to replace -(hyphen) and \s(white spaces) anywhere it is seen. g is a flag, and it means (global). It replaces all matches.

/^\d+$\.test(cleanNumber)

The meaning of the regex patter used in the above is; it must start with a digit (^), the digit can be one or more (\d+) and it must also end with a digit ($). NB: ! is not a regex expression, it's used to negate a statement; more like, if it's not.

(!/^\d{13}$|^\d{16}$/.test(cleanNumber))

The above regular expression means; the first number must be a digit, the digit will either have a length of 13 0r 16 and $ means that it must also end with a digit.

(!/^4/.test(cleanNumber)) 

The above means Visa credit card must start with a 4.

