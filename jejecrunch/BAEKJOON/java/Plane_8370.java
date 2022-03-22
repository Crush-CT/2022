package java;

import java.io.*;

public class Plane_8370 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 비즈니스 n1(k1), 이코노미 n2(k2)
        String[] line = br.readLine().split(" ");
        // 이용 가능한 모든 좌석의 합계
        System.out.println(Integer.parseInt(line[0]) * Integer.parseInt(line[1])
                + Integer.parseInt(line[2]) * Integer.parseInt(line[3]));
    }
}
