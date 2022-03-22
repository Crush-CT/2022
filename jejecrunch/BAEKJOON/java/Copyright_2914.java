package java;

import java.io.*;

public class Copyright_2914 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        int A = Integer.parseInt(line[0]);
        int I = Integer.parseInt(line[1]);

        System.out.println((I - 1) * A + 1);
    }
}
