
      var totalScore = 0;

function timiScore() {
    if (document.getElementById("age_").checked && document.getElementById("age_").value === "yes") {
        totalScore += 1;
    } else {
      totalScore += 0;
    }

    if (document.getElementById("rf_").checked && document.getElementById("rf_").value === "yes") {
        totalScore += 1;
    }else {
      totalScore += 0;
    }

    if (document.getElementById("cad_").checked && document.getElementById("cad_").value === "yes") {
        totalScore += 1;
    }else {
      totalScore += 0;
    }

    if (document.getElementById("asa_").checked && document.getElementById("asa_").value === "yes") {
        totalScore += 1;
    }else {
      totalScore += 0;
    }

    if (document.getElementById("ang_").checked && document.getElementById("ang_").value === "yes") {
        totalScore += 1;
    }else {
      totalScore += 0;
    }

    if (document.getElementById("ecg_").checked && document.getElementById("ecg_").value === "yes") {
        totalScore += 1;
    }else {
      totalScore += 0;
    }

    if (document.getElementById("marker_").checked && document.getElementById("marker_").value === "yes") {
        totalScore += 1;
    }else if (document.getElementById("marker_").checked && document.getElementById("marker_").value === "no") {
      totalScore += 0;
    }
    
      
      document.getElementById("pointArea").innerHTML = totalScore +" points";

    if (totalScore == 0 || totalScore == 1) {
        document.getElementById("infoArea").innerHTML = "5% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.";
        document.getElementById("pointArea").classList.remove('alert-info');
        document.getElementById("pointArea").classList.add('alert-success');
        document.getElementById("infoArea").classList.remove('alert-info');
        document.getElementById("infoArea").classList.add('alert-success');


    }

    if (totalScore == 2) {
        document.getElementById("infoArea").innerHTML = "8% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.";
        document.getElementById("pointArea").classList.remove('alert-info');
        document.getElementById("pointArea").classList.add('alert-success');
        document.getElementById("infoArea").classList.remove('alert-info');
        document.getElementById("infoArea").classList.add('alert-success');
    }

    if (totalScore == 3) {
        document.getElementById("infoArea").innerHTML = "13% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.";
        document.getElementById("pointArea").classList.remove('alert-info');
        document.getElementById("pointArea").classList.add('alert-warning');
        document.getElementById("infoArea").classList.remove('alert-info');
        document.getElementById("infoArea").classList.add('alert-warning');
    }

    if (totalScore == 4) {
        document.getElementById("infoArea").innerHTML = "20% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.";
        document.getElementById("pointArea").classList.remove('alert-info');
        document.getElementById("pointArea").classList.add('alert-warning');
        document.getElementById("infoArea").classList.remove('alert-info');
        document.getElementById("infoArea").classList.add('alert-warning');
    }

    if (totalScore == 5) {
        document.getElementById("infoArea").innerHTML = "26% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.";
        document.getElementById("pointArea").classList.remove('alert-info');
        document.getElementById("pointArea").classList.add('alert-danger');
        document.getElementById("infoArea").classList.remove('alert-info');
        document.getElementById("infoArea").classList.add('alert-danger');
    }
    
    if (totalScore == 6 || totalScore == 7) {
        document.getElementById("infoArea").innerHTML = "41% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.";
        document.getElementById("pointArea").classList.remove('alert-info');
        document.getElementById("pointArea").classList.add('alert-danger');
        document.getElementById("infoArea").classList.remove('alert-info');
        document.getElementById("infoArea").classList.add('alert-danger');
    }
    
}

