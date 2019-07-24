function calsex1(selectForm)
/* 計算 sex 的加權值 */
{
	let ret=0;
	let i=0;
	for (i=0 ; i < selectForm.a.length ; i++)
	{
		if (selectForm.a[i].checked==true)
		{
			ret = ret + eval(selectForm.a[i].value)*8;
		}
	}
	return ret;
}
function myvoid()
{
	return false;
}
function myisDigit(num)
/* isDigit function */
{
	let str1="1234567890";
	let in15=0;
	if (num.length>1 || num.lengtn <= 0){return false;}
	in15 = str1.indexOf(num);
	if (in15 >= 0 && in15 <= 9){return true;}
	return false;
}

function checkdigitString(s)
/* check a string is 'digit' string or not */
{
	let i;
	for (i=0 ; i<s.length ; i++)
	{
		if (!myisDigit(s.charAt(i)))
		{
			return false;
		}
	}
	return true;
}

function midrand1(mid11)
{
	let gen1;
	gen1 = (Math.random());
	mid11.a.value = (gen1.toString()).substring(2,9);
	return gen1;
}

function calmid1(selectForm)
/* 計算中間值的加權值 */
{
	let ret=0;
	let i;
	for (i=0 ; i < selectForm.a.value.length ; i++)
	{
		ret = ret + (7-i) * eval(selectForm.a.value.substring(i,i+1));
	}
	return ret;
}

function calcity1(selectForm)
/* 計算縣市的加權值 */
{
	let ret=0;
	let i;
	for (i=0 ; i < selectForm.a.length ; i++)
	{
		if (selectForm.a[i].selected == true)
		{
			ret = eval(selectForm.a[i].value.substring(0,1)) + eval(selectForm.a[i].value.substring(1,2)) * 9;
		}
	}
	return ret;
}
function calall(city11,sex11,mid11)
/* 計算所有的加權值 */
{
	let ret=0;
	ret = calcity1(city11)+calsex1(sex11)+calmid1(mid11);
	ret = ret % 10;
	ret = 10 - ret;
	ret = ret % 10;
	return ret;
}
function output1(city11,sex11,mid11)
/* 輸出檢查碼 */
{
	let cee = 0;
	cee = calall(city11,sex11,mid11);
	return cee;
}
function output2(city11,sex11,mid11,output11,output12)
{
	let out1="";
	let ret2=0;
	let out2="";
	let i;
	clearout001(output12);
	midrand1(mid11);
	ret2 = output1(city11,sex11,mid11);
	out2 = ret2.toString();
	for (i=0 ; i < city11.a.length ; i++)
	{
		if (city11.a[i].selected == true)
		{
			out1 = out1 + city11.a[i].value.substring(2,3);
		}
	}

	for (i=0 ; i<sex11.a.length ; i++)
	{
		if (sex11.a[i].checked == true)
		{
			out1 = out1 + sex11.a[i].value;
		}
	}
	out1 = out1 + mid11.a.value;
	out1 = out1 + out2;
	output11.a.value = out1;
	return out1;
}
function clearout001(id04124)
{
	id04124.a.value = "";
}
function output3(id001,out001,city11,sex11,mid11)
{
	let thestr = id001.a.value;
	let i=0;
	let ret2 = 0;
	out001.a.value = "分析中 analyzing...";
	if (thestr.length != 10)
	{
		out001.a.value = "invalid(length) 長度不正確";
		return 0;
	}
	/* 分析縣市 */
	for (i=0 ; i < city11.a.length ; i++)
	{
		if (city11.a[i].value.substring(2,3) ==
			thestr.substring(0,1).toUpperCase())
		{
			city11.a[i].selected = true;
			break;
		}
	}
	if (i >= city11.a.length)
	{
		out001.a.value = "invalid(city) 縣市不正確";
		return 0;
	}
	/* 分析性別 */
	if (thestr.substring(1,2) == "1")
	{
		sex11.a[0].checked = true;
	}	
	else if (thestr.substring(1,2) == "2")
	{
		sex11.a[1].checked = true;
	}	
	else
	{
		out001.a.value = "invalid(gender) 性別不正確";
		return 0;
	}
	/* 分析中間值 */
	mid11.a.value = thestr.substring(2,9);
	if (!checkdigitString(mid11.a.value) )
	{
		out001.a.value = "invalid(serial) 流水號不正確";
		return 0;
	}

	
	/* 計算檢查碼 */
	ret2 = output1(city11,sex11,mid11);

	if (ret2.toString() != thestr.substring(9,10) )
	{
		out001.a.value = "invalid(check) 檢查碼不正確";
		return 0;
	}
	out001.a.value = "valid 正確";
	return 0;
}
// -->
