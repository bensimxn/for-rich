function ValentineSlide({ image, caption, story, ending }) {
  return (
    <section className="valentine-slide">

      <div className="valentine-image">
        <img src={image} alt="A memory of us" />
      </div>

      <div className="valentine-story">

        <p className="valentine-caption">
          {caption}
        </p>

        <p className="valentine-text">
          {story}
        </p>

        <p className="valentine-ending">
          {ending}
        </p>

      </div>

    </section>
  )
}


function ValentineSection() {
  return (
    <>

      <ValentineSlide
        image={`${import.meta.env.BASE_URL}images/valentine-1.png`}
        caption="two idiots, one pic, and absolutely no idea how many memories we'd end up making..."
        story="I don't think either of us knew how many little moments were waiting for us when we first started becoming 'us'. Somehow, between all the convos, vazhakks and laughs, you became one of my favourite parts of my days..."
        ending="Here's to many more memories like these. 🥂"
      />


      <ValentineSlide
        image={`${import.meta.env.BASE_URL}images/valentine-2.png`}
        caption="you in my specs, me in yours... cute little idiots"
        story="One of my favourite things about giving you little gifts is seeing that big smile on your face when you realise it's for you! Honestly, nee enganelum okke ath kond poi kalayum, but I'll still buy you kore kore sadhanangal 😂 because seeing that smile is always worth it. I know I might not always do as much as other people do, or show my love in all the ways I wish I could, but I'm trying... and I hope you can see that in all the little things I do."
        ending="At the end of the day, I just hope you know that I love you in my own little ways. 🤍"
      />


      <ValentineSlide
        image={`${import.meta.env.BASE_URL}images/valentine-3.png`}
        caption="you say you're okay with staying in... but we both know you love going out 😂"
        story="Sathyam paranja, I'm still kinda shy when it comes to taking you out... and u know damn well that I'm prolly stressing on where to go or what to do and stuff cus this is Kochi and evde poyalum there's always someone ik 😭. But I also know how happy it makes you, even tho u keep saying 'it's okay, we don't have to go anywhere...' as if I don't know you're lying 😭😂. And I think that's what I love about us... this little kind of agape we have, where sometimes it's just about doing the things that make the other person happy, even if it takes a little effort or stepping out of our comfort zone."
        ending="maybe a little shy, but always happy when it's with you. 🤍"
      />

    </>
  )
}


export default ValentineSection