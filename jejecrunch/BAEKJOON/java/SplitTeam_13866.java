package java;

import java.io.*;
import java.util.*;

public class SplitTeam_13866 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        int[] arr = new int[4];

        for (int i = 0; i < 4; i++) {
            arr[i] = Integer.parseInt(str[i]);
        }

        Arrays.sort(arr);

        System.out.println(Math.abs(arr[0] + arr[3] - arr[1] - arr[2]));
    }
}
