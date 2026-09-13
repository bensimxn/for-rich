


function OpeningScreen({ handleEnter, transitioning}) {
    return (
        <div className={`opening ${transitioning ? "fade-out" : ""}`}>
            <h1>Boo &lt;3</h1>

            <p>
                the lil one who made me
                <br />
                find my smile again...
            </p>

            <div 
            className="enter"
            onClick={handleEnter}
            >
                tap here to read on
                <div className="arrow">↓</div>
            </div>
        </div>

  )
}

export default OpeningScreen