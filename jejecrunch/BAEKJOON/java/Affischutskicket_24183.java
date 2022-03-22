import java.io.*;

public class Affischutskicket_24183 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" "); // c4, a3, a4 => 단위면적당 중량
        // 종이 크기 이용해서 종이의 중량 구하기
        double c4 = 0.229 * 0.324 * Integer.parseInt(str[0]);
        double a3 = 0.297 * 0.420 * Integer.parseInt(str[1]);
        double a4 = 0.210 * 0.297 * Integer.parseInt(str[2]);
        // c4 2장, A3 2장, A4 1장 모두 더하면 됨
        double total = (2 * c4 + 2 * a3 + a4);

        System.out.println(String.format("%.6f", total));
    }
}
