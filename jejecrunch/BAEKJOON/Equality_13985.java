import java.io.*;

public class Equality_13985 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int[] arr = new int[3];

        for (int i = 0, j = 0; i < str.length; i++) {
            if (Character.isDigit(str[i].charAt(0))) {
                arr[j] = Integer.parseInt(str[i]);
                j++;
            }
        }

        if (arr[0] + arr[1] == arr[2])
            System.out.println("YES");
        else
            System.out.println("NO");
    }
}
