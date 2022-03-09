import java.util.*;

class Solution {
    public static long[] map = new long[60001];

    public int solution(int n) {
        int answer = 0;

        answer = (int) fibonacci(n + 1);

        return answer;
    }

    private static long fibonacci(int n) {
        if (n <= 1) {
            return n % 1000000007;
        } else if (map[n] != 0) {
            return map[n] % 1000000007;
        } else {
            return map[n] = (fibonacci(n - 1) + fibonacci(n - 2)) % 1000000007;
        }
    }
}