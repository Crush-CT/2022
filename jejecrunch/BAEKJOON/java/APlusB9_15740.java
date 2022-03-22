package java;

import java.io.*;
import java.math.BigInteger;

public class APlusB9_15740 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        BigInteger A = new BigInteger(str[0]);
        BigInteger B = new BigInteger(str[1]);

        System.out.println(A.add(B));
    }
}
