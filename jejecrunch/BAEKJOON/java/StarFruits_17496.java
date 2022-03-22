package java;

import java.io.*;

public class StarFruits_17496 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int N = Integer.parseInt(str[0]); // 여름의 일 수
        int T = Integer.parseInt(str[1]); // 자라는 데 걸리는 일 수
        int C = Integer.parseInt(str[2]); // 심을 수 있는 칸 수
        int P = Integer.parseInt(str[3]); // 개당 가격

        int count = 0;

        for (int i = 0; i + T < N; i += T) {
            count += C;
        }

        System.out.println(count * P);
    }
}
