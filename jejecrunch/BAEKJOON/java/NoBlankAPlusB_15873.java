import java.io.*;

public class NoBlankAPlusB_15873 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        int num = Integer.parseInt(str);
        int res = num / 10 + num % 10;
        if (num / 10 > 10) {
            res = num / 100 + num % 100;
        }

        if (num == 1010) {
            res = 20;
        }
        System.out.println(res);
    }
}