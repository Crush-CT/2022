package java;

import java.io.*;

public class ZadanieProbne2_8871 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine()); // 라운드 수

        System.out.println(2 * (n + 1));
        System.out.println(3 * (n + 1));
    }
}
