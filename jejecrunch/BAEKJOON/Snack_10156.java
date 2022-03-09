import java.io.*;

public class Snack_10156 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int K = Integer.parseInt(str[0]);
        int N = Integer.parseInt(str[1]);
        int M = Integer.parseInt(str[2]);
        int result = N * K - M;

        if (result < 0) {
            System.out.println(0);
        } else {
            System.out.println(result);
        }
    }
}
