# Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

# I can be placed before V (5) and X (10) to make 4 and 9. 
# X can be placed before L (50) and C (100) to make 40 and 90. 
# C can be placed before D (500) and M (1000) to make 400 and 900.

# Given a roman numeral, convert it to an integer.

class Solution:
    def romanToInt(self, s: str) -> int:
        
        roman_map = {  "I": 1,
                       "V": 5,
                       "X": 10,
                       "L": 50,
                       "C": 100,
                       "D": 500,
                       "M": 1000}
        
        num = 0 
        last = "I"
        
        for numeral in s[::-1]:
            if roman_map[numeral] < roman_map[last]:
                num -=roman_map[numeral]
            else:
                num +=roman_map[numeral]
            last = numeral
            
        return num
        
        
