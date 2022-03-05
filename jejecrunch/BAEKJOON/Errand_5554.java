import java.io.*;

public class Errand_5554 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int total = 0;

        for (int i = 0; i < 4; i++) {
            total += Integer.parseInt(br.readLine());
        }

        System.out.print(total / 60 + "\n" + total % 60);
    }
}
