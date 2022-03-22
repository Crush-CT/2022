import java.io.*;

public class AIClock_2530 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");

        // 현재 시각
        int H = Integer.parseInt(str[0]); // 시간
        int M = Integer.parseInt(str[1]); // 분
        int S = Integer.parseInt(str[2]); // 초
        int D = Integer.parseInt(br.readLine()); // 요리하는 데 필요한 시간 (초)

        S += D;
        M += S / 60;
        S %= 60;
        H += M / 60;
        M %= 60;
        H %= 24;

        // 종료 시각
        System.out.println(H + " " + M + " " + S);
    }
}
