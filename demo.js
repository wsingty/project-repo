javascript:
var summary = document.getElementById('summary-val').innerText;
var component = document.getElementById('components-val').innerText;
var url1 = `https://getsupport.atlassian.com/issues/?jql=text ~ '${summary}' OR text ~ '${component}'`;
var sen = document.getElementById('senTextViewField').value.replace("SEN-", "");
var url5 = 'https://cassi.internal.atlassian.com/ui/cloud-sites/' + sen;
var url6 = 'https://confluence.atlassian.com/search/?query=' + component;
var url7 = `https://jira.atlassian.com/issues/?jql=text ~ '${summary}' OR text ~ '${component}' AND issuetype="Bug"`;
var url8 = `https://jira.atlassian.com/issues/?jql=text ~ '${summary}' OR text ~ '${component}' AND issuetype in (Improvement, "New Feature", Suggestion)`;

class obj{
    constructor(btn, btn_id, btn_name){
       this.btn = document.createElement("BUTTON");
       this.btn.setAttribute("id", btn_id);
       this.btn.innerText = btn_name;
       this.btn.style.color="white";
       this.btn.style.backgroundColor="mediumseagreen";
       this.btn.style.borderSpacing = "20px";
       document.body.prepend(this.btn); 
        }
    }

    var btn1 = new obj('btn1', 'btn_1', 'GSAC');
    var btn5 = new obj('btn5', 'btn_5', 'CASSI');
    var btn1 = new obj('btn1', 'btn_6', 'KB');
    var btn3 = new obj('btn3', 'btn_3', 'BUG');
    var btn4 = new obj('btn4', 'btn_4', 'FR');

    
document.getElementById("btn_1").setAttribute("onclick", "window.open(url1)");
document.getElementById("btn_5").setAttribute("onclick", "window.open(url5)");
document.getElementById("btn_6").setAttribute("onclick", "window.open(url6)");
document.getElementById("btn_3").setAttribute("onclick", "window.open(url7)");
document.getElementById("btn_4").setAttribute("onclick", "window.open(url8)");


