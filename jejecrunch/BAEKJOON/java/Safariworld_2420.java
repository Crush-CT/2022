import java.io.*;
import java.math.BigInteger;

public class Safariworld_2420 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");

        BigInteger N = new BigInteger(str[0]);
        BigInteger M = new BigInteger(str[1]);

        BigInteger result = N.subtract(M);

        System.out.println(result.abs());
    }
}
