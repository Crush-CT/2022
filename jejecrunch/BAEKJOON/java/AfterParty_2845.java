package java;

import java.io.*;

public class AfterParty_2845 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        int L = Integer.parseInt(line[0]);
        int P = Integer.parseInt(line[1]);
        int stand = L * P;
        String[] num_person = br.readLine().split(" ");

        for (int i = 0; i < num_person.length; i++) {
            System.out.print((Integer.parseInt(num_person[i]) - stand) + " ");
        }
    }
}
