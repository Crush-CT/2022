package java;

import java.io.*;

public class IdentifyingTea_11549 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        String[] str = br.readLine().split(" ");
        int count = 0;

        for (String s : str) {
            int temp = Integer.parseInt(s);

            if (temp == T) {
                count++;
            }
        }

        System.out.println(count);
    }
}
