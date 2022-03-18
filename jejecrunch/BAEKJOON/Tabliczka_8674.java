import java.io.*;
import java.util.StringTokenizer;

public class Tabliczka_8674 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        long a = Long.parseLong(st.nextToken());
        long b = Long.parseLong(st.nextToken());
        long result = 0;

        if (a % 2 == 0 || b % 2 == 0)
            result = 0;
        else
            result = Math.min(a, b);
        System.out.println(result);
    }
}
