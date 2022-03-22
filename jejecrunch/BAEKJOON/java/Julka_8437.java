import java.io.*;
import java.math.BigInteger;

public class Julka_8437 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BigInteger total = new BigInteger(br.readLine());
        BigInteger diff = new BigInteger(br.readLine());
        BigInteger two = new BigInteger("2");

        BigInteger klaudia = (total.subtract(diff)).divide(two).add(diff); // (total-diff)/2+diff
        BigInteger natalia = (total.subtract(diff)).divide(two); // (total-diff)/2

        System.out.println(klaudia);
        System.out.println(natalia);
    }
}
