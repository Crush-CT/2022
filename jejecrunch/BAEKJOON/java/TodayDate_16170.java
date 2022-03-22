import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.TimeZone;

public class TodayDate_16170 {
    public static void main(String[] args) {
        // 현재 날짜 구하기 (시스템 시계, 시스템 타임존)
        Date now = new Date();
        SimpleDateFormat fm1 = new SimpleDateFormat("YYYY"); // 원하는 데이터 포맷 지정
        SimpleDateFormat fm2 = new SimpleDateFormat("MM");
        SimpleDateFormat fm3 = new SimpleDateFormat("dd");

        fm1.setTimeZone(TimeZone.getTimeZone("UTC"));
        fm2.setTimeZone(TimeZone.getTimeZone("UTC"));
        fm3.setTimeZone(TimeZone.getTimeZone("UTC"));

        // 지정한 포맷으로 변환
        System.out.println(fm1.format(now) + "\n" + fm2.format(now) + "\n" + fm3.format(now));

    }
}
