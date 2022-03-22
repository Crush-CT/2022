import java.io.*;
import java.math.BigInteger;

public class Multiply_22193 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        BigInteger N = new BigInteger(str[0]);
        BigInteger M = new BigInteger(str[1]);

        BigInteger A = new BigInteger(br.readLine());
        BigInteger B = new BigInteger(br.readLine());

        System.out.println(A.multiply(B));
    }
}
