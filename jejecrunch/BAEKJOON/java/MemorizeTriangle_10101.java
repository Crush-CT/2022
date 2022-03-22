import java.io.*;

public class MemorizeTriangle_10101 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int a = Integer.parseInt(br.readLine());
        int b = Integer.parseInt(br.readLine());
        int c = Integer.parseInt(br.readLine());
        String result = "";

        if (a + b + c != 180) {
            result = "Error";
        } else if (a + b + c == 180) {
            if (a != b && a != c && b != c) {
                result = "Scalene";
            } else if ((a == b && b != c) || (a == c && a != b) || (b == c && a != c)) {
                result = "Isosceles";
            } else if (a == 60 && b == 60 && c == 60) {
                result = "Equilateral";
            }
        }

        System.out.println(result);
    }
}
