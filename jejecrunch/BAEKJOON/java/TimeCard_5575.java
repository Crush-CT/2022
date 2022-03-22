package java;

import java.io.*;
import java.util.*;

public class TimeCard_5575 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String[] A = br.readLine().split(" ");
        String[] B = br.readLine().split(" ");
        String[] C = br.readLine().split(" ");
        int[][] time_info = new int[3][6];
        int i = 0;

        for (String s : A) {
            time_info[0][i++] = Integer.parseInt(s);
        }
        i = 0;
        for (String s : B) {
            time_info[1][i++] = Integer.parseInt(s);
        }
        i = 0;
        for (String s : C) {
            time_info[2][i++] = Integer.parseInt(s);
        }

        for (i = 0; i < time_info.length; i++) {
            int h = 0;
            int m = 0;
            int s = 0;

            if (time_info[i][5] < time_info[i][2]) {
                --time_info[i][4];
                s = time_info[i][5] + 60 - time_info[i][2];

            } else {
                s = time_info[i][5] - time_info[i][2];
            }

            if (time_info[i][4] < time_info[i][1]) {
                --time_info[i][3];
                m = time_info[i][4] + 60 - time_info[i][1];
            } else {
                m = time_info[i][4] - time_info[i][1];
            }

            h = time_info[i][3] - time_info[i][0];

            sb.append(h + " " + m + " " + s + "\n");
        }

        System.out.println(sb);
    }
}
