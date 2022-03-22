import java.io.*;

public class SquarePasture_14173 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str1 = br.readLine().split(" ");
        String[] str2 = br.readLine().split(" ");

        int x1 = Integer.parseInt(str1[0]);
        int y1 = Integer.parseInt(str1[1]);
        int x2 = Integer.parseInt(str1[2]);
        int y2 = Integer.parseInt(str1[3]);
        int a1 = Integer.parseInt(str2[0]);
        int b1 = Integer.parseInt(str2[1]);
        int a2 = Integer.parseInt(str2[2]);
        int b2 = Integer.parseInt(str2[3]);
        int ans = Math.max(Math.max(a2, x2) - Math.min(a1, x1), Math.max(b2, y2) - Math.min(b1, y1));

        System.out.println(ans * ans);
    }
}
