import java.io.*;

public class SiteScore_20254 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int ur = Integer.parseInt(str[0]);
        int tr = Integer.parseInt(str[1]);
        int uo = Integer.parseInt(str[2]);
        int to = Integer.parseInt(str[3]);

        int score = 56 * ur + 24 * tr + 14 * uo + 6 * to;

        System.out.println(score);
    }
}
