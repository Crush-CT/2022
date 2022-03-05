import java.io.*;

public class BigNumber_14928 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String num = br.readLine();
        long temp = 0;
        for (int i = 0; i < num.length(); i++) {
            temp = (temp * 10 + (num.charAt(i) - '0')) % 20000303;
        }

        System.out.println(temp);
    }
}
