import java.io.*;

public class Empathy_14623 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        long B1 = Long.valueOf(br.readLine(), 2);
        long B2 = Long.valueOf(br.readLine(), 2);

        System.out.println(Long.toBinaryString(B1 * B2));
    }
}
