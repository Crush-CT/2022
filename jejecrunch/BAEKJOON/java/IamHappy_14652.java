package java;

import java.io.*;

public class IamHappy_14652 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int M = Integer.parseInt(str[1]);
        int K = Integer.parseInt(str[2]);
        int n = K / M;
        int m = K % M;

        System.out.println(n + " " + m);
    }
}
