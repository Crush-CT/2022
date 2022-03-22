import java.io.*;

public class PieceOfChess_3004 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        if (N % 2 == 0) {
            N /= 2;
            N++;
            System.out.println(N * N);
        } else {
            int row = (N - 1) / 2 + 1;
            int col = (N + 1) / 2 + 1;
            System.out.println(row * col);
        }
    }
}
