package java;

import java.io.*;

public class RegularHexagonAndTriangle_14264 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int L = Integer.parseInt(br.readLine());
        System.out.printf("%.9f", Math.sqrt(3) * L * L / 4);
    }
}
