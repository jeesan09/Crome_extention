console.log(" jeesan u r in go 60");

var search_in = document.documentElement.innerHTML; 
/*document.body.innerHTML;*/
string_context = search_in.toString();

//var array_mails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
var reg=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
var emails='';
emails = string_context.match(reg);

//phone no regular expessoions
var reg2=/\+(88)-(02)-[0-9]{7}/gi;// /(01)[156789][0-9]{8}/gi
var emails2='';
emails2 = string_context.match(reg2);


var reg3=/(01)[1356789][0-9]{8}/gi;
var emails3='';
emails3=string_context.match(reg3);


var reg4=/\+(880)-[0-9]{10}/gi;
var emails4='';
emails4=string_context.match(reg4);

////end of  bangladesh phone Number

//sweedish phone numbers


var reg5=/\+(46)[-\s][0-9]{2}[-\s][0-9]{3}[-\s][0-9]{3}[-\s][0-9]{2}/gi;
var emails5='';
emails5=string_context.match(reg5);

var reg6=/[0-9]{3}[-\s][0-9]{3}[-\s][0-9]{2}[-\s][0-9]{2}/gi;
var emails6='';
emails6=string_context.match(reg6);

/*var reg7=/[0-9]{2}[-\s][0-9]{2}[-\s][0-9]{2}[-\s][0-9]{2}/gi;
var emails7='';
emails7=string_context.match(reg7);*/




var reg8=/\+(46)[0-9]{8}/gi;
var emails8='';
emails8=string_context.match(reg8);


var reg9=/\+(46)[-\s][0-9]{8}/gi;
var emails9='';
emails9=string_context.match(reg9);

var reg10=/\+(46)[0-9]{3}[-\s][0-9]{3}[-\s][0-9]{2}/gi;
var emails10='';
emails10=string_context.match(reg10);


/*var reg11=/[0-9]{12}/gi;
var emails11='';
emails11=string_context.match(reg11);*/

var reg12=/[0-9]{4}[-\s][0-9]{3}[-\s][0-9]{2}/gi;
var emails12='';
emails12=string_context.match(reg12);



/*var reg13=/[0-9]{8}/gi;
var emails13='';
emails13=string_context.match(reg13);*/
var reg14=/[0-9]{4}[-\s][0-9]{6}/gi;
var emails14='';
emails14=string_context.match(reg14);

var reg14=/[0-9]{4}[-\s][0-9]{6}/gi;
var emails14='';
emails14=string_context.match(reg14);

var reg15=/[0-9]{4}[-\s][0-9]{2}[-\s][0-9]{2}[-\s][0-9]{2}/gi;
var emails15='';
emails15=string_context.match(reg15);


var reg16=/[0-9]{3}[-\s][0-9]{2}[-\s][0-9]{2}[-\s][0-9]{2}/gi;
var emails16='';
emails16=string_context.match(reg16);

var reg17=/[0-9]{2}[-\s][0-9]{3}[-\s][0-9]{2}[-\s][0-9]{2}/gi;
var emails17='';
emails17=string_context.match(reg17);


var reg18=/[0-9]{3}[-\s][0-9]{2}[-\s][0-9]{2}[-\s][0-9]{2}/gi;
var emails18='';
emails18=string_context.match(reg18);

var reg19=/[0-9]{4}[-\s][0-9]{3}[-\s][0-9]{2}/gi;
var emails19='';
emails19=string_context.match(reg19);


var reg20=/\+(46)[0-9]{3}[-\s][0-9]{2}[-\s][0-9]{2}[-\s][0-9]{2}/gi;
var emails20='';
emails20=string_context.match(reg20);




function getEmails() {



			//	console.log(emails);
			if( emails !=null)
			 {
                 for(var i=0; i<emails.length; i++)
				{
				    console.log(emails[i]); // or whatever you need to do with them
				}

		      }

		      if(emails2 !=null)

		    {

                  for(var j=0; j<emails2.length; j++)
				{
				    console.log(emails2[i]); // or whatever you need to do with them
				}


		      }


			
				
/*console.log(" in the function");
*/
}

getEmails();



/*var text = "hello";
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
       
                sendResponse(text);
         
       
    }
);

*/
var text='';

if(emails !=null){

	  for(var i=0; i<emails.length; i++)
	{   

		if(emails[i] != emails[i-1] ){
	       text += "\n"+emails[i].toString()+"\n"+"\n";
		}
	     // or whatever you need to do with them
	}
}

/*var text = emails[].toString();*/

var text2='';


