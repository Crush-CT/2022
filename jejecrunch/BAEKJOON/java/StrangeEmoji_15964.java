import java.io.*;

public class StrangeEmoji_15964 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        long A = Long.parseLong(str[0]);
        long B = Long.parseLong(str[1]);
        System.out.println((A + B) * (A - B));
    }
}
