// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 


class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        
        int sum = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == 'V' || s.charAt(i) == 'X') {
                if (i > 0 && s.charAt(i-1) == 'I') sum -=2;
            }
             if(s.charAt(i) == 'L' || s.charAt(i) == 'C') {
                if (i > 0 && s.charAt(i-1) == 'x') sum -=20;
            }
             if(s.charAt(i) == 'D' || s.charAt(i) == 'M') {
                if (i > 0 && s.charAt(i-1) == 'c') sum -=200;
            }
            sum+= map.get(s.charAt(i));
        } 
        return sum;
    } 
}