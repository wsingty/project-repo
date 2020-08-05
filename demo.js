
javascript:
class obj{
    constructor(btn, btn_id, btn_name){
       this.btn = document.createElement("BUTTON");
       this.btn.setAttribute("id", btn_id);
       this.btn.innerText = btn_name;
       document.body.prepend(this.btn); 
        }
    }

    btn1 = new obj('btn1', 'btn_1', 'GSAC');
    btn2 = new obj('btn2', 'btn_2', 'JAC');
    btn3 = new obj('btn3', 'btn_3', 'BUG');
    btn4 = new obj('btn4', 'btn_4', 'FR');
    btn5 = new obj('btn5', 'btn_5', 'CASSI');
    
var summary = document.getElementById('summary-val').innerText;
var component = document.getElementById('components-val').innerText;
var url1 = `https://getsupport.atlassian.com/issues/?jql=text ~ '${summary}' AND component = '${component}'`;
var sen = document.getElementById('senTextViewField').value.replace("SEN-", "");

