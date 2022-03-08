import java.io.*;

public class TestScore_5596 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] MIN = br.readLine().split(" ");
        String[] MAN = br.readLine().split(" ");
        int MIN_S = 0;
        int MAN_S = 0;

        for (String s : MIN) {
            MIN_S += Integer.parseInt(s);
        }
        for (String s : MAN) {
            MAN_S += Integer.parseInt(s);
        }

        System.out.println(Math.max(MIN_S, MAN_S));
    }
}
