import java.io.*;
import java.util.StringTokenizer;

public class Patyki_8723 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        if (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)
                || Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2)
                || Math.pow(a, 2) == Math.pow(c, 2) + Math.pow(b, 2)) {
            System.out.println(1);
        } else if (a == b && b == c) {
            System.out.println(2);
        } else {
            System.out.println(0);
        }
    }
}
