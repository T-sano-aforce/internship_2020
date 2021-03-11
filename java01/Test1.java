import java.util.Scanner;

public class Test1 {
	public static void main(String[] args) {
		System.out.println("一つ目の値を入力してください");
		Scanner sc1 = new Scanner(System.in);
		int num1 = sc1.nextInt();

		System.out.println("二つ目の値を入力してください");
		Scanner sc2 = new Scanner(System.in);
		int num2 = sc2.nextInt();

		int total = num1 + num2;
		System.out.println("合計:" + total);

		int average = total / 2;
		System.out.println("平均:" + average);

		Scanner scanner = new Scanner(System.in);

		System.out.println("身長(cm):");
		int height = scanner.nextInt();

		System.out.println("体重(kg):");
		double weight = scanner.nextDouble();

		System.out.println();

		double bmi = weight / (height * height) * 10000;

		System.out.println("BMI : " +(int) bmi);
		if(bmi < 18.5) {
			System.out.println("あなたは「やせ」です");
		} else if(18.5 <= bmi && bmi < 25.0) {
			System.out.println("あなたは「標準」です");
		} else if(25.0 <= bmi && bmi < 30.0) {
			System.out.println("あなたは「肥満」です");
		} else if(30.0 <= bmi) {
			System.out.println("あなたは「高度肥満」です");
		}
		scanner.close();


		final double ANNUAL_INTEREST_RATE = 0.14;
		final int MONTHLY_REPAYMENT_AMOUNT = 30000;

		double remainingDebt = 250000;
		for (int month = 1; remainingDebt > 0; month ++) {
			remainingDebt += remainingDebt * ANNUAL_INTEREST_RATE / 12;//年利分借金額を増やす

			if (remainingDebt >= MONTHLY_REPAYMENT_AMOUNT) {
				remainingDebt -= MONTHLY_REPAYMENT_AMOUNT;
				System.out.printf(" %dヶ月目:返済額 = %d円。残り %f円 %n", month, MONTHLY_REPAYMENT_AMOUNT, remainingDebt);
			} else {
				System.out.printf(" %dヶ月目:返済額 = %f円。返済完了。", month, remainingDebt);
				remainingDebt = 0;
			}
		}
	}
}





