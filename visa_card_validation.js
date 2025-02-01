function validateVisaCard(cardNumber){
    const cleanNumber = cardNumber.replace(/[-/s]/g, '');

    if (!/^\d+$/.test(cleanNumber)) {
        return { error: `This card is invalid`};
    }

    if (!/^\d{13}$|^\d{16}$/.test(cleanNumber)) {
        return {error: `Visa card must be either 13 or 16 digits long`};
    }

    if (!/^4/.test(cleanNumber)) {
        return {error: `Visa cards must start with 4`};
    }
    const cardTypes = {
        "4026": "Visa Electron",
        "417500": "Visa Electron",
        "4508": "Visa Electron",
        "4844": "Visa Electron",
        "4913": "Visa Electron",
        "4917": "Visa Electron",
        "4903": "Visa Debit"
      };

      let cardType = "Visa Credit";
        for (const prefix in cardTypes) {
            if (cleanNumber.startsWith(prefix)) {
                cardType = cardTypes[prefix];
                break;
            }
        }

    let sum = 0;
    let isEvenPosition = false;

    for (let i = cleanNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanNumber[i]);
        
        if (isEvenPosition) {
            digit *= 2;
            digit = sumDigits(digit);
        }
        
        sum += digit;
        isEvenPosition = !isEvenPosition;
    }

        const isValidLuhnAalgorithm = sum % 10 === 0;
        if(!isValidLuhnAalgorithm){
            return {error:`This card failed Luhn's Check`};
        }

         return `Your card is valid and your Card Type is ${cardType}`
}

function sumDigits(n) {
    return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  
 

  console.log(validateVisaCard("ER32-9678-2345-6788"));
  console.log(validateVisaCard("4532-9678-2345-678"));
  console.log(validateVisaCard("5532-9678-2345-6788"));
  console.log(validateVisaCard("4532-9678-2345-6788"));
  console.log(validateVisaCard("4532-0151-1283-0663"));
  console.log(validateVisaCard("4508-0151-1283-0663"));
  


  

  
