import java.io.*;
import java.util.*;

public class AndandoNoTempo_13580 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int[] arr = new int[3];

        for (int i = 0; i < 3; i++) {
            arr[i] = Integer.parseInt(str[i]);
        }

        Arrays.sort(arr);

        // 현재로 돌아갈 수 있냐?
        if (arr[0] == arr[1] || arr[1] == arr[2] || arr[0] + arr[1] == arr[2]) {
            System.out.println("S");
        } else {
            System.out.println("N");
        }
    }
}
