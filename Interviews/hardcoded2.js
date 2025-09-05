function reportExpenses(rawBalanceSheet) {
    let expensesCount = 0;
    let expesesSum = 0;
    for (let i=0; i<rawBalanceSheet.length; i++) {
        const currentAmount = rawBalanceSheet[i]
        if (currentAmount === "-0") {
            continue;
        }
        if (typeof currentAmount === "string") {
            if (currentAmount[0] === "-") {
                if (currentAmount[1] === "$") {
                    const sanitizedCurrentAmount = Number(currentAmount.substring(2))
                    expensesCount++;
                    expesesSum+=sanitizedCurrentAmount
                } else {
                    const sanitizedCurrentAmount = Number(currentAmount.substring(1))
                    expensesCount++;
                    if (sanitizedCurrentAmount) {
                    expesesSum+=sanitizedCurrentAmount
                    }
                }
            }
        }
    }
    return `expenseCount: ${expensesCount}, expenseSum: ${expesesSum}`
}

const rawBalanceSheet = ["$1.23", "-0", "-5.0001a", "-$4.25", 4, "-$0", "$0"]
const result = reportExpenses(rawBalanceSheet)
console.log(result)

