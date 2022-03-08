import java.io.*;
import java.math.BigInteger;

public class Multiply17_5893 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String str = br.readLine();
        BigInteger N = new BigInteger("0");

        if (str == "0") {
            System.out.println(0);
        } else {
            for (int i = 0; i < str.length(); i++) {
                if (str.charAt(i) == '1') {
                    N = N.add(new BigInteger("2").pow(str.length() - (1 + i)));
                } else if (str.charAt(i) == '0') {
                    N = N.add(new BigInteger("0"));
                }
            }

            N = N.multiply(new BigInteger("17"));

            while (N != (BigInteger.valueOf(0))) {
                sb.append(N.mod(BigInteger.valueOf(2)));
                N = N.divide(BigInteger.valueOf(2));
            }

            System.out.println(sb.reverse());
        }

    }
}
