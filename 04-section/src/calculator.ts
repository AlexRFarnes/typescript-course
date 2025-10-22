// data:
// initial amount
// annual contribution
// expected return rate
// years

type Data = {
  initialAmount: number;
  annualContribution: number;
  expectedReturnRate: number;
  duration: number;
};

type Result = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = Result[] | string;

function calculateInvestment(data: Data): CalculationResult {
  const { initialAmount, annualContribution, expectedReturnRate, duration } =
    data;

  if (initialAmount < 0) {
    return "Initial amount must be greater than 0";
  }

  if (duration <= 0) {
    return "Duration must be greater than 0";
  }

  if (expectedReturnRate < 0) {
    return "Expected return rate must be greater than 0";
  }

  let totalAmount = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const results: Result[] = [];

  for (let year = 1; year <= duration; year++) {
    totalAmount = totalAmount * (1 + expectedReturnRate);
    totalInterestEarned = totalAmount - totalContributions - initialAmount;
    totalContributions = totalContributions + annualContribution;
    totalAmount = totalAmount + annualContribution;
    results.push({
      year: `Year ${year}`,
      totalAmount,
      totalContributions,
      totalInterestEarned,
    });
  }

  return results;
}

function printResults(results: CalculationResult) {
  if (typeof results === "string") {
    console.log(results);
    return;
  }

  for (const result of results) {
    console.log(result.year);
    console.log(`Total Amount: ${result.totalAmount.toFixed(0)}`);
    console.log(`Total Contributions: ${result.totalContributions.toFixed(0)}`);
    console.log(
      `Total Interest Earned: ${result.totalInterestEarned.toFixed(0)}`
    );
    console.log(`--------------------------------`);
  }
}

const investmentData: Data = {
  initialAmount: 10000,
  annualContribution: 1000,
  expectedReturnRate: 0.05,
  duration: 10,
};

printResults(calculateInvestment(investmentData));
