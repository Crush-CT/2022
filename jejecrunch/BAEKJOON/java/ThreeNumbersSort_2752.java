package java;

import java.io.*;
import java.util.*;

public class ThreeNumbersSort_2752 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");
        ArrayList<Integer> list = new ArrayList<>();

        for (String s : str) {
            list.add(Integer.parseInt(s));
        }

        Collections.sort(list);

        for (Integer i : list) {
            System.out.print(i + " ");
        }
    }
}
