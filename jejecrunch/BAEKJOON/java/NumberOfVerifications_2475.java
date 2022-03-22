package java;

import java.io.*;

public class NumberOfVerifications_2475 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] num = br.readLine().split(" ");
        int sum = 0;
        for (int i = 0; i < num.length; i++) {
            sum += Math.pow(num[i].charAt(0) - '0', 2);
        }
        sum %= 10;
        System.out.println(sum);
    }
}
