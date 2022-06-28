package hafta6pazartesiodevler;

import java.util.Scanner;

public class PerfcetNumber {
	
	public static void main(String[] args) {
		PerfcetNumber perfcetNumber = new PerfcetNumber();
		perfcetNumber.getData();
		
	}
	
	public void getData() {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Lutfen Sayi Girinşiz");
		int number = Math.abs(scanner.nextInt());
		perfertControl(number);
		scanner.close();
	}
	
	public void perfertControl(int number) {
		int div = 0;
		for (int i = 1; i < number; i++) {
			if (number % i == 0) {
				div += i;
			}
		}
		if (div == number) {
			System.out.println(number + " : Sayisi Mukemmeldir");
		} else {
			System.out.println(number + " : Sayisi Mukemmel degildir");
		}
	}
	
}
