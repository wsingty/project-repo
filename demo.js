javascript:
var summary = document.getElementById('summary-val').innerText;
var component = document.getElementById('components-val').innerText;
var url1 = `https://getsupport.atlassian.com/issues/?jql=text ~ '${summary}' AND component = '${component}'`;
var sen = document.getElementById('senTextViewField').value.replace("SEN-", "");
var url5 = 'https://cassi.internal.atlassian.com/ui/cloud-sites/' + sen;

class obj{
    constructor(btn, btn_id, btn_name){
       this.btn = document.createElement("BUTTON");
       this.btn.setAttribute("id", btn_id);
       this.btn.innerText = btn_name;
       document.body.prepend(this.btn); 
        }
    }

    var btn1 = new obj('btn1', 'btn_1', 'GSAC');
    var btn5 = new obj('btn5', 'btn_5', 'CASSI');
    var btn1 = new obj('btn1', 'btn_6', 'KB');
    var btn2 = new obj('btn2', 'btn_2', 'JAC');
    var btn3 = new obj('btn3', 'btn_3', 'BUG');
    var btn4 = new obj('btn4', 'btn_4', 'FR');

    
document.getElementById("btn_1").setAttribute("onclick", "window.open(url1)");
document.getElementById("btn_5").setAttribute("onclick", "window.open(url5)");
