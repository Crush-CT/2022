import java.io.*;

public class VacationWork_5532 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int L = Integer.parseInt(br.readLine());
        int A = Integer.parseInt(br.readLine());
        int B = Integer.parseInt(br.readLine());
        int C = Integer.parseInt(br.readLine());
        int D = Integer.parseInt(br.readLine());

        int k = (int) Math.ceil(A * 1.0 / C);
        int m = (int) Math.ceil(B * 1.0 / D);

        if (k < m) {
            System.out.println(L - m);
        } else {
            System.out.println(L - k);
        }
    }
}
