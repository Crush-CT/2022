package java;

import java.io.*;

public class Hexadecimal_1550 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.valueOf(br.readLine(), 16);
        System.out.println(num);
    }
}