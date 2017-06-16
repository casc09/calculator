<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>asptest</title>
</head>

<body>

<%

if (Request.Form("companyname")<>"" and Request.Form("contactname")<>"" and Request.Form("contactphone")<>"" ) then
    mMobile=trim(Request.Form("contactphone")) '//获取手机号码代码。
    if SUBmobile(mMobile) then
        insertData
    else
        response.write "<script language='javascript'>"
        response.write "alert('执行操作——手机号码格式不正确！');"
        response.write "</script>"
        response.write "<script language='javascript'>"
        response.write "location.href = 'containerLogin.html';;"
        response.write "</script>"
    end if
else
   response.write "<script language='javascript'>"
   response.write "alert('填写完整后方可进入');"
   response.write "</script>"
   response.write "<script language='javascript'>"
   response.write "location.href = 'containerLogin.html';;"
   response.write "</script>"

end if


Function SUBmobile(tel)
    Set RegEx = New RegExp
    RegEx.IgnoreCase =True
    RegEx.Pattern = "^1[358]\d{9}$"
    SUBmobile=RegEx.test(tel)
End Function



Function insertData()
   'ole db连接
   set cnn1 = Server.CreateObject("ADODB.Connection")
   '连接串需要注意sqlserver的实例名，是否是默认，非默认必须要写出来
   cnn1.Open "provider=sqloledb;data source=hds133773505.my3w.com;initial catalog=hds133773505_db;user id=hds133773505;password=840530na;"
   sql="INSERT INTO containerUserinfo (companyname,username,userphone)"
   sql=sql & " VALUES "
   sql=sql & "('" & Request.Form("companyname") & "',"
   sql=sql & "'" & Request.Form("contactname") & "',"
   sql=sql & "'" & Request.Form("contactphone") & "')"
   set rs= Server.CreateObject("ADODB.RecordSet")
   rs.Open "userinfo", cnn1
   cnn1.Execute sql
   rs.close()
   cnn1.close()
   response.write "<script language='javascript'>"
   response.write "location.href = 'containerCalculator.html';;"
   response.write "</script>"
End Function



%>


<!-- if SUBmobile(mMobile) then
        insertData
    else
        response.write "<script language='javascript'>"
        response.write "alert('执行操作——手机号码格式不正确！');"
        response.write "</script>"
        response.write "<script language='javascript'>"
        response.write "location.href = 'test.html';;"
        response.write "</script>"
    end if
 -->


</body>
</html>