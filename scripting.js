function check()
{
    var fn=document.getElementById('sel').value;
    if(fn==='w' || fn==='d')
    {
        document.getElementById('money').style.display='block';
        document.getElementById('warn').style.display='none';
        document.getElementById('msg2').style.display='none';
        document.getElementById('alrt1').style.display='none';
        document.getElementById('alrt').style.display='none';
        document.getElementById('msg1').style.display='none';
        if(fn==='w')
        {
            document.getElementById('act').innerHTML='Withdraw Amount';
        }
        else if(fn==='d')
        {
            document.getElementById('act').innerHTML='Deposit Amount';
        }
    }
    else if(fn=='c')
    {
        document.getElementById('money').style.display='none';
        document.getElementById('warn').style.display='none';
        document.getElementById('alrt1').style.display='none';
        document.getElementById('alrt').style.display='none';
        document.getElementById('act').innerHTML='Check Balance';
        document.getElementById('msg1').style.display='none';
    }
    else if(fn=='n')
    {
        document.getElementById('money').style.display='none';
        document.getElementById('warn').style.display='block';
        document.getElementById('msg1').style.display='none';
        document.getElementById('act').innerHTML='';
        document.getElementById('alrt').style.display='none';
        document.getElementById('alrt1').style.display='none';
    }
}
function perform()
{
    
    var fn=document.getElementById('sel').value;
    if(fn=='c')
    {
        document.getElementById('msg2').style.display='block';
        var r=document.getElementById('bal').innerHTML;
        if(r==='')
        {
            r='0';
        }
        document.getElementById('bal1').innerHTML=r;
    }
    else if(fn=='w')
    {
        var r=document.getElementById('bal').innerHTML;
        var wi=document.getElementById('money').value;
        if(parseInt(wi)>parseInt(r))
        {
            document.getElementById('alrt1').style.display='block';
            document.getElementById('msg1').style.display='none';
            document.getElementById('alrt').style.display='none';
        }
        else if(r-wi<3000)
        {
            document.getElementById('alrt1').style.display='none';
            document.getElementById('alrt').style.display='block';
        }
        else
        {
            k=r-wi;
            document.getElementById('alrt').style.display='none';
            document.getElementById('alrt1').style.display='none';
            document.getElementById('bal').innerHTML=k;
            document.getElementById('msg1').style.display='block';
            document.getElementById('mon').innerText=wi;
            document.getElementById('act1').innerText=' withdrawn.'
        }
    }
    else if(fn=='d')
    {
        var dep=document.getElementById('money').value;
        var r=document.getElementById('bal').innerHTML;
        var k=parseInt(r)+parseInt(dep);
        document.getElementById('bal').innerHTML=k;
        document.getElementById('msg1').style.display='block';
        document.getElementById('mon').innerText=dep;
        document.getElementById('act1').innerText=' deposited.'
    }
}