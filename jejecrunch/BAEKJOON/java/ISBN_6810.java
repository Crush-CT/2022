import java.io.*;

public class ISBN_6810 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int A = Integer.parseInt(br.readLine()) * 1;
        int B = Integer.parseInt(br.readLine()) * 3;
        int C = Integer.parseInt(br.readLine()) * 1;
        String fore = "9780921418";
        int total = A + B + C;

        for (int i = 0; i < fore.length(); i++) {
            if (i % 2 == 0) {
                total += (fore.charAt(i) - '0') * 1;
            } else {
                total += (fore.charAt(i) - '0') * 3;
            }
        }

        System.out.println("The 1-3-sum is " + total);
    }
}
