// // TRANSAÇÕES BANCARIAS
// Operações bancárias

const user = {
    name: 'Emerson',
    transactions: [],
    balance: 0
}

// Adicionar transações

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// Relatórios

function getHigherTransactionByType(type) {
    let higherTransaction 
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value 
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value //operador de atribuição mesma coisa de sum = sum + transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionCount() {
    let count = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else 
            count.debit++
    }

    return count
}

createTransaction ({type: 'credit', value: 150})
createTransaction ({type: 'credit', value: 250})
createTransaction ({type: 'debit', value: 80})
createTransaction ({type: 'debit', value: 50})
createTransaction ({type: 'debit', value: 20})

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionCount())