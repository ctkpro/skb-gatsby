import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"
import Video from "../components/video"


// import banner_video from '../video/banner030102.mp4';
import banner_video from '../video/b020103-1080.mp4';
import mbanner_video from '../video/mb020103.mp4';
import card1 from '../images/OU數存專區_486x322.jpg';
import card2 from '../images/OU微企貸形象廣告_486x322.jpg';
import card3 from '../images/智能理財_486x322.png';

let w = 1440;
const isBrowser = typeof window !== "undefined";
if(isBrowser){
  w  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

const IndexPage = () => (
  <Layout>
    <Seo title="新光銀行" subTitle='30歲以下必懂，準到哭，新年厭世冷雞湯第一句就是你了' />
    <div className='banner-container'>
      {/* <StaticImage
        src="../images/banner-02.gif"
        className='skb-banner'
        quality={95}
        formats={["auto", "webp", "avif", "gif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      {/* <img src={banner02} className='skb-banner' alt="banner"/> */}

      <video autoPlay muted='muted' loop className="skb-banner desktop">
        <source src={banner_video} type="video/mp4" />
      </video>
      <video autoPlay muted='muted' loop playsInline className="skb-banner mobile">
        <source src={mbanner_video} type="video/mp4" />
      </video>
    </div>

    <section className='placeholder'>
      <h2 className="section-title">新未來 你來</h2>
      <p>新年度無視新挑戰</p> 
      <p>有新光銀和你一起勇敢破關</p>
      <p>你來，打造最好的未來</p>
    </section>


    <section className='feature'>
      {/* <h2 className='section-title'>形象影片</h2> */}
      <div className='video-container'>
        <Video
          videoSrcURL="https://www.youtube.com/embed/P3192Sz2gws"
          videoTitle="Official Music Video on YouTube"
        />
        {/* <div className='video-describe'>
          <h3>新未來有你在其中</h3>
          <p>搶先詮釋「新」對大眾是什麼意義，最後帶到對新光銀來說，新=未來=有你的參與</p>

          <h3>新未銀與時俱進</h3>
          <p>不但新光銀是新事物其中一員，更圍繞著你，去組成未來的新服務</p>

          <h3>和你一起面對新挑戰</h3>
          <p>新帶有未知，未知帶來挑戰，新光銀就是在挑戰裡幫你找到那個光、那個出路</p>
        </div> */}
      </div>
    </section>

    <section className='slogan'>
      <StaticImage
        src="../images/slogan-banner-fix.png"
        // width={'100%'}
        className='slogan-featured'
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `0.25rem` }}
      />
      <div className="slogan-text">
        <h1>給下個世代的<br/>負負得正新年第一句</h1>
        <p>去年都可以度過了，今年還有什麼難得倒你？</p>
        <p>默念心中疑問，點開第一個提示，</p>
        <p>立刻遇見你的有感新未來！</p>
      </div>
    </section>

    <section className="message-popup" onClick={popupMessage}>
      <StaticImage
        src="../images/message-banner-fix.png"
        // width={'100%'}
        className=''
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `0.25rem` }}
      />
      <Link 
        to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fctkpro.github.io%2Fskb-gatsby%2F&display=popup&ref=plugin&src=share_button" 
        className="shareToFB fab fa-facebook">
        新年之神說：分享更快實現心願！
      </Link>
      <div className='message-box'>NEW MESSAGE</div>
    </section>

    <section className='events'>
      <h2 className='section-title'>錢往新未來</h2>
      <div className='card-container'>
        <Card
          cardLink='https://www.skbank.com.tw/campaign/skbankOU/home'
          cardSrcURL={card1}
          cardTitle='OU數位帳戶'
          cardExcrept='線上快速開戶優惠滿滿'
        />
        <Card
          cardLink='https://www.skbank.com.tw/df0df61416.html'
          cardSrcURL={card2}
          cardTitle='OU 微企貸' 
          cardExcrept='線上徵審8小時速核貸'
        />
        <Card
          cardLink='https://skbrobo.skbank.com.tw/robot/'
          cardSrcURL={card3}
          cardTitle='新光智能理財' 
          cardExcrept='專業團隊電腦嚴選標的'
        />
      </div>
    </section>

  </Layout>
)
const messages = ["任性也是一種個性。","現在錯過的，會在未來重逢。","你想過會在什麼領域大放異彩？","真心喜歡的東西，不會終結。",
  "你為了誰的未來而活？","沒人聽過的未來才真正充滿可能。","寫下失眠時想到的願望成為明早的開端。","吃拉麵需要排隊，好結果也需要時間。",
  "不要隨便定新年新目標。","說不定你不適合住在都市裡。","未來只想到初音？還有嗎？","你未來人吧，難怪你對現在不滿意。","沒有名氣，所以你不怕丟臉。",
  "躺著休息一下，你會從被爆擊中再站起來。","放社群網站一天假，看看會怎樣。","做什麼會讓你想像力失控？","你需要一次翻轉，或顛覆框架。",
  "你已身處疫後的未來，試著從這裡延伸。","你想為地球或像你這樣的人類做些什麼？","再小的事都能成為專家。","增加好習慣，只要一個，未來就會改觀。 ",
  "你喜歡的AI世界是什麼樣子？","慶祝一個你自己才知道的紀念日。","想放假不必正當理由。","設定管他去死的界線。","為生活用盡全力撐著沒倒，你很棒了。",
  "不必不間斷的努力，也可以在當下享受生活。","讓別人去說你是什麼世代，你只代表自己。","你的倦怠感是一個提醒。","用喜歡的人角度，看看現在的你。覺得如何？",
  "讓你上癮的東西？它是你的機會。","打開外送app前，覺察你的渴望。","探索未來的路，後悔了再說。","持續前進，不知不覺就會進入未來。","把枕頭當樹洞盡情地說。",
  "你的投資在哪裡，你的將來也在那裡。","對你的夢想說句實話。","別急於和世界一樣，讓世界跟上你的腳步！","所謂成年就是不斷解任務。","水逆是要告訴你順其自然。",
  "不過度努力是你今天的努力。","不想輸就需要一點戰略。","進修如何當一個好貓奴。","眼前的數字不代表所有。","挑戰一種你爸會說很瘋的生活方式。",
  "老太太不用你幫，先幫自己過好今天。","開youtube學一件新的事。","你一定是某方面的天才。","情緒只是一時的，它並不代表你。","你其實可以再獨立一點。",
  "找個人面對面談你的棘手問題。","既然都要花錢，至少要懂買。","用你的眼光打造你的元宇宙。","生活搞得你好亂，至少給自己一個擁抱。","關濾鏡的你也有地方可以美哭眾人。",
  "今天你想如何縮短你的工時？","你的未來只有你能逆轉。","性別不是你的絕對。","用閱讀開出一條新路徑。","想想腳下這個廢墟你覺得最美的地方。",
  "改變未來生活的通常只是小事。  ","今日目標：讓討厭你的人難過。","微不足道的事值得歡慶，因你給它意義。","有些東西即使享免運也不必擁有。",
  "為了不要月底看帳戶哭暈，現在可以做什麼？","上班肉體不動，大腦可以登出。","拿下耳機，試試看一點沈默的時間。","記住，你永遠都有選擇權。",
  "會厭世代表你是正常人。","誰說一定要像過去的你那樣？","你無法接受的只是事情出乎你預料。","勇於面對挫賽時刻就代表你登大人了。",
  "人類都快要移民火星了，你值得多點信心。","傳奇第一章通常都是從危機寫起。","解決你身邊的一個不公平。","放手單飛也許正是時候。","沒錯，有些日子就是很矮額。",
  "填入一個你從沒想過的答案。","活好今天是你唯一能確定的事。","非同溫層絕對能激起你的戰鬥力。","玻璃心也可以是強化玻璃。","孤獨是你終於可以自己享受的禮物。",
  "他不是要激怒你，你們根本不在同個星球。","要先拯救哪一個危機，端看你的選擇。","腦內小劇場是你的力量泉源。","非常識有時更值得嘗試。","你的履歷需要月更。",
  "你珍貴的好心情不值得用在機掰人身上。","懶得說話，那就用畫的。","沒電時，出門進行光合作用。","讓興趣當你老闆。","還沒定案是因為你還在多方嘗試。",
  "適時放棄是你的機智生活。","坦承你不知道沒啥大不了。","為你覺得天蹋下來也想去做的事列張清單。","讓和你合作的人也感到快樂。","你的好奇心呢？掉在沙發下嗎？",
  "每個人都有不好說的社交障礙。","不想忍耐就不要忍耐。","不可思議的念頭有時超級合理。","分心沒關係，分心是跨領域思考。","發明一種你會想做的工作。",
  "想想二十年後的你會怎麼說。","貼上你自己創造的標籤。","不需要斷捨離，只需要清掉桌上的垃圾。","先做了再來怕失敗。","你不需要擁有它，找機會體驗它就好。",
  "任何鳥事都能變成下一首饒舌歌。","帶著問題共處，每個大師都這麼做。","事情讓你跌破眼鏡時，換個視角。","除了照顧好自己，沒有事非做不可。"];

  function popupMessage(){
    let msgBox = document.querySelector('.message-box');
    let rwd = 1;
    
    let randomMsg = messages[~~(Math.random() * messages.length)];
    msgBox.textContent = randomMsg;
    if(msgBox.textContent.length >= 13){
      msgBox.style.width = '350px';
      if(w<=1280){
        msgBox.style.width = '300px';
      }
      if(w<=1024){
        msgBox.style.width = '250px';
      }
    }

    let offsetYRate = 30;
    let offsetY = 0;
    if(w <= 768){
      rwd = 0;
      offsetYRate = 5;
      offsetY = msgBox.textContent.length >= 10 ? -50 : -40;
    }
    let randomX;
    let randomY = 15 + offsetY + ~~(Math.random() * offsetYRate);
    // let envelopeWidth = 410;
    if(Math.random() < 0.5){
      // 從最左邊到信封左側，信封寬410
      // let leftLimit = (w - envelopeWidth)/2;
      let range = 15;
      if(w<=1440){ range = 12; }
      if(w<=1280){ range = 7; }
      if(w<=1024){ range = 6; }
      if(msgBox.textContent.length < 13){
        range = 1.5;
      }
      randomX = (Math.random() * range);
      // if( (randomX/100)*w + msgBox.offsetWidth > leftLimit){
      //   randomX = ((leftLimit - msgBox.offsetWidth)/w)*100;
      // }
    }else{
      let rangeFrom = 60;
      let rangeTo = 100;
      if( w<= 1440){
        rangeFrom = 65;
        rangeTo = 75;
      }
      if( w<= 1024){
        rangeFrom = 70;
      }
      randomX = rangeFrom + (Math.random() * (rangeTo - rangeFrom));
      if( (randomX/100)*w + msgBox.offsetWidth > w){
        randomX = ((w - msgBox.offsetWidth)/w)*100;
      }
    }
    msgBox.style.left = `${randomX}%`;
    msgBox.style.top = `${randomY}%`;
    msgBox.style.opacity = `1`;
    
    msgBox.classList.remove('pop-effect');
    setTimeout(function(){
      msgBox.classList.add('pop-effect');
    },300)
  }

export default IndexPage