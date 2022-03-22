import java.io.*;

public class DoNotTouchAnything_13136 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int R = Integer.parseInt(str[0]);
        int C = Integer.parseInt(str[1]);
        int N = Integer.parseInt(str[2]);
        long x, y;
        if (R % N > 0) {
            x = R / N + 1;
        } else {
            x = R / N;
        }
        if (C % N > 0) {
            y = C / N + 1;
        } else {
            y = C / N;
        }

        System.out.println(x * y);
    }
}
