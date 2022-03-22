package java;

import java.io.*;
import java.util.StringTokenizer;

public class Balwanek_8718 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        long x = Long.parseLong(st.nextToken());
        long k = Long.parseLong(st.nextToken());
        long a = 0, b = 0, c = 0;

        if (7000 * k <= 1000 * x)
            a = 7000 * k;
        if (3500 * k <= 1000 * x)
            b = 3500 * k;
        if (1750 * k <= 1000 * x)
            c = 1750 * k;
        System.out.println(Math.max(Math.max(a, b), c));
    }
}
