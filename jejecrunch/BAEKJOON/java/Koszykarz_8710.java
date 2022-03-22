import java.io.*;
import java.util.StringTokenizer;

public class Koszykarz_8710 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        long k = Long.parseLong(st.nextToken());
        long w = Long.parseLong(st.nextToken());
        long m = Long.parseLong(st.nextToken());
        int count = 0;

        while (k < w) {
            k += m;
            ++count;
        }

        System.out.println(count);
    }
}
