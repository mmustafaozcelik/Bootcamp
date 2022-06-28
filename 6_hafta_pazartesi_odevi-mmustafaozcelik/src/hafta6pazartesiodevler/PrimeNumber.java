package hafta6pazartesiodevler;

import java.util.Scanner;

public class PrimeNumber {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		PrimeNumber primeNumber = new PrimeNumber();
		Scanner scanner = new Scanner(System.in);
		System.out.println("Lutfen secim belirtiniz : \n 1 = iterative \n 2 = recursive");
		int a = scanner.nextInt();
		switch (a) {
			case 1:
				primeNumber.getData("it");
				break;
			case 2:
				primeNumber.getData("re");
				break;
			default:
				break;
		}
		scanner.close();
	}
	
	public void getData(String str) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Lutfen Sayi Girinşiz");
		int number = Math.abs(scanner.nextInt());
		if (str.equals("re")) {
			if (recursiveControl(number, number / 2) == 1) {
				System.out.println(number + " sayisi asaldir");
			} else {
				System.out.println(number + " sayisi asal degildir");
			}
		} else if (str.equals("it")) {
			iterativeControl(number);
		}
		scanner.close();
	}
	
	public void iterativeControl(int number) {
		for (int i = 1; i < number; i++) {
			if (number == 2) {
				System.out.println(number + " sayisi asaldir");
			} else if (number % i == 0) {
				System.out.println(number + " sayisi asal degildir");
				break;
			} else if (number - 1 == i) {
				System.out.println(number + " sayisi asaldir");
			}
		}
	}
	
	public int recursiveControl(int number, int i) {
		if (i == 1) {
			return 1;
		} else {
			if (number % i == 0) {
				return 0;
			} else
				return recursiveControl(number, i - 1);
		}
	}
}
