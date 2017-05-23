export default {
    authors : [],
    courses : [],
    ajaxStatus : 0,
    avoCalculatorParameters : {
        percentDepositRequired: 20,
        lattes: {
            cost: 5,
            numberPerWeek: 7
        },
        avoBreakfasts: {
            cost: 20,
            numberPerWeek: 3
        },
        personalSavings: {
            cost: 250,
            numberPerWeek: 1
        },
        housePrice: 1000000,
        giftFromParents: 0,
        yearlyMortgageRate:0.07,
        yearsOfMortgage:30
    },
     avoCalculatorResults: {
            housePrice: 0,
            yearsToDeposit: 0,
            numberOfWeeksToDeposit: 0,
            totalWeeklySavings: 0,
            deposit: 0,
            monthlyMortgagePayment: 0,
            lattes: {
                weeklySavings: 0,
                percentTotalDeposit: 0,
                timeBenefitInWeeks: 0,
                timeBenefitInYears: 0
            },
            avoBreakfasts: {
                weeklySavings: 0,
                percentTotalDeposit: 0,
                timeBenefitInWeeks: 0,
                timeBenefitInYears: 0
            },
            personalSavings: {
                weeklySavings: 0,
                percentTotalDeposit: 0,
                timeBenefitInWeeks: 0,
                timeBenefitInYears: 0
            },
            giftFromParents: {
                percentTotalDeposit: 0,
                timeBenefitInWeeks: 0,
                timeBenefitInYears: 0
            }
        }
};