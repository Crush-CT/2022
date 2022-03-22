import java.io.*;

public class TournamentSelection_14038 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int win = 0;
        for (int i = 0; i < 6; i++) {
            String temp = br.readLine();

            if (temp.equals("W")) {
                win += 1;
            }
        }

        if (win == 6 || win == 5) {
            System.out.println(1);
        } else if (win == 4 || win == 3) {
            System.out.println(2);
        } else if (win == 2 || win == 1) {
            System.out.println(3);
        } else {
            System.out.println(-1);
        }

    }
}
