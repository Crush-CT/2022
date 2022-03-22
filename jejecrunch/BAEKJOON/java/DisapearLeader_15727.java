import java.io.*;

public class DisapearLeader_15727 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int L = Integer.parseInt(br.readLine());

        if (L % 5 > 0)
            System.out.println(L / 5 + 1);
        else
            System.out.println(L / 5);
    }
}
