<script>
    let selectBox = document.getElementById("selectBox");
    let resultDiv = document.getElementById("result");

    selectBox.addEventListener("change", function() {
        let select = selectBox.options[selectBox.selectBox.selectedIndex].value;
        resultDivinnerText = "좋아하는 과일은: " + select;
    });
