$(document).ready(function () {
    // load the JSON file using AJAX
    $.ajax({
        type: "GET",
        url: "eTax.json",
        dataType: "json",
        success: function (jsonData) {
            // search function
            $("#btnSearch").click(function () {
                // get the value of the text box
                var searchValue = $("#txtSearch").val();
                var data = jsonData.data;
                // search for the value in the JSON file
                var result = '';
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].length; j++) {
                        if (data[i][j].name.includes(searchValue) || data[i][j].tax.includes(searchValue)) {
                            result += '<div class="result-card"><h5>' + data[i][j].name + '</h5><p>Tax No: ' + data[i][j].tax + '</p></div>';
                        }
                    }
                }
                // check if there are any results
                if (result) {
                    document.getElementById("grdResult").innerHTML = result;
                } else {
                    document.getElementById("grdResult").innerHTML = "No results found";
                }
            });
        },
        error: function () {
            alert("Error: Could not load JSON file.");
        }
    });
});