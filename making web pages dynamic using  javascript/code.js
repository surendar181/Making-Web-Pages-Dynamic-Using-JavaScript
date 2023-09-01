function calc()
{
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var oper = document.getElementById('operators').value;

    if(oper =='+')
    {
        console.log("Inside if")
         document.getElementById('result').value = n1+n2;
    }
    if(oper =='-')
    {
        console.log("Inside if")
         document.getElementById('result').value = n1-n2;
    }
    if(oper =='*')
    {
        console.log("Inside if")
         document.getElementById('result').value = n1*n2;
    }
    if(oper =='/')
    {
        console.log("Inside if")
         document.getElementById('result').value = n1/n2;
    }

}