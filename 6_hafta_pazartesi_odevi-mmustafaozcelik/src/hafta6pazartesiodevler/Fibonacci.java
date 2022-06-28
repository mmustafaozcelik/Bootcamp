package hafta6pazartesiodevler;

import java.util.Scanner;

public class Fibonacci {
	public static void main(String[] args) {
		Fibonacci fibonacci = new Fibonacci();
		Scanner scanner = new Scanner(System.in);
		System.out.println("Lutfen secim belirtiniz : \n 1 = iterative \n 2 = recursive");
		int a = scanner.nextInt();
		switch (a) {
			case 1:
				fibonacci.getData("it");
				break;
			case 2:
				fibonacci.getData("re");
				break;
			default:
				break;
		}
		scanner.close();
	}
	
	public void getData(String str) {
		Scanner sc = new Scanner(System.in);
		int firstNumber = 0, numberCount = 0;
		
		System.out.print("Lutfen iterasyon adetini giriniz:");
		numberCount = sc.nextInt();
		if (str.equals("re")) {
			int maxNumber = 10;
			System.out.print("Fibonacci Series of " + maxNumber + " numbers: ");
			for (int i = 0; i < maxNumber; i++) {
				System.out.print(recursiveFibonacci(i) + " ");
			}
		} else if (str.equals("it")) {
			System.out.print("Lutfen Baslangic sayisini giriniz : ");
			firstNumber = sc.nextInt();
			fibonacci(firstNumber, numberCount);
		}
		sc.close();
		
	}
	
	public void fibonacci(int firstNumber, int numberCount) {
		int secondNumber = firstNumber, number3 = 0;
		if (firstNumber == 0) {
			System.out.println("hesaplanamaz.");
		} else {
			System.out.print(firstNumber + "," + firstNumber + ",");
			for (int i = 0; i < numberCount - 1; i++) {
				if (i == 0) {
					System.out.print((firstNumber + firstNumber) + ",");
					secondNumber = firstNumber + firstNumber;
				} else {
					number3 = secondNumber + firstNumber;
					System.out.print(number3 + ",");
					firstNumber = secondNumber;
					secondNumber = number3;
					
				}
				
			}
		}
		
	}
	
	public int recursiveFibonacci(int numberCount) {
		if (numberCount == 0) {
			return 0;
		}
		if (numberCount == 1 || numberCount == 2) {
			return 1;
		}
		return recursiveFibonacci(numberCount - 2) + recursiveFibonacci(numberCount - 1);
	}
}
