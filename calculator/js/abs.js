var datas={
    "新疆":{"乌鲁木齐":"4.2","克拉玛依":"4.01","吐鲁番":"4.44","哈密地区":"4.54","昌吉回族自治州":"4.14","博尔塔拉蒙古自治州":"4.08","巴音郭楞蒙古自治州":"4.43","阿克苏":"4.44","阿图什":"4.54","喀什地区":"4.74","和田地区":"4.83","伊犁哈萨克自治州":"4.1","塔城地区":"4.03","阿勒泰地区":"4.13","石河子":"4.32","和田":"4.82"},
    "宁夏":{"银川":"4.5","石嘴山":"4.6","吴忠":"4.51","固原":"4.28","中卫":"4.59"},
    "重庆":{"重庆市":"3.06"},
    "上海":{"上海市":"3.81"},
    "广西":{"南宁":"3.66","柳州":"3.39","桂林":"3.18","梧州":"3.65","北海":"4.08","防城港":"3.86","钦州":"3.79","贵港":"3.56","玉林":"3.76","百色":"3.72","贺州":"3.36","河池":"3.48","来宾":"3.51","崇左":"3.72"},
    "河南":{"郑州":"4.02","开封":"4.07","洛阳":"3.94","平顶山":"3.89","安阳":"4.21","鹤壁":"4.13","新乡":"4.15","焦作":"4.15","濮阳":"4.2","许昌":"4.02","漯河":"3.98","三门峡":"3.98","南阳":"3.8","商丘":"4.1","信阳":"3.83","周口":"3.98","驻马店":"3.83"},
    "四川":{"成都":"3.22","自贡":"3.15","攀枝花":"4.83","泸州":"3.06","德阳":"3.2","绵阳":"3.21","广元":"3.42","遂宁":"3.21","内江":"3.14","乐山":"3.1","南充":"3.18","眉山":"3.18","宜宾":"3.04","广安":"3.12","达州":"3.24","雅安":"3.74","巴中":"3.24","资阳":"3.18","阿坝藏族羌族自治州":"4.42","甘孜藏族自治州":"4.82","凉山彝族自治州":"4.21"},
    "湖北":{"武汉":"3.67","黄石":"3.66","十堰":"3.61","宜昌":"3.35","襄樊":"3.74","鄂州":"3.67","荆门":"3.62","孝感":"3.7","荆州":"3.54","黄冈":"3.66","咸宁":"3.46","随州":"3.7","恩施土家苗族自治州":"3.1"},
    "浙江":{"杭州":"3.69","宁波":"3.59","温州":"3.55","嘉兴":"3.69","湖州":"3.69","绍兴":"3.69","金华":"3.56","衢州":"3.52","舟山":"3.92","台州":"3.59","丽水":"3.53"},
    "安徽":{"合肥":"3.7","芜湖":"3.75","蚌埠":"3.89","淮南":"3.89","马鞍山":"3.75","淮北":"4.04","铜陵":"3.66","安庆":"3.63","黄山":"3.54","滁州":"3.88","阜阳":"3.87","宿州":"4.04","巢湖":"3.7","六安":"3.77","毫州":"4.04","池州":"3.66","宜城":"3.61"},
    "北京":{"北京市":"4.32"},
    "山东":{"济南":"4.29","青岛":"4.22","淄博":"4.26","枣庄":"4.11","东营":"4.29","烟台":"4.31","潍坊":"4.25","济宁":"4.2","泰安":"4.28","威海":"4.39","日照":"4.15","莱芜":"4.28","临沂":"4.23","德州":"4.32","聊城":"4.26","滨州":"4.33","牡丹区":"4.2"},
    "广东":{"广州":"3.69","韶关":"3.44","深圳":"3.91","珠海":"3.87","汕头":"3.88","佛山":"3.69","江门":"3.79","湛江":"3.92","茂名":"3.92","肇庆":"3.65","惠州":"3.76","梅州":"3.76","汕尾":"4.29","河源":"3.76","阳江":"4.09","清远":"3.53","东莞":"3.69","中山":"3.87","潮州":"3.88","揭阳":"3.88","云浮":"3.79"},
    "青海":{"西宁":"4.67","海东地区":"4.47","海北藏族自治州":"4.68","海南藏族自治州":"4.72","果洛藏族自治州":"4.59","玉树藏族自治州":"4.75","海西蒙古族藏族自治州":"4.97"},
    "内蒙古东部":{"赤峰":"4.31","通辽":"4.25","呼伦贝尔":"3.8","乌兰察布":"4.55","兴安盟":"4.07","锡林郭勒盟":"4.4"},
    "内蒙古西部":{"呼和浩特":"4.55","包头":"4.55","乌海":"4.6","鄂尔多斯":"4.62","巴彦淖尔":"4.5","阿拉善盟":"4.64"},
    "江苏":{"南京":"3.88","无锡":"3.78","徐州":"4.11","常州":"3.77","苏州":"3.78","南通":"3.93","连云港":"4.09","淮安":"4.02","盐城":"4.02","扬州":"3.88","镇江":"3.88","泰州":"3.9","宿迁":"4.0"},
    "西藏":{"拉萨":"5.53","昌都地区":"4.84","山南地区":"5.41","日喀则地区":"5.8","那曲地区":"4.98","阿里地区":"5.48","灵芝地区":"4.8"},
    "天津":{"天津市":"4.36"},
    "山西":{"大同":"4.50","阳泉":"4.41","长治":"4.35","晋城":"4.18","朔州":"4.53","晋中":"4.46","太原":"4.46","忻州":"4.53","临汾":"4.25","临汾":"4.46"},
    "甘肃":{"兰州":"4.43","嘉峪关":"4.55","金昌":"4.67","白银":"4.51","天水":"4.03","武威":"4.33","张掖":"4.56","平凉":"4.16","酒泉":"4.60","庆阳":"4.13","定西":"4.43","陇南":"3.74","临夏回族自治州":"4.45","甘南藏族自治州":"4.61"},
    "辽宁":{"沈阳":"4.17","大连":"4.56","鞍山":"4.24","抚顺":"4.17","本溪":"4.17","丹东":"3.96","锦州":"4.31","营口":"4.28","阜新":"4.19","辽阳":"4.17","盘锦":"4.24","铁岭":"4.13","朝阳":"4.38","葫芦岛":"4.31"},
    "海南":{"三亚":"4.54","海口":"4.42","五指山":"4.52"},
    "贵州":{"贵阳":"3.34","六盘水":"4.14","遵义":"3.03","安顺":"3.56","同仁地区":"3.03","兴义":"3.72","毕节地区":"3.36","黔东南苗族侗族自治州":"3.16","黔南布依族苗族自治州":"3.34"},
    "江西":{"南昌":"3.44","萍乡":"3.34","九江":"3.49","新余":"3.34","鹰潭":"3.58","景德镇":"3.6","赣州":"3.51","吉安":"3.39","宜春":"3.34","抚州":"3.48","上饶":"3.58"},
    "云南":{"昆明":"4.74","曲靖":"4.51","玉溪":"4.68","保山":"4.58","邵通":"4.7","丽江":"4.78","墨江哈尼族自治县":"4.6","临沧":"4.58","楚雄彝族自治州":"4.81","红河哈尼族彝族自治州":"4.54","文山壮族苗族自治州":"4.27","西双版纳傣族自治州":"3.91","大理白族自治州":"4.75","德宏傣族景颇族自治州":"4.27","怒江傈僳族自治州":"4.32","迪庆藏族自治州":"4.41"},
    "河北北部":{"唐山":"4.36","秦皇岛":"4.21","张家口":"4.51","承德":"4.43","廊坊":"4.32"},
    "河北南部":{"邢台":"4.25","石家庄":"4.28","邯郸":"4.21","保定":"4.32","沧州":"4.33","衡水":"4.3"},
    "吉林":{"长春":"4.05","吉林":"3.97","四平":"4.13","辽源":"4.02","通化":"3.97","白山":"3.93","松原":"4.06","白城":"4.17","延边朝鲜族自治州":"3.89"},
    "黑龙江":{"哈尔滨市":"3.96","齐齐哈尔":"3.94","鸡西":"3.84","鹤岗":"3.71","双鸭山":"3.81","大庆":"4.05","伊春":"3.75","伊春":"3.75","佳木斯":"3.81","七台河":"3.84","牡丹江":"3.85","黑河":"3.68","绥化":"3.94","大兴安岭地区":"3.55"},
    "福建":{"福州":"3.54","厦门":"4.02","莆田":"3.63","三明":"3.5","泉州":"4.02","漳州":"3.73","南平":"3.5","龙岩":"3.57","宁德":"3.6"},
    "陕西":{"西安":"3.93","铜川":"4.06","宝鸡":"3.86","咸阳":"3.93","渭南":"4","延安":"4.32","汉中":"3.73","榆林":"4.51","安康":"3.59","商洛":"3.8"},
    "湖南":{"长沙":"3.29","株洲":"3.34","湘潭":"3.3","衡阳":"3.29","邵阳":"3.19","岳阳":"3.45","常德":"3.24","张家界":"3.2","益阳":"3.29","郴州":"3.3","永州":"3.21","怀化":"3.1","娄底":"3.25","湘西土家苗族自治州":"3.0"}
};
var jdz={"安徽":"26º-29º","北京":"36º-37º","福建":"20º-21º","甘肃":"28º-37º","广东":"19º-20º","广西":"19º-20º","贵州":"19º-22º",
    "海南":"18º-20º","河北北部":"32º-38º","河北南部":"32º-38º","河南":"28º-32º","黑龙江":"38º-43º","湖北":"23º-27º","湖南":"21º-23º","吉林":"38º-40º","江苏":"26º-30º","江西":"22º-24º",
    "辽宁":"36º-39º","内蒙古东部":"36º-41º","内蒙古西部":"36º-41º","宁夏":"32º-36º","青海":"30º-35º","山东":"30º-34","山西":"31º-36º","陕西":"26º-35º","上海":"25º-26º",
    "四川":"22º-30º","天津":"35º-36º","西藏":"26º-30º","新疆":"35º-40º","云南":"20º-25º","浙江":"22º-25º","重庆":"22º-24º"};
