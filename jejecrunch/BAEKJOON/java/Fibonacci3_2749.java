import java.io.*;

public class Fibonacci3_2749 {
    public static long[] map = new long[1500000];

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        long num = Long.parseLong(br.readLine());
        map[0] = 0;
        map[1] = 1;

        for (int i = 2; i < 1500000 && i <= num; i++) {
            map[i] = (map[i - 1] + map[i - 2]) % 1000000;
        }

        if (num >= 1500000) {
            num %= 1500000;
        }

        System.out.println(map[(int) num]);
    }
}