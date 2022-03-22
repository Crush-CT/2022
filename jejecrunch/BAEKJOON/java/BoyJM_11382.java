import java.io.*;

public class BoyJM_11382 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] num = br.readLine().split(" ");
        long total = 0;
        for (int i = 0; i < 3; i++) {
            total += Long.parseLong(num[i]);
        }

        System.out.println(total);
    }
}
