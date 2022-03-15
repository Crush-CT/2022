import java.io.*;

public class Hangul_11282 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine()) + 44031;
        System.out.println((char) (num));
    }
}
