package java;

import java.io.*;
import java.util.*;

public class SGNard_5543 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] hamburger = new int[3];
        int[] juice = new int[2];
        hamburger[0] = Integer.parseInt(br.readLine());
        hamburger[1] = Integer.parseInt(br.readLine());
        hamburger[2] = Integer.parseInt(br.readLine());
        juice[0] = Integer.parseInt(br.readLine());
        juice[1] = Integer.parseInt(br.readLine());

        ArrayList<Integer> list = new ArrayList<>();

        list.add(hamburger[0] + juice[0] - 50);
        list.add(hamburger[0] + juice[1] - 50);
        list.add(hamburger[1] + juice[0] - 50);
        list.add(hamburger[1] + juice[1] - 50);
        list.add(hamburger[2] + juice[0] - 50);
        list.add(hamburger[2] + juice[1] - 50);

        Collections.sort(list);

        System.out.println(list.get(0));
    }
}
