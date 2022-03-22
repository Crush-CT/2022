import java.util.*;

class Solution {
    static PriorityQueue<Integer> heap = new PriorityQueue<>();

    public int solution(int[] scoville, int K) {
        int answer = 0;

        for (int s : scoville) {
            heap.add(s);
        }

        while (!check(K)) {
            if (heap.size() <= 1) {
                answer = -1;
                break;
            } else {
                heap.add(heap.poll() + (heap.poll() * 2));
                answer += 1;
            }
        }

        return answer;
    }

    // heap 안의 모든 값들이 k 이상인지 체크하는 함수
    private boolean check(int K) {
        boolean result = false;

        for (Integer a : heap) {
            if (a > K) {
                result = true;
            } else {
                return false;
            }
        }

        return result;
    }
}