import java.util.*;

class Solution {
    public static long[] map = new long[60001];

    public long solution(int n) {
        long answer = 0;

        answer = fibonacci(n + 1);

        return answer;
    }

    private static long fibonacci(int n) {
        if (n <= 1) {
            return n % 1234567;
        } else if (map[n] != 0) {
            return map[n] % 1234567;
        } else {
            return map[n] = (fibonacci(n - 1) + fibonacci(n - 2)) % 1234567;
        }
    }
}