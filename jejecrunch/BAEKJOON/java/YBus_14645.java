package java;

import java.io.*;

public class YBus_14645 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine().split(" ")[0]);
        String[] arr = new String[N];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = br.readLine();
        }

        System.out.println("비와이");
    }
}
