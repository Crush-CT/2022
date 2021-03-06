import java.io.*;

public class Microwave_10162 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        int a = 0, b = 0, c = 0;

        if (T % 10 != 0) {
            System.out.println(-1);
        } else {
            while (T != 0) {
                a += T / 300;
                T %= 300;
                b += T / 60;
                T %= 60;
                c += T / 10;
                T %= 10;
            }

            System.out.println(a + " " + b + " " + c);
        }
    }
}
