package java;

import java.io.*;

public class Hangul2_11283 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        char input = br.readLine().charAt(0);
        System.out.println((int) input - 44031);
    }
}
