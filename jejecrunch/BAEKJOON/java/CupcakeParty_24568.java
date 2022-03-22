package java;

import java.io.*;

public class CupcakeParty_24568 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int R = Integer.parseInt(br.readLine());
        int S = Integer.parseInt(br.readLine());

        System.out.println(Math.abs(R * 8 + S * 3 - 28));
    }
}