if(emails2 != null )
{
		 for(var j=0; j<emails2.length; j++)
		{   

			if(emails2[j] != emails2[j-1] ){
		       text2 +='--'+'('+"\n"+emails2[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}





var text3='';

if(emails3 != null )
{
		 for(var j=0; j<emails3.length; j++)
		{   

			if(emails3[j] != emails3[j-1] ){
		       text3 +='--'+'('+"\n"+emails3[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}



var text3='';

if(emails3 != null )
{
		 for(var j=0; j<emails3.length; j++)
		{   

			if(emails3[j] != emails3[j-1] ){
		       text3 +='--'+'('+"\n"+emails3[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}


var text4='';

if(emails4 != null )
{
		 for(var j=0; j<emails4.length; j++)
		{   

			if(emails4[j] != emails4[j-1] ){
		       text4 +='--'+'('+"\n"+emails4[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}

var text5='';

if(emails5 != null )
{
		 for(var j=0; j<emails5.length; j++)
		{   

			if(emails5[j] != emails5[j-1] ){
		       text5 +='--'+'('+"\n"+emails5[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}

var text6='';

if(emails6 != null )
{
		 for(var j=0; j<emails6.length; j++)
		{   

			if(emails6[j] != emails6[j-1] ){
		       text6 +='--'+'('+"\n"+emails6[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}

/*var text7='';

if(emails7 != null )
{
		 for(var j=0; j<emails7.length; j++)
		{   

			if(emails7[j] != emails7[j-1] ){
		       text7 += '--'+'('+"\n"+emails7[j].toString()+"\n"+"\n"+')';
			}
		  
		     // or whatever you need to do with them
		}
}*/


var text8='';

if(emails8 != null )
{
		 for(var j=0; j<emails8.length; j++)
		{   

			if(emails8[j] != emails8[j-1] ){
		       text8 += '--'+'('+"\n"+emails8[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}





var text9='';

if(emails9 != null )
{
		 for(var j=0; j<emails9.length; j++)
		{   

			if(emails9[j] != emails9[j-1] ){
		       text9 += '--'+'('+"\n"+emails9[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}



var text10='';

if(emails10 != null )
{
		 for(var j=0; j<emails10.length; j++)
		{   

			if(emails10[j] != emails10[j-1] ){
		       text10 +='--'+'('+"\n"+emails10[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}


/*var text11='';

if(emails11 != null )
{
		 for(var j=0; j<emails11.length; j++)
		{   

			if(emails11[j] != emails11[j-1] ){
		       text11 +='--'+'('+"\n"+emails11[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}*/

var text12='';

if(emails12 != null )
{
		 for(var j=0; j<emails12.length; j++)
		{   

			if(emails12[j] != emails12[j-1] ){
		       text12 +='--'+'('+"\n"+emails12[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}


/*var text13='';

if(emails13 != null )
{
		 for(var j=0; j<emails13.length; j++)
		{   

			if(emails13[j] != emails13[j-1] ){
		       text13 +='--'+'('+"\n"+emails13[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}*/


var text14='';

if(emails14 != null )
{
		 for(var j=0; j<emails14.length; j++)
		{   

			if(emails14[j] != emails14[j-1] ){
		       text14 +='--'+'('+"\n"+emails14[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}

var text15='';

if(emails15 != null )
{
		 for(var j=0; j<emails15.length; j++)
		{   

			if(emails15[j] != emails15[j-1] ){
		       text15 +='--'+'('+"\n"+emails15[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}


var text16='';

if(emails16 != null )
{
		 for(var j=0; j<emails16.length; j++)
		{   

			if(emails16[j] != emails16[j-1] ){
		       text16 +='--'+'('+"\n"+emails16[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}



var text17='';

if(emails17 != null )
{
		 for(var j=0; j<emails17.length; j++)
		{   

			if(emails17[j] != emails17[j-1] ){
		       text17 +='--'+'('+"\n"+emails17[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}


var text18='';

if(emails18 != null )
{
		 for(var j=0; j<emails18.length; j++)
		{   

			if(emails18[j] != emails18[j-1] ){
		       text18 +='--'+'('+"\n"+emails18[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}

var text19='';

if(emails19 != null )
{
		 for(var j=0; j<emails19.length; j++)
		{   

			if(emails19[j] != emails19[j-1] ){
		       text19 +='--'+'('+"\n"+emails19[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}

var text20='';

if(emails20 != null )
{
		 for(var j=0; j<emails20.length; j++)
		{   

			if(emails20[j] != emails20[j-1] ){
		       text20 +='--'+'('+"\n"+emails20[j].toString()+"\n"+"\n"+')'+'--';
			}
		  
		     // or whatever you need to do with them
		}
}




var text_final='';


 text_final=text+text2+text3+text4+text5+text6+text8+text9+text10+text12+text14+text15+text16+text17+text18+text19+text20;


/*if (text ==null && text3 ==null){

	text3="plese refresh the page";
}*/


chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
       
    sendResponse(text_final);


         
         
       
    }
);


