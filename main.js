// bai tap tinh luong
document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const daysWorked = document.getElementById('daysWorked').value;
    const salaryPerDay = 100000;
    const totalSalary = daysWorked * salaryPerDay;
    document.getElementById('result').innerText = `Tổng tiền lương: ${totalSalary} VND`;
  });

//bai tap tinh trung binh
document.getElementById('averageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);
    const number4 = parseFloat(document.getElementById('number4').value);
    const number5 = parseFloat(document.getElementById('number5').value);
    const average = (number1 + number2 + number3 + number4 + number5) / 5;
    document.getElementById('result2').innerText = `Giá trị trung bình: ${average}`;
  });

//bai tap quy doi tien te
document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usdAmount = parseFloat(document.getElementById('usdAmount').value);
    const exchangeRate = 23500;
    const vndAmount = usdAmount * exchangeRate;
    document.getElementById('result3').innerText = `Số tiền sau khi quy đổi: ${vndAmount} VND`;
  });

//bai tap tinh dien tich chu vi hinh chu nhat
document.getElementById('rectangleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = length * width;
    const perimeter = 2 * (length + width);
    document.getElementById('result4').innerText = `Diện tích: ${area}, Chu vi: ${perimeter}`;
  });

  // bai tong tinh tong 2 ky so
  document.getElementById('digitSumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const twoDigitNumber = parseInt(document.getElementById('twoDigitNumber').value);
    if (twoDigitNumber < 10 || twoDigitNumber > 99) {
      document.getElementById('result5').innerText = 'Vui lòng nhập một số có 2 chữ số.';
      return;
    }
    const unitsDigit = twoDigitNumber % 10;
    const tensDigit = Math.floor(twoDigitNumber / 10);
    const digitSum = unitsDigit + tensDigit;
    document.getElementById('result5').innerText = `Tổng của hai chữ số: ${digitSum}`;
  });