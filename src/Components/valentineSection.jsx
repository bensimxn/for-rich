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
        image="image={`${import.meta.env.BASE_URL}images/valentine-1.png`}"
        caption="two idiots, one pic, and absolutely no idea how many memories we'd end up making..."
        story="I don't think either of us knew how many little moments were waiting for us when we first started becoming 'us'. Somehow, between all the convos, vazhakks and laughs, you became one of my favourite parts of my days..."
        ending="Here's to many more memories like these. 🥂"
      />


      <ValentineSlide
        image="image={`${import.meta.env.BASE_URL}images/valentine-2.png`}"
        caption="you in my specs, me in yours... cute little idiots"
        story="One of my favourite things about giving you little gifts is seeing that big smile on your face when you realise it's for you! Honestly, nee enganelum okke ath kond poi kalayum, but I'll still buy you kore kore sadhanangal 😂 because seeing that smile is always worth it. I know I might not always do as much as other people do, or show my love in all the ways I wish I could, but I'm trying... and I hope you can see that in all the little things I do."
        ending="At the end of the day, I just hope you know that I love you in my own little ways. 🤍"
      />


      <ValentineSlide
        image="/images/valentine-3.png"
        caption="Slide 3 caption"
        story="Slide 3 story"
        ending="Slide 3 ending"
      />

    </>
  )
}


export default ValentineSection