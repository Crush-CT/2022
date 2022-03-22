package java;

import java.io.*;

public class TenSeido_10797 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int ichi = Integer.parseInt(br.readLine());
        String[] cars = br.readLine().split(" ");
        int count = 0;

        for (String s : cars) {
            int car = Integer.parseInt(s);
            if (car == ichi) {
                count++;
            }
        }

        System.out.println(count);
    }
}
