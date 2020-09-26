const Discord = require('discord.js');
const color = require('./color.json');
const confing = require('./confing.json');
const bot = new Discord.Client();
//const embed = require('./embed');


bot.on('ready', () => {

   bot.user.setActivity(`${confing.status}`, {type: 'LISTENING'}).catch(console.error);


   console.log('<------------------------------->')
   console.log(`| ${bot.user.tag} is now online |`)
   console.log('<------------------------------->')
})

bot.on('message', (message) => {

 //--------------------------((    ست استاتوس    ))--------------------------------//
let usermention = message.mentions.users.first()
let messagearry = message.content.split(" ")
let cmd = messagearry[0]
let status = messagearry[1]
if(cmd == `${confing.perfix}setstatus`) {
  //-------------دسترسی ندارین-------------//
  const notpermissionembed = new Discord.MessageEmbed()
  notpermissionembed.setAuthor('name user', 'https://cdn.discordapp.com/attachments/749943534789984296/757605269537685554/mysticAnimated_4911.gif')
  notpermissionembed.setTitle('شما دسترسی به این کامند رو ندارید')
  notpermissionembed.setThumbnail('https://cdn.discordapp.com/emojis/757255236636114945.gif?v=1')
  notpermissionembed.setTimestamp()
  notpermissionembed.setColor(color.red)
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(notpermissionembed);
  //-------------دسترسی ندارن-------------//
let statustext = message.content.replace(`${cmd} ${status}`, '')
if (statustext == `${cmd} ${status}` || statustext == `${cmd}`){
//-------------امبد متن و تایپ رو درست بنویسسید-------------//
  const errorembed = new Discord.MessageEmbed()

  errorembed.setAuthor('name user', 'https://cdn.discordapp.com/attachments/749943534789984296/757605269537685554/mysticAnimated_4911.gif')
  errorembed.setTitle('لطفا متن و تایپ مورد نظر را به صورت صحیح وارد کنید')
  errorembed.setDescription('نمونه کد های صحیح را میتوانید در پایین مشهاده کنید')
  .addFields(
    { name: 'روش صحیح', value: '/setstatus متن تایپ' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'STREAMING', value: '/setstatus STREAMING stream started', inline: false },
    { name: 'PLAYING', value: '/setstatus PLAYING zula', inline: false },
    { name: 'WATCHING', value: '/setstatus WATCHING stream smart', inline: false },
    { name: 'LISTENING', value: '/setstatus LISTENING tatalo ', inline: false },
	)
  errorembed.setThumbnail('https://cdn.discordapp.com/emojis/757255204906336348.gif?v=1')
  errorembed.setTimestamp()
  errorembed.setColor(color.yellow)
  message.channel.send(errorembed)
//-------------امبد متن و تایپ رو درست بنویسسید-------------//
}else{
  let status2 = status.toUpperCase()
  if(status2 == "STREAMING" || status2 == "PLAYING" || status2 == "WATCHING" || status2 == "LISTENING"){
    bot.user.setActivity(statustext, {
      type: status2,
      url: confing.url
      //-------------ست شد -------------//
      
    }).then 
    const setembed = new Discord.MessageEmbed()
    setembed.setAuthor('name user', 'https://cdn.discordapp.com/attachments/749943534789984296/757605269537685554/mysticAnimated_4911.gif')
    setembed.setTitle('استاتوس با موفقیت ست شد')
    setembed.setThumbnail('https://cdn.discordapp.com/emojis/757255230630133793.gif?v=1')
    setembed.setTimestamp()
    setembed.setColor(color.Green)
    
    message.channel.send(setembed)
    
    //-------------ست شد -------------//
  }else{
    //-------------امبد متن و تایپ رو درست بنویسسید-------------//
  const errorembed2 = new Discord.MessageEmbed()

  errorembed2.setAuthor('name user', 'https://cdn.discordapp.com/attachments/749943534789984296/757605269537685554/mysticAnimated_4911.gif')
  errorembed2.setTitle('لطفا متن و تایپ مورد نظر را به صورت صحیح وارد کنید')
  errorembed2.setDescription('نمونه کد های صحیح را میتوانید در پایین مشهاده کنید')
  .addFields(
    { name: 'روش صحیح', value: '/setstatus متن تایپ' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'STREAMING', value: '/setstatus STREAMING stream started', inline: false },
    { name: 'PLAYING', value: '/setstatus PLAYING zula', inline: false },
    { name: 'WATCHING', value: '/setstatus WATCHING stream smart', inline: false },
    { name: 'LISTENING', value: '/setstatus LISTENING tatalo ', inline: false },
	)
  errorembed2.setThumbnail('https://cdn.discordapp.com/emojis/757255204906336348.gif?v=1')
  errorembed2.setTimestamp()
  errorembed2.setColor(color.yellow)

  message.channel.send(errorembed2)
//-------------امبد متن و تایپ رو درست بنویسسید-------------//
    
  }
}
}

//--------------------------((    ست استاتوس    ))--------------------------------//



 //--------------------------((    امبد استارت استریم    ))--------------------------------//
    if (message.content.startsWith(`${confing.perfix}startstream`)) {
        //if(message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('@everyone')
        
        const startstreamembed = new Discord.MessageEmbed()
        .setTitle("<a:center:695977510634127381> STREAM STARTED <a:center:695977510634127381>")
        .setDescription("<a:aparatgame:749666201944195102> https://www.aparat.com/SMART_LTV/live")
        .setColor("#bf00ff")
        .setImage("https://cdn.discordapp.com/attachments/749943534789984296/757692480526221403/ezgif.com-video-to-gif_1.gif");

        if(message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(startstreamembed).then (message.channel.send('@everyone'))
        // message.channel.send(startstreamembed);
    }
         
    
     //--------------------------((    امبد استارت استریم    ))--------------------------------//
     //--------------------------((    امبد رول ها     ))--------------------------------//
    if(message.content.startsWith(`${confing.perfix}roles`)) {
       

        const rolesembed = new Discord.MessageEmbed() 

        .setTitle("قوانین کلی سرور دیسکورد")
        .setDescription("<a:aparatgame:749666201944195102> https://www.aparat.com/SMART_LTV/live")
        .setColor("#ff0d00")
        .setDescription("**قوانین عمومی سرور ** \n **1 : ادب را رعایت کنید و به علایق و سلایق دیگران احترام بگذارید **\n **2 : هر گونه ایجاد مزاحمت و ارسال تبلیغ به پیوی دیگران ممنوع است** \n **3 : از ارسال درخواست جهت موو دادن به ویس های قفل خودداری کنید** \n **4 : رول دادن فقط با فعالیت دائمی به شما تعلق میگیرد لطفا درخواست رول نکنید** \n **5 : در هرچنلی که هستید مطابق با موضوع آن فعالیت کنید** \n \n **قوانین چت سرور** \n **1 : از اسپم کردن،منشن کردن بی دلیل و به هم ریختن نظم در چت خودداری کنید** \n **2 : اطلاعات شخصی و حرف های خصوصی خود را در چت ارسال نکنید** \n **3 : در هنگام چت ادب را رعایت کنید و از الفاظ مناسب در چت استفاده کنید** \n **4 : از ارسال هرگونه تبلیغات در چت های سرور خودداری کنید** \n **5 : فقط در چنل چت مربوط به ربات ها از دستورات آنها استفاده کنید** \n \n **قوانین ویس سرور** \n **1 : در هنگام مکالمه از الفاظ رکیک و نامناسب استفاده نکنید** \n **2 : در هنگام مکالمه با افراد غریبه توهین و یا شوخی نامناسب نکنید** \n **3 : از بات موزیک دیگران حین شنیدن آهنگ بدون اجازه استفاده نکنید** \n **4 : فقط در چنل چت مربوط به ربات ها از دستورات آنها استفاده کنید**")


 
        .setImage("https://cdn.discordapp.com/attachments/629104670186668042/713287598587772928/rules.gif");
        
        if(message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(rolesembed).then ( message.channel.send('@everyone'))
    }
    //--------------------------((    امبد رول ها     ))--------------------------------//
    //--------------------------((    امبد کمک     ))--------------------------------//

    if(message.content.startsWith(`${confing.perfix}help`)) {

      const helpembed = new Discord.MessageEmbed()
    
      helpembed.setAuthor('name user', 'https://cdn.discordapp.com/attachments/749943534789984296/757605269537685554/mysticAnimated_4911.gif')
      helpembed.setTitle('راهنمای ربات')
      helpembed.setDescription('با ارسال کد های زیر در سرور میتوانید از خدمات ربات استفاده کنید')
      .addFields(
        { name: 'ست استاتوس', value: '/setstatus', inline: true },
        { name: 'پیام استارت استریم', value: '/startstream', inline: true },
        { name: 'قوانین سرور ', value: '/roles', inline: true },
     
      )
      helpembed.setThumbnail('https://cdn.discordapp.com/emojis/757259106611363930.gif?v=1')
      helpembed.setTimestamp()
      helpembed.setColor(color.Purple)
    
      message.channel.send(helpembed)
    
    }
        //--------------------------((    امبد کمک     ))--------------------------------//


    }
  
    
)






bot.login(`${confing.token}`)