var fdl=[];
var djl=[];
var cbl=[];
var hdl=[];
var hbfx=[];
var zxz=[];
var xzl=[];
var jbdj=0;

var json5;
var json7;
var json10;
var json20;
function init(){

    initJD();

    clearTable();

}
function initButton(){
    $("#b-c").click(ffdl);
    $("#b-r").click(function(){clearTable();return true;})
}
function initJD(){
    $(":checkbox[name=jd]").each(function(){
        $(this).click(function(){
            $(":checkbox[name=jd]").each(function(){$(this).attr("checked",false)});
            $(this).attr("checked",true);
        }); //$(this)表示当前被选中的复选框
    })
    $(":checkbox[name=jd2]").each(function(){
        $(this).click(function(){
            $(":checkbox[name=jd2]").each(function(){$(this).attr("checked",false)});
            $(this).attr("checked",true);
        }); //$(this)表示当前被选中的复选框
    })
}
function initProvince(){

//初始化省份
    var province="<option value=''>--请选择--</option>";
    for(var p in datas){
        province+="<option value='"+p+"'>"+p+"</option>";
    }
    $("#province").html(province);
}
function initSelect(){
    //修改省份
    $("#province").change(function(){
        var p1=$(this).children('option:selected').val();
        switch(p1){
            //各个省份的上网电价
            case "辽宁": jbdj=0.3685;break;
            case "吉林": jbdj=0.3717;break;
            case "黑龙江": jbdj=0.3723;break;
            case "内蒙古东部": jbdj=0.3035;break;
            case "北京": jbdj=0.3515;break;
            case "天津": jbdj=0.3514;break;
            case "河北北部": jbdj=0.3634;break;
            case "河北南部": jbdj=0.3497;break;
            case "山东": jbdj=0.3729;break;
            case "山西": jbdj=0.3205;break;
            case "内蒙古西部": jbdj=0.2772;break;
            case "陕西": jbdj=0.3346;break;
            case "甘肃": jbdj=0.2978;break;
            case "青海": jbdj=0.3247;break;
            case "宁夏": jbdj=0.2595;break;
            case "新疆": jbdj=0.2500;break;
            case "湖北": jbdj=0.3981;break;
            case "湖南": jbdj=0.4471;break;
            case "河南": jbdj=0.3551;break;
            case "江西": jbdj=0.3993;break;
            case "四川": jbdj=0.4012;break;
            case "重庆": jbdj=0.3796;break;
            case "上海": jbdj=0.4048;break;
            case "浙江": jbdj=0.4153;break;
            case "江苏": jbdj=0.3780;break;
            case "安徽": jbdj=0.3693;break;
            case "福建": jbdj=0.3737;break;
            case "广东": jbdj=0.4505;break;
            case "广西": jbdj=0.4140;break;
            case "云南": jbdj=0.3358;break;
            case "贵州": jbdj=0.3363;break;
            case "海南": jbdj=0.4198;break;
        }
        if(p1==''){
            clearCity();
            $("#jdz").html("系统推荐角度：");
        }else{
            initCity(p1);
            $("#jdz").html("系统推荐角度："+jdz[p1]);
        }

    });
    clearCity();
}
function initCity(p){
    var citys=datas[p];
    var citysOption="<option value=''>--请选择--</option>";
    for(var p in citys){
        citysOption+="<option value='"+citys[p]+"'>"+p+"</option>";
    }
    $("#city").html(citysOption);
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
function clearCity(){
    $("#city").html("<option value=''>--请选择--</option>");

}
//计算IRR
function IRR(values, guess) {


    // Credits: algorithm inspired by Apache OpenOffice

    // Calculates the resulting amount
    var irrResult = function(values, dates, rate) {
        var r = rate + 1;
        var result = values[0];
        for (var i = 1; i < values.length; i++) {
            result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
        }
        return result;
    }

    // Calculates the first derivation
    var irrResultDeriv = function(values, dates, rate) {
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
    } while(contLoop && (++iteration < iterMax));

    if(contLoop) return '#NUM!';

    // Return internal rate of return
    return resultRate;
}
//计算IRR1
function IRR1(cashFlows, estimatedResult) {

    var result = "isNAN";
    if (cashFlows != null && cashFlows.length > 0) {
        // check if business startup costs is not zero:
        if (cashFlows[0] != 0) {
            var noOfCashFlows = cashFlows.length;
            var sumCashFlows = 0;
            // check if at least 1 positive and 1 negative cash flow exists:
            var noOfNegativeCashFlows = 0;
            var noOfPositiveCashFlows = 0;
            for (var i = 0; i < noOfCashFlows; i++) {
                sumCashFlows += cashFlows[i];
                if (cashFlows[i] > 0) {
                    noOfPositiveCashFlows++;
                } else {
                    if (cashFlows[i] < 0) {
                        noOfNegativeCashFlows++;
                    }
                }
            }

            // at least 1 negative and 1 positive cash flow available?
            if (noOfNegativeCashFlows > 0 && noOfPositiveCashFlows > 0) {
                // set estimated result:
                var irrGuess = 0.1; // default: 10%
                if (!isNaN(estimatedResult)) {
                    irrGuess = estimatedResult;
                    if (irrGuess <= 0) {
                        irrGuess = 0.5;
                    }
                }

                // initialize first IRR with estimated result:
                var irr = 0;
                if (sumCashFlows < 0) { // sum of cash flows negative?
                    irr = -irrGuess;
                } else { // sum of cash flows not negative
                    irr = irrGuess;
                }

                // iteration:
                // the smaller the distance, the smaller the interpolation
                // error
                var minDistance = 1e-15;

                // business startup costs
                var cashFlowStart = cashFlows[0];
                var maxIteration = 100;
                var wasHi = false;
                var cashValue = 0;
                for (var i = 0; i <= maxIteration; i++) {
                    // calculate cash value with current irr:
                    cashValue = cashFlowStart; // init with startup costs

                    // for each cash flow
                    for (var j = 1; j < noOfCashFlows; j++) {
                        cashValue += cashFlows[j] / Math.pow(1 + irr, j);
                    }

                    // cash value is nearly zero
                    if (Math.abs(cashValue) < 0.01) {
                        result = irr;
                        break;
                    }

                    // adjust irr for next iteration:
                    // cash value > 0 => next irr > current irr
                    if (cashValue > 0) {
                        if (wasHi) {
                            irrGuess /= 2;
                        }
                        irr += irrGuess;
                        if (wasHi) {
                            irrGuess -= minDistance;
                            wasHi = false;
                        }
                    } else {// cash value < 0 => next irr < current irr
                        irrGuess /= 2;
                        irr -= irrGuess;
                        wasHi = true;
                    }

                    // estimated result too small to continue => end
                    // calculation
                    if (irrGuess <= minDistance) {
                        result = irr;
                        break;
                    }
                }
            }
        }
    }
    return result;
}

/**
 *计算25年，每年发电量
 **/
function ffdl(){

    if(!checkInput())
        return;


    $("#data-table").css("display","inline");
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
    var opt=$("#city").children('option:selected').val();
    var zj=0;
    var dj=$("#dj").val();

    var part=$("#part").val();
    var btnx=$("#btnx").val();
    var part1=$("#part1").val();
    var btnx1=$("#btnx1").val();
    var zybl=$("#zybl").val()/100;  //自用比例
    var cb=$("#cb").val()/100;  //运维成本

    var sb=$("#sbcb").val();    //设备成本
    var dkbl=$("#dkbl").val();  //贷款比例
    var dklv=$("#dklv").val();  //贷款利率
    var dknx=$("#dknx").val();  //贷款年限

    var sum= sb*(1-dkbl/100)+sb*(dkbl/100)*((dklv/100)*dknx+1) ;   //总投资
    alert('总投资额为'+sum+'万元');
    var ygsy=0;
    var tr;
    var lv=$("#lv").val()/100;
    var lilv=0; //总利率
    var top10_lilv=0; //前十年利率总和
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
    var staType=$('input:radio[name="stationType"]:checked').val();

    if(staType=="dianzhan"){
        ygsy=parseFloat(parseFloat(dj)+parseFloat(part*btnx/20)+parseFloat(part1*btnx1/20));
        zj=$("#zj").val()*1000;
    }else{
        zj=$("#zj").val();
        ygsy=(parseFloat(dj)*zybl+parseFloat(jbdj*(1-zybl))+parseFloat(0.42))*20/25+(parseFloat(dj)*zybl+parseFloat(jbdj*(1-zybl)))*5/25;
    }
    //ygsy=(parseFloat(dj)+0.42)*zybl+parseFloat((jbdj+0.42)*(1-zybl));

    //计算售电总收入

    $("#ygsy").html(Math.round((ygsy+parseFloat(part*btnx/20)+parseFloat(part1*btnx1/20))*100)/100+"元/度");//显示25年平均电价

    var yihuan=0;  //定义已还本金
    var hbfxtotle=0;  //还本付息总额

    var je=parseFloat(sb*(dkbl/100));

    var debx_jg = debx(je, dklv, dknx, 1, 0);  //等额本息  每月相同  参数：总金额  利率   贷款期限    年利率（1）月利率（2）   0
    //返回参数  hkze还款总额   yhk月还款    zlx总利息


    var debj_jg = debj(je, dklv, dknx, 1, 0); //等额本金  越还越少
    //返回参数  hkze还款总额   syhk首月还款   mydj每月递减    zlx总利息

    var btsy=parseFloat(dj)*zybl+parseFloat(jbdj*(1-zybl))+parseFloat(0.42);

    var year;//回收周期
    var flag=0;
    var values=new Array();
    values.push(-sb*(1-dkbl/100));
    var values1=new Array();
    values1.push(-sb);
    //计算25年收益
    var str="";
    for(var i=1;i<=25;i++){
        if(i<=btnx1 || i<=btnx){
            ygsy=btsy;
            if(i<=parseInt(btnx1)){
                ygsy+=parseFloat(part1);
            }

            if(i<=parseInt(btnx)){

                ygsy+=parseFloat(part);  //加上地方补贴后的收益  有补贴年限限制

            }
        }else{
            ygsy=btsy;
        }
        //后5年没有国家补贴
        if(i>20){
            ygsy=btsy-0.42;
        }

        fdl.push(Math.round(parseFloat(nfdl(opt,zj,i)/10000)*100)/100);
        djl.push(Math.round(parseFloat(ygsy*fdl[i-1])*100)/100);
        var cb1=parseFloat(sb*cb);  //运维成本
        cbl.push(Math.round(cb1*1000)/1000);
        var nsy=0;  //年收益
        var benjin=(sb*(dkbl/100))/dknx;  //每月要还的本金
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

                nsy=Math.round((parseFloat(ygsy*fdl[i-1])-parseFloat(sb*cb)-mnhk)*100)/100;   //年收益

                hbfx.push(Math.round(parseFloat(mnhk)*1000)/1000);

            }else{

                nsy=Math.round((parseFloat(ygsy*fdl[i-1])-parseFloat(sb*cb)-parseFloat(debx_jg.yhk*12))*100)/100;   //年收益
                hbfx.push(Math.round(parseFloat(debx_jg.yhk*12)*1000)/1000);

            }

            //hbfxtotle+=parseFloat((sb-yihuan)*(dkbl/100)*(dklv/100))+benjin
        }else{
            nsy=Math.round((parseFloat(ygsy*fdl[i-1])-parseFloat(sb*cb))*100)/100;
            hbfx.push("-");
        }
        var zhejiu;
        var tax;
        var tax1;//全投资税
        //17%	¥8,263,888.89 	70%
        //11%	¥805,180.18 	10%
        //6%	¥919,811.32 	20%

        zhejiu=((-sb+(sb*0.7*0.17+sb*0.1*0.11+sb*0.2*0.06)*0.95))/15

        tax1=ygsy*fdl[i-1]-cb-zhejiu;

        if (hd_type==1){
            if (i <= dknx) {
                tax = ygsy*fdl[i-1] - cb - (mnhk - sb * dkbl / dknx / 100) - zhejiu;
            }else {
                tax = ygsy*fdl[i-1] - cb  - zhejiu;
            }

        }else {
            if (i <= dknx) {
                var mnlx = 0;
                var debxlx = debx(je, dklv, dknx, 1, 1);
                for (k = 1; k <= 12; k++) {
                    var sz = debxlx.xx
                    var xj = sz[(12 * (i - 1) + k - 1)];
                    mnlx = mnlx + xj.ylx;   //月利息
                }
                tax=ygsy*fdl[i-1]-cb-mnlx-zhejiu;
            }else {
                tax=ygsy*fdl[i-1]-cb-zhejiu;
            }

        }

        if(i>15){
            tax=tax+zhejiu;
        }

        if(i<4){
            tax=0;
            tax1=0;
        }else if(i<7){
            tax=tax*0.25/2;
            tax1=tax1*0.25/2;
        }else{
            tax=tax*0.25;
            tax1=tax1*0.25;
        }

        nsy=nsy-tax/1.15;

        hdl.push(nsy);


        var syl=parseFloat(nsy*100/(sb-je)).toFixed(2);

        tr=$("#data-table").find('tr').eq(i).find('td');

        tr.eq(1).text(fdl[i-1]);
        tr.eq(2).text(djl[i-1]);
        tr.eq(3).text(cbl[i-1]);
        tr.eq(4).text(hdl[i-1].toFixed(2));
        tr.eq(5).text(hbfx[i-1]);
        tr.eq(6).text(syl+"%");
        sumFdl=sumFdl+parseFloat(Math.round((nfdl(opt,zj,i)/10000)*100)/100);
        sumDjl=sumDjl+parseFloat(Math.round((ygsy*fdl[i-1]*100)/100));
        sumCbl=sumCbl+parseFloat(cbl[i-1]);
        totle+=parseFloat(djl[i-1]);
        sumHdl+=parseFloat(hdl[i-1]);
        //alert(sumHdl);

        values.push(hdl[i-1]);
        values1.push(djl[i-1]-cbl[i-1]-tax1/1.15);
        // td.text(''+fdl[]);
        // alert(fdl[i-1]);

        console.log(tax1);

        if (sumDjl-cb*i >= sb && flag==0){
            year=i+1-(sumDjl-cb*i-sb)/(djl[i-1]);
            flag=1;
        }

        $("#hbzq1").html(parseFloat(year).toFixed(2)+"年");

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

    var s8=sum8/15;


    //var hbzq=-(sb*(1-(dkbl/100)))/(s8-sb*(dkbl/100)*(dklv/100));  //回报周期
    //
    ////如果回报周期(大于)贷款年限
    //
    //if(hbzq>dknx){
    //    hbzq=(sb*(1-dkbl/100)+dknx*sb*(dkbl/100)*(dklv/100))/(s8-sb*(dkbl/100)*(dklv/100));
    //}
    //
    var hbzq=sum/(totle/25);
    $("#hbzq").html((hbzq).toFixed(2));  //计算回报周期   前十年回报率总和/总投资

    $("#totle").html(totle.toFixed(3));	  //总收益

    var irr1=100*IRR(values,0.1);
    var irr=100*IRR1(values1,0.1);
    $("#irr").html(irr.toFixed(2)+"%");
    //$("#irr").html(values1.toString());
    $("#irr1").html(irr1.toFixed(2)+"%");



    createTableChart();

}



