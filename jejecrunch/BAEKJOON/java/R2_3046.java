import java.io.*;

public class R2_3046 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] num = br.readLine().split(" ");
        int r2 = Integer.valueOf(num[1]) * 2 - Integer.valueOf(num[0]);
        System.out.println(r2);
    }
}
