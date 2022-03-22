import java.io.*;

public class ContestTiming_5928 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int start = 11 + 11 * 60 + 11 * 60 * 24;
        int D = Integer.parseInt(str[0]);
        int H = Integer.parseInt(str[1]);
        int M = Integer.parseInt(str[2]);
        int result = M + H * 60 + D * 60 * 24 - start;

        if (result < 0)
            System.out.println(-1);
        else
            System.out.println(result);
    }
}