function createTableChart(){
    var cat=[];

    for(var k=1;k<=25;k++){
        cat.push("第"+k+"年");

    }
    //var tableJson={'categories':cat,'series':[{'name':'运维成本','data':cbl},{'name':'可还贷现金','data':hdl}]};
    var seriesOptions =[];
    //,{'name':'运维成本' ,'data':cbl,'type':'column','yAxis':0}];

    seriesOptions[0] = {'name':'年收益' ,'data':hdl,'type':'column','yAxis':0};
    seriesOptions[1] = {'name': '发电量','data':fdl ,'type':'spline','yAxis':1};

    createChart2(500,"万"," ",cat,seriesOptions);
}
/**
 *计算出5,7,10,20年的还款情况
 */
function fhld(xz5,xz7,xz10,xz20,lv){
    json5=fhl(xz5,5,lv);
    json7=fhl(xz7,7,lv);
    json10=fhl(xz10,10,lv);
    json20=fhl(xz20,20,lv);

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

function fhk(xzv,lvv,n){
    var t=zs(1+lvv,n)
    var result=(xzv*lvv*t)/(t-1);
    return parseFloat(result.toFixed(2));
}

function zs(v,n){
    var result=v;
    if(n==0)
        return result=1;
    for(var i=1;i<n;i++){
        result=result*v;
    }
    //
    return result;
}
/**
 *计算第几年的发电量
 *opt-日均辐射量，zj-装机容量,n-第几年
 **/
function nfdl(opt,zj,n){
    var result= 365*opt*zj*ffdxl(n);  //OPT*365*电站装机量*发电效率（第N年的发电效率）
    return parseFloat(result.toFixed(2));
}
/**
 *计算年发电效率
 *n-第几年,jd-角度
 **/
function ffdxl(n){
    var jd=jdjs();
    var result=0.80*jd*0.9737; //发电效率 0.9737为与模型发电量差值
    for(var i=0;i<n;i++){
        result*=0.9922;
    }
    return result;
}

function jdjs(){
    var jd=$('input[name="jd"]:checked').val();
    var jd2=$('input[name="jd2"]:checked').val();
    //如果角度为0，则不区分方向，效率为0.93
    if(jd2==0){
        return 0.93;
    }else{
//否则为最佳角度100% *朝向
        return jd;
    }
}


function fxzze(n){
    var result=0;
    for(var i=0;i<n;i++){
        result=result+xzl[i]/1;
    }
    return parseFloat(result.toFixed(2));
}

function checkInput(){
    if($("#province").children('option:selected').val()==""){
        alert("请选择省份");
        return false;
    }
    if($("#city").children('option:selected').val()==""){
        alert("请选择城市");
        return false;
    }
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

    if(typeof($('input[name="jd"]:checked').val())=="undefined"){
        alert("请选择朝向");
        return false;
    }
    if(typeof($('input[name="jd2"]:checked').val())=="undefined"){
        alert("请选择安装倾角范围");
        return false;
    }

    if(trim($("#dj").val())=="" || isNaN($("#dj").val())){
        alert("电价不能为空，并且必须数字");
        return false
    }
    if(trim($("#cb").val())=="" || isNaN($("#cb").val())){
        alert("电价不能为空，并且必须数字");
        return false
    }

    //判断贷款利率不能为100%

    return true;
}
function trim(str){ //删除左右两端的空格
    str=""+str;
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * 数字格式转换成千分位
 *@param{Object}num
 */
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+','+
            num.substring(num.length-(4*i+3));
    return (((sign)?'':'-')  + num + '.' + cents+'%');
}


function updateTips( t ) {
    $("#validateTips" )
        .text( t )
        .addClass( "ui-state-highlight" );
    setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
    }, 500 );
}
function checkUsername(o){
    if(o.val().length>16||o.val()<3){
        o.addClass( "ui-state-error" );
        updateTips( "姓名必须填写并且长度小于16个字符");
        return false;
    }else{return true;}
}

