package java;

import java.io.*;

public class WaterBill_10707 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int A = Integer.parseInt(br.readLine());
        int B = Integer.parseInt(br.readLine());
        int C = Integer.parseInt(br.readLine());
        int D = Integer.parseInt(br.readLine());
        int P = Integer.parseInt(br.readLine());
        int X = P * A;
        int Y = B;

        if (P > C) {
            Y += D * (P - C);
        }

        System.out.println(Math.min(X, Y));
    }
}
