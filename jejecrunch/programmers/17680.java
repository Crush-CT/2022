import java.util.*;

class Solution {
    static final int CACHE_HIT = 1;
    static final int CACHE_MISS = 5;
    static ArrayList<String> memory = new ArrayList<>();

    public int solution(int cacheSize, String[] cities) {
        int answer = 0;
        if (cacheSize == 0)
            return cities.length * CACHE_MISS;

        for (int i = 0; i < cities.length; i++) {
            String temp = cities[i].toUpperCase(); // 대소문자 구분 X
            if (memory.remove(temp)) {
                answer += CACHE_HIT;
                memory.add(temp);
            } else {
                answer += CACHE_MISS;
                if (memory.size() >= cacheSize) {
                    memory.remove(0);
                }
                memory.add(temp);
            }
        }

        return answer;
    }

}