function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips(  n + " 必须填写，并且长度介于" +
            min + " 和" + max + "之间." );
        return false;
    } else {
        return true;
    }
}

function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
    } else {
        return true;
    }
}



function selectFenbu(){
    /*	$("#use").show();
     $("#zybl").val(80);
     $("#cb").val(2);
     $("#ygsy").html("");
     $("#totle").html(0);
     $("#zj").val(1000);
     $("#hbzq").html("");

     $("#butie").show();
     $("#alert").html("备注：请如实填写电站所在地的相关数值，初始数值仅供参考。电网电价为自发自用业主用电价格。计算公式中已包含各地脱硫上网电价。");
     $("#danwei").html('KW'); */


    $("#station_type").empty();
    $("#station_type").load("tab_f.html");
    init();
}
function selectDianzhan(){
    /*	$("#use").hide();
     $("#zybl").val(0);
     $("#cb").val(5);
     $("#dj").val(1);
     $("#ygsy").html("");
     $("#totle").html(0);
     $("#zj").val(1);
     $("#hbzq").html("");
     $("#butie").hide();
     $("#alert").html("备注：请如实填写电站所在地的相关数值，初始数值仅供参考。电网电价为光伏发电标杆电价。");
     $("#danwei").html('MW');  */

    $("#station_type").empty();
    $("#station_type").load("tab_d.html");
    init();
}


