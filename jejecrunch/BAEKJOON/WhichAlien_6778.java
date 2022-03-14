import java.io.*;

public class WhichAlien_6778 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int antenas = Integer.parseInt(br.readLine());
        int eyes = Integer.parseInt(br.readLine());

        if (antenas >= 3 && eyes <= 4) {
            System.out.println("TroyMartian");
        }

        if (antenas <= 6 && eyes >= 2) {
            System.out.println("VladSaturnian");
        }

        if (antenas <= 2 && eyes <= 3) {
            System.out.println("GraemeMercurian");
        }
    }
}
