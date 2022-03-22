package java;

import java.io.*;

public class SpeedFinesAreNotFine_6763 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int limit = Integer.parseInt(br.readLine());
        int speed = Integer.parseInt(br.readLine());

        if (speed - limit <= 0) {
            System.out.println("Congratulations, you are within the speed limit!");
        } else if (speed - limit >= 1 && speed - limit <= 20) {
            System.out.println("You are speeding and your fine is $100.");
        } else if (speed - limit >= 21 && speed - limit <= 30) {
            System.out.println("You are speeding and your fine is $270.");
        } else if (speed - limit >= 31) {
            System.out.println("You are speeding and your fine is $500.");
        }
    }
}
