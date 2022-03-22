package java;

import java.io.*;

public class Microwave_14470 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int A = Integer.parseInt(br.readLine());
        int B = Integer.parseInt(br.readLine());
        int C = Integer.parseInt(br.readLine());
        int D = Integer.parseInt(br.readLine());
        int E = Integer.parseInt(br.readLine());
        int answer = 0;

        if (A < 0) {
            answer += (0 - A) * C + D + (B - 0) * E;
        } else if (A == 0) {
            answer += D + B * E;
        } else if (A > 0) {
            answer += (B - A) * E;
        }

        System.out.println(answer);
    }
}
