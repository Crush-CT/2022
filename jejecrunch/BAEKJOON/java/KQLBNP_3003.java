package java;

import java.io.*;

public class KQLBNP_3003 {
    public static void main(String[] args) throws IOException {
        int[] stand = new int[] { 1, 1, 2, 2, 2, 8 };
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        for (int i = 0; i < line.length; i++) {
            System.out.print(stand[i] - Integer.parseInt(line[i]) + " ");
        }
    }
}
