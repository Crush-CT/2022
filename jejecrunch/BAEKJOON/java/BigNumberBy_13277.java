package java;

import java.io.*;
import java.math.BigInteger;

public class BigNumberBy_13277 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] num = br.readLine().split(" ");
        BigInteger A = new BigInteger(num[0]);
        BigInteger B = new BigInteger(num[1]);

        System.out.println(A.multiply(B));
    }
}
