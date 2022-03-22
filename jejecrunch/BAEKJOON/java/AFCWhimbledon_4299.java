package java;

import java.io.*;

public class AFCWhimbledon_4299 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");

        int TOTAL = Integer.parseInt(str[0]);
        int MINUS = Integer.parseInt(str[1]);
        int stand = TOTAL - MINUS;

        if (stand < 0) {
            System.out.println(-1);
        } else {
            if (stand % 2 == 0) {
                System.out.println((stand / 2 + MINUS) + " " + (stand / 2));
            } else {
                System.out.println(-1);
            }
        }
    }
}
