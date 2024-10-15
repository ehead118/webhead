const
viewportWidth = window.innerWidth || document.documentElement.clientWidth,
viewportHeight = window.innerHeight || document.documentElement.clientHeight,
viewportColumn = viewportWidth / 5,
mediaQuery = gsap.matchMedia(),
breakPoint = 900;

initFader();
// initHero();
// initReturnHome();

function initFader() {
	document.addEventListener('alpine:init', () => {
	  Alpine.data('fader', () => ({
	    twFadeOut: null,

	    init() {
	      this.twFadeOut = gsap.to(this.$refs.fader, {
	        paused: true,
	        autoAlpha: 0,
	        ease: 'none',
	        duration: 0.2,
	      });

	      this.$nextTick(() => {
	        this.twFadeOut.play();
	      });
	    },

	    handleClick(event) {
	      const href = event.target.href;
	      if (href && !href.startsWith('http') && !href.includes('#')) {
	        event.preventDefault();
	        this.twFadeOut.reverse();
	        this.twFadeOut.eventCallback('onReverseComplete', () => {
	          window.location = href;
	        });
	      }
	    }
	  }));
	});
}

function initHero() {
	Draggable.create(hero, {
	  bounds: page,
	})
}

function initReturnHome() {
	if( goHome ) {
		addEventListener('keydown', (e) => {
			if( e.keyCode == 88 ) {
				window.location = goHome.href;
			}
		})
	}
}

function initMediaQuery() {
    
    mediaQuery.add(
        {
            // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
            // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
            let { isDesktop, isMobile } = context.conditions;

            
        }
    );
    
}

function trackDirection(value) {
  typeof value !== "object" && (value = { onUpdate: value });
  let prevTime = 0,
    prevReversed = false,
    anim = value.eventCallback ? value : value.animation,
    onUpdate = value.onUpdate,
    onToggle = value.onToggle;
  return anim
    ? anim.eventCallback(
        "onUpdate",
        trackDirection({ onUpdate: onUpdate, onToggle: onToggle })
      )
    : function () {
        let time = this.totalTime(),
          reversed = time < prevTime;
        this.direction = reversed ? -1 : 1;
        if (reversed !== prevReversed) {
          onToggle && onToggle.call(this, this.direction);
          prevReversed = reversed;
        }
        prevTime = time;
        onUpdate && onUpdate.call(this, this.direction);
      };
}