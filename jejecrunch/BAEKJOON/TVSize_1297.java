import java.io.*;

public class TVSize_1297 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");

        int D = Integer.parseInt(str[0]);
        int H = Integer.parseInt(str[1]);
        int W = Integer.parseInt(str[2]);

        double X = Math.sqrt(Math.pow(D, 2) / (Math.pow(W, 2) + Math.pow(H, 2)));

        System.out.println((int) Math.floor(X * H) + " " + (int) Math.floor(X * W));
    }
}
