import java.util.*;
import java.util.regex.Pattern;

class Solution {
    static PriorityQueue<Integer> minQ = new PriorityQueue<>();
    static PriorityQueue<Integer> maxQ = new PriorityQueue<>(Collections.reverseOrder());

    public int[] solution(String[] operations) {
        int[] answer = new int[] { 0, 0 };

        for (String s : operations) {
            if (Pattern.matches("^[I\\s-?\\d]*$", s)) {
                minQ.add(Integer.parseInt(s.substring(2)));
                maxQ.add(Integer.parseInt(s.substring(2)));
            } else if (s.equals("D 1")) {
                if (minQ.size() < 1)
                    continue;
                minQ.remove(maxQ.poll());
            } else if (s.equals("D -1")) {
                if (minQ.size() < 1)
                    continue;
                maxQ.remove(minQ.poll());
            }
        }

        if (minQ.size() > 0) {
            answer[0] = maxQ.poll();
            answer[1] = minQ.poll();
        }

        return answer;
    }
}