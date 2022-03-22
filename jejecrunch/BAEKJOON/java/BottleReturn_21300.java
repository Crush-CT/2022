package java;

import java.io.*;

public class BottleReturn_21300 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");

        int total = 0;
        for (int i = 0; i < 6; i++) {
            total += 5 * Integer.parseInt(str[i]);
        }

        System.out.println(total);
    }
}
