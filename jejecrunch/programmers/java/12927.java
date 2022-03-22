import java.util.*;

class Solution {
    public long solution(int n, int[] works) {
        PriorityQueue<Integer> q = new PriorityQueue<>(Collections.reverseOrder());

        for (int w : works) {
            q.add(w);
        }

        for (int i = 0; i < n; i++) {
            if (q.peek() > 0) {
                // 큐에서 최댓값을 가져오고, -1 해서 다시 넣는다.
                int tmp = q.peek();
                q.poll();
                q.add(tmp - 1);
            }
        }

        // 마지막으로, 남은 작업량으로 피로도를 계산한다.
        long answer = 0;
        while (!q.isEmpty()) {
            answer += (long) q.peek() * (long) q.peek();
            q.poll();
        }
        return answer;
    }
}