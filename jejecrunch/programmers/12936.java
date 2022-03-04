import java.util.*;

class Solution {
    static ArrayList<Integer> arr = new ArrayList<>();
    static int count = 0;
    static boolean[] visit;

    public int[] solution(int n, long k) {
        int[] answer = new int[n];

        long fn = 1;
        for (int i = 1; i <= n; i++) {
            arr.add(i);
            fn *= i;
        }

        k--;

        int idx = 0;
        while (n > 0) {
            fn /= n;
            answer[idx++] = arr.get((int) (k / fn));
            arr.remove((int) (k / fn));
            k %= fn;
            n--;
        }

        return answer;
    }
}