const convertButton = document.querySelector(".convert-button")
const currencySelectBase1 = document.querySelector(".currency-select-base1")
const currencySelectBase2 = document.querySelector(".currency-select-base2")

function convertValues() {
    if (currencySelectBase1.value == "real") {
        convertValuesReal()
    }
    if (currencySelectBase1.value == "dolar") {
        convertValuesDolar()
    }
    if (currencySelectBase1.value == "euro") {
        convertValuesEuro()
    }
    if (currencySelectBase1.value == "libra") {
        convertValuesLibra()
    }
}

function convertValuesReal() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const dolarToday = 5.56
    const euroToday = 6.2
    const libraToday = 7.39
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //base1
    const currencyValueConverted = document.querySelector(".currency-value-converted") //base2

    if (currencySelectBase2.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectBase2.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectBase2.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectBase2.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function convertValuesDolar() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const realToday = 5.65
    const euroToday = 0.92
    const libraToday = 0.77
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //base1
    const currencyValueConverted = document.querySelector(".currency-value-converted") //base2

    if (currencySelectBase2.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectBase2.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectBase2.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectBase2.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
}

function convertValuesEuro() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const dolarToday = 1.09
    const realToday = 6.16
    const libraToday = 0.83
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //base1
    const currencyValueConverted = document.querySelector(".currency-value-converted") //base2

    if (currencySelectBase2.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectBase2.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectBase2.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectBase2.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)
}

function convertValuesLibra() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const dolarToday = 1.31
    const euroToday = 1.20
    const realToday = 7.39
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //base1
    const currencyValueConverted = document.querySelector(".currency-value-converted") //base2

    if (currencySelectBase2.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectBase2.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectBase2.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectBase2.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Uk", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
}

function changeCurrencyBase1() {
    const currencyNameBase1 = document.querySelector(".currency-tx-base1")
    const currencyImgBase1 = document.querySelector(".currency-img-base1")

    if (currencySelectBase1.value == "dolar") {
        currencyNameBase1.innerHTML = "Dólar"
        currencyImgBase1.src = "./assets/img/dolar.png"
    }

    if (currencySelectBase1.value == "euro") {
        currencyNameBase1.innerHTML = "Euro"
        currencyImgBase1.src = "./assets/img/euro.png"
    }

    if (currencySelectBase1.value == "libra") {
        currencyNameBase1.innerHTML = "Libra"
        currencyImgBase1.src = "./assets/img/libra.png"
    }

    if (currencySelectBase1.value == "real") {
        currencyNameBase1.innerHTML = "Real"
        currencyImgBase1.src = "./assets/img/real.png"
    }
    convertValues()
}

function changeCurrencyBase2() {
    const currencyNameBase2 = document.querySelector(".currency-tx-base2")
    const currencyImgBase2 = document.querySelector(".currency-img-base2")

    if (currencySelectBase2.value == "dolar") {
        currencyNameBase2.innerHTML = "Dólar"
        currencyImgBase2.src = "./assets/img/dolar.png"
    }

    if (currencySelectBase2.value == "euro") {
        currencyNameBase2.innerHTML = "Euro"
        currencyImgBase2.src = "./assets/img/euro.png"
    }

    if (currencySelectBase2.value == "libra") {
        currencyNameBase2.innerHTML = "Libra"
        currencyImgBase2.src = "./assets/img/libra.png"
    }

    if (currencySelectBase2.value == "real") {
        currencyNameBase2.innerHTML = "Real"
        currencyImgBase2.src = "./assets/img/real.png"
    }
    convertValues()
}

currencySelectBase1.addEventListener("change", changeCurrencyBase1)
currencySelectBase2.addEventListener("change", changeCurrencyBase2)
convertButton.addEventListener("click", changeCurrencyBase1)
convertButton.addEventListener("click", changeCurrencyBase2)