import java.io.*;

public class SpecialDay_10768 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int month = Integer.parseInt(br.readLine());
        int days = Integer.parseInt(br.readLine());

        if (month > 2) {
            System.out.println("After");
        } else if (month == 2) {
            if (days < 18) {
                System.out.println("Before");
            } else if (days == 18) {
                System.out.println("Special");
            } else if (days > 18) {
                System.out.println("After");
            }
        } else if (month < 2) {
            System.out.println("Before");
        }
    }
}
