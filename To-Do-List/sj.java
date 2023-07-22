import java.util.Scanner;

public class sj{
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            String color = sc.nextLine();
            switch (color) {
                case "red":
                System.out.println(1);    
                    break;
                case "green":
                System.out.println(2);
                break;
                default:
                    break;
            }
        }

    }
}