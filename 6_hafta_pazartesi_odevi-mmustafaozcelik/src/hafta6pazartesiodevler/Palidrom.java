package hafta6pazartesiodevler;

import java.util.Scanner;

public class Palidrom {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Palidrom palidrom = new Palidrom();
		palidrom.getData();
	}
	
	public void getData() {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Lutfen Kelime Giriniz");
		String str = scanner.nextLine();
		int a = palidromControl(str);
		switch (a) {
			case 1:
				System.out.println("Kelime Bos olamaz");
				break;
			case 2:
				System.out.println("Tek harf içeren kelimler palidromdur");
				break;
			case 3:
				System.out.println(str + " kelimesi palidrom değildir");
				break;
			case 4:
				System.out.println(str + " kelimesi palidromdur");
				break;
			default:
				break;
		}
		scanner.close();
		
	}
	
	public int palidromControl(String from) {
		
		if (from.isEmpty()) {
			return 1;
			
		} else if (from.length() == 1) {
			return 2;
		} else {
			for (int i = 0, j = from.length() - 1; i < (from.length() / 2); i++, j--) {
				if (from.charAt(i) != from.charAt(j)) {
					return 3;
				}
			}
			return 4;
		}
	}
}
