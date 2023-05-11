function calculate() {
  // Mendapatkan nilai input dari form
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var operator = document.getElementById("operator").value;

  // Menghitung hasil berdasarkan operator yang dipilih
  if (operator == "plus") {
    var result = parseInt(num1) + parseInt(num2);
  } else if (operator == "minus") {
    var result = num1 - num2;
  } else if (operator == "multiply") {
    var result = num1 * num2;
  } else if (operator == "divide") {
    var result = num1 / num2;
  }
  document.getElementById("result").innerHTML = "Hasil: " + result;

  // Menampilkan hasil pada halaman

  function reset() {
    // Menghapus nilai input pada form
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").selectedIndex = 0;

    // Menghapus hasil pada halaman
    document.getElementById("result").innerHTML = "";
  }
}
