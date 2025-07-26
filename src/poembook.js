import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './poembook.css';

const PoemBook = () => {   // ✅ Capitalized component name
  return (
    <div className="poembook-container">
      <HTMLFlipBook
        width={500}          // ✅ Default width
        height={540}         // ✅ Default height
        size="fixed"
        minWidth={540}       // ✅ Minimum width to preserve double page
        maxWidth={1000}
        minHeight={400}
        maxHeight={540}
        maxShadowOpacity={0.5}
        showCover={true}
        className="poembook"
        responsiveSinglePage={false}
        mobileScrollSupport={true}
      >

        <div className="poembook-page ">
        </div>
               
        <div className="poembook-page ppage10 format">
        <h4 className="ppage10head">Did I just lucid dreamed or time travelled? </h4>

        <p>
  I took my book piles along me and opened crispy pages.<br/>
  Pages said of old times and drove me to rages.<br/>
  I wish I could move light-headed into the street<br/>
  or just enjoying family time or participating in festivities.
</p>

<p>
  I was lost in the thought, about how to bring rejoice<br/>
  when I was suddenly shaken with a sudden unfamiliar voice.<br/>
  A man in 90s moustache and tightly hooked tie<br/>
  was wearing white and grey clothes. I asked why I looked so dry.
</p>

<p>
  I was shot in astonishment from where he suddenly emerged.<br/>
  He called for some refreshment and took me to historic world.<br/>
  We enter into my history book with a sudden flash of light.<br/>
  The breath seemed so fresh there plus water seemed so bright.
</p></div>
<div className="poembook-page ppage10 format">
<p>
  Men and women sat under shades of enormous trees.<br/>
  Sparrows went playing in the sky. Behind them were mountain peaks.<br/>
  Few girls were playing hopscotch and dragged me to their game<br/>
  when suddenly passed a bullock cart with kids hanging on its frame.
</p>

<p>
  Green fields shown in azure. Veggies grew up naturally.<br/>
  Enjoyed all nutrients and kids grew up healthy.<br/>
  Just computers were not there neither towers could be seen.<br/>
  Surely the world had little progress but satisfied its human being.
</p>

<p>
  I could laugh my heart open through my waving hair<br/>
  until the man dragged me again to dirty atmosphere.<br/>
  But before we went to future again he got me by a bet.<br/>
  Said everything will see my dream. I say no I will not forget.
</p></div>
<div className="poembook-page ppage10 format">
<p>
  A sudden flash blinded me. I was back from the profound realm.<br/>
  I wiped my drool and closed that book<br/>
  and tried to forget the dream.
</p></div>
        <div className="poembook-page ppage2 format">
            <h4 style={{fontWeight:"bolder"}}>Do I like veges?</h4>
            <p style={{backgroundColor:"rgba(254, 251, 232, 0.56)",padding:"1vh"}}>
                    Bittergourd,bottlegourd<br/>
                    or be it Brinjal,<br/>
                    I know names don't please<br/>and neither are simple<br/><br/>
                    She says to be fit<br/>eat veges and fish <br/>I cried to her 'mumma!'<br/>bring juice or some chips
                    <br/><br/>
                    She shouted so loud<br/>"You little twit"<br/>and-I stated to her<br/>They always make me sick!
                    <br/><br/>I kept disliking <br/>until I observed<br/>beggers on the streets<br/>and those miserable deserts
                    <br/><br/>Adults and children<br/>were suffering malnutrition<br/>I looked at them in sorrow<br/>pitiful was condition...
        </p></div>
        <div className="poembook-page ppage2 format">
                <p>
                    <br/><br/>I wished they had food<br/>and body covered with fat<br/>I remembered I was so rude,<br/>How insensitive I could be like that?
                    <br/><br/>Be it bottlegourd or Bittergourd<br/>squashes or Brinjal<br/>From now I would thank God <br/>for whatever is on table!
                </p>
        </div>

        <div className="poembook-page ppage4 format">
        <h4 style={{fontWeight:"bolder",backgroundColor:"rgba(254, 251, 232, 0.56)"}}>Munni's Mission Water </h4>

        <p>
  Once upon a time, <br/>
  there lived a girl <br/>
  who had shiny deep eyes <br/>
  and was an adventurer.</p><br/>
  <p>She hopped like crazy <br/>and explored every corner,<br/>
  then on one fortunate day, <br/>find a way to explore the future.
  
</p>

<p>
She traveled so long <br/>and reached 2030.<br/>
  As she set foot into future,<br/> she smelled something dirty.<br/><br/>
  When she looked around her,<br/> found dark stinking water.<br/>
  She couldn't believe her eyes<br/> and asked, Is this the future?<br/>
  
</p>

<p>
Nor aquatic animals,<br/> neither plants and water.<br/>
  What place is this even? <br/>And then some thoughts struck her.<br/><br/>
  Is this the same river <br/>on which her life relied?<br/>
  What happened to my village river?<br/>
  She only cried and cried.<br/>
</p>
</div>
<div className="poembook-page ppage4 format">
<p>
  What made her river <br/>so dirty and polluted?<br/>
  She realized the flowing chemicals <br/>and sewage water untreated.<br/><br/>
  Overuse and exploitation <br/>further aggravated the matter.<br/>
  Lack of steps and awareness <br/>ailed the planet like never.<br/><br/>
</p>

<p>
  Little girl wiped her tears <br/>and looked down to the ailing river.<br/>
  She vowed to improve the water <br/>by enlightening the villagers.<br/><br/>
  She went to her past <br/>with a bold lesson in her heart.<br/>
  She told them of ailing nature.<br/> If not now, when will we start?<br/><br/>
</p></div>
<div className="poembook-page ppage4 format">
<p>
  She told all the people,<br/> If you don't want to get thirsty,<br/>
  then learn to save water<br/> and never make it dirty.<br/><br/>
  She went to clean the waters<br/> with hundreds of the elders<br/>
  and announced to industrialists<br/> first treat then spill the water.
</p>

<p>
  Her tiring efforts were not still enough <br/>and required a number of measures.<br/>
  All people ought to swear <br/>to stop depletion of nature.<br/><br/>
  Because water means life <br/>and souls to nature's beauty,<br/>
  without it we can't survive <br/>so saving is our duty.<br/><br/>
</p>
</div>
        
<div className="poembook-page ppage5 format2">
        <h4 style={{fontWeight:"bolder",backgroundColor:"rgba(254, 251, 232, 0.56)"}}>What Should I be? </h4>

        <p><br/>
  I wondered and wondered,<br/> what should I be?<br/>
  I liked the idea, <br/>to ask my mummy.<br/>
  She said an engineer, <br/>while my uncle gave no guide.<br/>
  Daddy suggested teacher, <br/>but granny focused on bride.<br/>
  A teacher included scientist,<br/> my auntie cut, a cook,<br/>
  a relative blabbered lawyer, <br/>and all of them shook.<br/>
  Then I knew my answer. <br/>I yawned and said, none.<br/>
  How about the idea <br/>of first being a human?
</p>

        </div>
        <div className="poembook-page ppage6 format2">
        <h4 style={{fontWeight:"bolder",backgroundColor:"rgba(254, 251, 232, 0.56)"}}>Routine as a rap </h4>

        <p>
  You should know a girl who is no other than me.<br/>
  But meet by an appointment as she is never found free.<br/>
  Find her writing poems or making the evening tea.<br/>
  If not in her room, then probably gardening...
</p>

<p>
  Might be teaching her sister or making a new painting.<br/>
  If you find her logged in the room, probably she is coding.<br/>
  If all the phones are missing, then probably she is clicking.<br/>
  If not in the whole house, then she must be off to coaching.
</p>

        </div>

        {/* <div className="poembook-page ppage2 format">
            <p style={{backgroundColor:"rgba(254, 251, 232, 0.56)",padding:"1vh"}}>
                    I remembered I was so rude,<br/>How insensitive I could be like that?
                    <br/><br/>Be it bottlegourd or Bittergourd<br/>squashes or Brinjal<br/>From now I would thank God <br/>for whatever is on table!
                </p>
        </div> */}
        <div className="poembook-page ppage3 format">
            <h4 style={{fontWeight:"bolder",backgroundColor:"rgba(254, 251, 232, 0.56)"}}>Mother's birthday</h4>
            <h6>Poem I wrote as a kid!</h6>
            <p>
            You grew me up like a tender flower.<br/>
            You gave me everything, sunlight, space, and shore.<br/>
            I never wanted to be far from you.<br/>
            You can't imagine my every single day of school.
            </p>

            <p>
            I still remember those afternoon naps when I all day awaited to rest in your lap.<br/>
            I was that duckling who hardly knew to swim.<br/>
            You transformed that duckling better in every skill.<br/></p>
            <p>My love for you is speechless and your love for me is endless.

           
            And no doubtly, I love you more than myself.<br/>
            You never thought of yourself.<br/> </p>

            </div>
            <div className="poembook-page ppage3 format">
            <p>
            
            God made you beautiful, pure like water.<br/>
            You've wonderful life, and two lovely daughters.<br/>
            On this birthday, I wrote a poem for you.<br/>
            Though not a good poet, can't slip into your shoes.
            </p>

            <p>
            Your hands have nourished me with lots of goodness<br/>
            May God bless you and give you a lot of happiness.
            </p>
        </div>

        <div className="poembook-page ppage7 format2">
        <h4 style={{fontWeight:"bolder",backgroundColor:"rgba(254, 251, 232, 0.56)"}}>Life in a nutshell </h4>

        <p>
  Dream pops and day start with the startling alarm<br/>
  Love to go to college, coz no fun cause me harm<br/>
  But I remain the reason for everyone's frown<br/>
  "You are careless, Ifrah", yells my granny from down!
</p>

        </div>
        <div className="poembook-page ppage8 format2">
        <h4 style={{fontWeight:"bolder",backgroundColor:"rgba(254, 251, 232, 0.56)"}}>I prayed for you... </h4>
        <br/>
        <p>
You know what? <br/>I prayed for you 12 to 9.  <br/>
Oh, God blessed me with a sister fine,  <br/>
So he fulfilled my wish so prime,  <br/>
And here you are, grown up in no time,<br/>
</p>

<p>
Sharing with me all our sweets and limes,  <br/>
Arguing and laughing all 12 to 9.  <br/>
I can proudly say that you are a sister of mine,  <br/>
Out of the thoughts she only makes me smile.<br/>
</p>


         </div>
        {/*<div className="poembook-page ppage9">
        </div> */}
 
<div className="poembook-page ppage11">
        </div>
        
      </HTMLFlipBook>
      </div>
  )}

  export default PoemBook;