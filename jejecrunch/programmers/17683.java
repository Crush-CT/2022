import java.util.*;

class Solution {
    public String solution(String m, String[] musicinfos) {
        String answer = "(None)";
        int max_time = -1;
        
        m = changeMelody(m);
        
        for(int i=0;i<musicinfos.length;i++){
            String start_time = musicinfos[i].split(",")[0];
            String end_time = musicinfos[i].split(",")[1];
            String title = musicinfos[i].split(",")[2];
            String flow = changeMelody(musicinfos[i].split(",")[3]);
            
            int play_time = Integer.parseInt(end_time.split(":")[0]) * 60 + Integer.parseInt(end_time.split(":")[1]) - Integer.parseInt(start_time.split(":")[0]) * 60 - Integer.parseInt(start_time.split(":")[1]);
            
            if(play_time > flow.length()){
                StringBuilder sb = new StringBuilder();

                for(int j=0;j<play_time/flow.length();j++){
                    sb.append(flow);
                }

                sb.append(flow.substring(0, play_time%flow.length()));
                flow = sb.toString();
            } else {
                flow = flow.substring(0, play_time);
            }
            
            if(flow.contains(m) && play_time > max_time){
                answer = title;
                max_time = play_time;
            }
        }
        
        return max_time != -1 ?answer:"(None)";
    }
    
    private String changeMelody(String oldMelody) {
        oldMelody = oldMelody.replaceAll("C#", "H");
        oldMelody = oldMelody.replaceAll("D#", "I");
        oldMelody = oldMelody.replaceAll("F#", "J");
        oldMelody = oldMelody.replaceAll("G#", "K");
        String newMelody = oldMelody.replaceAll("A#", "L");
        
        return newMelody;
    }
}