javascript:
var summary = document.getElementById('summary-val').innerText.replace(/(\[.*?\])/g, '');
var component = document.getElementById('components-val').innerText;
var url1 = `https://getsupport.atlassian.com/issues/?jql=text ~ '${summary}' OR text ~ '${component}'`;
var sen = document.getElementById('senTextViewField').value.replace("SEN-", "");
var url5 = 'https://cassi.internal.atlassian.com/ui/cloud-sites/' + sen;
var url6 = 'https://confluence.atlassian.com/search/?query=' + summary;
var url7 = `https://jira.atlassian.com/issues/?jql=issuetype="Bug" AND text ~ '${summary}'`;
var url8 = `https://jira.atlassian.com/issues/?jql=issuetype in (Improvement, "New Feature", Suggestion) AND text ~ '${summary}'`;
var url9 = `https://community.atlassian.com/t5/forums/searchpage/tab/message?advanced=false&allow_punctuation=false&q=${summary}`;

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
    var btn6 = new obj('btn6', 'btn_6', 'KB');
    var btn2 = new obj('btn2', 'btn_2', 'COMMUNITY');
    var btn3 = new obj('btn3', 'btn_3', 'BUG');
    var btn4 = new obj('btn4', 'btn_4', 'FR');

    
document.getElementById("btn_1").setAttribute("onclick", "window.open(url1)");
document.getElementById("btn_5").setAttribute("onclick", "window.open(url5)");
document.getElementById("btn_6").setAttribute("onclick", "window.open(url6)");
document.getElementById("btn_3").setAttribute("onclick", "window.open(url7)");
document.getElementById("btn_4").setAttribute("onclick", "window.open(url8)");
document.getElementById("btn_2").setAttribute("onclick", "window.open(url9)");

