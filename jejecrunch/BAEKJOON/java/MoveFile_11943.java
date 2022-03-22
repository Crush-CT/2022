import java.io.*;

public class MoveFile_11943 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] first = br.readLine().split(" ");
        String[] second = br.readLine().split(" ");

        int fa = Integer.parseInt(first[0]);
        int sa = Integer.parseInt(second[0]);
        int fo = Integer.parseInt(first[1]);
        int so = Integer.parseInt(second[1]);

        System.out.println(Math.min(fo + sa, fa + so));
    }
}
