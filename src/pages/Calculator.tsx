
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    if (principal > 0 && rate > 0 && term > 0) {
      const monthlyPay = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      const totalPay = monthlyPay * term;
      
      setMonthlyPayment(monthlyPay);
      setTotalPayment(totalPay);
      setTotalInterest(totalPay - principal);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-20">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Loan Calculator</h1>
          <p className="text-center text-neutral-600 mb-8">
            Use this calculator to estimate your monthly loan payments, total loan payments, and total interest.
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                placeholder="Enter interest rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="loanTerm">Loan Term (Years)</Label>
              <Input
                id="loanTerm"
                type="number"
                placeholder="Enter loan term in years"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>

            <Button 
              onClick={calculateLoan}
              className="w-full"
            >
              Calculate Loan
            </Button>

            {monthlyPayment !== null && (
              <div className="mt-8 space-y-4 p-6 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Monthly Payment:</h3>
                  <p className="text-2xl font-bold text-primary">
                    KES {monthlyPayment.toFixed(2)}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Total Payment:</h3>
                  <p>KES {totalPayment?.toFixed(2)}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Total Interest:</h3>
                  <p>KES {totalInterest?.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
