import java.io.*;

public class MuchSweet_17256 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] A = br.readLine().split(" ");
        String[] C = br.readLine().split(" ");
        StringBuilder sb = new StringBuilder();

        sb.append(Integer.parseInt(C[0]) - Integer.parseInt(A[2]) + " ");
        sb.append(Integer.parseInt(C[1]) / Integer.parseInt(A[1]) + " ");
        sb.append(Integer.parseInt(C[2]) - Integer.parseInt(A[0]) + " ");

        System.out.println(sb);
    }
}
