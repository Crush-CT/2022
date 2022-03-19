import java.io.*;

public class Tridu_13597 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int[] arr = new int[2];

        for (int i = 0; i < 2; i++) {
            arr[i] = Integer.parseInt(str[i]);
        }

        if (arr[0] == arr[1]) {
            System.out.println(arr[0]);
        } else {
            System.out.println(Math.max(arr[0], arr[1]));
        }
    }
}
