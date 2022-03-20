import java.io.*;

public class Gorivo_14065 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        double num = Double.parseDouble(br.readLine());
        System.out.printf("%.6f", 100.0 / ((1.609344 / 3.785411784) * num));

    }
}