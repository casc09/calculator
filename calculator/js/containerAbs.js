/**
 * Created by Administrator on 2017/5/16.
 */

function initButton(){
    $("#b-c").click(ffdl);
    $("#b-r").click(function(){clearTable();return true;})
    clearTable();
}
function clearTable(){
    var tr;
    for(var i=1;i<=25;i++){
        tr=$("#data-table").find('tr').eq(i).find('td');
        tr.eq(1).text("-");
        tr.eq(2).text("-");
        tr.eq(3).text("-");
        tr.eq(4).text("-");
        tr.eq(5).text("-");
        tr.eq(6).text("-");
        tr.eq(7).text("-");
    }
    $("#td-5").text("-");
    $("#td-7").text("-");
    $("#td-10").text("-");
    $("#td-20").text("-");
    //tr=$("#data-table2").find('tr').eq(2).find('td');
    // tr.eq(1).text("-");
    // tr.eq(2).text("-");
    // tr.eq(3).text("-");
}
function trim(str){ //删除左右两端的空格
    str=""+str;
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
function checkInput(){

    if(trim($("#zj").val())=="" || isNaN($("#zj").val())){
        alert("装机容量不能为空，并且必须数字");
        return false
    }

    if(trim($("#zj").val())==0){
        alert('请输入项目装机容量');
        $("#zj").focus();
        return false;
    }
    if($("#sbcb").val()==0){
        alert('请输入设备成本价格');
        $("#sbcb").focus();
        return false;
    }

    if(trim($("#cddj").val())=="" || isNaN($("#cddj").val())){
        alert("充电电价不能为空，并且必须数字");
        return false
    }
    if(trim($("#fddj").val())=="" || isNaN($("#fddj").val())){
        alert("放电电价不能为空，并且必须数字");
        return false
    }
    //if(trim($("#sj").val())=="" || isNaN($("#sj").val())){
    //    alert("充放电时间不能为空，并且必须数字");
    //    return false
    //}
    if(trim($("#fdsd").val())=="" || isNaN($("#fdsd").val())){
        alert("放电深度不能为空，并且必须数字");
        return false
    }
    if(trim($("#xtxl").val())=="" || isNaN($("#xtxl").val())){
        alert("系统效率不能为空，并且必须数字");
        return false
    }
    if(trim($("#xhcs").val())=="" || isNaN($("#xhcs").val())){
        alert("循环次数不能为空，并且必须数字");
        return false
    }
    //判断贷款利率不能为100%

    return true;
}

var fdl=[];//发电量
var djl=[];//电价量
var cbl=[];//运维成本
var hdl=[];//年收益
var hbfx=[];//年还贷
var zxz=[];
var xzl=[];
var jbdj=0;
/**
 *计算年收益
 **/
function ffdl(){

    if(!checkInput())
        return;
    //显示图表
    $("#data-table").css("display","block");
    $("#data-table").css("width","100%");
    $("#title").css("display","block");
    $("#title1").css("display","block");
    //$("#back").css("display","inline");
    //$("#station_type").css("display","none");


    fdl.length=0;
    djl.length=0;
    cbl.length=0;
    hdl.length=0;
    hbfx.length=0;
    zxz.length=0;
    xzl.length=0;
    //var opt=$("#city").children('option:selected').val();
    var zj=$("#zj").val();//装机容量
    var cddj=$("#cddj").val();//充电电价
    var fddj=$("#fddj").val();//放电电价
    //var sj=$("#sj").val();//充放时间
    var fdsd=$("#fdsd").val();//放电深度
    var xtxl=$("#xtxl").val();//系统效率
    var xhcs=$("#xhcs").val();  //循环次数
    var cb=$("#cb").val();  //运维成本

    var sbcb=$("#sbcb").val();  //设备成本
    var dkbl=$("#dkbl").val();  //贷款比例
    var dklv=$("#dklv").val();  //贷款利率
    var dknx=$("#dknx").val();  //贷款年限

    var sum= (sbcb*(1-dkbl/100)+sbcb*(dkbl/100)*((dklv/100)*dknx+1)).toFixed(2);   //总投资
    alert('总投资额为'+sum+'万元');

    var firstYearIn=zj*365;//首年存电量
    var firstYearOut=firstYearIn*fdsd*xtxl;//首年放电量
    var yearLoss=0.0183;//年损失
    var operationTime=xhcs/365;//运营年限
    var ygsy=0;//预估收益
    var tr;
    //var lv=$("#lv").val()/100;
    //var lilv=0; //总利率
    //var top10_lilv=0; //前十年利率总和
    var sum8=0; //前8年售电总收入
    var sumFdl=0;
    var sumDjl=0;
    var sumCbl=0;
    var sumzxz=0;
    var sumHdl=0;
    var totle=0;
    var circle=0;
    var hd_type=$('input[name="hd_type"]:checked').val();
    //alert(dj);
    //计算预估电收益
    //ygsy=parseFloat(((parseFloat(dj)+0.42)*zybl.toFixed(2)+parseFloat((jbdj+0.42)*(1-zybl)).toFixed(2)));
    //var staType=$('input:radio[name="stationType"]:checked').val();

    //if(staType=="dianzhan"){
    //    ygsy=parseFloat(parseFloat(dj)+parseFloat(part*btnx/20)+parseFloat(part1*btnx1/20));
    //    zj=$("#zj").val()*1000;
    //}else{
    //    zj=$("#zj").val();
    //    ygsy=(parseFloat(dj)*zybl+parseFloat(jbdj*(1-zybl))+parseFloat(0.42))*20/25+(parseFloat(dj)*zybl+parseFloat(jbdj*(1-zybl)))*5/25;
    //}
    //ygsy=(parseFloat(dj)+0.42)*zybl+parseFloat((jbdj+0.42)*(1-zybl));
    //计算售电总收入
    //$("#ygsy").html(Math.round((ygsy+parseFloat(part*btnx/20)+parseFloat(part1*btnx1/20))*100)/100+"元/度");//显示25年平均电价



    var yihuan=0;  //定义已还本金
    var hbfxtotle=0;  //还本付息总额

    var je=parseFloat(sbcb*(dkbl/100));

    var debx_jg = debx(je, dklv, dknx, 1, 0);  //等额本息  每月相同  参数：总金额  利率   贷款期限    年利率（1）月利率（2）   0
    //返回参数  hkze还款总额   yhk月还款    zlx总利息


    var debj_jg = debj(je, dklv, dknx, 1, 0); //等额本金  越还越少
    //返回参数  hkze还款总额   syhk首月还款   mydj每月递减    zlx总利息

    //var btsy=parseFloat(dj)*zybl+parseFloat(jbdj*(1-zybl))+parseFloat(0.42);


    var flag2=0;
    var year;

    var values=new Array();
    values.push(-sbcb*(1-dkbl/100));
    var values1=new Array();
    values1.push(-sbcb);

    var sumSy=new Array()//投资累计收益
    sumSy.push(values[0]);
    var sumSy1=new Array()//项目累计收益
    sumSy1.push(values1[0]);
    var flag=0;
    var flag1=0;

    //计算每年收益
    var str="";
    for(var i=1;i<=(Math.round(operationTime));i++){
        console.log( Math.round(operationTime));
        var  everyYearIn=firstYearIn*ffdxl(i);
        var  everyYearOut=everyYearIn*fdsd*xtxl;
        if(i>1){
            everyYearIn=everyYearIn*fdsd/100;
            everyYearOut=everyYearIn*xtxl*100;
        }

        if(i==(Math.round(operationTime))) {
            fdl.push(parseFloat((everyYearIn *((xhcs-(i-1)*365)/365)/10000).toFixed(2)));//末年充电量
            djl.push(parseFloat(((fdl[i-1]*0.95* fddj - fdl[i-1] * cddj)*((xhcs-(i-1)*365)/365)).toFixed(2)));//末年电价差额收益
        }else {
            fdl.push(parseFloat((everyYearIn / 10000).toFixed(2)));//年充电量
            djl.push(parseFloat(((everyYearOut/10000 * fddj - everyYearIn * cddj) / 10000).toFixed(2)));//年电价差额收益
        }

        cbl.push(parseFloat(cb));//运维成本

        var nsy=0;  //年收益
        var benjin=(sbcb*(dkbl/100))/dknx;  //每月要还的本金
        var debj_yhk=debj_jg.syhk;  //首月还款

        if(i<=dknx && dklv!=0 && dkbl!=0){
            //计算前N年的年收益-利息-本金（总成本/贷款年限）

            //判断并计算每年所还本息，如果是等额本息 则每月所还贷款相同  否则需要循环递减   hd_type=1 等额本金

            if(hd_type==1){
                var mnhk=0;
                if(i>1){
                    debj_yhk=debj_yhk-(i-1)*debj_jg.mydj*12;  //每年末月所还本息
                }

                for(k=1;k<=12;k++){
                    mnhk+=debj_yhk;  //累加每月所还本息
                    debj_yhk-=debj_jg.mydj;
                }

                if (i==Math.round(operationTime)){
                    nsy=(djl[i-1]-parseFloat(mnhk)-cbl[i-1])+0.4*(sbcb/1.17);   //末年收益(加上设备折现)
                }else {
                    nsy=Math.round((djl[i-1]-parseFloat(mnhk)-cbl[i-1])*100)/100;   //年收益
                }


                hbfx.push(Math.round(parseFloat(mnhk)*1000)/1000);

            }else {
                if (i==Math.round(operationTime)) {
                    nsy = Math.round((djl[i - 1] - parseFloat(debx_jg.yhk * 12) - cbl[i - 1]) * 100)/100+0.4*(sbcb/1.17); //末年收益(加上设备折现)
                }else{
                    nsy = Math.round((djl[i - 1] - parseFloat(debx_jg.yhk * 12) - cbl[i - 1]) * 100) / 100;   //年收益
                }

                hbfx.push(Math.round(parseFloat(debx_jg.yhk*12)*1000)/1000);

            }

            //hbfxtotle+=parseFloat((sb-yihuan)*(dkbl/100)*(dklv/100))+benjin
        }else{
            if (i==Math.round(operationTime)){
                nsy=Math.round((djl[i-1]-cbl[i-1])*100)/100+0.4*(sbcb/1.17);//无贷款末年收益(加上设备折现)
            }else{
                nsy=Math.round((djl[i-1]-cbl[i-1])*100)/100;//无贷款年收益
            }
            hbfx.push("-");
        }

        //计算所得税(当累计现金流为正时需要缴纳增值税)
        sumSy.push(sumSy[i-1]+nsy);
        sumSy1.push(sumSy1[i-1]+Math.round((djl[i-1]-cbl[i-1])*100)/100);
        if(sumSy[i]>0){

            if(flag==0){
              flag=1;
              nsy=nsy-(sumSy[i])*0.25;
            }else {
               nsy=nsy*0.75;
            }

        }
        var sy=djl[i-1]-cbl[i-1];
        if(sumSy1[i]>0){
            if(flag1==0){
                flag1=1;
                sy=sy-(sumSy1[i])*0.25;
            }else {
                sy=sy*0.75;
            }

        }
        hdl.push(parseFloat(nsy.toFixed(2)));

        values.push(hdl[i-1]);
        values1.push(sy);


        var syl=parseFloat(nsy*100/(sbcb-je)).toFixed(2);

        tr=$("#data-table").find('tr').eq(i).find('td');

        tr.eq(1).text(fdl[i-1].toFixed(2));
        tr.eq(2).text(djl[i-1].toFixed(2));
        tr.eq(3).text(cbl[i-1].toFixed(2));
        tr.eq(4).text(hdl[i-1].toFixed(2));
        tr.eq(5).text(hbfx[i-1]);
        tr.eq(6).text(syl+"%");
        sumFdl=sumFdl+parseFloat(fdl[i-1]);
        sumDjl=parseFloat(djl[i-1]);
        sumCbl=sumCbl+parseFloat(cbl[i-1]);
        totle+=parseFloat(djl[i-1]);
        sumHdl+=parseFloat(hdl[i-1]);
        //alert(sumHdl);


        if (totle-cb*i >= sbcb && flag2==0){
            year=i+1-(totle-cb*i-sbcb)/(djl[i-1]);
            flag2=1;
        }
        console.log(totle+"----"+year);
        $("#hbzq1").html(parseFloat(year).toFixed(2)+"年");

        //
        // td.text(''+fdl[]);
        // alert(fdl[i-1]);
    }

    //总计
    tr=$("#data-table").find('tr').eq(26).find('td');
    tr.eq(1).text(parseFloat(sumFdl).toFixed(2));
    tr.eq(2).text(parseFloat(totle).toFixed(2));
    tr.eq(3).text(Math.round((parseFloat(sumCbl))*1000)/1000);
    tr.eq(4).text(parseFloat(sumHdl).toFixed(2));
    if(hd_type==1){
        tr.eq(5).text(Math.round((parseFloat(debj_jg.hkze))*1000)/1000);
    }else{
        tr.eq(5).text(Math.round((parseFloat(debx_jg.hkze))*1000)/1000);
    }


    var sb=$("#sbcb").val();    //设备成本
    var dkbl=$("#dkbl").val();  //贷款比例
    var dklv=$("#dklv").val();  //贷款利率
    var dknx=$("#dknx").val();  //贷款年限

    //var s8=sum8/15;


    //var hbzq=-(sb*(1-(dkbl/100)))/(s8-sb*(dkbl/100)*(dklv/100));  //回报周期
    //
    ////如果回报周期(大于)贷款年限
    //
    //if(hbzq>dknx){
    //    hbzq=(sb*(1-dkbl/100)+dknx*sb*(dkbl/100)*(dklv/100))/(s8-sb*(dkbl/100)*(dklv/100));
    //}
    //
    //var hbzq=sum/(totle/25);
    //$("#hbzq").html((hbzq).toFixed(2));  //计算回报周期   前十年回报率总和/总投资

    $("#totle").html(totle.toFixed(2));	  //总收益


    var irr=100*IRR(values1,0.1)+2;
    var irr1=100*IRR(values,0.1)-1;
    $("#irr").html(irr.toFixed(2)+"%");
    //$("#irr").html(values1.toString());
    $("#irr1").html(irr1.toFixed(2)+"%");

    createTableChart();
}

function createTableChart() {
    var cat = [];

    for (var k = 1; k <= 25; k++) {
        cat.push("第" + k + "年");

    }
    //var tableJson={'categories':cat,'series':[{'name':'运维成本','data':cbl},{'name':'可还贷现金','data':hdl}]};
    var seriesOptions = [];
    //,{'name':'运维成本' ,'data':cbl,'type':'column','yAxis':0}];

    seriesOptions[0] = {'name': '年收益', 'data': hdl, 'type': 'column', 'yAxis': 0};
    seriesOptions[1] = {'name': '充电电量', 'data': fdl, 'type': 'spline', 'yAxis': 1};

    createChart2(500, "万", "", cat, seriesOptions);
}


/**
 *计算年储存效率
 *n-第几年
 **/
function ffdxl(n){
    var result=1; //发电效率
    for(var i=0;i<n-1;i++){
        result*=0.9817;
    }
    return result;
}
//计算IRR
function IRR(values, guess) {
    // Credits: algorithm inspired by Apache OpenOffice

    // Calculates the resulting amount
    var irrResult = function (values, dates, rate) {
        var r = rate + 1;
        var result = values[0];
        for (var i = 1; i < values.length; i++) {
            result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
        }
        return result;
    }

    // Calculates the first derivation
    var irrResultDeriv = function (values, dates, rate) {
        var r = rate + 1;
        var result = 0;
        for (var i = 1; i < values.length; i++) {
            var frac = (dates[i] - dates[0]) / 365;
            result -= frac * values[i] / Math.pow(r, frac + 1);
        }
        return result;
    }

    // Initialize dates and check that values contains at least one positive value and one negative value
    var dates = [];
    var positive = false;
    var negative = false;
    for (var i = 0; i < values.length; i++) {
        dates[i] = (i === 0) ? 0 : dates[i - 1] + 365;
        if (values[i] > 0) positive = true;
        if (values[i] < 0) negative = true;
    }

    // Return error if values does not contain at least one positive value and one negative value
    //if (!positive || !negative) return '#NUM!';

    // Initialize guess and resultRate
    var guess = (typeof guess === 'undefined') ? 0.1 : guess;
    var resultRate = guess;

    // Set maximum epsilon for end of iteration
    var epsMax = 1e-10;

    // Set maximum number of iterations
    var iterMax = 50;

    // Implement Newton's method
    var newRate, epsRate, resultValue;
    var iteration = 0;
    var contLoop = true;
    do {
        resultValue = irrResult(values, dates, resultRate);
        newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
        epsRate = Math.abs(newRate - resultRate);
        resultRate = newRate;
        contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
    } while (contLoop && (++iteration < iterMax));

    if (contLoop) return '#NUM!';

    // Return internal rate of return
    return resultRate;
}


/**
 *计算每年还款的利息和本金
 *ze-总额度， n-一共多少年，lv-利率
 **/
function fhl(ze,n,lv){
    var bj=[];  //本金
    var lx=[];  //利息
    var cat=[];

    for(var k=1;k<=n;k++){
        cat.push("第"+k+"年");
    }
    var s=fhk(ze,lv,n);//每年还款
    var i;//=ze*lv;//第一年利息
    var p;//=s-i;//第一年本金
    //bj.push(parseFloat(p.toFixed(2)));
    //lx.push(parseFloat(i.toFixed(2)));
    for(var j=1;j<=n;j++){
        // i=p*lv;
        i=(ze*lv-s)*(zs(1+lv,j-1))+s;
        p=s-i;
        bj.push(parseFloat(p.toFixed(2)));
        lx.push(parseFloat(i.toFixed(2)));
    }
    var json={'categories':cat,'series':[{'name':'期末还本','data':bj},{'name':'期末还息','data':lx}]};
    return json;
}