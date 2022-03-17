import java.io.*;
import java.util.*;

public class SelectSubject_11948 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int A = Integer.parseInt(br.readLine());
        int B = Integer.parseInt(br.readLine());
        int C = Integer.parseInt(br.readLine());
        int D = Integer.parseInt(br.readLine());
        int E = Integer.parseInt(br.readLine());
        int F = Integer.parseInt(br.readLine());

        List<Integer> s = Arrays.asList(A, B, C, D);
        List<Integer> h = Arrays.asList(E, F);

        Collections.sort(s, Collections.reverseOrder());
        Collections.sort(h, Collections.reverseOrder());

        int sum = 0;

        for (int i = 0; i < 3; i++) {
            sum += s.get(i);
        }

        sum += h.get(0);

        System.out.println(sum);
    }
}
