export const cssContent = `

html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

body {
    margin: 0
}

article,aside,footer,header,nav,section {
    display: block
}

h1 {
    font-size: 2em;
    margin: .67em 0
}

figcaption,figure,main {
    display: block
}

figure {
    margin: 1em 40px
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

pre {
    font-family: monospace,monospace;
    font-size: 1em
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

b,strong {
    font-weight: inherit;
    font-weight: bolder
}

code,kbd,samp {
    font-family: monospace,monospace;
    font-size: 1em
}

dfn {
    font-style: italic
}

mark {
    background-color: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

audio,video {
    display: inline-block
}

audio:not([controls]) {
    display: none;
    height: 0
}

img {
    border-style: none
}

svg:not(:root) {
    overflow: hidden
}

button,input,optgroup,select,textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
}

button,input {
    overflow: visible
}

button,select {
    text-transform: none
}

[type=reset],[type=submit],button,html [type=button] {
    -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
    border-style: none;
    padding: 0
}

[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {
    outline: 1px dotted ButtonText
}

fieldset {
    padding: .35em .75em .625em
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}

progress {
    display: inline-block;
    vertical-align: baseline
}

textarea {
    overflow: auto
}

[type=checkbox],[type=radio] {
    box-sizing: border-box;
    padding: 0
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

details,menu {
    display: block
}

summary {
    display: list-item
}

canvas {
    display: inline-block
}

[hidden],template {
    display: none
}

.aspect-ratio {
    height: 0;
    position: relative
}

.aspect-ratio--16x9 {
    padding-bottom: 56.25%
}

.aspect-ratio--9x16 {
    padding-bottom: 177.77%
}

.aspect-ratio--4x3 {
    padding-bottom: 75%
}

.aspect-ratio--3x4 {
    padding-bottom: 133.33%
}

.aspect-ratio--6x4 {
    padding-bottom: 66.6%
}

.aspect-ratio--4x6 {
    padding-bottom: 150%
}

.aspect-ratio--8x5 {
    padding-bottom: 62.5%
}

.aspect-ratio--5x8 {
    padding-bottom: 160%
}

.aspect-ratio--7x5 {
    padding-bottom: 71.42%
}

.aspect-ratio--5x7 {
    padding-bottom: 140%
}

.aspect-ratio--1x1 {
    padding-bottom: 100%
}

.aspect-ratio--object {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100
}

.bg-rebel-pink {
    background-color: #f71963
}

.bg-heavy-rebel-pink {
    background-color: #dd1659
}

.bg-elite-purple {
    background-color: #8914cc
}

.bg-near-black {
    background-color: #3f3f40
}

.bg-dark-gray {
    background-color: #585959
}

styles_overlay__CLSq- {
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  padding: 1.2rem;
}
.styles_overlayCenter__YHoO7 {
  align-items: center;
}
.styles_modal__gNwvD {
  max-width: 800px;
  position: relative;
  padding: 1.2rem;
  background: #ffffff;
  background-clip: padding-box;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
  margin: auto;
}
.styles_closeButton__20ID4 {
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
}
.styles_closeIcon__1QwbI {
}
.styles_transitionEnter__3j_-a {
  opacity: 0.01;
}
.styles_transitionEnterActive___eQs7 {
  opacity: 1;
  transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);
}
.styles_transitionExit__1KmEf {
  opacity: 1;
}
.styles_transitionExitActive__1nQXw {
  opacity: 0.01;
  transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bg-mid-gray {
    background-color: #727273
}

.bg-gray {
    background-color: #979899
}

.bg-silver {
    background-color: #cacbcc
}

.bg-light-gray {
    background-color: #e3e4e6
}

.bg-light-silver {
    background-color: #f2f4f5
}

.bg-near-white {
    background-color: #f7f9fa
}

.bg-white {
    background-color: #fff
}

.bg-washed-blue {
    background-color: #edf4fa
}

.bg-light-blue {
    background-color: #cce8ff
}

.bg-blue {
    background-color: #368df7
}

.bg-heavy-blue {
    background-color: #2a6dbf
}

.bg-light-marine {
    background-color: #3d5980
}

.bg-marine {
    background-color: #25354d
}

.bg-serious-black {
    background-color: #142032
}

.bg-green {
    background-color: #8bc34a
}

.bg-washed-green {
    background-color: #eafce3
}

.bg-red {
    background-color: #ff4c4c
}

.bg-washed-red {
    background-color: #ffe6e6
}

.bg-yellow {
    background-color: #ffb100
}

.bg-washed-yellow {
    background-color: #fff6e0
}

.bg-black-90 {
    background-color: rgba(0,0,0,.9)
}

.bg-black-80 {
    background-color: rgba(0,0,0,.8)
}

.bg-black-70 {
    background-color: rgba(0,0,0,.7)
}

.bg-black-60 {
    background-color: rgba(0,0,0,.6)
}

.bg-black-50 {
    background-color: rgba(0,0,0,.5)
}

.bg-black-40 {
    background-color: rgba(0,0,0,.4)
}

.bg-black-30 {
    background-color: rgba(0,0,0,.3)
}

.bg-black-20 {
    background-color: rgba(0,0,0,.2)
}

.bg-black-10 {
    background-color: rgba(0,0,0,.1)
}

.bg-black-05 {
    background-color: rgba(0,0,0,.05)
}

.bg-black-025 {
    background-color: rgba(0,0,0,.025)
}

.bg-black-0125 {
    background-color: rgba(0,0,0,.0125)
}

.bg-white-90 {
    background-color: hsla(0,0%,100%,.9)
}

.bg-white-80 {
    background-color: hsla(0,0%,100%,.8)
}

.bg-white-70 {
    background-color: hsla(0,0%,100%,.7)
}

.bg-white-60 {
    background-color: hsla(0,0%,100%,.6)
}

.bg-white-50 {
    background-color: hsla(0,0%,100%,.5)
}

.bg-white-40 {
    background-color: hsla(0,0%,100%,.4)
}

.bg-white-30 {
    background-color: hsla(0,0%,100%,.3)
}

.bg-white-20 {
    background-color: hsla(0,0%,100%,.2)
}

.bg-white-10 {
    background-color: hsla(0,0%,100%,.1)
}

.bg-white-05 {
    background-color: hsla(0,0%,100%,.05)
}

.bg-white-025 {
    background-color: hsla(0,0%,100%,.025)
}

.bg-white-0125 {
    background-color: hsla(0,0%,100%,.0125)
}

.bg-base {
    background-color: #fff
}

.bg-base--inverted {
    background-color: #03044e
}

.bg-action-primary {
    background-color: #e06741
}

.bg-action-secondary {
    background-color: #eef3f7
}

.bg-emphasis {
    background-color: #e06741
}

.bg-disabled {
    background-color: #f2f4f5
}

.bg-success {
    background-color: #8bc34a
}

.bg-success--faded {
    background-color: #eafce3
}

.bg-danger {
    background-color: #ff4c4c
}

.bg-danger--faded {
    background-color: #ffe6e6
}

.bg-warning {
    background-color: #ffb100
}

.bg-warning--faded {
    background-color: #fff6e0
}

.bg-muted-1 {
    background-color: #727273
}

.bg-muted-2 {
    background-color: #979899
}

.bg-muted-3 {
    background-color: #cacbcc
}

.bg-muted-4 {
    background-color: #e3e4e6
}

.bg-muted-5 {
    background-color: #f2f4f5
}

.bg-transparent {
    background-color: transparent
}

.cover {
    background-size: cover!important
}

.contain {
    background-size: contain!important
}

.bg-center {
    background-position: 50%
}

.bg-center,.bg-top {
    background-repeat: no-repeat
}

.bg-top {
    background-position: top
}

.bg-right {
    background-position: 100%
}

.bg-bottom,.bg-right {
    background-repeat: no-repeat
}

.bg-bottom {
    background-position: bottom
}

.bg-left {
    background-repeat: no-repeat;
    background-position: 0
}

.ba {
    border-style: solid;
    border-width: 1px
}

.bt {
    border-top-style: solid;
    border-top-width: 1px
}

.br {
    border-right-style: solid;
    border-right-width: 1px
}

.bb {
    border-bottom-style: solid;
    border-bottom-width: 1px
}

.bl {
    border-left-style: solid;
    border-left-width: 1px
}

.bn {
    border-style: none;
    border-width: 0
}

.b--rebel-pink {
    border-color: #f71963
}

.b--heavy-rebel-pink {
    border-color: #dd1659
}

.b--elite-purple {
    border-color: #8914cc
}

.b--near-black {
    border-color: #3f3f40
}

.b--dark-gray {
    border-color: #585959
}

.b--mid-gray {
    border-color: #727273
}

.b--gray {
    border-color: #979899
}

.b--silver {
    border-color: #cacbcc
}

.b--light-gray {
    border-color: #e3e4e6
}

.b--light-silver {
    border-color: #f2f4f5
}

.b--near-white {
    border-color: #f7f9fa
}

.b--white {
    border-color: #fff
}

.b--washed-blue {
    border-color: #edf4fa
}

.b--light-blue {
    border-color: #cce8ff
}

.b--blue {
    border-color: #368df7
}

.b--heavy-blue {
    border-color: #2a6dbf
}

.b--light-marine {
    border-color: #3d5980
}

.b--marine {
    border-color: #25354d
}

.b--serious-black {
    border-color: #142032
}

.b--green {
    border-color: #8bc34a
}

.b--washed-green {
    border-color: #eafce3
}

.b--red {
    border-color: #ff4c4c
}

.b--washed-red {
    border-color: #ffe6e6
}

.b--yellow {
    border-color: #ffb100
}

.b--washed-yellow {
    border-color: #fff6e0
}

.b--black-90 {
    border-color: rgba(0,0,0,.9)
}

.b--black-80 {
    border-color: rgba(0,0,0,.8)
}

.b--black-70 {
    border-color: rgba(0,0,0,.7)
}

.b--black-60 {
    border-color: rgba(0,0,0,.6)
}

.b--black-50 {
    border-color: rgba(0,0,0,.5)
}

.b--black-40 {
    border-color: rgba(0,0,0,.4)
}

.b--black-30 {
    border-color: rgba(0,0,0,.3)
}

.b--black-20 {
    border-color: rgba(0,0,0,.2)
}

.b--black-10 {
    border-color: rgba(0,0,0,.1)
}

.b--black-05 {
    border-color: rgba(0,0,0,.05)
}

.b--black-025 {
    border-color: rgba(0,0,0,.025)
}

.b--black-0125 {
    border-color: rgba(0,0,0,.0125)
}

.b--white-90 {
    border-color: hsla(0,0%,100%,.9)
}

.b--white-80 {
    border-color: hsla(0,0%,100%,.8)
}

.b--white-70 {
    border-color: hsla(0,0%,100%,.7)
}

.b--white-60 {
    border-color: hsla(0,0%,100%,.6)
}

.b--white-50 {
    border-color: hsla(0,0%,100%,.5)
}

.b--white-40 {
    border-color: hsla(0,0%,100%,.4)
}

.b--white-30 {
    border-color: hsla(0,0%,100%,.3)
}

.b--white-20 {
    border-color: hsla(0,0%,100%,.2)
}

.b--white-10 {
    border-color: hsla(0,0%,100%,.1)
}

.b--white-05 {
    border-color: hsla(0,0%,100%,.05)
}

.b--white-025 {
    border-color: hsla(0,0%,100%,.025)
}

.b--white-0125 {
    border-color: hsla(0,0%,100%,.0125)
}

.b--action-primary {
    border-color: #e06741
}

.b--action-secondary {
    border-color: #eef3f7
}

.b--emphasis {
    border-color: #e06741
}

.b--disabled {
    border-color: #e3e4e6
}

.b--success {
    border-color: #8bc34a
}

.b--success--faded {
    border-color: #eafce3
}

.b--danger {
    border-color: #ff4c4c
}

.b--danger--faded {
    border-color: #ffe6e6
}

.b--warning {
    border-color: #ffb100
}

.b--warning--faded {
    border-color: #fff6e0
}

.b--muted-1 {
    border-color: #727273
}

.b--muted-2 {
    border-color: #979899
}

.b--muted-3 {
    border-color: #cacbcc
}

.b--muted-4 {
    border-color: #e3e4e6
}

.b--muted-5 {
    border-color: #f2f4f5
}

.b--transparent {
    border-color: transparent
}

.br0 {
    border-radius: 0
}

.br1 {
    border-radius: .125rem
}

.br2 {
    border-radius: .25rem
}

.br3 {
    border-radius: .5rem
}

.br4 {
    border-radius: 1rem
}

.br-100 {
    border-radius: 100%
}

.br-pill {
    border-radius: 9999px
}

.br--bottom {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.br--top {
    border-bottom-right-radius: 0
}

.br--right,.br--top {
    border-bottom-left-radius: 0
}

.br--right {
    border-top-left-radius: 0
}

.br--left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.b--dotted {
    border-style: dotted
}

.b--dashed {
    border-style: dashed
}

.b--solid {
    border-style: solid
}

.b--none {
    border-style: none
}

.bw0 {
    border-width: 0
}

.bw1 {
    border-width: .125rem
}

.bw2 {
    border-width: .25rem
}

.bw3 {
    border-width: .5rem
}

.bw4 {
    border-width: 1rem
}

.bw5 {
    border-width: 2rem
}

.bt-0 {
    border-top-width: 0
}

.br-0 {
    border-right-width: 0
}

.bb-0 {
    border-bottom-width: 0
}

.bl-0 {
    border-left-width: 0
}

.shadow-1 {
    box-shadow: 0 0 4px 2px rgba(0,0,0,.2)
}

.shadow-2 {
    box-shadow: 0 0 8px 2px rgba(0,0,0,.2)
}

.shadow-3 {
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2)
}

.shadow-4 {
    box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2)
}

.shadow-5 {
    box-shadow: 4px 4px 8px 0 rgba(0,0,0,.2)
}

.border-box,a,article,aside,blockquote,body,code,dd,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,input[type=email],input[type=number],input[type=password],input[type=tel],input[type=text],input[type=url],legend,li,main,nav,ol,p,pre,section,table,td,textarea,th,tr,ul {
    box-sizing: border-box
}

.pre {
    overflow-x: auto;
    overflow-y: hidden;
    overflow: scroll
}

.pa0 {
    padding: 0
}

.ma0,.na0 {
    margin: 0
}

.pl0 {
    padding-left: 0
}

.ml0,.nl0 {
    margin-left: 0
}

.pr0 {
    padding-right: 0
}

.mr0,.nr0 {
    margin-right: 0
}

.pt0 {
    padding-top: 0
}

.mt0,.nt0 {
    margin-top: 0
}

.pb0 {
    padding-bottom: 0
}

.mb0,.nb0 {
    margin-bottom: 0
}

.pv0 {
    padding-top: 0;
    padding-bottom: 0
}

.mv0,.nv0 {
    margin-top: 0;
    margin-bottom: 0
}

.ph0 {
    padding-left: 0;
    padding-right: 0
}

.mh0,.nh0 {
    margin-left: 0;
    margin-right: 0
}

.pa1 {
    padding: .125rem
}

.ma1 {
    margin: .125rem
}

.na1 {
    margin: -.125rem
}

.pl1 {
    padding-left: .125rem
}

.ml1 {
    margin-left: .125rem
}

.nl1 {
    margin-left: -.125rem
}

.pr1 {
    padding-right: .125rem
}

.mr1 {
    margin-right: .125rem
}

.nr1 {
    margin-right: -.125rem
}

.pt1 {
    padding-top: .125rem
}

.mt1 {
    margin-top: .125rem
}

.nt1 {
    margin-top: -.125rem
}

.pb1 {
    padding-bottom: .125rem
}

.mb1 {
    margin-bottom: .125rem
}

.nb1 {
    margin-bottom: -.125rem
}

.pv1 {
    padding-top: .125rem;
    padding-bottom: .125rem
}

.mv1 {
    margin-top: .125rem;
    margin-bottom: .125rem
}

.nv1 {
    margin-top: -.125rem;
    margin-bottom: -.125rem
}

.ph1 {
    padding-left: .125rem;
    padding-right: .125rem
}

.mh1 {
    margin-left: .125rem;
    margin-right: .125rem
}

.nh1 {
    margin-left: -.125rem;
    margin-right: -.125rem
}

.pa2 {
    padding: .25rem
}

.ma2 {
    margin: .25rem
}

.na2 {
    margin: -.25rem
}

.pl2 {
    padding-left: .25rem
}

.ml2 {
    margin-left: .25rem
}

.nl2 {
    margin-left: -.25rem
}

.pr2 {
    padding-right: .25rem
}

.mr2 {
    margin-right: .25rem
}

.nr2 {
    margin-right: -.25rem
}

.pt2 {
    padding-top: .25rem
}

.mt2 {
    margin-top: .25rem
}

.nt2 {
    margin-top: -.25rem
}

.pb2 {
    padding-bottom: .25rem
}

.mb2 {
    margin-bottom: .25rem
}

.nb2 {
    margin-bottom: -.25rem
}

.pv2 {
    padding-top: .25rem;
    padding-bottom: .25rem
}

.mv2 {
    margin-top: .25rem;
    margin-bottom: .25rem
}

.nv2 {
    margin-top: -.25rem;
    margin-bottom: -.25rem
}

.ph2 {
    padding-left: .25rem;
    padding-right: .25rem
}

.mh2 {
    margin-left: .25rem;
    margin-right: .25rem
}

.nh2 {
    margin-left: -.25rem;
    margin-right: -.25rem
}

.pa3 {
    padding: .5rem
}

.ma3 {
    margin: .5rem
}

.na3 {
    margin: -.5rem
}

.pl3 {
    padding-left: .5rem
}

.ml3 {
    margin-left: .5rem
}

.nl3 {
    margin-left: -.5rem
}

.pr3 {
    padding-right: .5rem
}

.mr3 {
    margin-right: .5rem
}

.nr3 {
    margin-right: -.5rem
}

.pt3 {
    padding-top: .5rem
}

.mt3 {
    margin-top: .5rem
}

.nt3 {
    margin-top: -.5rem
}

.pb3 {
    padding-bottom: .5rem
}

.mb3 {
    margin-bottom: .5rem
}

.nb3 {
    margin-bottom: -.5rem
}

.pv3 {
    padding-top: .5rem;
    padding-bottom: .5rem
}

.mv3 {
    margin-top: .5rem;
    margin-bottom: .5rem
}

.nv3 {
    margin-top: -.5rem;
    margin-bottom: -.5rem
}

.ph3 {
    padding-left: .5rem;
    padding-right: .5rem
}

.mh3 {
    margin-left: .5rem;
    margin-right: .5rem
}

.nh3 {
    margin-left: -.5rem;
    margin-right: -.5rem
}

.pa4 {
    padding: .75rem
}

.ma4 {
    margin: .75rem
}

.na4 {
    margin: -.75rem
}

.pl4 {
    padding-left: .75rem
}

.ml4 {
    margin-left: .75rem
}

.nl4 {
    margin-left: -.75rem
}

.pr4 {
    padding-right: .75rem
}

.mr4 {
    margin-right: .75rem
}

.nr4 {
    margin-right: -.75rem
}

.pt4 {
    padding-top: .75rem
}

.mt4 {
    margin-top: .75rem
}

.nt4 {
    margin-top: -.75rem
}

.pb4 {
    padding-bottom: .75rem
}

.mb4 {
    margin-bottom: .75rem
}

.nb4 {
    margin-bottom: -.75rem
}

.pv4 {
    padding-top: .75rem;
    padding-bottom: .75rem
}

.mv4 {
    margin-top: .75rem;
    margin-bottom: .75rem
}

.nv4 {
    margin-top: -.75rem;
    margin-bottom: -.75rem
}

.ph4 {
    padding-left: .75rem;
    padding-right: .75rem
}

.mh4 {
    margin-left: .75rem;
    margin-right: .75rem
}

.nh4 {
    margin-left: -.75rem;
    margin-right: -.75rem
}

.pa5 {
    padding: 1rem
}

.ma5 {
    margin: 1rem
}

.na5 {
    margin: -1rem
}

.pl5 {
    padding-left: 1rem
}

.ml5 {
    margin-left: 1rem
}

.nl5 {
    margin-left: -1rem
}

.pr5 {
    padding-right: 1rem
}

.mr5 {
    margin-right: 1rem
}

.nr5 {
    margin-right: -1rem
}

.pt5 {
    padding-top: 1rem
}

.mt5 {
    margin-top: 1rem
}

.nt5 {
    margin-top: -1rem
}

.pb5 {
    padding-bottom: 1rem
}

.mb5 {
    margin-bottom: 1rem
}

.nb5 {
    margin-bottom: -1rem
}

.pv5 {
    padding-top: 1rem;
    padding-bottom: 1rem
}

.mv5 {
    margin-top: 1rem;
    margin-bottom: 1rem
}

.nv5 {
    margin-top: -1rem;
    margin-bottom: -1rem
}

.ph5 {
    padding-left: 1rem;
    padding-right: 1rem
}

.mh5 {
    margin-left: 1rem;
    margin-right: 1rem
}

.nh5 {
    margin-left: -1rem;
    margin-right: -1rem
}

.pa6 {
    padding: 1.5rem
}

.ma6 {
    margin: 1.5rem
}

.na6 {
    margin: -1.5rem
}

.pl6 {
    padding-left: 1.5rem
}

.ml6 {
    margin-left: 1.5rem
}

.nl6 {
    margin-left: -1.5rem
}

.pr6 {
    padding-right: 1.5rem
}

.mr6 {
    margin-right: 1.5rem
}

.nr6 {
    margin-right: -1.5rem
}

.pt6 {
    padding-top: 1.5rem
}

.mt6 {
    margin-top: 1.5rem
}

.nt6 {
    margin-top: -1.5rem
}

.pb6 {
    padding-bottom: 1.5rem
}

.mb6 {
    margin-bottom: 1.5rem
}

.nb6 {
    margin-bottom: -1.5rem
}

.pv6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
}

.mv6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem
}

.nv6 {
    margin-top: -1.5rem;
    margin-bottom: -1.5rem
}

.ph6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem
}

.mh6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem
}

.nh6 {
    margin-left: -1.5rem;
    margin-right: -1.5rem
}

.pa7 {
    padding: 2rem
}

.ma7 {
    margin: 2rem
}

.na7 {
    margin: -2rem
}

.pl7 {
    padding-left: 2rem
}

.ml7 {
    margin-left: 2rem
}

.nl7 {
    margin-left: -2rem
}

.pr7 {
    padding-right: 2rem
}

.mr7 {
    margin-right: 2rem
}

.nr7 {
    margin-right: -2rem
}

.pt7 {
    padding-top: 2rem
}

.mt7 {
    margin-top: 2rem
}

.nt7 {
    margin-top: -2rem
}

.pb7 {
    padding-bottom: 2rem
}

.mb7 {
    margin-bottom: 2rem
}

.nb7 {
    margin-bottom: -2rem
}

.pv7 {
    padding-top: 2rem;
    padding-bottom: 2rem
}

.mv7 {
    margin-top: 2rem;
    margin-bottom: 2rem
}

.nv7 {
    margin-top: -2rem;
    margin-bottom: -2rem
}

.ph7 {
    padding-left: 2rem;
    padding-right: 2rem
}

.mh7 {
    margin-left: 2rem;
    margin-right: 2rem
}

.nh7 {
    margin-left: -2rem;
    margin-right: -2rem
}

.pa8 {
    padding: 3rem
}

.ma8 {
    margin: 3rem
}

.na8 {
    margin: -3rem
}

.pl8 {
    padding-left: 3rem
}

.ml8 {
    margin-left: 3rem
}

.nl8 {
    margin-left: -3rem
}

.pr8 {
    padding-right: 3rem
}

.mr8 {
    margin-right: 3rem
}

.nr8 {
    margin-right: -3rem
}

.pt8 {
    padding-top: 3rem
}

.mt8 {
    margin-top: 3rem
}

.nt8 {
    margin-top: -3rem
}

.pb8 {
    padding-bottom: 3rem
}

.mb8 {
    margin-bottom: 3rem
}

.nb8 {
    margin-bottom: -3rem
}

.pv8 {
    padding-top: 3rem;
    padding-bottom: 3rem
}

.mv8 {
    margin-top: 3rem;
    margin-bottom: 3rem
}

.nv8 {
    margin-top: -3rem;
    margin-bottom: -3rem
}

.ph8 {
    padding-left: 3rem;
    padding-right: 3rem
}

.mh8 {
    margin-left: 3rem;
    margin-right: 3rem
}

.nh8 {
    margin-left: -3rem;
    margin-right: -3rem
}

.pa9 {
    padding: 4rem
}

.ma9 {
    margin: 4rem
}

.na9 {
    margin: -4rem
}

.pl9 {
    padding-left: 4rem
}

.ml9 {
    margin-left: 4rem
}

.nl9 {
    margin-left: -4rem
}

.pr9 {
    padding-right: 4rem
}

.mr9 {
    margin-right: 4rem
}

.nr9 {
    margin-right: -4rem
}

.pt9 {
    padding-top: 4rem
}

.mt9 {
    margin-top: 4rem
}

.nt9 {
    margin-top: -4rem
}

.pb9 {
    padding-bottom: 4rem
}

.mb9 {
    margin-bottom: 4rem
}

.nb9 {
    margin-bottom: -4rem
}

.pv9 {
    padding-top: 4rem;
    padding-bottom: 4rem
}

.mv9 {
    margin-top: 4rem;
    margin-bottom: 4rem
}

.nv9 {
    margin-top: -4rem;
    margin-bottom: -4rem
}

.ph9 {
    padding-left: 4rem;
    padding-right: 4rem
}

.mh9 {
    margin-left: 4rem;
    margin-right: 4rem
}

.nh9 {
    margin-left: -4rem;
    margin-right: -4rem
}

.pa10 {
    padding: 8rem
}

.ma10 {
    margin: 8rem
}

.na10 {
    margin: -8rem
}

.pl10 {
    padding-left: 8rem
}

.ml10 {
    margin-left: 8rem
}

.nl10 {
    margin-left: -8rem
}

.pr10 {
    padding-right: 8rem
}

.mr10 {
    margin-right: 8rem
}

.nr10 {
    margin-right: -8rem
}

.pt10 {
    padding-top: 8rem
}

.mt10 {
    margin-top: 8rem
}

.nt10 {
    margin-top: -8rem
}

.pb10 {
    padding-bottom: 8rem
}

.mb10 {
    margin-bottom: 8rem
}

.nb10 {
    margin-bottom: -8rem
}

.pv10 {
    padding-top: 8rem;
    padding-bottom: 8rem
}

.mv10 {
    margin-top: 8rem;
    margin-bottom: 8rem
}

.nv10 {
    margin-top: -8rem;
    margin-bottom: -8rem
}

.ph10 {
    padding-left: 8rem;
    padding-right: 8rem
}

.mh10 {
    margin-left: 8rem;
    margin-right: 8rem
}

.nh10 {
    margin-left: -8rem;
    margin-right: -8rem
}

.pa11 {
    padding: 16rem
}

.ma11 {
    margin: 16rem
}

.na11 {
    margin: -16rem
}

.pl11 {
    padding-left: 16rem
}

.ml11 {
    margin-left: 16rem
}

.nl11 {
    margin-left: -16rem
}

.pr11 {
    padding-right: 16rem
}

.mr11 {
    margin-right: 16rem
}

.nr11 {
    margin-right: -16rem
}

.pt11 {
    padding-top: 16rem
}

.mt11 {
    margin-top: 16rem
}

.nt11 {
    margin-top: -16rem
}

.pb11 {
    padding-bottom: 16rem
}

.mb11 {
    margin-bottom: 16rem
}

.nb11 {
    margin-bottom: -16rem
}

.pv11 {
    padding-top: 16rem;
    padding-bottom: 16rem
}

.mv11 {
    margin-top: 16rem;
    margin-bottom: 16rem
}

.nv11 {
    margin-top: -16rem;
    margin-bottom: -16rem
}

.ph11 {
    padding-left: 16rem;
    padding-right: 16rem
}

.mh11 {
    margin-left: 16rem;
    margin-right: 16rem
}

.nh11 {
    margin-left: -16rem;
    margin-right: -16rem
}

.top-0 {
    top: 0
}

.right-0 {
    right: 0
}

.bottom-0 {
    bottom: 0
}

.left-0 {
    left: 0
}

.top-1 {
    top: 1rem
}

.right-1 {
    right: 1rem
}

.bottom-1 {
    bottom: 1rem
}

.left-1 {
    left: 1rem
}

.top-2 {
    top: 2rem
}

.right-2 {
    right: 2rem
}

.bottom-2 {
    bottom: 2rem
}

.left-2 {
    left: 2rem
}

.top--1 {
    top: -1rem
}

.right--1 {
    right: -1rem
}

.bottom--1 {
    bottom: -1rem
}

.left--1 {
    left: -1rem
}

.top--2 {
    top: -2rem
}

.right--2 {
    right: -2rem
}

.bottom--2 {
    bottom: -2rem
}

.left--2 {
    left: -2rem
}

.absolute--fill {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.cf:after,.cf:before {
    content: " ";
    display: table
}

.cf:after {
    clear: both
}

.cl {
    clear: left
}

.cr {
    clear: right
}

.cb {
    clear: both
}

.cn {
    clear: none
}

.dn {
    display: none
}

.di {
    display: inline
}

.db {
    display: block
}

.dib {
    display: inline-block
}

.dit {
    display: inline-table
}

.dt {
    display: table
}

.dtc {
    display: table-cell
}

.dt-row {
    display: table-row
}

.dt-row-group {
    display: table-row-group
}

.dt-column {
    display: table-column
}

.dt-column-group {
    display: table-column-group
}

.dt--fixed {
    table-layout: fixed;
    width: 100%
}

.flex {
    display: -webkit-box;
    display: flex
}

.inline-flex {
    display: -webkit-inline-box;
    display: inline-flex
}

.flex-auto {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0
}

.flex-none {
    -webkit-box-flex: 0;
    flex: none
}

.flex-column {
    -webkit-box-orient: vertical;
    flex-direction: column
}

.flex-column,.flex-row {
    -webkit-box-direction: normal
}

.flex-row {
    -webkit-box-orient: horizontal;
    flex-direction: row
}

.flex-wrap {
    flex-wrap: wrap
}

.flex-nowrap {
    flex-wrap: nowrap
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse
}

.flex-column-reverse {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse
}

.flex-row-reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    flex-direction: row-reverse
}

.items-start {
    -webkit-box-align: start;
    align-items: flex-start
}

.items-end {
    -webkit-box-align: end;
    align-items: flex-end
}

.items-center {
    -webkit-box-align: center;
    align-items: center
}

.items-baseline {
    -webkit-box-align: baseline;
    align-items: baseline
}

.items-stretch {
    -webkit-box-align: stretch;
    align-items: stretch
}

.self-start {
    align-self: flex-start
}

.self-end {
    align-self: flex-end
}

.self-center {
    align-self: center
}

.self-baseline {
    align-self: baseline
}

.self-stretch {
    align-self: stretch
}

.justify-start {
    -webkit-box-pack: start;
    justify-content: flex-start
}

.justify-end {
    -webkit-box-pack: end;
    justify-content: flex-end
}

.justify-center {
    -webkit-box-pack: center;
    justify-content: center
}

.justify-between {
    -webkit-box-pack: justify;
    justify-content: space-between
}

.justify-around {
    justify-content: space-around
}

.content-start {
    align-content: flex-start
}

.content-end {
    align-content: flex-end
}

.content-center {
    align-content: center
}

.content-between {
    align-content: space-between
}

.content-around {
    align-content: space-around
}

.content-stretch {
    align-content: stretch
}

.order-0 {
    -webkit-box-ordinal-group: 1;
    order: 0
}

.order-1 {
    -webkit-box-ordinal-group: 2;
    order: 1
}

.order-2 {
    -webkit-box-ordinal-group: 3;
    order: 2
}

.order-3 {
    -webkit-box-ordinal-group: 4;
    order: 3
}

.order-4 {
    -webkit-box-ordinal-group: 5;
    order: 4
}

.order-5 {
    -webkit-box-ordinal-group: 6;
    order: 5
}

.order-6 {
    -webkit-box-ordinal-group: 7;
    order: 6
}

.order-7 {
    -webkit-box-ordinal-group: 8;
    order: 7
}

.order-8 {
    -webkit-box-ordinal-group: 9;
    order: 8
}

.order-last {
    -webkit-box-ordinal-group: 100000;
    order: 99999
}

.flex-grow-0 {
    -webkit-box-flex: 0;
    flex-grow: 0
}

.flex-grow-1 {
    -webkit-box-flex: 1;
    flex-grow: 1
}

.flex-shrink-0 {
    flex-shrink: 0
}

.flex-shrink-1 {
    flex-shrink: 1
}

.fl {
    float: left
}

.fl,.fr {
    _display: inline
}

.fr {
    float: right
}

.fn {
    float: none
}

body,button,input,optgroup,select,textarea {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.sans-serif,body,button,input,optgroup,select,textarea {
    font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif
}

.code,code {
    font-family: Consolas,monaco,monospace
}

.i {
    font-style: italic
}

.fs-normal {
    font-style: normal
}

.input-reset {
    -webkit-appearance: none;
    -moz-appearance: none
}

.button-reset::-moz-focus-inner,.input-reset::-moz-focus-inner {
    border: 0;
    padding: 0
}

.link {
    text-decoration: none
}

.link,.link:active,.link:focus,.link:hover,.link:link,.link:visited {
    -webkit-transition: color .15s ease-in;
    transition: color .15s ease-in
}

.link:focus {
    outline: 1px dotted currentColor
}

.list {
    list-style-type: none
}

.h1 {
    height: 1rem
}

.h2 {
    height: 2rem
}

.h3 {
    height: 4rem
}

.h4 {
    height: 8rem
}

.h5 {
    height: 16rem
}

.h-25 {
    height: 25%
}

.h-50 {
    height: 50%
}

.h-75 {
    height: 75%
}

.h-100 {
    height: 100%
}

.min-h-100 {
    min-height: 100%
}

.vh-25 {
    height: 25vh
}

.vh-50 {
    height: 50vh
}

.vh-75 {
    height: 75vh
}

.vh-100 {
    height: 100vh
}

.min-vh-100 {
    min-height: 100vh
}

.h-auto {
    height: auto
}

.h-inherit {
    height: inherit
}

.h-small {
    height: 2rem;
    box-sizing: border-box
}

.min-h-small {
    min-height: 2rem;
    box-sizing: border-box
}

.h-regular {
    height: 2.5rem;
    box-sizing: border-box
}

.min-h-regular {
    min-height: 2.5rem;
    box-sizing: border-box
}

.h-large {
    height: 3rem;
    box-sizing: border-box
}

.min-h-large {
    min-height: 3rem;
    box-sizing: border-box
}

.rebel-pink {
    color: #f71963
}

.heavy-rebel-pink {
    color: #dd1659
}

.elite-purple {
    color: #8914cc
}

.near-black {
    color: #3f3f40
}

.dark-gray {
    color: #585959
}

.mid-gray {
    color: #727273
}

.gray {
    color: #979899
}

.silver {
    color: #cacbcc
}

.light-gray {
    color: #e3e4e6
}

.light-silver {
    color: #f2f4f5
}

.near-white {
    color: #f7f9fa
}

.white {
    color: #fff
}

.washed-blue {
    color: #edf4fa
}

.light-blue {
    color: #cce8ff
}

.blue {
    color: #368df7
}

.heavy-blue {
    color: #2a6dbf
}

.light-marine {
    color: #3d5980
}

.marine {
    color: #25354d
}

.serious-black {
    color: #142032
}

.green {
    color: #8bc34a
}

.washed-green {
    color: #eafce3
}

.red {
    color: #ff4c4c
}

.washed-red {
    color: #ffe6e6
}

.yellow {
    color: #ffb100
}

.washed-yellow {
    color: #fff6e0
}

.black-90 {
    color: rgba(0,0,0,.9)
}

.black-80 {
    color: rgba(0,0,0,.8)
}

.black-70 {
    color: rgba(0,0,0,.7)
}

.black-60 {
    color: rgba(0,0,0,.6)
}

.black-50 {
    color: rgba(0,0,0,.5)
}

.black-40 {
    color: rgba(0,0,0,.4)
}

.black-30 {
    color: rgba(0,0,0,.3)
}

.black-20 {
    color: rgba(0,0,0,.2)
}

.black-10 {
    color: rgba(0,0,0,.1)
}

.black-05 {
    color: rgba(0,0,0,.05)
}

.black-025 {
    color: rgba(0,0,0,.025)
}

.black-0125 {
    color: rgba(0,0,0,.0125)
}

.white-90 {
    color: hsla(0,0%,100%,.9)
}

.white-80 {
    color: hsla(0,0%,100%,.8)
}

.white-70 {
    color: hsla(0,0%,100%,.7)
}

.white-60 {
    color: hsla(0,0%,100%,.6)
}

.white-50 {
    color: hsla(0,0%,100%,.5)
}

.white-40 {
    color: hsla(0,0%,100%,.4)
}

.white-30 {
    color: hsla(0,0%,100%,.3)
}

.white-20 {
    color: hsla(0,0%,100%,.2)
}

.white-10 {
    color: hsla(0,0%,100%,.1)
}

.white-05 {
    color: hsla(0,0%,100%,.05)
}

.white-025 {
    color: hsla(0,0%,100%,.025)
}

.white-0125 {
    color: hsla(0,0%,100%,.0125)
}

.c-action-primary {
    color: #e06741
}

.c-action-secondary {
    color: #eef3f7
}

.c-emphasis,.c-link {
    color: #e06741
}

.c-disabled {
    color: #979899
}

.c-success {
    color: #8bc34a
}

.c-success--faded {
    color: #eafce3
}

.c-danger {
    color: #ff4c4c
}

.c-danger--faded {
    color: #ffe6e6
}

.c-warning {
    color: #ffb100
}

.c-warning--faded {
    color: #fff6e0
}

.c-muted-1 {
    color: #727273
}

.c-muted-2 {
    color: #979899
}

.c-muted-3 {
    color: #cacbcc
}

.c-muted-4 {
    color: #e3e4e6
}

.c-muted-5 {
    color: #f2f4f5
}

.c-on-base {
    color: #3f3f40
}

.c-on-action-primary,.c-on-base--inverted {
    color: #fff
}

.c-on-action-secondary {
    color: #e06741
}

.c-on-emphasis {
    color: #fff
}

.c-on-disabled {
    color: #979899
}

.c-on-success {
    color: #fff
}

.c-on-success--faded {
    color: #3f3f40
}

.c-on-danger {
    color: #fff
}

.c-on-danger--faded {
    color: #3f3f40
}

.c-on-warning {
    color: #fff
}

.c-on-warning--faded {
    color: #1a1a1a
}

.c-on-muted-1,.c-on-muted-2 {
    color: #fff
}

.c-on-muted-3,.c-on-muted-4,.c-on-muted-5 {
    color: #3f3f40
}

.hover-rebel-pink:focus,.hover-rebel-pink:hover {
    color: #f71963
}

.hover-heavy-rebel-pink:focus,.hover-heavy-rebel-pink:hover {
    color: #dd1659
}

.hover-elite-purple:focus,.hover-elite-purple:hover {
    color: #8914cc
}

.hover-near-black:focus,.hover-near-black:hover {
    color: #3f3f40
}

.hover-dark-gray:focus,.hover-dark-gray:hover {
    color: #585959
}

.hover-mid-gray:focus,.hover-mid-gray:hover {
    color: #727273
}

.hover-gray:focus,.hover-gray:hover {
    color: #979899
}

.hover-silver:focus,.hover-silver:hover {
    color: #cacbcc
}

.hover-light-gray:focus,.hover-light-gray:hover {
    color: #e3e4e6
}

.hover-light-silver:focus,.hover-light-silver:hover {
    color: #f2f4f5
}

.hover-near-white:focus,.hover-near-white:hover {
    color: #f7f9fa
}

.hover-white:focus,.hover-white:hover {
    color: #fff
}

.hover-washed-blue:focus,.hover-washed-blue:hover {
    color: #edf4fa
}

.hover-light-blue:focus,.hover-light-blue:hover {
    color: #cce8ff
}

.hover-blue:focus,.hover-blue:hover {
    color: #368df7
}

.hover-heavy-blue:focus,.hover-heavy-blue:hover {
    color: #2a6dbf
}

.hover-light-marine:focus,.hover-light-marine:hover {
    color: #3d5980
}

.hover-marine:focus,.hover-marine:hover {
    color: #25354d
}

.hover-serious-black:focus,.hover-serious-black:hover {
    color: #142032
}

.hover-green:focus,.hover-green:hover {
    color: #8bc34a
}

.hover-washed-green:focus,.hover-washed-green:hover {
    color: #eafce3
}

.hover-red:focus,.hover-red:hover {
    color: #ff4c4c
}

.hover-washed-red:focus,.hover-washed-red:hover {
    color: #ffe6e6
}

.hover-yellow:focus,.hover-yellow:hover {
    color: #ffb100
}

.hover-washed-yellow:focus,.hover-washed-yellow:hover {
    color: #fff6e0
}

.hover-black-90:focus,.hover-black-90:hover {
    color: rgba(0,0,0,.9)
}

.hover-black-80:focus,.hover-black-80:hover {
    color: rgba(0,0,0,.8)
}

.hover-black-70:focus,.hover-black-70:hover {
    color: rgba(0,0,0,.7)
}

.hover-black-60:focus,.hover-black-60:hover {
    color: rgba(0,0,0,.6)
}

.hover-black-50:focus,.hover-black-50:hover {
    color: rgba(0,0,0,.5)
}

.hover-black-40:focus,.hover-black-40:hover {
    color: rgba(0,0,0,.4)
}

.hover-black-30:focus,.hover-black-30:hover {
    color: rgba(0,0,0,.3)
}

.hover-black-20:focus,.hover-black-20:hover {
    color: rgba(0,0,0,.2)
}

.hover-black-10:focus,.hover-black-10:hover {
    color: rgba(0,0,0,.1)
}

.hover-black-05:focus,.hover-black-05:hover {
    color: rgba(0,0,0,.05)
}

.hover-black-025:focus,.hover-black-025:hover {
    color: rgba(0,0,0,.025)
}

.hover-black-0125:focus,.hover-black-0125:hover {
    color: rgba(0,0,0,.0125)
}

.hover-white-90:focus,.hover-white-90:hover {
    color: hsla(0,0%,100%,.9)
}

.hover-white-80:focus,.hover-white-80:hover {
    color: hsla(0,0%,100%,.8)
}

.hover-white-70:focus,.hover-white-70:hover {
    color: hsla(0,0%,100%,.7)
}

.hover-white-60:focus,.hover-white-60:hover {
    color: hsla(0,0%,100%,.6)
}

.hover-white-50:focus,.hover-white-50:hover {
    color: hsla(0,0%,100%,.5)
}

.hover-white-40:focus,.hover-white-40:hover {
    color: hsla(0,0%,100%,.4)
}

.hover-white-30:focus,.hover-white-30:hover {
    color: hsla(0,0%,100%,.3)
}

.hover-white-20:focus,.hover-white-20:hover {
    color: hsla(0,0%,100%,.2)
}

.hover-white-10:focus,.hover-white-10:hover {
    color: hsla(0,0%,100%,.1)
}

.hover-white-05:focus,.hover-white-05:hover {
    color: hsla(0,0%,100%,.05)
}

.hover-white-025:focus,.hover-white-025:hover {
    color: hsla(0,0%,100%,.025)
}

.hover-white-0125:focus,.hover-white-0125:hover {
    color: hsla(0,0%,100%,.0125)
}

.hover-bg-rebel-pink:focus,.hover-bg-rebel-pink:hover {
    background-color: #f71963
}

.hover-b--rebel-pink:focus,.hover-b--rebel-pink:hover {
    border-color: #f71963
}

.hover-bg-heavy-rebel-pink:focus,.hover-bg-heavy-rebel-pink:hover {
    background-color: #dd1659
}

.hover-b--heavy-rebel-pink:focus,.hover-b--heavy-rebel-pink:hover {
    border-color: #dd1659
}

.hover-bg-elite-purple:focus,.hover-bg-elite-purple:hover {
    background-color: #8914cc
}

.hover-b--elite-purple:focus,.hover-b--elite-purple:hover {
    border-color: #8914cc
}

.hover-bg-near-black:focus,.hover-bg-near-black:hover {
    background-color: #3f3f40
}

.hover-b--near-black:focus,.hover-b--near-black:hover {
    border-color: #3f3f40
}

.hover-bg-dark-gray:focus,.hover-bg-dark-gray:hover {
    background-color: #585959
}

.hover-b--dark-gray:focus,.hover-b--dark-gray:hover {
    border-color: #585959
}

.hover-bg-mid-gray:focus,.hover-bg-mid-gray:hover {
    background-color: #727273
}

.hover-b--mid-gray:focus,.hover-b--mid-gray:hover {
    border-color: #727273
}

.hover-bg-gray:focus,.hover-bg-gray:hover {
    background-color: #979899
}

.hover-b--gray:focus,.hover-b--gray:hover {
    border-color: #979899
}

.hover-bg-silver:focus,.hover-bg-silver:hover {
    background-color: #cacbcc
}

.hover-b--silver:focus,.hover-b--silver:hover {
    border-color: #cacbcc
}

.hover-bg-light-gray:focus,.hover-bg-light-gray:hover {
    background-color: #e3e4e6
}

.hover-b--light-gray:focus,.hover-b--light-gray:hover {
    border-color: #e3e4e6
}

.hover-bg-light-silver:focus,.hover-bg-light-silver:hover {
    background-color: #f2f4f5
}

.hover-b--light-silver:focus,.hover-b--light-silver:hover {
    border-color: #f2f4f5
}

.hover-bg-near-white:focus,.hover-bg-near-white:hover {
    background-color: #f7f9fa
}

.hover-b--near-white:focus,.hover-b--near-white:hover {
    border-color: #f7f9fa
}

.hover-bg-white:focus,.hover-bg-white:hover {
    background-color: #fff
}

.hover-b--white:focus,.hover-b--white:hover {
    border-color: #fff
}

.hover-bg-washed-blue:focus,.hover-bg-washed-blue:hover {
    background-color: #edf4fa
}

.hover-b--washed-blue:focus,.hover-b--washed-blue:hover {
    border-color: #edf4fa
}

.hover-bg-light-blue:focus,.hover-bg-light-blue:hover {
    background-color: #cce8ff
}

.hover-b--light-blue:focus,.hover-b--light-blue:hover {
    border-color: #cce8ff
}

.hover-bg-blue:focus,.hover-bg-blue:hover {
    background-color: #368df7
}

.hover-b--blue:focus,.hover-b--blue:hover {
    border-color: #368df7
}

.hover-bg-heavy-blue:focus,.hover-bg-heavy-blue:hover {
    background-color: #2a6dbf
}

.hover-b--heavy-blue:focus,.hover-b--heavy-blue:hover {
    border-color: #2a6dbf
}

.hover-bg-light-marine:focus,.hover-bg-light-marine:hover {
    background-color: #3d5980
}

.hover-b--light-marine:focus,.hover-b--light-marine:hover {
    border-color: #3d5980
}

.hover-bg-marine:focus,.hover-bg-marine:hover {
    background-color: #25354d
}

.hover-b--marine:focus,.hover-b--marine:hover {
    border-color: #25354d
}

.hover-bg-serious-black:focus,.hover-bg-serious-black:hover {
    background-color: #142032
}

.hover-b--serious-black:focus,.hover-b--serious-black:hover {
    border-color: #142032
}

.hover-bg-green:focus,.hover-bg-green:hover {
    background-color: #8bc34a
}

.hover-b--green:focus,.hover-b--green:hover {
    border-color: #8bc34a
}

.hover-bg-washed-green:focus,.hover-bg-washed-green:hover {
    background-color: #eafce3
}

.hover-b--washed-green:focus,.hover-b--washed-green:hover {
    border-color: #eafce3
}

.hover-bg-red:focus,.hover-bg-red:hover {
    background-color: #ff4c4c
}

.hover-b--red:focus,.hover-b--red:hover {
    border-color: #ff4c4c
}

.hover-bg-washed-red:focus,.hover-bg-washed-red:hover {
    background-color: #ffe6e6
}

.hover-b--washed-red:focus,.hover-b--washed-red:hover {
    border-color: #ffe6e6
}

.hover-bg-yellow:focus,.hover-bg-yellow:hover {
    background-color: #ffb100
}

.hover-b--yellow:focus,.hover-b--yellow:hover {
    border-color: #ffb100
}

.hover-bg-washed-yellow:focus,.hover-bg-washed-yellow:hover {
    background-color: #fff6e0
}

.hover-b--washed-yellow:focus,.hover-b--washed-yellow:hover {
    border-color: #fff6e0
}

.hover-bg-black-90:focus,.hover-bg-black-90:hover {
    background-color: rgba(0,0,0,.9)
}

.hover-b--black-90:focus,.hover-b--black-90:hover {
    border-color: rgba(0,0,0,.9)
}

.hover-bg-black-80:focus,.hover-bg-black-80:hover {
    background-color: rgba(0,0,0,.8)
}

.hover-b--black-80:focus,.hover-b--black-80:hover {
    border-color: rgba(0,0,0,.8)
}

.hover-bg-black-70:focus,.hover-bg-black-70:hover {
    background-color: rgba(0,0,0,.7)
}

.hover-b--black-70:focus,.hover-b--black-70:hover {
    border-color: rgba(0,0,0,.7)
}

.hover-bg-black-60:focus,.hover-bg-black-60:hover {
    background-color: rgba(0,0,0,.6)
}

.hover-b--black-60:focus,.hover-b--black-60:hover {
    border-color: rgba(0,0,0,.6)
}

.hover-bg-black-50:focus,.hover-bg-black-50:hover {
    background-color: rgba(0,0,0,.5)
}

.hover-b--black-50:focus,.hover-b--black-50:hover {
    border-color: rgba(0,0,0,.5)
}

.hover-bg-black-40:focus,.hover-bg-black-40:hover {
    background-color: rgba(0,0,0,.4)
}

.hover-b--black-40:focus,.hover-b--black-40:hover {
    border-color: rgba(0,0,0,.4)
}

.hover-bg-black-30:focus,.hover-bg-black-30:hover {
    background-color: rgba(0,0,0,.3)
}

.hover-b--black-30:focus,.hover-b--black-30:hover {
    border-color: rgba(0,0,0,.3)
}

.hover-bg-black-20:focus,.hover-bg-black-20:hover {
    background-color: rgba(0,0,0,.2)
}

.hover-b--black-20:focus,.hover-b--black-20:hover {
    border-color: rgba(0,0,0,.2)
}

.hover-bg-black-10:focus,.hover-bg-black-10:hover {
    background-color: rgba(0,0,0,.1)
}

.hover-b--black-10:focus,.hover-b--black-10:hover {
    border-color: rgba(0,0,0,.1)
}

.hover-bg-black-05:focus,.hover-bg-black-05:hover {
    background-color: rgba(0,0,0,.05)
}

.hover-b--black-05:focus,.hover-b--black-05:hover {
    border-color: rgba(0,0,0,.05)
}

.hover-bg-black-025:focus,.hover-bg-black-025:hover {
    background-color: rgba(0,0,0,.025)
}

.hover-b--black-025:focus,.hover-b--black-025:hover {
    border-color: rgba(0,0,0,.025)
}

.hover-bg-black-0125:focus,.hover-bg-black-0125:hover {
    background-color: rgba(0,0,0,.0125)
}

.hover-b--black-0125:focus,.hover-b--black-0125:hover {
    border-color: rgba(0,0,0,.0125)
}

.hover-bg-white-90:focus,.hover-bg-white-90:hover {
    background-color: hsla(0,0%,100%,.9)
}

.hover-b--white-90:focus,.hover-b--white-90:hover {
    border-color: hsla(0,0%,100%,.9)
}

.hover-bg-white-80:focus,.hover-bg-white-80:hover {
    background-color: hsla(0,0%,100%,.8)
}

.hover-b--white-80:focus,.hover-b--white-80:hover {
    border-color: hsla(0,0%,100%,.8)
}

.hover-bg-white-70:focus,.hover-bg-white-70:hover {
    background-color: hsla(0,0%,100%,.7)
}

.hover-b--white-70:focus,.hover-b--white-70:hover {
    border-color: hsla(0,0%,100%,.7)
}

.hover-bg-white-60:focus,.hover-bg-white-60:hover {
    background-color: hsla(0,0%,100%,.6)
}

.hover-b--white-60:focus,.hover-b--white-60:hover {
    border-color: hsla(0,0%,100%,.6)
}

.hover-bg-white-50:focus,.hover-bg-white-50:hover {
    background-color: hsla(0,0%,100%,.5)
}

.hover-b--white-50:focus,.hover-b--white-50:hover {
    border-color: hsla(0,0%,100%,.5)
}

.hover-bg-white-40:focus,.hover-bg-white-40:hover {
    background-color: hsla(0,0%,100%,.4)
}

.hover-b--white-40:focus,.hover-b--white-40:hover {
    border-color: hsla(0,0%,100%,.4)
}

.hover-bg-white-30:focus,.hover-bg-white-30:hover {
    background-color: hsla(0,0%,100%,.3)
}

.hover-b--white-30:focus,.hover-b--white-30:hover {
    border-color: hsla(0,0%,100%,.3)
}

.hover-bg-white-20:focus,.hover-bg-white-20:hover {
    background-color: hsla(0,0%,100%,.2)
}

.hover-b--white-20:focus,.hover-b--white-20:hover {
    border-color: hsla(0,0%,100%,.2)
}

.hover-bg-white-10:focus,.hover-bg-white-10:hover {
    background-color: hsla(0,0%,100%,.1)
}

.hover-b--white-10:focus,.hover-b--white-10:hover {
    border-color: hsla(0,0%,100%,.1)
}

.hover-bg-white-05:focus,.hover-bg-white-05:hover {
    background-color: hsla(0,0%,100%,.05)
}

.hover-b--white-05:focus,.hover-b--white-05:hover {
    border-color: hsla(0,0%,100%,.05)
}

.hover-bg-white-025:focus,.hover-bg-white-025:hover {
    background-color: hsla(0,0%,100%,.025)
}

.hover-b--white-025:focus,.hover-b--white-025:hover {
    border-color: hsla(0,0%,100%,.025)
}

.hover-bg-white-0125:focus,.hover-bg-white-0125:hover {
    background-color: hsla(0,0%,100%,.0125)
}

.hover-b--white-0125:focus,.hover-b--white-0125:hover {
    border-color: hsla(0,0%,100%,.0125)
}

.hover-bg-transparent:focus,.hover-bg-transparent:hover {
    background-color: transparent
}

.hover-b--transparent:focus,.hover-b--transparent:hover {
    border-color: transparent
}

.hover-c-action-primary:focus,.hover-c-action-primary:hover {
    color: #072c75
}

.hover-c-action-secondary:focus,.hover-c-action-secondary:hover {
    color: #e06741
}

.hover-c-link:focus,.hover-c-link:hover {
    color: #0c389f
}

.hover-c-emphasis:focus,.hover-c-emphasis:hover {
    color: #dd1659
}

.hover-c-success:focus,.hover-c-success:hover {
    color: #8bc34a
}

.hover-c-success--faded:focus,.hover-c-success--faded:hover {
    color: #eafce3
}

.hover-c-danger:focus,.hover-c-danger:hover {
    color: #e13232
}

.hover-c-danger--faded:focus,.hover-c-danger--faded:hover {
    color: #ffe6e6
}

.hover-c-warning:focus,.hover-c-warning:hover {
    color: #ffb100
}

.hover-c-warning--faded:focus,.hover-c-warning--faded:hover {
    color: #fff6e0
}

.hover-c-on-action-primary:focus,.hover-c-on-action-primary:hover {
    color: #fff
}

.hover-c-on-action-secondary:focus,.hover-c-on-action-secondary:hover {
    color: #e06741
}

.hover-c-on-emphasis:focus,.hover-c-on-emphasis:hover,.hover-c-on-success:focus,.hover-c-on-success:hover {
    color: #fff
}

.hover-c-on-success--faded:focus,.hover-c-on-success--faded:hover {
    color: #3f3f40
}

.hover-c-on-danger:focus,.hover-c-on-danger:hover {
    color: #fff
}

.hover-c-on-danger--faded:focus,.hover-c-on-danger--faded:hover {
    color: #3f3f40
}

.hover-c-on-warning:focus,.hover-c-on-warning:hover {
    color: #fff
}

.hover-c-on-warning--faded:focus,.hover-c-on-warning--faded:hover {
    color: #1a1a1a
}

.visited-c-link:visited {
    color: #0c389f
}

.hover-bg-action-primary:focus,.hover-bg-action-primary:hover {
    background-color: #072c75
}

.hover-bg-action-secondary:focus,.hover-bg-action-secondary:hover {
    background-color: #e06741
}

.hover-bg-emphasis:focus,.hover-bg-emphasis:hover {
    background-color: #dd1659
}

.hover-bg-success:focus,.hover-bg-success:hover {
    background-color: #8bc34a
}

.hover-bg-success--faded:focus,.hover-bg-success--faded:hover {
    background-color: #eafce3
}

.hover-bg-danger:focus,.hover-bg-danger:hover {
    background-color: #e13232
}

.hover-bg-danger--faded:focus,.hover-bg-danger--faded:hover {
    background-color: #ffe6e6
}

.hover-bg-warning:focus,.hover-bg-warning:hover {
    background-color: #ffb100
}

.hover-bg-warning--faded:focus,.hover-bg-warning--faded:hover {
    background-color: #fff6e0
}

.hover-bg-muted-1:focus,.hover-bg-muted-1:hover {
    background-color: #727273
}

.hover-bg-muted-2:focus,.hover-bg-muted-2:hover {
    background-color: #979899
}

.hover-bg-muted-3:focus,.hover-bg-muted-3:hover {
    background-color: #cacbcc
}

.hover-bg-muted-4:focus,.hover-bg-muted-4:hover {
    background-color: #e3e4e6
}

.hover-bg-muted-5:focus,.hover-bg-muted-5:hover {
    background-color: #f2f4f5
}

.hover-b--action-primary:focus,.hover-b--action-primary:hover {
    border-color: #072c75
}

.hover-b--action-secondary:focus,.hover-b--action-secondary:hover {
    border-color: #e06741
}

.hover-b--emphasis:focus,.hover-b--emphasis:hover {
    border-color: #dd1659
}

.hover-b--success:focus,.hover-b--success:hover {
    border-color: #8bc34a
}

.hover-b--success--faded:focus,.hover-b--success--faded:hover {
    border-color: #eafce3
}

.hover-b--danger:focus,.hover-b--danger:hover {
    border-color: #e13232
}

.hover-b--danger--faded:focus,.hover-b--danger--faded:hover {
    border-color: #ffe6e6
}

.hover-b--warning:focus,.hover-b--warning:hover {
    border-color: #ffb100
}

.hover-b--warning--faded:focus,.hover-b--warning--faded:hover {
    border-color: #fff6e0
}

.hover-b--muted-1:focus,.hover-b--muted-1:hover {
    border-color: #727273
}

.hover-b--muted-2:focus,.hover-b--muted-2:hover {
    border-color: #979899
}

.hover-b--muted-3:focus,.hover-b--muted-3:hover {
    border-color: #cacbcc
}

.hover-b--muted-4:focus,.hover-b--muted-4:hover {
    border-color: #e3e4e6
}

.hover-b--muted-5:focus,.hover-b--muted-5:hover {
    border-color: #f2f4f5
}

.active-c-link:active {
    color: #0c389f
}

.active-c-emphasis:active {
    color: #dd1659
}

.active-c-success:active {
    color: #8bc34a
}

.active-c-success--faded:active {
    color: #eafce3
}

.active-c-danger:active {
    color: #ff4c4c
}

.active-c-danger--faded:active {
    color: #ffe6e6
}

.active-c-warning:active {
    color: #ffb100
}

.active-c-warning--faded:active {
    color: #fff6e0
}

.active-c-on-action-primary:active {
    color: #fff
}

.active-c-on-action-secondary:active {
    color: #e06741
}

.active-c-on-emphasis:active,.active-c-on-success:active {
    color: #fff
}

.active-c-on-success--faded:active {
    color: #3f3f40
}

.active-c-on-danger:active {
    color: #fff
}

.active-c-on-danger--faded:active {
    color: #3f3f40
}

.active-c-on-warning:active {
    color: #fff
}

.active-c-on-warning--faded:active {
    color: #1a1a1a
}

.active-bg-action-primary:active {
    background-color: #0c389f
}

.active-bg-action-secondary:active {
    background-color: #d2defc
}

.active-bg-emphasis:active {
    background-color: #dd1659
}

.active-bg-success:active {
    background-color: #8bc34a
}

.active-bg-success--faded:active {
    background-color: #eafce3
}

.active-bg-danger:active {
    background-color: #ff4c4c
}

.active-bg-danger--faded:active {
    background-color: #ffe6e6
}

.active-bg-warning:active {
    background-color: #ffb100
}

.active-bg-warning--faded:active {
    background-color: #fff6e0
}

.active-bg-muted-1:active {
    background-color: #727273
}

.active-bg-muted-2:active {
    background-color: #979899
}

.active-bg-muted-3:active {
    background-color: #cacbcc
}

.active-bg-muted-4:active {
    background-color: #e3e4e6
}

.active-bg-muted-5:active {
    background-color: #f2f4f5
}

.active-b--action-primary:active {
    border-color: #0c389f
}

.active-b--action-secondary:active {
    border-color: #d2defc
}

.active-b--emphasis:active {
    border-color: #dd1659
}

.active-b--success:active {
    border-color: #8bc34a
}

.active-b--success--faded:active {
    border-color: #eafce3
}

.active-b--danger:active {
    border-color: #ff4c4c
}

.active-b--danger--faded:active {
    border-color: #ffe6e6
}

.active-b--warning:active {
    border-color: #ffb100
}

.active-b--warning--faded:active {
    border-color: #fff6e0
}

.active-b--muted-1:active {
    border-color: #727273
}

.active-b--muted-2:active {
    border-color: #979899
}

.active-b--muted-3:active {
    border-color: #cacbcc
}

.active-b--muted-4:active {
    border-color: #e3e4e6
}

.active-b--muted-5:active {
    border-color: #f2f4f5
}

.active-bg-transparent:active,.hover-bg-transparent:focus,.hover-bg-transparent:hover {
    background-color: transparent
}

.hover-b--transparent:focus,.hover-b--transparent:hover,active-b--transparent:active {
    border-color: transparent
}

img {
    max-width: 100%
}

.tracked {
    letter-spacing: .1em
}

.tracked-tight {
    letter-spacing: -.05em
}

.tracked-mega {
    letter-spacing: .25em
}

.lh-solid {
    line-height: 1
}

.lh-title {
    line-height: 1.25
}

.lh-copy {
    line-height: 1.5
}

.mw1 {
    max-width: 1rem
}

.mw2 {
    max-width: 2rem
}

.mw3 {
    max-width: 4rem
}

.mw4 {
    max-width: 8rem
}

.mw5 {
    max-width: 16rem
}

.mw6 {
    max-width: 32rem
}

.mw7 {
    max-width: 48rem
}

.mw8 {
    max-width: 64rem
}

.mw9 {
    max-width: 96rem
}

.mw-none {
    max-width: none
}

.mw-100 {
    max-width: 100%
}

.nested-copy-line-height ol,.nested-copy-line-height p,.nested-copy-line-height ul {
    line-height: 1.5
}

.nested-headline-line-height h1,.nested-headline-line-height h2,.nested-headline-line-height h3,.nested-headline-line-height h4,.nested-headline-line-height h5,.nested-headline-line-height h6 {
    line-height: 1.25
}

.nested-list-reset ol,.nested-list-reset ul {
    padding-left: 0;
    margin-left: 0;
    list-style-type: none
}

.nested-copy-indent p+p {
    text-indent: 1em;
    margin-top: 0;
    margin-bottom: 0
}

.nested-copy-separator p+p {
    margin-top: 1.5em
}

.nested-img img {
    width: 100%;
    max-width: 100%;
    display: block
}

.nested-links a {
    color: #368df7
}

.nested-links a,.nested-links a:focus,.nested-links a:hover {
    -webkit-transition: color .15s ease-in;
    transition: color .15s ease-in
}

.nested-links a:focus,.nested-links a:hover {
    color: #cce8ff
}

.dim {
    opacity: 1
}

.dim,.dim:focus,.dim:hover {
    -webkit-transition: opacity .15s ease-in;
    transition: opacity .15s ease-in
}

.dim:focus,.dim:hover {
    opacity: .5
}

.dim:active {
    opacity: .8;
    -webkit-transition: opacity .15s ease-out;
    transition: opacity .15s ease-out
}

.glow,.glow:focus,.glow:hover {
    -webkit-transition: opacity .15s ease-in;
    transition: opacity .15s ease-in
}

.glow:focus,.glow:hover {
    opacity: 1
}

.hide-child .child {
    opacity: 0;
    -webkit-transition: opacity .15s ease-in;
    transition: opacity .15s ease-in
}

.hide-child:active .child,.hide-child:focus .child,.hide-child:hover .child {
    opacity: 1;
    -webkit-transition: opacity .15s ease-in;
    transition: opacity .15s ease-in
}

.underline-hover:focus,.underline-hover:hover {
    text-decoration: underline
}

.grow {
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: -webkit-transform .25s ease-out;
    transition: -webkit-transform .25s ease-out;
    transition: transform .25s ease-out;
    transition: transform .25s ease-out,-webkit-transform .25s ease-out
}

.grow:focus,.grow:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05)
}

.grow:active {
    -webkit-transform: scale(.9);
    transform: scale(.9)
}

.grow-large {
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: -webkit-transform .25s ease-in-out;
    transition: -webkit-transform .25s ease-in-out;
    transition: transform .25s ease-in-out;
    transition: transform .25s ease-in-out,-webkit-transform .25s ease-in-out
}

.grow-large:focus,.grow-large:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2)
}

.grow-large:active {
    -webkit-transform: scale(.95);
    transform: scale(.95)
}

.pointer:hover,.shadow-hover {
    cursor: pointer
}

.shadow-hover {
    position: relative;
    -webkit-transition: all .5s cubic-bezier(.165,.84,.44,1);
    transition: all .5s cubic-bezier(.165,.84,.44,1)
}

.shadow-hover:after {
    content: "";
    box-shadow: 0 0 16px 2px rgba(0,0,0,.2);
    border-radius: inherit;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    -webkit-transition: opacity .5s cubic-bezier(.165,.84,.44,1);
    transition: opacity .5s cubic-bezier(.165,.84,.44,1)
}

.shadow-hover:focus:after,.shadow-hover:hover:after {
    opacity: 1
}

.bg-animate,.bg-animate:focus,.bg-animate:hover {
    -webkit-transition: background-color .15s ease-in-out;
    transition: background-color .15s ease-in-out
}

.o-100 {
    opacity: 1
}

.o-90 {
    opacity: .9
}

.o-80 {
    opacity: .8
}

.o-70 {
    opacity: .7
}

.o-60 {
    opacity: .6
}

.o-50 {
    opacity: .5
}

.o-40 {
    opacity: .4
}

.o-30 {
    opacity: .3
}

.o-20 {
    opacity: .2
}

.o-10 {
    opacity: .1
}

.o-05 {
    opacity: .05
}

.o-025 {
    opacity: .025
}

.o-0 {
    opacity: 0
}

.rotate-45 {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.rotate-90 {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

.rotate-135 {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg)
}

.rotate-180 {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.rotate-225 {
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg)
}

.rotate-270 {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
}

.rotate-315 {
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg)
}

.outline {
    outline: 1px solid
}

.outline-transparent {
    outline: 1px solid transparent
}

.outline-0 {
    outline: 0
}

.overflow-visible {
    overflow: visible
}

.overflow-hidden {
    overflow: hidden
}

.overflow-scroll {
    overflow: scroll
}

.overflow-auto {
    overflow: auto
}

.overflow-x-visible {
    overflow-x: visible
}

.overflow-x-hidden {
    overflow-x: hidden
}

.overflow-x-scroll {
    overflow-x: scroll
}

.overflow-x-auto {
    overflow-x: auto
}

.overflow-y-visible {
    overflow-y: visible
}

.overflow-y-hidden {
    overflow-y: hidden
}

.overflow-y-scroll {
    overflow-y: scroll
}

.overflow-y-auto {
    overflow-y: auto
}

.static {
    position: static
}

.relative {
    position: relative
}

.absolute {
    position: absolute
}

.fixed {
    position: fixed
}

.sticky {
    position: -webkit-sticky;
    position: sticky
}

.strike {
    text-decoration: line-through
}

.underline {
    text-decoration: underline
}

.no-underline {
    text-decoration: none
}

.tl {
    text-align: left
}

.tr {
    text-align: right
}

.tc {
    text-align: center
}

.tj {
    text-align: justify
}

.ttc {
    text-transform: capitalize
}

.ttl {
    text-transform: lowercase
}

.ttu {
    text-transform: uppercase
}

.ttn {
    text-transform: none
}

.v-base {
    vertical-align: baseline
}

.v-mid {
    vertical-align: middle
}

.v-top {
    vertical-align: top
}

.v-btm {
    vertical-align: bottom
}

.f1 {
    font-size: 3rem
}

.f2 {
    font-size: 2.25rem
}

.f3 {
    font-size: 1.5rem
}

.f4 {
    font-size: 1.25rem
}

.f5 {
    font-size: 1rem
}

.f6 {
    font-size: .875rem
}

.f7 {
    font-size: .75rem
}

.measure {
    max-width: 30em
}

.measure-wide {
    max-width: 34em
}

.measure-narrow {
    max-width: 20em
}

.small-caps {
    font-variant: small-caps
}

.indent {
    text-indent: 1em;
    margin-top: 0;
    margin-bottom: 0
}

.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.t-heading-1 {
    font-size: 3rem
}

.t-heading-1,.t-heading-2 {
    font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0
}

.t-heading-2 {
    font-size: 2.25rem
}

.t-heading-3 {
    font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    font-weight: 700;
    font-size: 1.75rem;
    text-transform: none;
    letter-spacing: 0
}

.t-heading-4 {
    font-size: 1.5rem
}

.t-heading-4,.t-heading-5 {
    font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0
}

.t-heading-5 {
    font-size: 1.25rem
}

.t-heading-6 {
    font-size: 1.25rem
}

.t-body,.t-heading-6,body {
    font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0
}

.t-body,body {
    font-size: 1rem
}

.t-small {
    font-size: .875rem
}

.t-mini,.t-small {
    font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0
}

.t-mini {
    font-size: .75rem
}

.t-action {
    font-size: 1rem
}

.t-action,.t-action--small {
    font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0
}

.t-action--small {
    font-size: .875rem
}

.t-action--large {
    font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0
}

.t-code {
    font-family: Consolas,monaco,monospace;
    font-size: 1rem;
    text-transform: none;
    letter-spacing: 0
}

.normal,.t-code {
    font-weight: 400
}

.b {
    font-weight: 700
}

.fw1 {
    font-weight: 100
}

.fw2 {
    font-weight: 200
}

.fw3 {
    font-weight: 300
}

.fw4 {
    font-weight: 400
}

.fw5 {
    font-weight: 500
}

.fw6 {
    font-weight: 600
}

.fw7 {
    font-weight: 700
}

.fw8 {
    font-weight: 800
}

.fw9 {
    font-weight: 900
}

.overflow-container {
    overflow-y: scroll
}

.center {
    margin-left: auto
}

.center,.mr-auto {
    margin-right: auto
}

.ml-auto {
    margin-left: auto
}

.clip {
    position: fixed!important;
    _position: absolute!important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px,1px,1px,1px)
}

.ws-normal {
    white-space: normal
}

.nowrap {
    white-space: nowrap
}

.pre {
    white-space: pre
}

.w1 {
    width: 1rem
}

.w2 {
    width: 2rem
}

.w3 {
    width: 4rem
}

.w4 {
    width: 8rem
}

.w5 {
    width: 16rem
}

.w-10 {
    width: 10%
}

.w-20 {
    width: 20%
}

.w-25 {
    width: 25%
}

.w-30 {
    width: 30%
}

.w-33 {
    width: 33%
}

.w-34 {
    width: 34%
}

.w-40 {
    width: 40%
}

.w-50 {
    width: 50%
}

.w-60 {
    width: 60%
}

.w-70 {
    width: 70%
}

.w-75 {
    width: 75%
}

.w-80 {
    width: 80%
}

.w-90 {
    width: 90%
}

.w-100 {
    width: 100%
}

.w-third {
    width: 33.33333%
}

.w-two-thirds {
    width: 66.66667%
}

.w-auto {
    width: auto
}

.vw-10 {
    width: 10vw
}

.vw-20 {
    width: 20vw
}

.vw-25 {
    width: 25vw
}

.vw-30 {
    width: 30vw
}

.vw-33 {
    width: 33vw
}

.vw-34 {
    width: 34vw
}

.vw-40 {
    width: 40vw
}

.vw-50 {
    width: 50vw
}

.vw-60 {
    width: 60vw
}

.vw-70 {
    width: 70vw
}

.vw-75 {
    width: 75vw
}

.vw-80 {
    width: 80vw
}

.vw-90 {
    width: 90vw
}

.vw-100 {
    width: 100vw
}

.vw-third {
    width: 33.33333vw
}

.vw-two-thirds {
    width: 66.66667vw
}

.z-0 {
    z-index: 0
}

.z-1 {
    z-index: 1
}

.z-2 {
    z-index: 2
}

.z-3 {
    z-index: 3
}

.z-4 {
    z-index: 4
}

.z-5 {
    z-index: 5
}

.z-999 {
    z-index: 999
}

.z-9999 {
    z-index: 9999
}

.z-max {
    z-index: 2147483647
}

.z-inherit {
    z-index: inherit
}

.z-initial {
    z-index: auto
}

.z-unset {
    z-index: unset
}

@media screen and (min-width: 20em) {
    .aspect-ratio-s {
        height:0;
        position: relative
    }

    .aspect-ratio--16x9-s {
        padding-bottom: 56.25%
    }

    .aspect-ratio--9x16-s {
        padding-bottom: 177.77%
    }

    .aspect-ratio--4x3-s {
        padding-bottom: 75%
    }

    .aspect-ratio--3x4-s {
        padding-bottom: 133.33%
    }

    .aspect-ratio--6x4-s {
        padding-bottom: 66.6%
    }

    .aspect-ratio--4x6-s {
        padding-bottom: 150%
    }

    .aspect-ratio--8x5-s {
        padding-bottom: 62.5%
    }

    .aspect-ratio--5x8-s {
        padding-bottom: 160%
    }

    .aspect-ratio--7x5-s {
        padding-bottom: 71.42%
    }

    .aspect-ratio--5x7-s {
        padding-bottom: 140%
    }

    .aspect-ratio--1x1-s {
        padding-bottom: 100%
    }

    .aspect-ratio--object-s {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100
    }

    .cover-s {
        background-size: cover!important
    }

    .contain-s {
        background-size: contain!important
    }

    .bg-center-s {
        background-position: 50%
    }

    .bg-center-s,.bg-top-s {
        background-repeat: no-repeat
    }

    .bg-top-s {
        background-position: top
    }

    .bg-right-s {
        background-position: 100%
    }

    .bg-bottom-s,.bg-right-s {
        background-repeat: no-repeat
    }

    .bg-bottom-s {
        background-position: bottom
    }

    .bg-left-s {
        background-repeat: no-repeat;
        background-position: 0
    }

    .ba-s {
        border-style: solid;
        border-width: 1px
    }

    .bt-s {
        border-top-style: solid;
        border-top-width: 1px
    }

    .br-s {
        border-right-style: solid;
        border-right-width: 1px
    }

    .bb-s {
        border-bottom-style: solid;
        border-bottom-width: 1px
    }

    .bl-s {
        border-left-style: solid;
        border-left-width: 1px
    }

    .bn-s {
        border-style: none;
        border-width: 0
    }

    .br0-s {
        border-radius: 0
    }

    .br1-s {
        border-radius: .125rem
    }

    .br2-s {
        border-radius: .25rem
    }

    .br3-s {
        border-radius: .5rem
    }

    .br4-s {
        border-radius: 1rem
    }

    .br-100-s {
        border-radius: 100%
    }

    .br-pill-s {
        border-radius: 9999px
    }

    .br--bottom-s {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .br--top-s {
        border-bottom-right-radius: 0
    }

    .br--right-s,.br--top-s {
        border-bottom-left-radius: 0
    }

    .br--right-s {
        border-top-left-radius: 0
    }

    .br--left-s {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .b--dotted-s {
        border-style: dotted
    }

    .b--dashed-s {
        border-style: dashed
    }

    .b--solid-s {
        border-style: solid
    }

    .b--none-s {
        border-style: none
    }

    .bw0-s {
        border-width: 0
    }

    .bw1-s {
        border-width: .125rem
    }

    .bw2-s {
        border-width: .25rem
    }

    .bw3-s {
        border-width: .5rem
    }

    .bw4-s {
        border-width: 1rem
    }

    .bw5-s {
        border-width: 2rem
    }

    .bt-0-s {
        border-top-width: 0
    }

    .br-0-s {
        border-right-width: 0
    }

    .bb-0-s {
        border-bottom-width: 0
    }

    .bl-0-s {
        border-left-width: 0
    }

    .shadow-1-s {
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2)
    }

    .shadow-2-s {
        box-shadow: 0 0 8px 2px rgba(0,0,0,.2)
    }

    .shadow-3-s {
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2)
    }

    .shadow-4-s {
        box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2)
    }

    .shadow-5-s {
        box-shadow: 4px 4px 8px 0 rgba(0,0,0,.2)
    }

    .pa0-s {
        padding: 0
    }

    .ma0-s,.na0-s {
        margin: 0
    }

    .pl0-s {
        padding-left: 0
    }

    .ml0-s,.nl0-s {
        margin-left: 0
    }

    .pr0-s {
        padding-right: 0
    }

    .mr0-s,.nr0-s {
        margin-right: 0
    }

    .pt0-s {
        padding-top: 0
    }

    .mt0-s,.nt0-s {
        margin-top: 0
    }

    .pb0-s {
        padding-bottom: 0
    }

    .mb0-s,.nb0-s {
        margin-bottom: 0
    }

    .pv0-s {
        padding-top: 0;
        padding-bottom: 0
    }

    .mv0-s,.nv0-s {
        margin-top: 0;
        margin-bottom: 0
    }

    .ph0-s {
        padding-left: 0;
        padding-right: 0
    }

    .mh0-s,.nh0-s {
        margin-left: 0;
        margin-right: 0
    }

    .pa1-s {
        padding: .125rem
    }

    .ma1-s {
        margin: .125rem
    }

    .na1-s {
        margin: -.125rem
    }

    .pl1-s {
        padding-left: .125rem
    }

    .ml1-s {
        margin-left: .125rem
    }

    .nl1-s {
        margin-left: -.125rem
    }

    .pr1-s {
        padding-right: .125rem
    }

    .mr1-s {
        margin-right: .125rem
    }

    .nr1-s {
        margin-right: -.125rem
    }

    .pt1-s {
        padding-top: .125rem
    }

    .mt1-s {
        margin-top: .125rem
    }

    .nt1-s {
        margin-top: -.125rem
    }

    .pb1-s {
        padding-bottom: .125rem
    }

    .mb1-s {
        margin-bottom: .125rem
    }

    .nb1-s {
        margin-bottom: -.125rem
    }

    .pv1-s {
        padding-top: .125rem;
        padding-bottom: .125rem
    }

    .mv1-s {
        margin-top: .125rem;
        margin-bottom: .125rem
    }

    .nv1-s {
        margin-top: -.125rem;
        margin-bottom: -.125rem
    }

    .ph1-s {
        padding-left: .125rem;
        padding-right: .125rem
    }

    .mh1-s {
        margin-left: .125rem;
        margin-right: .125rem
    }

    .nh1-s {
        margin-left: -.125rem;
        margin-right: -.125rem
    }

    .pa2-s {
        padding: .25rem
    }

    .ma2-s {
        margin: .25rem
    }

    .na2-s {
        margin: -.25rem
    }

    .pl2-s {
        padding-left: .25rem
    }

    .ml2-s {
        margin-left: .25rem
    }

    .nl2-s {
        margin-left: -.25rem
    }

    .pr2-s {
        padding-right: .25rem
    }

    .mr2-s {
        margin-right: .25rem
    }

    .nr2-s {
        margin-right: -.25rem
    }

    .pt2-s {
        padding-top: .25rem
    }

    .mt2-s {
        margin-top: .25rem
    }

    .nt2-s {
        margin-top: -.25rem
    }

    .pb2-s {
        padding-bottom: .25rem
    }

    .mb2-s {
        margin-bottom: .25rem
    }

    .nb2-s {
        margin-bottom: -.25rem
    }

    .pv2-s {
        padding-top: .25rem;
        padding-bottom: .25rem
    }

    .mv2-s {
        margin-top: .25rem;
        margin-bottom: .25rem
    }

    .nv2-s {
        margin-top: -.25rem;
        margin-bottom: -.25rem
    }

    .ph2-s {
        padding-left: .25rem;
        padding-right: .25rem
    }

    .mh2-s {
        margin-left: .25rem;
        margin-right: .25rem
    }

    .nh2-s {
        margin-left: -.25rem;
        margin-right: -.25rem
    }

    .pa3-s {
        padding: .5rem
    }

    .ma3-s {
        margin: .5rem
    }

    .na3-s {
        margin: -.5rem
    }

    .pl3-s {
        padding-left: .5rem
    }

    .ml3-s {
        margin-left: .5rem
    }

    .nl3-s {
        margin-left: -.5rem
    }

    .pr3-s {
        padding-right: .5rem
    }

    .mr3-s {
        margin-right: .5rem
    }

    .nr3-s {
        margin-right: -.5rem
    }

    .pt3-s {
        padding-top: .5rem
    }

    .mt3-s {
        margin-top: .5rem
    }

    .nt3-s {
        margin-top: -.5rem
    }

    .pb3-s {
        padding-bottom: .5rem
    }

    .mb3-s {
        margin-bottom: .5rem
    }

    .nb3-s {
        margin-bottom: -.5rem
    }

    .pv3-s {
        padding-top: .5rem;
        padding-bottom: .5rem
    }

    .mv3-s {
        margin-top: .5rem;
        margin-bottom: .5rem
    }

    .nv3-s {
        margin-top: -.5rem;
        margin-bottom: -.5rem
    }

    .ph3-s {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .mh3-s {
        margin-left: .5rem;
        margin-right: .5rem
    }

    .nh3-s {
        margin-left: -.5rem;
        margin-right: -.5rem
    }

    .pa4-s {
        padding: .75rem
    }

    .ma4-s {
        margin: .75rem
    }

    .na4-s {
        margin: -.75rem
    }

    .pl4-s {
        padding-left: .75rem
    }

    .ml4-s {
        margin-left: .75rem
    }

    .nl4-s {
        margin-left: -.75rem
    }

    .pr4-s {
        padding-right: .75rem
    }

    .mr4-s {
        margin-right: .75rem
    }

    .nr4-s {
        margin-right: -.75rem
    }

    .pt4-s {
        padding-top: .75rem
    }

    .mt4-s {
        margin-top: .75rem
    }

    .nt4-s {
        margin-top: -.75rem
    }

    .pb4-s {
        padding-bottom: .75rem
    }

    .mb4-s {
        margin-bottom: .75rem
    }

    .nb4-s {
        margin-bottom: -.75rem
    }

    .pv4-s {
        padding-top: .75rem;
        padding-bottom: .75rem
    }

    .mv4-s {
        margin-top: .75rem;
        margin-bottom: .75rem
    }

    .nv4-s {
        margin-top: -.75rem;
        margin-bottom: -.75rem
    }

    .ph4-s {
        padding-left: .75rem;
        padding-right: .75rem
    }

    .mh4-s {
        margin-left: .75rem;
        margin-right: .75rem
    }

    .nh4-s {
        margin-left: -.75rem;
        margin-right: -.75rem
    }

    .pa5-s {
        padding: 1rem
    }

    .ma5-s {
        margin: 1rem
    }

    .na5-s {
        margin: -1rem
    }

    .pl5-s {
        padding-left: 1rem
    }

    .ml5-s {
        margin-left: 1rem
    }

    .nl5-s {
        margin-left: -1rem
    }

    .pr5-s {
        padding-right: 1rem
    }

    .mr5-s {
        margin-right: 1rem
    }

    .nr5-s {
        margin-right: -1rem
    }

    .pt5-s {
        padding-top: 1rem
    }

    .mt5-s {
        margin-top: 1rem
    }

    .nt5-s {
        margin-top: -1rem
    }

    .pb5-s {
        padding-bottom: 1rem
    }

    .mb5-s {
        margin-bottom: 1rem
    }

    .nb5-s {
        margin-bottom: -1rem
    }

    .pv5-s {
        padding-top: 1rem;
        padding-bottom: 1rem
    }

    .mv5-s {
        margin-top: 1rem;
        margin-bottom: 1rem
    }

    .nv5-s {
        margin-top: -1rem;
        margin-bottom: -1rem
    }

    .ph5-s {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .mh5-s {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .nh5-s {
        margin-left: -1rem;
        margin-right: -1rem
    }

    .pa6-s {
        padding: 1.5rem
    }

    .ma6-s {
        margin: 1.5rem
    }

    .na6-s {
        margin: -1.5rem
    }

    .pl6-s {
        padding-left: 1.5rem
    }

    .ml6-s {
        margin-left: 1.5rem
    }

    .nl6-s {
        margin-left: -1.5rem
    }

    .pr6-s {
        padding-right: 1.5rem
    }

    .mr6-s {
        margin-right: 1.5rem
    }

    .nr6-s {
        margin-right: -1.5rem
    }

    .pt6-s {
        padding-top: 1.5rem
    }

    .mt6-s {
        margin-top: 1.5rem
    }

    .nt6-s {
        margin-top: -1.5rem
    }

    .pb6-s {
        padding-bottom: 1.5rem
    }

    .mb6-s {
        margin-bottom: 1.5rem
    }

    .nb6-s {
        margin-bottom: -1.5rem
    }

    .pv6-s {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem
    }

    .mv6-s {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem
    }

    .nv6-s {
        margin-top: -1.5rem;
        margin-bottom: -1.5rem
    }

    .ph6-s {
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }

    .mh6-s {
        margin-left: 1.5rem;
        margin-right: 1.5rem
    }

    .nh6-s {
        margin-left: -1.5rem;
        margin-right: -1.5rem
    }

    .pa7-s {
        padding: 2rem
    }

    .ma7-s {
        margin: 2rem
    }

    .na7-s {
        margin: -2rem
    }

    .pl7-s {
        padding-left: 2rem
    }

    .ml7-s {
        margin-left: 2rem
    }

    .nl7-s {
        margin-left: -2rem
    }

    .pr7-s {
        padding-right: 2rem
    }

    .mr7-s {
        margin-right: 2rem
    }

    .nr7-s {
        margin-right: -2rem
    }

    .pt7-s {
        padding-top: 2rem
    }

    .mt7-s {
        margin-top: 2rem
    }

    .nt7-s {
        margin-top: -2rem
    }

    .pb7-s {
        padding-bottom: 2rem
    }

    .mb7-s {
        margin-bottom: 2rem
    }

    .nb7-s {
        margin-bottom: -2rem
    }

    .pv7-s {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .mv7-s {
        margin-top: 2rem;
        margin-bottom: 2rem
    }

    .nv7-s {
        margin-top: -2rem;
        margin-bottom: -2rem
    }

    .ph7-s {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .mh7-s {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .nh7-s {
        margin-left: -2rem;
        margin-right: -2rem
    }

    .pa8-s {
        padding: 3rem
    }

    .ma8-s {
        margin: 3rem
    }

    .na8-s {
        margin: -3rem
    }

    .pl8-s {
        padding-left: 3rem
    }

    .ml8-s {
        margin-left: 3rem
    }

    .nl8-s {
        margin-left: -3rem
    }

    .pr8-s {
        padding-right: 3rem
    }

    .mr8-s {
        margin-right: 3rem
    }

    .nr8-s {
        margin-right: -3rem
    }

    .pt8-s {
        padding-top: 3rem
    }

    .mt8-s {
        margin-top: 3rem
    }

    .nt8-s {
        margin-top: -3rem
    }

    .pb8-s {
        padding-bottom: 3rem
    }

    .mb8-s {
        margin-bottom: 3rem
    }

    .nb8-s {
        margin-bottom: -3rem
    }

    .pv8-s {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .mv8-s {
        margin-top: 3rem;
        margin-bottom: 3rem
    }

    .nv8-s {
        margin-top: -3rem;
        margin-bottom: -3rem
    }

    .ph8-s {
        padding-left: 3rem;
        padding-right: 3rem
    }

    .mh8-s {
        margin-left: 3rem;
        margin-right: 3rem
    }

    .nh8-s {
        margin-left: -3rem;
        margin-right: -3rem
    }

    .pa9-s {
        padding: 4rem
    }

    .ma9-s {
        margin: 4rem
    }

    .na9-s {
        margin: -4rem
    }

    .pl9-s {
        padding-left: 4rem
    }

    .ml9-s {
        margin-left: 4rem
    }

    .nl9-s {
        margin-left: -4rem
    }

    .pr9-s {
        padding-right: 4rem
    }

    .mr9-s {
        margin-right: 4rem
    }

    .nr9-s {
        margin-right: -4rem
    }

    .pt9-s {
        padding-top: 4rem
    }

    .mt9-s {
        margin-top: 4rem
    }

    .nt9-s {
        margin-top: -4rem
    }

    .pb9-s {
        padding-bottom: 4rem
    }

    .mb9-s {
        margin-bottom: 4rem
    }

    .nb9-s {
        margin-bottom: -4rem
    }

    .pv9-s {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .mv9-s {
        margin-top: 4rem;
        margin-bottom: 4rem
    }

    .nv9-s {
        margin-top: -4rem;
        margin-bottom: -4rem
    }

    .ph9-s {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .mh9-s {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .nh9-s {
        margin-left: -4rem;
        margin-right: -4rem
    }

    .pa10-s {
        padding: 8rem
    }

    .ma10-s {
        margin: 8rem
    }

    .na10-s {
        margin: -8rem
    }

    .pl10-s {
        padding-left: 8rem
    }

    .ml10-s {
        margin-left: 8rem
    }

    .nl10-s {
        margin-left: -8rem
    }

    .pr10-s {
        padding-right: 8rem
    }

    .mr10-s {
        margin-right: 8rem
    }

    .nr10-s {
        margin-right: -8rem
    }

    .pt10-s {
        padding-top: 8rem
    }

    .mt10-s {
        margin-top: 8rem
    }

    .nt10-s {
        margin-top: -8rem
    }

    .pb10-s {
        padding-bottom: 8rem
    }

    .mb10-s {
        margin-bottom: 8rem
    }

    .nb10-s {
        margin-bottom: -8rem
    }

    .pv10-s {
        padding-top: 8rem;
        padding-bottom: 8rem
    }

    .mv10-s {
        margin-top: 8rem;
        margin-bottom: 8rem
    }

    .nv10-s {
        margin-top: -8rem;
        margin-bottom: -8rem
    }

    .ph10-s {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .mh10-s {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .nh10-s {
        margin-left: -8rem;
        margin-right: -8rem
    }

    .pa11-s {
        padding: 16rem
    }

    .ma11-s {
        margin: 16rem
    }

    .na11-s {
        margin: -16rem
    }

    .pl11-s {
        padding-left: 16rem
    }

    .ml11-s {
        margin-left: 16rem
    }

    .nl11-s {
        margin-left: -16rem
    }

    .pr11-s {
        padding-right: 16rem
    }

    .mr11-s {
        margin-right: 16rem
    }

    .nr11-s {
        margin-right: -16rem
    }

    .pt11-s {
        padding-top: 16rem
    }

    .mt11-s {
        margin-top: 16rem
    }

    .nt11-s {
        margin-top: -16rem
    }

    .pb11-s {
        padding-bottom: 16rem
    }

    .mb11-s {
        margin-bottom: 16rem
    }

    .nb11-s {
        margin-bottom: -16rem
    }

    .pv11-s {
        padding-top: 16rem;
        padding-bottom: 16rem
    }

    .mv11-s {
        margin-top: 16rem;
        margin-bottom: 16rem
    }

    .nv11-s {
        margin-top: -16rem;
        margin-bottom: -16rem
    }

    .ph11-s {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .mh11-s {
        margin-left: 16rem;
        margin-right: 16rem
    }

    .nh11-s {
        margin-left: -16rem;
        margin-right: -16rem
    }

    .top-0-s {
        top: 0
    }

    .right-0-s {
        right: 0
    }

    .bottom-0-s {
        bottom: 0
    }

    .left-0-s {
        left: 0
    }

    .top-1-s {
        top: 1rem
    }

    .right-1-s {
        right: 1rem
    }

    .bottom-1-s {
        bottom: 1rem
    }

    .left-1-s {
        left: 1rem
    }

    .top-2-s {
        top: 2rem
    }

    .right-2-s {
        right: 2rem
    }

    .bottom-2-s {
        bottom: 2rem
    }

    .left-2-s {
        left: 2rem
    }

    .top--1-s {
        top: -1rem
    }

    .right--1-s {
        right: -1rem
    }

    .bottom--1-s {
        bottom: -1rem
    }

    .left--1-s {
        left: -1rem
    }

    .top--2-s {
        top: -2rem
    }

    .right--2-s {
        right: -2rem
    }

    .bottom--2-s {
        bottom: -2rem
    }

    .left--2-s {
        left: -2rem
    }

    .absolute--fill-s {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0
    }

    .cf-s:after,.cf-s:before {
        content: " ";
        display: table
    }

    .cf-s:after {
        clear: both
    }

    .cl-s {
        clear: left
    }

    .cr-s {
        clear: right
    }

    .cb-s {
        clear: both
    }

    .cn-s {
        clear: none
    }

    .dn-s {
        display: none
    }

    .di-s {
        display: inline
    }

    .db-s {
        display: block
    }

    .dib-s {
        display: inline-block
    }

    .dit-s {
        display: inline-table
    }

    .dt-s {
        display: table
    }

    .dtc-s {
        display: table-cell
    }

    .dt-row-s {
        display: table-row
    }

    .dt-row-group-s {
        display: table-row-group
    }

    .dt-column-s {
        display: table-column
    }

    .dt-column-group-s {
        display: table-column-group
    }

    .dt--fixed-s {
        table-layout: fixed;
        width: 100%
    }

    .flex-s {
        display: -webkit-box;
        display: flex
    }

    .inline-flex-s {
        display: -webkit-inline-box;
        display: inline-flex
    }

    .flex-auto-s {
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0
    }

    .flex-none-s {
        -webkit-box-flex: 0;
        flex: none
    }

    .flex-column-s {
        -webkit-box-orient: vertical;
        flex-direction: column
    }

    .flex-column-s,.flex-row-s {
        -webkit-box-direction: normal
    }

    .flex-row-s {
        -webkit-box-orient: horizontal;
        flex-direction: row
    }

    .flex-wrap-s {
        flex-wrap: wrap
    }

    .flex-nowrap-s {
        flex-wrap: nowrap
    }

    .flex-wrap-reverse-s {
        flex-wrap: wrap-reverse
    }

    .flex-column-reverse-s {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        flex-direction: column-reverse
    }

    .flex-row-reverse-s {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        flex-direction: row-reverse
    }

    .items-start-s {
        -webkit-box-align: start;
        align-items: flex-start
    }

    .items-end-s {
        -webkit-box-align: end;
        align-items: flex-end
    }

    .items-center-s {
        -webkit-box-align: center;
        align-items: center
    }

    .items-baseline-s {
        -webkit-box-align: baseline;
        align-items: baseline
    }

    .items-stretch-s {
        -webkit-box-align: stretch;
        align-items: stretch
    }

    .self-start-s {
        align-self: flex-start
    }

    .self-end-s {
        align-self: flex-end
    }

    .self-center-s {
        align-self: center
    }

    .self-baseline-s {
        align-self: baseline
    }

    .self-stretch-s {
        align-self: stretch
    }

    .justify-start-s {
        -webkit-box-pack: start;
        justify-content: flex-start
    }

    .justify-end-s {
        -webkit-box-pack: end;
        justify-content: flex-end
    }

    .justify-center-s {
        -webkit-box-pack: center;
        justify-content: center
    }

    .justify-between-s {
        -webkit-box-pack: justify;
        justify-content: space-between
    }

    .justify-around-s {
        justify-content: space-around
    }

    .content-start-s {
        align-content: flex-start
    }

    .content-end-s {
        align-content: flex-end
    }

    .content-center-s {
        align-content: center
    }

    .content-between-s {
        align-content: space-between
    }

    .content-around-s {
        align-content: space-around
    }

    .content-stretch-s {
        align-content: stretch
    }

    .order-0-s {
        -webkit-box-ordinal-group: 1;
        order: 0
    }

    .order-1-s {
        -webkit-box-ordinal-group: 2;
        order: 1
    }

    .order-2-s {
        -webkit-box-ordinal-group: 3;
        order: 2
    }

    .order-3-s {
        -webkit-box-ordinal-group: 4;
        order: 3
    }

    .order-4-s {
        -webkit-box-ordinal-group: 5;
        order: 4
    }

    .order-5-s {
        -webkit-box-ordinal-group: 6;
        order: 5
    }

    .order-6-s {
        -webkit-box-ordinal-group: 7;
        order: 6
    }

    .order-7-s {
        -webkit-box-ordinal-group: 8;
        order: 7
    }

    .order-8-s {
        -webkit-box-ordinal-group: 9;
        order: 8
    }

    .order-last-s {
        -webkit-box-ordinal-group: 100000;
        order: 99999
    }

    .flex-grow-0-s {
        -webkit-box-flex: 0;
        flex-grow: 0
    }

    .flex-grow-1-s {
        -webkit-box-flex: 1;
        flex-grow: 1
    }

    .flex-shrink-0-s {
        flex-shrink: 0
    }

    .flex-shrink-1-s {
        flex-shrink: 1
    }

    .fl-s {
        float: left
    }

    .fl-s,.fr-s {
        _display: inline
    }

    .fr-s {
        float: right
    }

    .fn-s {
        float: none
    }

    .i-s {
        font-style: italic
    }

    .fs-normal-s {
        font-style: normal
    }

    .h1-s {
        height: 1rem
    }

    .h2-s {
        height: 2rem
    }

    .h3-s {
        height: 4rem
    }

    .h4-s {
        height: 8rem
    }

    .h5-s {
        height: 16rem
    }

    .h-25-s {
        height: 25%
    }

    .h-50-s {
        height: 50%
    }

    .h-75-s {
        height: 75%
    }

    .h-100-s {
        height: 100%
    }

    .min-h-100-s {
        min-height: 100%
    }

    .vh-25-s {
        height: 25vh
    }

    .vh-50-s {
        height: 50vh
    }

    .vh-75-s {
        height: 75vh
    }

    .vh-100-s {
        height: 100vh
    }

    .min-vh-100-s {
        min-height: 100vh
    }

    .h-auto-s {
        height: auto
    }

    .h-inherit-s {
        height: inherit
    }

    .h-small-s {
        height: 2rem;
        box-sizing: border-box
    }

    .min-h-small-s {
        min-height: 2rem;
        box-sizing: border-box
    }

    .h-regular-s {
        height: 2.5rem;
        box-sizing: border-box
    }

    .min-h-regular-s {
        min-height: 2.5rem;
        box-sizing: border-box
    }

    .h-large-s {
        height: 3rem;
        box-sizing: border-box
    }

    .min-h-large-s {
        min-height: 3rem;
        box-sizing: border-box
    }

    .tracked-s {
        letter-spacing: .1em
    }

    .tracked-tight-s {
        letter-spacing: -.05em
    }

    .tracked-mega-s {
        letter-spacing: .25em
    }

    .lh-solid-s {
        line-height: 1
    }

    .lh-title-s {
        line-height: 1.25
    }

    .lh-copy-s {
        line-height: 1.5
    }

    .mw1-s {
        max-width: 1rem
    }

    .mw2-s {
        max-width: 2rem
    }

    .mw3-s {
        max-width: 4rem
    }

    .mw4-s {
        max-width: 8rem
    }

    .mw5-s {
        max-width: 16rem
    }

    .mw6-s {
        max-width: 32rem
    }

    .mw7-s {
        max-width: 48rem
    }

    .mw8-s {
        max-width: 64rem
    }

    .mw9-s {
        max-width: 96rem
    }

    .mw-none-s {
        max-width: none
    }

    .mw-100-s {
        max-width: 100%
    }

    .o-100-s {
        opacity: 1
    }

    .o-90-s {
        opacity: .9
    }

    .o-80-s {
        opacity: .8
    }

    .o-70-s {
        opacity: .7
    }

    .o-60-s {
        opacity: .6
    }

    .o-50-s {
        opacity: .5
    }

    .o-40-s {
        opacity: .4
    }

    .o-30-s {
        opacity: .3
    }

    .o-20-s {
        opacity: .2
    }

    .o-10-s {
        opacity: .1
    }

    .o-05-s {
        opacity: .05
    }

    .o-025-s {
        opacity: .025
    }

    .o-0-s {
        opacity: 0
    }

    .rotate-45-s {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .rotate-90-s {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .rotate-135-s {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg)
    }

    .rotate-180-s {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .rotate-225-s {
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg)
    }

    .rotate-270-s {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg)
    }

    .rotate-315-s {
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg)
    }

    .outline-s {
        outline: 1px solid
    }

    .outline-transparent-s {
        outline: 1px solid transparent
    }

    .outline-0-s {
        outline: 0
    }

    .overflow-visible-s {
        overflow: visible
    }

    .overflow-hidden-s {
        overflow: hidden
    }

    .overflow-scroll-s {
        overflow: scroll
    }

    .overflow-auto-s {
        overflow: auto
    }

    .overflow-x-visible-s {
        overflow-x: visible
    }

    .overflow-x-hidden-s {
        overflow-x: hidden
    }

    .overflow-x-scroll-s {
        overflow-x: scroll
    }

    .overflow-x-auto-s {
        overflow-x: auto
    }

    .overflow-y-visible-s {
        overflow-y: visible
    }

    .overflow-y-hidden-s {
        overflow-y: hidden
    }

    .overflow-y-scroll-s {
        overflow-y: scroll
    }

    .overflow-y-auto-s {
        overflow-y: auto
    }

    .static-s {
        position: static
    }

    .relative-s {
        position: relative
    }

    .absolute-s {
        position: absolute
    }

    .fixed-s {
        position: fixed
    }

    .sticky-s {
        position: -webkit-sticky;
        position: sticky
    }

    .strike-s {
        text-decoration: line-through
    }

    .underline-s {
        text-decoration: underline
    }

    .no-underline-s {
        text-decoration: none
    }

    .tl-s {
        text-align: left
    }

    .tr-s {
        text-align: right
    }

    .tc-s {
        text-align: center
    }

    .tj-s {
        text-align: justify
    }

    .ttc-s {
        text-transform: capitalize
    }

    .ttl-s {
        text-transform: lowercase
    }

    .ttu-s {
        text-transform: uppercase
    }

    .ttn-s {
        text-transform: none
    }

    .f1-s {
        font-size: 3rem
    }

    .f2-s {
        font-size: 2.25rem
    }

    .f3-s {
        font-size: 1.5rem
    }

    .f4-s {
        font-size: 1.25rem
    }

    .f5-s {
        font-size: 1rem
    }

    .f6-s {
        font-size: .875rem
    }

    .f7-s {
        font-size: .75rem
    }

    .measure-s {
        max-width: 30em
    }

    .measure-wide-s {
        max-width: 34em
    }

    .measure-narrow-s {
        max-width: 20em
    }

    .small-caps-s {
        font-variant: small-caps
    }

    .indent-s {
        text-indent: 1em;
        margin-top: 0;
        margin-bottom: 0
    }

    .truncate-s {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .t-heading-1-s {
        font-size: 3rem
    }

    .t-heading-1-s,.t-heading-2-s {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-2-s {
        font-size: 2.25rem
    }

    .t-heading-3-s {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        font-size: 1.75rem;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-4-s {
        font-size: 1.5rem
    }

    .t-heading-4-s,.t-heading-5-s {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-5-s {
        font-size: 1.25rem
    }

    .t-heading-6-s {
        font-size: 1.25rem
    }

    .t-body-s,.t-heading-6-s,body {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-body-s,body {
        font-size: 1rem
    }

    .t-small-s {
        font-size: .875rem
    }

    .t-mini-s,.t-small-s {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-mini-s {
        font-size: .75rem
    }

    .t-action-s {
        font-size: 1rem
    }

    .t-action--small-s,.t-action-s {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-action--small-s {
        font-size: .875rem
    }

    .t-action--large-s {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-code-s {
        font-family: Consolas,monaco,monospace;
        font-size: 1rem;
        text-transform: none;
        letter-spacing: 0
    }

    .normal-s,.t-code-s {
        font-weight: 400
    }

    .b-s {
        font-weight: 700
    }

    .fw1-s {
        font-weight: 100
    }

    .fw2-s {
        font-weight: 200
    }

    .fw3-s {
        font-weight: 300
    }

    .fw4-s {
        font-weight: 400
    }

    .fw5-s {
        font-weight: 500
    }

    .fw6-s {
        font-weight: 600
    }

    .fw7-s {
        font-weight: 700
    }

    .fw8-s {
        font-weight: 800
    }

    .fw9-s {
        font-weight: 900
    }

    .clip-s {
        position: fixed!important;
        _position: absolute!important;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px,1px,1px,1px)
    }

    .ws-normal-s {
        white-space: normal
    }

    .nowrap-s {
        white-space: nowrap
    }

    .pre-s {
        white-space: pre
    }

    .w1-s {
        width: 1rem
    }

    .w2-s {
        width: 2rem
    }

    .w3-s {
        width: 4rem
    }

    .w4-s {
        width: 8rem
    }

    .w5-s {
        width: 16rem
    }

    .w-10-s {
        width: 10%
    }

    .w-20-s {
        width: 20%
    }

    .w-25-s {
        width: 25%
    }

    .w-30-s {
        width: 30%
    }

    .w-33-s {
        width: 33%
    }

    .w-34-s {
        width: 34%
    }

    .w-40-s {
        width: 40%
    }

    .w-50-s {
        width: 50%
    }

    .w-60-s {
        width: 60%
    }

    .w-70-s {
        width: 70%
    }

    .w-75-s {
        width: 75%
    }

    .w-80-s {
        width: 80%
    }

    .w-90-s {
        width: 90%
    }

    .w-100-s {
        width: 100%
    }

    .w-third-s {
        width: 33.33333%
    }

    .w-two-thirds-s {
        width: 66.66667%
    }

    .w-auto-s {
        width: auto
    }

    .vw-10-s {
        width: 10vw
    }

    .vw-20-s {
        width: 20vw
    }

    .vw-25-s {
        width: 25vw
    }

    .vw-30-s {
        width: 30vw
    }

    .vw-33-s {
        width: 33vw
    }

    .vw-34-s {
        width: 34vw
    }

    .vw-40-s {
        width: 40vw
    }

    .vw-50-s {
        width: 50vw
    }

    .vw-60-s {
        width: 60vw
    }

    .vw-70-s {
        width: 70vw
    }

    .vw-75-s {
        width: 75vw
    }

    .vw-80-s {
        width: 80vw
    }

    .vw-90-s {
        width: 90vw
    }

    .vw-100-s {
        width: 100vw
    }

    .vw-third-s {
        width: 33.33333vw
    }

    .vw-two-thirds-s {
        width: 66.66667vw
    }
}

@media screen and (min-width: 40em) {
    .aspect-ratio-ns {
        height:0;
        position: relative
    }

    .aspect-ratio--16x9-ns {
        padding-bottom: 56.25%
    }

    .aspect-ratio--9x16-ns {
        padding-bottom: 177.77%
    }

    .aspect-ratio--4x3-ns {
        padding-bottom: 75%
    }

    .aspect-ratio--3x4-ns {
        padding-bottom: 133.33%
    }

    .aspect-ratio--6x4-ns {
        padding-bottom: 66.6%
    }

    .aspect-ratio--4x6-ns {
        padding-bottom: 150%
    }

    .aspect-ratio--8x5-ns {
        padding-bottom: 62.5%
    }

    .aspect-ratio--5x8-ns {
        padding-bottom: 160%
    }

    .aspect-ratio--7x5-ns {
        padding-bottom: 71.42%
    }

    .aspect-ratio--5x7-ns {
        padding-bottom: 140%
    }

    .aspect-ratio--1x1-ns {
        padding-bottom: 100%
    }

    .aspect-ratio--object-ns {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100
    }

    .cover-ns {
        background-size: cover!important
    }

    .contain-ns {
        background-size: contain!important
    }

    .bg-center-ns {
        background-position: 50%
    }

    .bg-center-ns,.bg-top-ns {
        background-repeat: no-repeat
    }

    .bg-top-ns {
        background-position: top
    }

    .bg-right-ns {
        background-position: 100%
    }

    .bg-bottom-ns,.bg-right-ns {
        background-repeat: no-repeat
    }

    .bg-bottom-ns {
        background-position: bottom
    }

    .bg-left-ns {
        background-repeat: no-repeat;
        background-position: 0
    }

    .ba-ns {
        border-style: solid;
        border-width: 1px
    }

    .bt-ns {
        border-top-style: solid;
        border-top-width: 1px
    }

    .br-ns {
        border-right-style: solid;
        border-right-width: 1px
    }

    .bb-ns {
        border-bottom-style: solid;
        border-bottom-width: 1px
    }

    .bl-ns {
        border-left-style: solid;
        border-left-width: 1px
    }

    .bn-ns {
        border-style: none;
        border-width: 0
    }

    .br0-ns {
        border-radius: 0
    }

    .br1-ns {
        border-radius: .125rem
    }

    .br2-ns {
        border-radius: .25rem
    }

    .br3-ns {
        border-radius: .5rem
    }

    .br4-ns {
        border-radius: 1rem
    }

    .br-100-ns {
        border-radius: 100%
    }

    .br-pill-ns {
        border-radius: 9999px
    }

    .br--bottom-ns {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .br--top-ns {
        border-bottom-right-radius: 0
    }

    .br--right-ns,.br--top-ns {
        border-bottom-left-radius: 0
    }

    .br--right-ns {
        border-top-left-radius: 0
    }

    .br--left-ns {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .b--dotted-ns {
        border-style: dotted
    }

    .b--dashed-ns {
        border-style: dashed
    }

    .b--solid-ns {
        border-style: solid
    }

    .b--none-ns {
        border-style: none
    }

    .bw0-ns {
        border-width: 0
    }

    .bw1-ns {
        border-width: .125rem
    }

    .bw2-ns {
        border-width: .25rem
    }

    .bw3-ns {
        border-width: .5rem
    }

    .bw4-ns {
        border-width: 1rem
    }

    .bw5-ns {
        border-width: 2rem
    }

    .bt-0-ns {
        border-top-width: 0
    }

    .br-0-ns {
        border-right-width: 0
    }

    .bb-0-ns {
        border-bottom-width: 0
    }

    .bl-0-ns {
        border-left-width: 0
    }

    .shadow-1-ns {
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2)
    }

    .shadow-2-ns {
        box-shadow: 0 0 8px 2px rgba(0,0,0,.2)
    }

    .shadow-3-ns {
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2)
    }

    .shadow-4-ns {
        box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2)
    }

    .shadow-5-ns {
        box-shadow: 4px 4px 8px 0 rgba(0,0,0,.2)
    }

    .pa0-ns {
        padding: 0
    }

    .ma0-ns,.na0-ns {
        margin: 0
    }

    .pl0-ns {
        padding-left: 0
    }

    .ml0-ns,.nl0-ns {
        margin-left: 0
    }

    .pr0-ns {
        padding-right: 0
    }

    .mr0-ns,.nr0-ns {
        margin-right: 0
    }

    .pt0-ns {
        padding-top: 0
    }

    .mt0-ns,.nt0-ns {
        margin-top: 0
    }

    .pb0-ns {
        padding-bottom: 0
    }

    .mb0-ns,.nb0-ns {
        margin-bottom: 0
    }

    .pv0-ns {
        padding-top: 0;
        padding-bottom: 0
    }

    .mv0-ns,.nv0-ns {
        margin-top: 0;
        margin-bottom: 0
    }

    .ph0-ns {
        padding-left: 0;
        padding-right: 0
    }

    .mh0-ns,.nh0-ns {
        margin-left: 0;
        margin-right: 0
    }

    .pa1-ns {
        padding: .125rem
    }

    .ma1-ns {
        margin: .125rem
    }

    .na1-ns {
        margin: -.125rem
    }

    .pl1-ns {
        padding-left: .125rem
    }

    .ml1-ns {
        margin-left: .125rem
    }

    .nl1-ns {
        margin-left: -.125rem
    }

    .pr1-ns {
        padding-right: .125rem
    }

    .mr1-ns {
        margin-right: .125rem
    }

    .nr1-ns {
        margin-right: -.125rem
    }

    .pt1-ns {
        padding-top: .125rem
    }

    .mt1-ns {
        margin-top: .125rem
    }

    .nt1-ns {
        margin-top: -.125rem
    }

    .pb1-ns {
        padding-bottom: .125rem
    }

    .mb1-ns {
        margin-bottom: .125rem
    }

    .nb1-ns {
        margin-bottom: -.125rem
    }

    .pv1-ns {
        padding-top: .125rem;
        padding-bottom: .125rem
    }

    .mv1-ns {
        margin-top: .125rem;
        margin-bottom: .125rem
    }

    .nv1-ns {
        margin-top: -.125rem;
        margin-bottom: -.125rem
    }

    .ph1-ns {
        padding-left: .125rem;
        padding-right: .125rem
    }

    .mh1-ns {
        margin-left: .125rem;
        margin-right: .125rem
    }

    .nh1-ns {
        margin-left: -.125rem;
        margin-right: -.125rem
    }

    .pa2-ns {
        padding: .25rem
    }

    .ma2-ns {
        margin: .25rem
    }

    .na2-ns {
        margin: -.25rem
    }

    .pl2-ns {
        padding-left: .25rem
    }

    .ml2-ns {
        margin-left: .25rem
    }

    .nl2-ns {
        margin-left: -.25rem
    }

    .pr2-ns {
        padding-right: .25rem
    }

    .mr2-ns {
        margin-right: .25rem
    }

    .nr2-ns {
        margin-right: -.25rem
    }

    .pt2-ns {
        padding-top: .25rem
    }

    .mt2-ns {
        margin-top: .25rem
    }

    .nt2-ns {
        margin-top: -.25rem
    }

    .pb2-ns {
        padding-bottom: .25rem
    }

    .mb2-ns {
        margin-bottom: .25rem
    }

    .nb2-ns {
        margin-bottom: -.25rem
    }

    .pv2-ns {
        padding-top: .25rem;
        padding-bottom: .25rem
    }

    .mv2-ns {
        margin-top: .25rem;
        margin-bottom: .25rem
    }

    .nv2-ns {
        margin-top: -.25rem;
        margin-bottom: -.25rem
    }

    .ph2-ns {
        padding-left: .25rem;
        padding-right: .25rem
    }

    .mh2-ns {
        margin-left: .25rem;
        margin-right: .25rem
    }

    .nh2-ns {
        margin-left: -.25rem;
        margin-right: -.25rem
    }

    .pa3-ns {
        padding: .5rem
    }

    .ma3-ns {
        margin: .5rem
    }

    .na3-ns {
        margin: -.5rem
    }

    .pl3-ns {
        padding-left: .5rem
    }

    .ml3-ns {
        margin-left: .5rem
    }

    .nl3-ns {
        margin-left: -.5rem
    }

    .pr3-ns {
        padding-right: .5rem
    }

    .mr3-ns {
        margin-right: .5rem
    }

    .nr3-ns {
        margin-right: -.5rem
    }

    .pt3-ns {
        padding-top: .5rem
    }

    .mt3-ns {
        margin-top: .5rem
    }

    .nt3-ns {
        margin-top: -.5rem
    }

    .pb3-ns {
        padding-bottom: .5rem
    }

    .mb3-ns {
        margin-bottom: .5rem
    }

    .nb3-ns {
        margin-bottom: -.5rem
    }

    .pv3-ns {
        padding-top: .5rem;
        padding-bottom: .5rem
    }

    .mv3-ns {
        margin-top: .5rem;
        margin-bottom: .5rem
    }

    .nv3-ns {
        margin-top: -.5rem;
        margin-bottom: -.5rem
    }

    .ph3-ns {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .mh3-ns {
        margin-left: .5rem;
        margin-right: .5rem
    }

    .nh3-ns {
        margin-left: -.5rem;
        margin-right: -.5rem
    }

    .pa4-ns {
        padding: .75rem
    }

    .ma4-ns {
        margin: .75rem
    }

    .na4-ns {
        margin: -.75rem
    }

    .pl4-ns {
        padding-left: .75rem
    }

    .ml4-ns {
        margin-left: .75rem
    }

    .nl4-ns {
        margin-left: -.75rem
    }

    .pr4-ns {
        padding-right: .75rem
    }

    .mr4-ns {
        margin-right: .75rem
    }

    .nr4-ns {
        margin-right: -.75rem
    }

    .pt4-ns {
        padding-top: .75rem
    }

    .mt4-ns {
        margin-top: .75rem
    }

    .nt4-ns {
        margin-top: -.75rem
    }

    .pb4-ns {
        padding-bottom: .75rem
    }

    .mb4-ns {
        margin-bottom: .75rem
    }

    .nb4-ns {
        margin-bottom: -.75rem
    }

    .pv4-ns {
        padding-top: .75rem;
        padding-bottom: .75rem
    }

    .mv4-ns {
        margin-top: .75rem;
        margin-bottom: .75rem
    }

    .nv4-ns {
        margin-top: -.75rem;
        margin-bottom: -.75rem
    }

    .ph4-ns {
        padding-left: .75rem;
        padding-right: .75rem
    }

    .mh4-ns {
        margin-left: .75rem;
        margin-right: .75rem
    }

    .nh4-ns {
        margin-left: -.75rem;
        margin-right: -.75rem
    }

    .pa5-ns {
        padding: 1rem
    }

    .ma5-ns {
        margin: 1rem
    }

    .na5-ns {
        margin: -1rem
    }

    .pl5-ns {
        padding-left: 1rem
    }

    .ml5-ns {
        margin-left: 1rem
    }

    .nl5-ns {
        margin-left: -1rem
    }

    .pr5-ns {
        padding-right: 1rem
    }

    .mr5-ns {
        margin-right: 1rem
    }

    .nr5-ns {
        margin-right: -1rem
    }

    .pt5-ns {
        padding-top: 1rem
    }

    .mt5-ns {
        margin-top: 1rem
    }

    .nt5-ns {
        margin-top: -1rem
    }

    .pb5-ns {
        padding-bottom: 1rem
    }

    .mb5-ns {
        margin-bottom: 1rem
    }

    .nb5-ns {
        margin-bottom: -1rem
    }

    .pv5-ns {
        padding-top: 1rem;
        padding-bottom: 1rem
    }

    .mv5-ns {
        margin-top: 1rem;
        margin-bottom: 1rem
    }

    .nv5-ns {
        margin-top: -1rem;
        margin-bottom: -1rem
    }

    .ph5-ns {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .mh5-ns {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .nh5-ns {
        margin-left: -1rem;
        margin-right: -1rem
    }

    .pa6-ns {
        padding: 1.5rem
    }

    .ma6-ns {
        margin: 1.5rem
    }

    .na6-ns {
        margin: -1.5rem
    }

    .pl6-ns {
        padding-left: 1.5rem
    }

    .ml6-ns {
        margin-left: 1.5rem
    }

    .nl6-ns {
        margin-left: -1.5rem
    }

    .pr6-ns {
        padding-right: 1.5rem
    }

    .mr6-ns {
        margin-right: 1.5rem
    }

    .nr6-ns {
        margin-right: -1.5rem
    }

    .pt6-ns {
        padding-top: 1.5rem
    }

    .mt6-ns {
        margin-top: 1.5rem
    }

    .nt6-ns {
        margin-top: -1.5rem
    }

    .pb6-ns {
        padding-bottom: 1.5rem
    }

    .mb6-ns {
        margin-bottom: 1.5rem
    }

    .nb6-ns {
        margin-bottom: -1.5rem
    }

    .pv6-ns {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem
    }

    .mv6-ns {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem
    }

    .nv6-ns {
        margin-top: -1.5rem;
        margin-bottom: -1.5rem
    }

    .ph6-ns {
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }

    .mh6-ns {
        margin-left: 1.5rem;
        margin-right: 1.5rem
    }

    .nh6-ns {
        margin-left: -1.5rem;
        margin-right: -1.5rem
    }

    .pa7-ns {
        padding: 2rem
    }

    .ma7-ns {
        margin: 2rem
    }

    .na7-ns {
        margin: -2rem
    }

    .pl7-ns {
        padding-left: 2rem
    }

    .ml7-ns {
        margin-left: 2rem
    }

    .nl7-ns {
        margin-left: -2rem
    }

    .pr7-ns {
        padding-right: 2rem
    }

    .mr7-ns {
        margin-right: 2rem
    }

    .nr7-ns {
        margin-right: -2rem
    }

    .pt7-ns {
        padding-top: 2rem
    }

    .mt7-ns {
        margin-top: 2rem
    }

    .nt7-ns {
        margin-top: -2rem
    }

    .pb7-ns {
        padding-bottom: 2rem
    }

    .mb7-ns {
        margin-bottom: 2rem
    }

    .nb7-ns {
        margin-bottom: -2rem
    }

    .pv7-ns {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .mv7-ns {
        margin-top: 2rem;
        margin-bottom: 2rem
    }

    .nv7-ns {
        margin-top: -2rem;
        margin-bottom: -2rem
    }

    .ph7-ns {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .mh7-ns {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .nh7-ns {
        margin-left: -2rem;
        margin-right: -2rem
    }

    .pa8-ns {
        padding: 3rem
    }

    .ma8-ns {
        margin: 3rem
    }

    .na8-ns {
        margin: -3rem
    }

    .pl8-ns {
        padding-left: 3rem
    }

    .ml8-ns {
        margin-left: 3rem
    }

    .nl8-ns {
        margin-left: -3rem
    }

    .pr8-ns {
        padding-right: 3rem
    }

    .mr8-ns {
        margin-right: 3rem
    }

    .nr8-ns {
        margin-right: -3rem
    }

    .pt8-ns {
        padding-top: 3rem
    }

    .mt8-ns {
        margin-top: 3rem
    }

    .nt8-ns {
        margin-top: -3rem
    }

    .pb8-ns {
        padding-bottom: 3rem
    }

    .mb8-ns {
        margin-bottom: 3rem
    }

    .nb8-ns {
        margin-bottom: -3rem
    }

    .pv8-ns {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .mv8-ns {
        margin-top: 3rem;
        margin-bottom: 3rem
    }

    .nv8-ns {
        margin-top: -3rem;
        margin-bottom: -3rem
    }

    .ph8-ns {
        padding-left: 3rem;
        padding-right: 3rem
    }

    .mh8-ns {
        margin-left: 3rem;
        margin-right: 3rem
    }

    .nh8-ns {
        margin-left: -3rem;
        margin-right: -3rem
    }

    .pa9-ns {
        padding: 4rem
    }

    .ma9-ns {
        margin: 4rem
    }

    .na9-ns {
        margin: -4rem
    }

    .pl9-ns {
        padding-left: 4rem
    }

    .ml9-ns {
        margin-left: 4rem
    }

    .nl9-ns {
        margin-left: -4rem
    }

    .pr9-ns {
        padding-right: 4rem
    }

    .mr9-ns {
        margin-right: 4rem
    }

    .nr9-ns {
        margin-right: -4rem
    }

    .pt9-ns {
        padding-top: 4rem
    }

    .mt9-ns {
        margin-top: 4rem
    }

    .nt9-ns {
        margin-top: -4rem
    }

    .pb9-ns {
        padding-bottom: 4rem
    }

    .mb9-ns {
        margin-bottom: 4rem
    }

    .nb9-ns {
        margin-bottom: -4rem
    }

    .pv9-ns {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .mv9-ns {
        margin-top: 4rem;
        margin-bottom: 4rem
    }

    .nv9-ns {
        margin-top: -4rem;
        margin-bottom: -4rem
    }

    .ph9-ns {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .mh9-ns {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .nh9-ns {
        margin-left: -4rem;
        margin-right: -4rem
    }

    .pa10-ns {
        padding: 8rem
    }

    .ma10-ns {
        margin: 8rem
    }

    .na10-ns {
        margin: -8rem
    }

    .pl10-ns {
        padding-left: 8rem
    }

    .ml10-ns {
        margin-left: 8rem
    }

    .nl10-ns {
        margin-left: -8rem
    }

    .pr10-ns {
        padding-right: 8rem
    }

    .mr10-ns {
        margin-right: 8rem
    }

    .nr10-ns {
        margin-right: -8rem
    }

    .pt10-ns {
        padding-top: 8rem
    }

    .mt10-ns {
        margin-top: 8rem
    }

    .nt10-ns {
        margin-top: -8rem
    }

    .pb10-ns {
        padding-bottom: 8rem
    }

    .mb10-ns {
        margin-bottom: 8rem
    }

    .nb10-ns {
        margin-bottom: -8rem
    }

    .pv10-ns {
        padding-top: 8rem;
        padding-bottom: 8rem
    }

    .mv10-ns {
        margin-top: 8rem;
        margin-bottom: 8rem
    }

    .nv10-ns {
        margin-top: -8rem;
        margin-bottom: -8rem
    }

    .ph10-ns {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .mh10-ns {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .nh10-ns {
        margin-left: -8rem;
        margin-right: -8rem
    }

    .pa11-ns {
        padding: 16rem
    }

    .ma11-ns {
        margin: 16rem
    }

    .na11-ns {
        margin: -16rem
    }

    .pl11-ns {
        padding-left: 16rem
    }

    .ml11-ns {
        margin-left: 16rem
    }

    .nl11-ns {
        margin-left: -16rem
    }

    .pr11-ns {
        padding-right: 16rem
    }

    .mr11-ns {
        margin-right: 16rem
    }

    .nr11-ns {
        margin-right: -16rem
    }

    .pt11-ns {
        padding-top: 16rem
    }

    .mt11-ns {
        margin-top: 16rem
    }

    .nt11-ns {
        margin-top: -16rem
    }

    .pb11-ns {
        padding-bottom: 16rem
    }

    .mb11-ns {
        margin-bottom: 16rem
    }

    .nb11-ns {
        margin-bottom: -16rem
    }

    .pv11-ns {
        padding-top: 16rem;
        padding-bottom: 16rem
    }

    .mv11-ns {
        margin-top: 16rem;
        margin-bottom: 16rem
    }

    .nv11-ns {
        margin-top: -16rem;
        margin-bottom: -16rem
    }

    .ph11-ns {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .mh11-ns {
        margin-left: 16rem;
        margin-right: 16rem
    }

    .nh11-ns {
        margin-left: -16rem;
        margin-right: -16rem
    }

    .top-0-ns {
        top: 0
    }

    .right-0-ns {
        right: 0
    }

    .bottom-0-ns {
        bottom: 0
    }

    .left-0-ns {
        left: 0
    }

    .top-1-ns {
        top: 1rem
    }

    .right-1-ns {
        right: 1rem
    }

    .bottom-1-ns {
        bottom: 1rem
    }

    .left-1-ns {
        left: 1rem
    }

    .top-2-ns {
        top: 2rem
    }

    .right-2-ns {
        right: 2rem
    }

    .bottom-2-ns {
        bottom: 2rem
    }

    .left-2-ns {
        left: 2rem
    }

    .top--1-ns {
        top: -1rem
    }

    .right--1-ns {
        right: -1rem
    }

    .bottom--1-ns {
        bottom: -1rem
    }

    .left--1-ns {
        left: -1rem
    }

    .top--2-ns {
        top: -2rem
    }

    .right--2-ns {
        right: -2rem
    }

    .bottom--2-ns {
        bottom: -2rem
    }

    .left--2-ns {
        left: -2rem
    }

    .absolute--fill-ns {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0
    }

    .cf-ns:after,.cf-ns:before {
        content: " ";
        display: table
    }

    .cf-ns:after {
        clear: both
    }

    .cl-ns {
        clear: left
    }

    .cr-ns {
        clear: right
    }

    .cb-ns {
        clear: both
    }

    .cn-ns {
        clear: none
    }

    .dn-ns {
        display: none
    }

    .di-ns {
        display: inline
    }

    .db-ns {
        display: block
    }

    .dib-ns {
        display: inline-block
    }

    .dit-ns {
        display: inline-table
    }

    .dt-ns {
        display: table
    }

    .dtc-ns {
        display: table-cell
    }

    .dt-row-ns {
        display: table-row
    }

    .dt-row-group-ns {
        display: table-row-group
    }

    .dt-column-ns {
        display: table-column
    }

    .dt-column-group-ns {
        display: table-column-group
    }

    .dt--fixed-ns {
        table-layout: fixed;
        width: 100%
    }

    .flex-ns {
        display: -webkit-box;
        display: flex
    }

    .inline-flex-ns {
        display: -webkit-inline-box;
        display: inline-flex
    }

    .flex-auto-ns {
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0
    }

    .flex-none-ns {
        -webkit-box-flex: 0;
        flex: none
    }

    .flex-column-ns {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column
    }

    .flex-row-ns {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row
    }

    .flex-wrap-ns {
        flex-wrap: wrap
    }

    .flex-nowrap-ns {
        flex-wrap: nowrap
    }

    .flex-wrap-reverse-ns {
        flex-wrap: wrap-reverse
    }

    .flex-column-reverse-ns {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        flex-direction: column-reverse
    }

    .flex-row-reverse-ns {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        flex-direction: row-reverse
    }

    .items-start-ns {
        -webkit-box-align: start;
        align-items: flex-start
    }

    .items-end-ns {
        -webkit-box-align: end;
        align-items: flex-end
    }

    .items-center-ns {
        -webkit-box-align: center;
        align-items: center
    }

    .items-baseline-ns {
        -webkit-box-align: baseline;
        align-items: baseline
    }

    .items-stretch-ns {
        -webkit-box-align: stretch;
        align-items: stretch
    }

    .self-start-ns {
        align-self: flex-start
    }

    .self-end-ns {
        align-self: flex-end
    }

    .self-center-ns {
        align-self: center
    }

    .self-baseline-ns {
        align-self: baseline
    }

    .self-stretch-ns {
        align-self: stretch
    }

    .justify-start-ns {
        -webkit-box-pack: start;
        justify-content: flex-start
    }

    .justify-end-ns {
        -webkit-box-pack: end;
        justify-content: flex-end
    }

    .justify-center-ns {
        -webkit-box-pack: center;
        justify-content: center
    }

    .justify-between-ns {
        -webkit-box-pack: justify;
        justify-content: space-between
    }

    .justify-around-ns {
        justify-content: space-around
    }

    .content-start-ns {
        align-content: flex-start
    }

    .content-end-ns {
        align-content: flex-end
    }

    .content-center-ns {
        align-content: center
    }

    .content-between-ns {
        align-content: space-between
    }

    .content-around-ns {
        align-content: space-around
    }

    .content-stretch-ns {
        align-content: stretch
    }

    .order-0-ns {
        -webkit-box-ordinal-group: 1;
        order: 0
    }

    .order-1-ns {
        -webkit-box-ordinal-group: 2;
        order: 1
    }

    .order-2-ns {
        -webkit-box-ordinal-group: 3;
        order: 2
    }

    .order-3-ns {
        -webkit-box-ordinal-group: 4;
        order: 3
    }

    .order-4-ns {
        -webkit-box-ordinal-group: 5;
        order: 4
    }

    .order-5-ns {
        -webkit-box-ordinal-group: 6;
        order: 5
    }

    .order-6-ns {
        -webkit-box-ordinal-group: 7;
        order: 6
    }

    .order-7-ns {
        -webkit-box-ordinal-group: 8;
        order: 7
    }

    .order-8-ns {
        -webkit-box-ordinal-group: 9;
        order: 8
    }

    .order-last-ns {
        -webkit-box-ordinal-group: 100000;
        order: 99999
    }

    .flex-grow-0-ns {
        -webkit-box-flex: 0;
        flex-grow: 0
    }

    .flex-grow-1-ns {
        -webkit-box-flex: 1;
        flex-grow: 1
    }

    .flex-shrink-0-ns {
        flex-shrink: 0
    }

    .flex-shrink-1-ns {
        flex-shrink: 1
    }

    .fl-ns {
        float: left
    }

    .fl-ns,.fr-ns {
        _display: inline
    }

    .fr-ns {
        float: right
    }

    .fn-ns {
        float: none
    }

    .i-ns {
        font-style: italic
    }

    .fs-normal-ns {
        font-style: normal
    }

    .h1-ns {
        height: 1rem
    }

    .h2-ns {
        height: 2rem
    }

    .h3-ns {
        height: 4rem
    }

    .h4-ns {
        height: 8rem
    }

    .h5-ns {
        height: 16rem
    }

    .h-25-ns {
        height: 25%
    }

    .h-50-ns {
        height: 50%
    }

    .h-75-ns {
        height: 75%
    }

    .h-100-ns {
        height: 100%
    }

    .min-h-100-ns {
        min-height: 100%
    }

    .vh-25-ns {
        height: 25vh
    }

    .vh-50-ns {
        height: 50vh
    }

    .vh-75-ns {
        height: 75vh
    }

    .vh-100-ns {
        height: 100vh
    }

    .min-vh-100-ns {
        min-height: 100vh
    }

    .h-auto-ns {
        height: auto
    }

    .h-inherit-ns {
        height: inherit
    }

    .h-small-ns {
        height: 2rem;
        box-sizing: border-box
    }

    .min-h-small-ns {
        min-height: 2rem;
        box-sizing: border-box
    }

    .h-regular-ns {
        height: 2.5rem;
        box-sizing: border-box
    }

    .min-h-regular-ns {
        min-height: 2.5rem;
        box-sizing: border-box
    }

    .h-large-ns {
        height: 3rem;
        box-sizing: border-box
    }

    .min-h-large-ns {
        min-height: 3rem;
        box-sizing: border-box
    }

    .tracked-ns {
        letter-spacing: .1em
    }

    .tracked-tight-ns {
        letter-spacing: -.05em
    }

    .tracked-mega-ns {
        letter-spacing: .25em
    }

    .lh-solid-ns {
        line-height: 1
    }

    .lh-title-ns {
        line-height: 1.25
    }

    .lh-copy-ns {
        line-height: 1.5
    }

    .mw1-ns {
        max-width: 1rem
    }

    .mw2-ns {
        max-width: 2rem
    }

    .mw3-ns {
        max-width: 4rem
    }

    .mw4-ns {
        max-width: 8rem
    }

    .mw5-ns {
        max-width: 16rem
    }

    .mw6-ns {
        max-width: 32rem
    }

    .mw7-ns {
        max-width: 48rem
    }

    .mw8-ns {
        max-width: 64rem
    }

    .mw9-ns {
        max-width: 96rem
    }

    .mw-none-ns {
        max-width: none
    }

    .mw-100-ns {
        max-width: 100%
    }

    .o-100-ns {
        opacity: 1
    }

    .o-90-ns {
        opacity: .9
    }

    .o-80-ns {
        opacity: .8
    }

    .o-70-ns {
        opacity: .7
    }

    .o-60-ns {
        opacity: .6
    }

    .o-50-ns {
        opacity: .5
    }

    .o-40-ns {
        opacity: .4
    }

    .o-30-ns {
        opacity: .3
    }

    .o-20-ns {
        opacity: .2
    }

    .o-10-ns {
        opacity: .1
    }

    .o-05-ns {
        opacity: .05
    }

    .o-025-ns {
        opacity: .025
    }

    .o-0-ns {
        opacity: 0
    }

    .rotate-45-ns {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .rotate-90-ns {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .rotate-135-ns {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg)
    }

    .rotate-180-ns {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .rotate-225-ns {
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg)
    }

    .rotate-270-ns {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg)
    }

    .rotate-315-ns {
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg)
    }

    .outline-ns {
        outline: 1px solid
    }

    .outline-transparent-ns {
        outline: 1px solid transparent
    }

    .outline-0-ns {
        outline: 0
    }

    .overflow-visible-ns {
        overflow: visible
    }

    .overflow-hidden-ns {
        overflow: hidden
    }

    .overflow-scroll-ns {
        overflow: scroll
    }

    .overflow-auto-ns {
        overflow: auto
    }

    .overflow-x-visible-ns {
        overflow-x: visible
    }

    .overflow-x-hidden-ns {
        overflow-x: hidden
    }

    .overflow-x-scroll-ns {
        overflow-x: scroll
    }

    .overflow-x-auto-ns {
        overflow-x: auto
    }

    .overflow-y-visible-ns {
        overflow-y: visible
    }

    .overflow-y-hidden-ns {
        overflow-y: hidden
    }

    .overflow-y-scroll-ns {
        overflow-y: scroll
    }

    .overflow-y-auto-ns {
        overflow-y: auto
    }

    .static-ns {
        position: static
    }

    .relative-ns {
        position: relative
    }

    .absolute-ns {
        position: absolute
    }

    .fixed-ns {
        position: fixed
    }

    .sticky-ns {
        position: -webkit-sticky;
        position: sticky
    }

    .strike-ns {
        text-decoration: line-through
    }

    .underline-ns {
        text-decoration: underline
    }

    .no-underline-ns {
        text-decoration: none
    }

    .tl-ns {
        text-align: left
    }

    .tr-ns {
        text-align: right
    }

    .tc-ns {
        text-align: center
    }

    .tj-ns {
        text-align: justify
    }

    .ttc-ns {
        text-transform: capitalize
    }

    .ttl-ns {
        text-transform: lowercase
    }

    .ttu-ns {
        text-transform: uppercase
    }

    .ttn-ns {
        text-transform: none
    }

    .f1-ns {
        font-size: 3rem
    }

    .f2-ns {
        font-size: 2.25rem
    }

    .f3-ns {
        font-size: 1.5rem
    }

    .f4-ns {
        font-size: 1.25rem
    }

    .f5-ns {
        font-size: 1rem
    }

    .f6-ns {
        font-size: .875rem
    }

    .f7-ns {
        font-size: .75rem
    }

    .measure-ns {
        max-width: 30em
    }

    .measure-wide-ns {
        max-width: 34em
    }

    .measure-narrow-ns {
        max-width: 20em
    }

    .small-caps-ns {
        font-variant: small-caps
    }

    .indent-ns {
        text-indent: 1em;
        margin-top: 0;
        margin-bottom: 0
    }

    .truncate-ns {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .t-heading-1-ns {
        font-size: 3rem
    }

    .t-heading-1-ns,.t-heading-2-ns {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-2-ns {
        font-size: 2.25rem
    }

    .t-heading-3-ns {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        font-size: 1.75rem;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-4-ns {
        font-size: 1.5rem
    }

    .t-heading-4-ns,.t-heading-5-ns {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-5-ns {
        font-size: 1.25rem
    }

    .t-heading-6-ns {
        font-size: 1.25rem
    }

    .t-body-ns,.t-heading-6-ns,body {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-body-ns,body {
        font-size: 1rem
    }

    .t-small-ns {
        font-size: .875rem
    }

    .t-mini-ns,.t-small-ns {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-mini-ns {
        font-size: .75rem
    }

    .t-action-ns {
        font-size: 1rem
    }

    .t-action--small-ns,.t-action-ns {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-action--small-ns {
        font-size: .875rem
    }

    .t-action--large-ns {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-code-ns {
        font-family: Consolas,monaco,monospace;
        font-size: 1rem;
        text-transform: none;
        letter-spacing: 0
    }

    .normal-ns,.t-code-ns {
        font-weight: 400
    }

    .b-ns {
        font-weight: 700
    }

    .fw1-ns {
        font-weight: 100
    }

    .fw2-ns {
        font-weight: 200
    }

    .fw3-ns {
        font-weight: 300
    }

    .fw4-ns {
        font-weight: 400
    }

    .fw5-ns {
        font-weight: 500
    }

    .fw6-ns {
        font-weight: 600
    }

    .fw7-ns {
        font-weight: 700
    }

    .fw8-ns {
        font-weight: 800
    }

    .fw9-ns {
        font-weight: 900
    }

    .clip-ns {
        position: fixed!important;
        _position: absolute!important;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px,1px,1px,1px)
    }

    .ws-normal-ns {
        white-space: normal
    }

    .nowrap-ns {
        white-space: nowrap
    }

    .pre-ns {
        white-space: pre
    }

    .w1-ns {
        width: 1rem
    }

    .w2-ns {
        width: 2rem
    }

    .w3-ns {
        width: 4rem
    }

    .w4-ns {
        width: 8rem
    }

    .w5-ns {
        width: 16rem
    }

    .w-10-ns {
        width: 10%
    }

    .w-20-ns {
        width: 20%
    }

    .w-25-ns {
        width: 25%
    }

    .w-30-ns {
        width: 30%
    }

    .w-33-ns {
        width: 33%
    }

    .w-34-ns {
        width: 34%
    }

    .w-40-ns {
        width: 40%
    }

    .w-50-ns {
        width: 50%
    }

    .w-60-ns {
        width: 60%
    }

    .w-70-ns {
        width: 70%
    }

    .w-75-ns {
        width: 75%
    }

    .w-80-ns {
        width: 80%
    }

    .w-90-ns {
        width: 90%
    }

    .w-100-ns {
        width: 100%
    }

    .w-third-ns {
        width: 33.33333%
    }

    .w-two-thirds-ns {
        width: 66.66667%
    }

    .w-auto-ns {
        width: auto
    }

    .vw-10-ns {
        width: 10vw
    }

    .vw-20-ns {
        width: 20vw
    }

    .vw-25-ns {
        width: 25vw
    }

    .vw-30-ns {
        width: 30vw
    }

    .vw-33-ns {
        width: 33vw
    }

    .vw-34-ns {
        width: 34vw
    }

    .vw-40-ns {
        width: 40vw
    }

    .vw-50-ns {
        width: 50vw
    }

    .vw-60-ns {
        width: 60vw
    }

    .vw-70-ns {
        width: 70vw
    }

    .vw-75-ns {
        width: 75vw
    }

    .vw-80-ns {
        width: 80vw
    }

    .vw-90-ns {
        width: 90vw
    }

    .vw-100-ns {
        width: 100vw
    }

    .vw-third-ns {
        width: 33.33333vw
    }

    .vw-two-thirds-ns {
        width: 66.66667vw
    }

    .aspect-ratio-m {
        height: 0;
        position: relative
    }

    .aspect-ratio--16x9-m {
        padding-bottom: 56.25%
    }

    .aspect-ratio--9x16-m {
        padding-bottom: 177.77%
    }

    .aspect-ratio--4x3-m {
        padding-bottom: 75%
    }

    .aspect-ratio--3x4-m {
        padding-bottom: 133.33%
    }

    .aspect-ratio--6x4-m {
        padding-bottom: 66.6%
    }

    .aspect-ratio--4x6-m {
        padding-bottom: 150%
    }

    .aspect-ratio--8x5-m {
        padding-bottom: 62.5%
    }

    .aspect-ratio--5x8-m {
        padding-bottom: 160%
    }

    .aspect-ratio--7x5-m {
        padding-bottom: 71.42%
    }

    .aspect-ratio--5x7-m {
        padding-bottom: 140%
    }

    .aspect-ratio--1x1-m {
        padding-bottom: 100%
    }

    .aspect-ratio--object-m {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100
    }

    .cover-m {
        background-size: cover!important
    }

    .contain-m {
        background-size: contain!important
    }

    .bg-center-m {
        background-position: 50%
    }

    .bg-center-m,.bg-top-m {
        background-repeat: no-repeat
    }

    .bg-top-m {
        background-position: top
    }

    .bg-right-m {
        background-position: 100%
    }

    .bg-bottom-m,.bg-right-m {
        background-repeat: no-repeat
    }

    .bg-bottom-m {
        background-position: bottom
    }

    .bg-left-m {
        background-repeat: no-repeat;
        background-position: 0
    }

    .ba-m {
        border-style: solid;
        border-width: 1px
    }

    .bt-m {
        border-top-style: solid;
        border-top-width: 1px
    }

    .br-m {
        border-right-style: solid;
        border-right-width: 1px
    }

    .bb-m {
        border-bottom-style: solid;
        border-bottom-width: 1px
    }

    .bl-m {
        border-left-style: solid;
        border-left-width: 1px
    }

    .bn-m {
        border-style: none;
        border-width: 0
    }

    .br0-m {
        border-radius: 0
    }

    .br1-m {
        border-radius: .125rem
    }

    .br2-m {
        border-radius: .25rem
    }

    .br3-m {
        border-radius: .5rem
    }

    .br4-m {
        border-radius: 1rem
    }

    .br-100-m {
        border-radius: 100%
    }

    .br-pill-m {
        border-radius: 9999px
    }

    .br--bottom-m {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .br--top-m {
        border-bottom-right-radius: 0
    }

    .br--right-m,.br--top-m {
        border-bottom-left-radius: 0
    }

    .br--right-m {
        border-top-left-radius: 0
    }

    .br--left-m {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .b--dotted-m {
        border-style: dotted
    }

    .b--dashed-m {
        border-style: dashed
    }

    .b--solid-m {
        border-style: solid
    }

    .b--none-m {
        border-style: none
    }

    .bw0-m {
        border-width: 0
    }

    .bw1-m {
        border-width: .125rem
    }

    .bw2-m {
        border-width: .25rem
    }

    .bw3-m {
        border-width: .5rem
    }

    .bw4-m {
        border-width: 1rem
    }

    .bw5-m {
        border-width: 2rem
    }

    .bt-0-m {
        border-top-width: 0
    }

    .br-0-m {
        border-right-width: 0
    }

    .bb-0-m {
        border-bottom-width: 0
    }

    .bl-0-m {
        border-left-width: 0
    }

    .shadow-1-m {
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2)
    }

    .shadow-2-m {
        box-shadow: 0 0 8px 2px rgba(0,0,0,.2)
    }

    .shadow-3-m {
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2)
    }

    .shadow-4-m {
        box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2)
    }

    .shadow-5-m {
        box-shadow: 4px 4px 8px 0 rgba(0,0,0,.2)
    }

    .pa0-m {
        padding: 0
    }

    .ma0-m,.na0-m {
        margin: 0
    }

    .pl0-m {
        padding-left: 0
    }

    .ml0-m,.nl0-m {
        margin-left: 0
    }

    .pr0-m {
        padding-right: 0
    }

    .mr0-m,.nr0-m {
        margin-right: 0
    }

    .pt0-m {
        padding-top: 0
    }

    .mt0-m,.nt0-m {
        margin-top: 0
    }

    .pb0-m {
        padding-bottom: 0
    }

    .mb0-m,.nb0-m {
        margin-bottom: 0
    }

    .pv0-m {
        padding-top: 0;
        padding-bottom: 0
    }

    .mv0-m,.nv0-m {
        margin-top: 0;
        margin-bottom: 0
    }

    .ph0-m {
        padding-left: 0;
        padding-right: 0
    }

    .mh0-m,.nh0-m {
        margin-left: 0;
        margin-right: 0
    }

    .pa1-m {
        padding: .125rem
    }

    .ma1-m {
        margin: .125rem
    }

    .na1-m {
        margin: -.125rem
    }

    .pl1-m {
        padding-left: .125rem
    }

    .ml1-m {
        margin-left: .125rem
    }

    .nl1-m {
        margin-left: -.125rem
    }

    .pr1-m {
        padding-right: .125rem
    }

    .mr1-m {
        margin-right: .125rem
    }

    .nr1-m {
        margin-right: -.125rem
    }

    .pt1-m {
        padding-top: .125rem
    }

    .mt1-m {
        margin-top: .125rem
    }

    .nt1-m {
        margin-top: -.125rem
    }

    .pb1-m {
        padding-bottom: .125rem
    }

    .mb1-m {
        margin-bottom: .125rem
    }

    .nb1-m {
        margin-bottom: -.125rem
    }

    .pv1-m {
        padding-top: .125rem;
        padding-bottom: .125rem
    }

    .mv1-m {
        margin-top: .125rem;
        margin-bottom: .125rem
    }

    .nv1-m {
        margin-top: -.125rem;
        margin-bottom: -.125rem
    }

    .ph1-m {
        padding-left: .125rem;
        padding-right: .125rem
    }

    .mh1-m {
        margin-left: .125rem;
        margin-right: .125rem
    }

    .nh1-m {
        margin-left: -.125rem;
        margin-right: -.125rem
    }

    .pa2-m {
        padding: .25rem
    }

    .ma2-m {
        margin: .25rem
    }

    .na2-m {
        margin: -.25rem
    }

    .pl2-m {
        padding-left: .25rem
    }

    .ml2-m {
        margin-left: .25rem
    }

    .nl2-m {
        margin-left: -.25rem
    }

    .pr2-m {
        padding-right: .25rem
    }

    .mr2-m {
        margin-right: .25rem
    }

    .nr2-m {
        margin-right: -.25rem
    }

    .pt2-m {
        padding-top: .25rem
    }

    .mt2-m {
        margin-top: .25rem
    }

    .nt2-m {
        margin-top: -.25rem
    }

    .pb2-m {
        padding-bottom: .25rem
    }

    .mb2-m {
        margin-bottom: .25rem
    }

    .nb2-m {
        margin-bottom: -.25rem
    }

    .pv2-m {
        padding-top: .25rem;
        padding-bottom: .25rem
    }

    .mv2-m {
        margin-top: .25rem;
        margin-bottom: .25rem
    }

    .nv2-m {
        margin-top: -.25rem;
        margin-bottom: -.25rem
    }

    .ph2-m {
        padding-left: .25rem;
        padding-right: .25rem
    }

    .mh2-m {
        margin-left: .25rem;
        margin-right: .25rem
    }

    .nh2-m {
        margin-left: -.25rem;
        margin-right: -.25rem
    }

    .pa3-m {
        padding: .5rem
    }

    .ma3-m {
        margin: .5rem
    }

    .na3-m {
        margin: -.5rem
    }

    .pl3-m {
        padding-left: .5rem
    }

    .ml3-m {
        margin-left: .5rem
    }

    .nl3-m {
        margin-left: -.5rem
    }

    .pr3-m {
        padding-right: .5rem
    }

    .mr3-m {
        margin-right: .5rem
    }

    .nr3-m {
        margin-right: -.5rem
    }

    .pt3-m {
        padding-top: .5rem
    }

    .mt3-m {
        margin-top: .5rem
    }

    .nt3-m {
        margin-top: -.5rem
    }

    .pb3-m {
        padding-bottom: .5rem
    }

    .mb3-m {
        margin-bottom: .5rem
    }

    .nb3-m {
        margin-bottom: -.5rem
    }

    .pv3-m {
        padding-top: .5rem;
        padding-bottom: .5rem
    }

    .mv3-m {
        margin-top: .5rem;
        margin-bottom: .5rem
    }

    .nv3-m {
        margin-top: -.5rem;
        margin-bottom: -.5rem
    }

    .ph3-m {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .mh3-m {
        margin-left: .5rem;
        margin-right: .5rem
    }

    .nh3-m {
        margin-left: -.5rem;
        margin-right: -.5rem
    }

    .pa4-m {
        padding: .75rem
    }

    .ma4-m {
        margin: .75rem
    }

    .na4-m {
        margin: -.75rem
    }

    .pl4-m {
        padding-left: .75rem
    }

    .ml4-m {
        margin-left: .75rem
    }

    .nl4-m {
        margin-left: -.75rem
    }

    .pr4-m {
        padding-right: .75rem
    }

    .mr4-m {
        margin-right: .75rem
    }

    .nr4-m {
        margin-right: -.75rem
    }

    .pt4-m {
        padding-top: .75rem
    }

    .mt4-m {
        margin-top: .75rem
    }

    .nt4-m {
        margin-top: -.75rem
    }

    .pb4-m {
        padding-bottom: .75rem
    }

    .mb4-m {
        margin-bottom: .75rem
    }

    .nb4-m {
        margin-bottom: -.75rem
    }

    .pv4-m {
        padding-top: .75rem;
        padding-bottom: .75rem
    }

    .mv4-m {
        margin-top: .75rem;
        margin-bottom: .75rem
    }

    .nv4-m {
        margin-top: -.75rem;
        margin-bottom: -.75rem
    }

    .ph4-m {
        padding-left: .75rem;
        padding-right: .75rem
    }

    .mh4-m {
        margin-left: .75rem;
        margin-right: .75rem
    }

    .nh4-m {
        margin-left: -.75rem;
        margin-right: -.75rem
    }

    .pa5-m {
        padding: 1rem
    }

    .ma5-m {
        margin: 1rem
    }

    .na5-m {
        margin: -1rem
    }

    .pl5-m {
        padding-left: 1rem
    }

    .ml5-m {
        margin-left: 1rem
    }

    .nl5-m {
        margin-left: -1rem
    }

    .pr5-m {
        padding-right: 1rem
    }

    .mr5-m {
        margin-right: 1rem
    }

    .nr5-m {
        margin-right: -1rem
    }

    .pt5-m {
        padding-top: 1rem
    }

    .mt5-m {
        margin-top: 1rem
    }

    .nt5-m {
        margin-top: -1rem
    }

    .pb5-m {
        padding-bottom: 1rem
    }

    .mb5-m {
        margin-bottom: 1rem
    }

    .nb5-m {
        margin-bottom: -1rem
    }

    .pv5-m {
        padding-top: 1rem;
        padding-bottom: 1rem
    }

    .mv5-m {
        margin-top: 1rem;
        margin-bottom: 1rem
    }

    .nv5-m {
        margin-top: -1rem;
        margin-bottom: -1rem
    }

    .ph5-m {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .mh5-m {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .nh5-m {
        margin-left: -1rem;
        margin-right: -1rem
    }

    .pa6-m {
        padding: 1.5rem
    }

    .ma6-m {
        margin: 1.5rem
    }

    .na6-m {
        margin: -1.5rem
    }

    .pl6-m {
        padding-left: 1.5rem
    }

    .ml6-m {
        margin-left: 1.5rem
    }

    .nl6-m {
        margin-left: -1.5rem
    }

    .pr6-m {
        padding-right: 1.5rem
    }

    .mr6-m {
        margin-right: 1.5rem
    }

    .nr6-m {
        margin-right: -1.5rem
    }

    .pt6-m {
        padding-top: 1.5rem
    }

    .mt6-m {
        margin-top: 1.5rem
    }

    .nt6-m {
        margin-top: -1.5rem
    }

    .pb6-m {
        padding-bottom: 1.5rem
    }

    .mb6-m {
        margin-bottom: 1.5rem
    }

    .nb6-m {
        margin-bottom: -1.5rem
    }

    .pv6-m {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem
    }

    .mv6-m {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem
    }

    .nv6-m {
        margin-top: -1.5rem;
        margin-bottom: -1.5rem
    }

    .ph6-m {
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }

    .mh6-m {
        margin-left: 1.5rem;
        margin-right: 1.5rem
    }

    .nh6-m {
        margin-left: -1.5rem;
        margin-right: -1.5rem
    }

    .pa7-m {
        padding: 2rem
    }

    .ma7-m {
        margin: 2rem
    }

    .na7-m {
        margin: -2rem
    }

    .pl7-m {
        padding-left: 2rem
    }

    .ml7-m {
        margin-left: 2rem
    }

    .nl7-m {
        margin-left: -2rem
    }

    .pr7-m {
        padding-right: 2rem
    }

    .mr7-m {
        margin-right: 2rem
    }

    .nr7-m {
        margin-right: -2rem
    }

    .pt7-m {
        padding-top: 2rem
    }

    .mt7-m {
        margin-top: 2rem
    }

    .nt7-m {
        margin-top: -2rem
    }

    .pb7-m {
        padding-bottom: 2rem
    }

    .mb7-m {
        margin-bottom: 2rem
    }

    .nb7-m {
        margin-bottom: -2rem
    }

    .pv7-m {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .mv7-m {
        margin-top: 2rem;
        margin-bottom: 2rem
    }

    .nv7-m {
        margin-top: -2rem;
        margin-bottom: -2rem
    }

    .ph7-m {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .mh7-m {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .nh7-m {
        margin-left: -2rem;
        margin-right: -2rem
    }

    .pa8-m {
        padding: 3rem
    }

    .ma8-m {
        margin: 3rem
    }

    .na8-m {
        margin: -3rem
    }

    .pl8-m {
        padding-left: 3rem
    }

    .ml8-m {
        margin-left: 3rem
    }

    .nl8-m {
        margin-left: -3rem
    }

    .pr8-m {
        padding-right: 3rem
    }

    .mr8-m {
        margin-right: 3rem
    }

    .nr8-m {
        margin-right: -3rem
    }

    .pt8-m {
        padding-top: 3rem
    }

    .mt8-m {
        margin-top: 3rem
    }

    .nt8-m {
        margin-top: -3rem
    }

    .pb8-m {
        padding-bottom: 3rem
    }

    .mb8-m {
        margin-bottom: 3rem
    }

    .nb8-m {
        margin-bottom: -3rem
    }

    .pv8-m {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .mv8-m {
        margin-top: 3rem;
        margin-bottom: 3rem
    }

    .nv8-m {
        margin-top: -3rem;
        margin-bottom: -3rem
    }

    .ph8-m {
        padding-left: 3rem;
        padding-right: 3rem
    }

    .mh8-m {
        margin-left: 3rem;
        margin-right: 3rem
    }

    .nh8-m {
        margin-left: -3rem;
        margin-right: -3rem
    }

    .pa9-m {
        padding: 4rem
    }

    .ma9-m {
        margin: 4rem
    }

    .na9-m {
        margin: -4rem
    }

    .pl9-m {
        padding-left: 4rem
    }

    .ml9-m {
        margin-left: 4rem
    }

    .nl9-m {
        margin-left: -4rem
    }

    .pr9-m {
        padding-right: 4rem
    }

    .mr9-m {
        margin-right: 4rem
    }

    .nr9-m {
        margin-right: -4rem
    }

    .pt9-m {
        padding-top: 4rem
    }

    .mt9-m {
        margin-top: 4rem
    }

    .nt9-m {
        margin-top: -4rem
    }

    .pb9-m {
        padding-bottom: 4rem
    }

    .mb9-m {
        margin-bottom: 4rem
    }

    .nb9-m {
        margin-bottom: -4rem
    }

    .pv9-m {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .mv9-m {
        margin-top: 4rem;
        margin-bottom: 4rem
    }

    .nv9-m {
        margin-top: -4rem;
        margin-bottom: -4rem
    }

    .ph9-m {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .mh9-m {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .nh9-m {
        margin-left: -4rem;
        margin-right: -4rem
    }

    .pa10-m {
        padding: 8rem
    }

    .ma10-m {
        margin: 8rem
    }

    .na10-m {
        margin: -8rem
    }

    .pl10-m {
        padding-left: 8rem
    }

    .ml10-m {
        margin-left: 8rem
    }

    .nl10-m {
        margin-left: -8rem
    }

    .pr10-m {
        padding-right: 8rem
    }

    .mr10-m {
        margin-right: 8rem
    }

    .nr10-m {
        margin-right: -8rem
    }

    .pt10-m {
        padding-top: 8rem
    }

    .mt10-m {
        margin-top: 8rem
    }

    .nt10-m {
        margin-top: -8rem
    }

    .pb10-m {
        padding-bottom: 8rem
    }

    .mb10-m {
        margin-bottom: 8rem
    }

    .nb10-m {
        margin-bottom: -8rem
    }

    .pv10-m {
        padding-top: 8rem;
        padding-bottom: 8rem
    }

    .mv10-m {
        margin-top: 8rem;
        margin-bottom: 8rem
    }

    .nv10-m {
        margin-top: -8rem;
        margin-bottom: -8rem
    }

    .ph10-m {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .mh10-m {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .nh10-m {
        margin-left: -8rem;
        margin-right: -8rem
    }

    .pa11-m {
        padding: 16rem
    }

    .ma11-m {
        margin: 16rem
    }

    .na11-m {
        margin: -16rem
    }

    .pl11-m {
        padding-left: 16rem
    }

    .ml11-m {
        margin-left: 16rem
    }

    .nl11-m {
        margin-left: -16rem
    }

    .pr11-m {
        padding-right: 16rem
    }

    .mr11-m {
        margin-right: 16rem
    }

    .nr11-m {
        margin-right: -16rem
    }

    .pt11-m {
        padding-top: 16rem
    }

    .mt11-m {
        margin-top: 16rem
    }

    .nt11-m {
        margin-top: -16rem
    }

    .pb11-m {
        padding-bottom: 16rem
    }

    .mb11-m {
        margin-bottom: 16rem
    }

    .nb11-m {
        margin-bottom: -16rem
    }

    .pv11-m {
        padding-top: 16rem;
        padding-bottom: 16rem
    }

    .mv11-m {
        margin-top: 16rem;
        margin-bottom: 16rem
    }

    .nv11-m {
        margin-top: -16rem;
        margin-bottom: -16rem
    }

    .ph11-m {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .mh11-m {
        margin-left: 16rem;
        margin-right: 16rem
    }

    .nh11-m {
        margin-left: -16rem;
        margin-right: -16rem
    }

    .top-0-m {
        top: 0
    }

    .right-0-m {
        right: 0
    }

    .bottom-0-m {
        bottom: 0
    }

    .left-0-m {
        left: 0
    }

    .top-1-m {
        top: 1rem
    }

    .right-1-m {
        right: 1rem
    }

    .bottom-1-m {
        bottom: 1rem
    }

    .left-1-m {
        left: 1rem
    }

    .top-2-m {
        top: 2rem
    }

    .right-2-m {
        right: 2rem
    }

    .bottom-2-m {
        bottom: 2rem
    }

    .left-2-m {
        left: 2rem
    }

    .top--1-m {
        top: -1rem
    }

    .right--1-m {
        right: -1rem
    }

    .bottom--1-m {
        bottom: -1rem
    }

    .left--1-m {
        left: -1rem
    }

    .top--2-m {
        top: -2rem
    }

    .right--2-m {
        right: -2rem
    }

    .bottom--2-m {
        bottom: -2rem
    }

    .left--2-m {
        left: -2rem
    }

    .absolute--fill-m {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0
    }

    .cf-m:after,.cf-m:before {
        content: " ";
        display: table
    }

    .cf-m:after {
        clear: both
    }

    .cl-m {
        clear: left
    }

    .cr-m {
        clear: right
    }

    .cb-m {
        clear: both
    }

    .cn-m {
        clear: none
    }

    .dn-m {
        display: none
    }

    .di-m {
        display: inline
    }

    .db-m {
        display: block
    }

    .dib-m {
        display: inline-block
    }

    .dit-m {
        display: inline-table
    }

    .dt-m {
        display: table
    }

    .dtc-m {
        display: table-cell
    }

    .dt-row-m {
        display: table-row
    }

    .dt-row-group-m {
        display: table-row-group
    }

    .dt-column-m {
        display: table-column
    }

    .dt-column-group-m {
        display: table-column-group
    }

    .dt--fixed-m {
        table-layout: fixed;
        width: 100%
    }

    .flex-m {
        display: -webkit-box;
        display: flex
    }

    .inline-flex-m {
        display: -webkit-inline-box;
        display: inline-flex
    }

    .flex-auto-m {
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0
    }

    .flex-none-m {
        -webkit-box-flex: 0;
        flex: none
    }

    .flex-column-m {
        -webkit-box-orient: vertical;
        flex-direction: column
    }

    .flex-column-m,.flex-row-m {
        -webkit-box-direction: normal
    }

    .flex-row-m {
        -webkit-box-orient: horizontal;
        flex-direction: row
    }

    .flex-wrap-m {
        flex-wrap: wrap
    }

    .flex-nowrap-m {
        flex-wrap: nowrap
    }

    .flex-wrap-reverse-m {
        flex-wrap: wrap-reverse
    }

    .flex-column-reverse-m {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        flex-direction: column-reverse
    }

    .flex-row-reverse-m {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        flex-direction: row-reverse
    }

    .items-start-m {
        -webkit-box-align: start;
        align-items: flex-start
    }

    .items-end-m {
        -webkit-box-align: end;
        align-items: flex-end
    }

    .items-center-m {
        -webkit-box-align: center;
        align-items: center
    }

    .items-baseline-m {
        -webkit-box-align: baseline;
        align-items: baseline
    }

    .items-stretch-m {
        -webkit-box-align: stretch;
        align-items: stretch
    }

    .self-start-m {
        align-self: flex-start
    }

    .self-end-m {
        align-self: flex-end
    }

    .self-center-m {
        align-self: center
    }

    .self-baseline-m {
        align-self: baseline
    }

    .self-stretch-m {
        align-self: stretch
    }

    .justify-start-m {
        -webkit-box-pack: start;
        justify-content: flex-start
    }

    .justify-end-m {
        -webkit-box-pack: end;
        justify-content: flex-end
    }

    .justify-center-m {
        -webkit-box-pack: center;
        justify-content: center
    }

    .justify-between-m {
        -webkit-box-pack: justify;
        justify-content: space-between
    }

    .justify-around-m {
        justify-content: space-around
    }

    .content-start-m {
        align-content: flex-start
    }

    .content-end-m {
        align-content: flex-end
    }

    .content-center-m {
        align-content: center
    }

    .content-between-m {
        align-content: space-between
    }

    .content-around-m {
        align-content: space-around
    }

    .content-stretch-m {
        align-content: stretch
    }

    .order-0-m {
        -webkit-box-ordinal-group: 1;
        order: 0
    }

    .order-1-m {
        -webkit-box-ordinal-group: 2;
        order: 1
    }

    .order-2-m {
        -webkit-box-ordinal-group: 3;
        order: 2
    }

    .order-3-m {
        -webkit-box-ordinal-group: 4;
        order: 3
    }

    .order-4-m {
        -webkit-box-ordinal-group: 5;
        order: 4
    }

    .order-5-m {
        -webkit-box-ordinal-group: 6;
        order: 5
    }

    .order-6-m {
        -webkit-box-ordinal-group: 7;
        order: 6
    }

    .order-7-m {
        -webkit-box-ordinal-group: 8;
        order: 7
    }

    .order-8-m {
        -webkit-box-ordinal-group: 9;
        order: 8
    }

    .order-last-m {
        -webkit-box-ordinal-group: 100000;
        order: 99999
    }

    .flex-grow-0-m {
        -webkit-box-flex: 0;
        flex-grow: 0
    }

    .flex-grow-1-m {
        -webkit-box-flex: 1;
        flex-grow: 1
    }

    .flex-shrink-0-m {
        flex-shrink: 0
    }

    .flex-shrink-1-m {
        flex-shrink: 1
    }

    .fl-m {
        float: left
    }

    .fl-m,.fr-m {
        _display: inline
    }

    .fr-m {
        float: right
    }

    .fn-m {
        float: none
    }

    .i-m {
        font-style: italic
    }

    .fs-normal-m {
        font-style: normal
    }

    .h1-m {
        height: 1rem
    }

    .h2-m {
        height: 2rem
    }

    .h3-m {
        height: 4rem
    }

    .h4-m {
        height: 8rem
    }

    .h5-m {
        height: 16rem
    }

    .h-25-m {
        height: 25%
    }

    .h-50-m {
        height: 50%
    }

    .h-75-m {
        height: 75%
    }

    .h-100-m {
        height: 100%
    }

    .min-h-100-m {
        min-height: 100%
    }

    .vh-25-m {
        height: 25vh
    }

    .vh-50-m {
        height: 50vh
    }

    .vh-75-m {
        height: 75vh
    }

    .vh-100-m {
        height: 100vh
    }

    .min-vh-100-m {
        min-height: 100vh
    }

    .h-auto-m {
        height: auto
    }

    .h-inherit-m {
        height: inherit
    }

    .h-small-m {
        height: 2rem;
        box-sizing: border-box
    }

    .min-h-small-m {
        min-height: 2rem;
        box-sizing: border-box
    }

    .h-regular-m {
        height: 2.5rem;
        box-sizing: border-box
    }

    .min-h-regular-m {
        min-height: 2.5rem;
        box-sizing: border-box
    }

    .h-large-m {
        height: 3rem;
        box-sizing: border-box
    }

    .min-h-large-m {
        min-height: 3rem;
        box-sizing: border-box
    }

    .tracked-m {
        letter-spacing: .1em
    }

    .tracked-tight-m {
        letter-spacing: -.05em
    }

    .tracked-mega-m {
        letter-spacing: .25em
    }

    .lh-solid-m {
        line-height: 1
    }

    .lh-title-m {
        line-height: 1.25
    }

    .lh-copy-m {
        line-height: 1.5
    }

    .mw1-m {
        max-width: 1rem
    }

    .mw2-m {
        max-width: 2rem
    }

    .mw3-m {
        max-width: 4rem
    }

    .mw4-m {
        max-width: 8rem
    }

    .mw5-m {
        max-width: 16rem
    }

    .mw6-m {
        max-width: 32rem
    }

    .mw7-m {
        max-width: 48rem
    }

    .mw8-m {
        max-width: 64rem
    }

    .mw9-m {
        max-width: 96rem
    }

    .mw-none-m {
        max-width: none
    }

    .mw-100-m {
        max-width: 100%
    }

    .o-100-m {
        opacity: 1
    }

    .o-90-m {
        opacity: .9
    }

    .o-80-m {
        opacity: .8
    }

    .o-70-m {
        opacity: .7
    }

    .o-60-m {
        opacity: .6
    }

    .o-50-m {
        opacity: .5
    }

    .o-40-m {
        opacity: .4
    }

    .o-30-m {
        opacity: .3
    }

    .o-20-m {
        opacity: .2
    }

    .o-10-m {
        opacity: .1
    }

    .o-05-m {
        opacity: .05
    }

    .o-025-m {
        opacity: .025
    }

    .o-0-m {
        opacity: 0
    }

    .rotate-45-m {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .rotate-90-m {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .rotate-135-m {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg)
    }

    .rotate-180-m {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .rotate-225-m {
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg)
    }

    .rotate-270-m {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg)
    }

    .rotate-315-m {
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg)
    }

    .outline-m {
        outline: 1px solid
    }

    .outline-transparent-m {
        outline: 1px solid transparent
    }

    .outline-0-m {
        outline: 0
    }

    .overflow-visible-m {
        overflow: visible
    }

    .overflow-hidden-m {
        overflow: hidden
    }

    .overflow-scroll-m {
        overflow: scroll
    }

    .overflow-auto-m {
        overflow: auto
    }

    .overflow-x-visible-m {
        overflow-x: visible
    }

    .overflow-x-hidden-m {
        overflow-x: hidden
    }

    .overflow-x-scroll-m {
        overflow-x: scroll
    }

    .overflow-x-auto-m {
        overflow-x: auto
    }

    .overflow-y-visible-m {
        overflow-y: visible
    }

    .overflow-y-hidden-m {
        overflow-y: hidden
    }

    .overflow-y-scroll-m {
        overflow-y: scroll
    }

    .overflow-y-auto-m {
        overflow-y: auto
    }

    .static-m {
        position: static
    }

    .relative-m {
        position: relative
    }

    .absolute-m {
        position: absolute
    }

    .fixed-m {
        position: fixed
    }

    .sticky-m {
        position: -webkit-sticky;
        position: sticky
    }

    .strike-m {
        text-decoration: line-through
    }

    .underline-m {
        text-decoration: underline
    }

    .no-underline-m {
        text-decoration: none
    }

    .tl-m {
        text-align: left
    }

    .tr-m {
        text-align: right
    }

    .tc-m {
        text-align: center
    }

    .tj-m {
        text-align: justify
    }

    .ttc-m {
        text-transform: capitalize
    }

    .ttl-m {
        text-transform: lowercase
    }

    .ttu-m {
        text-transform: uppercase
    }

    .ttn-m {
        text-transform: none
    }

    .f1-m {
        font-size: 3rem
    }

    .f2-m {
        font-size: 2.25rem
    }

    .f3-m {
        font-size: 1.5rem
    }

    .f4-m {
        font-size: 1.25rem
    }

    .f5-m {
        font-size: 1rem
    }

    .f6-m {
        font-size: .875rem
    }

    .f7-m {
        font-size: .75rem
    }

    .measure-m {
        max-width: 30em
    }

    .measure-wide-m {
        max-width: 34em
    }

    .measure-narrow-m {
        max-width: 20em
    }

    .small-caps-m {
        font-variant: small-caps
    }

    .indent-m {
        text-indent: 1em;
        margin-top: 0;
        margin-bottom: 0
    }

    .truncate-m {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .t-heading-1-m {
        font-size: 3rem
    }

    .t-heading-1-m,.t-heading-2-m {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-2-m {
        font-size: 2.25rem
    }

    .t-heading-3-m {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        font-size: 1.75rem;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-4-m {
        font-size: 1.5rem
    }

    .t-heading-4-m,.t-heading-5-m {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-5-m {
        font-size: 1.25rem
    }

    .t-heading-6-m {
        font-size: 1.25rem
    }

    .t-body-m,.t-heading-6-m,body {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-body-m,body {
        font-size: 1rem
    }

    .t-small-m {
        font-size: .875rem
    }

    .t-mini-m,.t-small-m {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-mini-m {
        font-size: .75rem
    }

    .t-action-m {
        font-size: 1rem
    }

    .t-action--small-m,.t-action-m {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-action--small-m {
        font-size: .875rem
    }

    .t-action--large-m {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-code-m {
        font-family: Consolas,monaco,monospace;
        font-size: 1rem;
        text-transform: none;
        letter-spacing: 0
    }

    .normal-m,.t-code-m {
        font-weight: 400
    }

    .b-m {
        font-weight: 700
    }

    .fw1-m {
        font-weight: 100
    }

    .fw2-m {
        font-weight: 200
    }

    .fw3-m {
        font-weight: 300
    }

    .fw4-m {
        font-weight: 400
    }

    .fw5-m {
        font-weight: 500
    }

    .fw6-m {
        font-weight: 600
    }

    .fw7-m {
        font-weight: 700
    }

    .fw8-m {
        font-weight: 800
    }

    .fw9-m {
        font-weight: 900
    }

    .clip-m {
        position: fixed!important;
        _position: absolute!important;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px,1px,1px,1px)
    }

    .ws-normal-m {
        white-space: normal
    }

    .nowrap-m {
        white-space: nowrap
    }

    .pre-m {
        white-space: pre
    }

    .w1-m {
        width: 1rem
    }

    .w2-m {
        width: 2rem
    }

    .w3-m {
        width: 4rem
    }

    .w4-m {
        width: 8rem
    }

    .w5-m {
        width: 16rem
    }

    .w-10-m {
        width: 10%
    }

    .w-20-m {
        width: 20%
    }

    .w-25-m {
        width: 25%
    }

    .w-30-m {
        width: 30%
    }

    .w-33-m {
        width: 33%
    }

    .w-34-m {
        width: 34%
    }

    .w-40-m {
        width: 40%
    }

    .w-50-m {
        width: 50%
    }

    .w-60-m {
        width: 60%
    }

    .w-70-m {
        width: 70%
    }

    .w-75-m {
        width: 75%
    }

    .w-80-m {
        width: 80%
    }

    .w-90-m {
        width: 90%
    }

    .w-100-m {
        width: 100%
    }

    .w-third-m {
        width: 33.33333%
    }

    .w-two-thirds-m {
        width: 66.66667%
    }

    .w-auto-m {
        width: auto
    }

    .vw-10-m {
        width: 10vw
    }

    .vw-20-m {
        width: 20vw
    }

    .vw-25-m {
        width: 25vw
    }

    .vw-30-m {
        width: 30vw
    }

    .vw-33-m {
        width: 33vw
    }

    .vw-34-m {
        width: 34vw
    }

    .vw-40-m {
        width: 40vw
    }

    .vw-50-m {
        width: 50vw
    }

    .vw-60-m {
        width: 60vw
    }

    .vw-70-m {
        width: 70vw
    }

    .vw-75-m {
        width: 75vw
    }

    .vw-80-m {
        width: 80vw
    }

    .vw-90-m {
        width: 90vw
    }

    .vw-100-m {
        width: 100vw
    }

    .vw-third-m {
        width: 33.33333vw
    }

    .vw-two-thirds-m {
        width: 66.66667vw
    }
}

@media screen and (min-width: 64em) {
    .aspect-ratio-l {
        height:0;
        position: relative
    }

    .aspect-ratio--16x9-l {
        padding-bottom: 56.25%
    }

    .aspect-ratio--9x16-l {
        padding-bottom: 177.77%
    }

    .aspect-ratio--4x3-l {
        padding-bottom: 75%
    }

    .aspect-ratio--3x4-l {
        padding-bottom: 133.33%
    }

    .aspect-ratio--6x4-l {
        padding-bottom: 66.6%
    }

    .aspect-ratio--4x6-l {
        padding-bottom: 150%
    }

    .aspect-ratio--8x5-l {
        padding-bottom: 62.5%
    }

    .aspect-ratio--5x8-l {
        padding-bottom: 160%
    }

    .aspect-ratio--7x5-l {
        padding-bottom: 71.42%
    }

    .aspect-ratio--5x7-l {
        padding-bottom: 140%
    }

    .aspect-ratio--1x1-l {
        padding-bottom: 100%
    }

    .aspect-ratio--object-l {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100
    }

    .cover-l {
        background-size: cover!important
    }

    .contain-l {
        background-size: contain!important
    }

    .bg-center-l {
        background-position: 50%
    }

    .bg-center-l,.bg-top-l {
        background-repeat: no-repeat
    }

    .bg-top-l {
        background-position: top
    }

    .bg-right-l {
        background-position: 100%
    }

    .bg-bottom-l,.bg-right-l {
        background-repeat: no-repeat
    }

    .bg-bottom-l {
        background-position: bottom
    }

    .bg-left-l {
        background-repeat: no-repeat;
        background-position: 0
    }

    .ba-l {
        border-style: solid;
        border-width: 1px
    }

    .bt-l {
        border-top-style: solid;
        border-top-width: 1px
    }

    .br-l {
        border-right-style: solid;
        border-right-width: 1px
    }

    .bb-l {
        border-bottom-style: solid;
        border-bottom-width: 1px
    }

    .bl-l {
        border-left-style: solid;
        border-left-width: 1px
    }

    .bn-l {
        border-style: none;
        border-width: 0
    }

    .br0-l {
        border-radius: 0
    }

    .br1-l {
        border-radius: .125rem
    }

    .br2-l {
        border-radius: .25rem
    }

    .br3-l {
        border-radius: .5rem
    }

    .br4-l {
        border-radius: 1rem
    }

    .br-100-l {
        border-radius: 100%
    }

    .br-pill-l {
        border-radius: 9999px
    }

    .br--bottom-l {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .br--top-l {
        border-bottom-right-radius: 0
    }

    .br--right-l,.br--top-l {
        border-bottom-left-radius: 0
    }

    .br--right-l {
        border-top-left-radius: 0
    }

    .br--left-l {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .b--dotted-l {
        border-style: dotted
    }

    .b--dashed-l {
        border-style: dashed
    }

    .b--solid-l {
        border-style: solid
    }

    .b--none-l {
        border-style: none
    }

    .bw0-l {
        border-width: 0
    }

    .bw1-l {
        border-width: .125rem
    }

    .bw2-l {
        border-width: .25rem
    }

    .bw3-l {
        border-width: .5rem
    }

    .bw4-l {
        border-width: 1rem
    }

    .bw5-l {
        border-width: 2rem
    }

    .bt-0-l {
        border-top-width: 0
    }

    .br-0-l {
        border-right-width: 0
    }

    .bb-0-l {
        border-bottom-width: 0
    }

    .bl-0-l {
        border-left-width: 0
    }

    .shadow-1-l {
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2)
    }

    .shadow-2-l {
        box-shadow: 0 0 8px 2px rgba(0,0,0,.2)
    }

    .shadow-3-l {
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2)
    }

    .shadow-4-l {
        box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2)
    }

    .shadow-5-l {
        box-shadow: 4px 4px 8px 0 rgba(0,0,0,.2)
    }

    .pa0-l {
        padding: 0
    }

    .ma0-l,.na0-l {
        margin: 0
    }

    .pl0-l {
        padding-left: 0
    }

    .ml0-l,.nl0-l {
        margin-left: 0
    }

    .pr0-l {
        padding-right: 0
    }

    .mr0-l,.nr0-l {
        margin-right: 0
    }

    .pt0-l {
        padding-top: 0
    }

    .mt0-l,.nt0-l {
        margin-top: 0
    }

    .pb0-l {
        padding-bottom: 0
    }

    .mb0-l,.nb0-l {
        margin-bottom: 0
    }

    .pv0-l {
        padding-top: 0;
        padding-bottom: 0
    }

    .mv0-l,.nv0-l {
        margin-top: 0;
        margin-bottom: 0
    }

    .ph0-l {
        padding-left: 0;
        padding-right: 0
    }

    .mh0-l,.nh0-l {
        margin-left: 0;
        margin-right: 0
    }

    .pa1-l {
        padding: .125rem
    }

    .ma1-l {
        margin: .125rem
    }

    .na1-l {
        margin: -.125rem
    }

    .pl1-l {
        padding-left: .125rem
    }

    .ml1-l {
        margin-left: .125rem
    }

    .nl1-l {
        margin-left: -.125rem
    }

    .pr1-l {
        padding-right: .125rem
    }

    .mr1-l {
        margin-right: .125rem
    }

    .nr1-l {
        margin-right: -.125rem
    }

    .pt1-l {
        padding-top: .125rem
    }

    .mt1-l {
        margin-top: .125rem
    }

    .nt1-l {
        margin-top: -.125rem
    }

    .pb1-l {
        padding-bottom: .125rem
    }

    .mb1-l {
        margin-bottom: .125rem
    }

    .nb1-l {
        margin-bottom: -.125rem
    }

    .pv1-l {
        padding-top: .125rem;
        padding-bottom: .125rem
    }

    .mv1-l {
        margin-top: .125rem;
        margin-bottom: .125rem
    }

    .nv1-l {
        margin-top: -.125rem;
        margin-bottom: -.125rem
    }

    .ph1-l {
        padding-left: .125rem;
        padding-right: .125rem
    }

    .mh1-l {
        margin-left: .125rem;
        margin-right: .125rem
    }

    .nh1-l {
        margin-left: -.125rem;
        margin-right: -.125rem
    }

    .pa2-l {
        padding: .25rem
    }

    .ma2-l {
        margin: .25rem
    }

    .na2-l {
        margin: -.25rem
    }

    .pl2-l {
        padding-left: .25rem
    }

    .ml2-l {
        margin-left: .25rem
    }

    .nl2-l {
        margin-left: -.25rem
    }

    .pr2-l {
        padding-right: .25rem
    }

    .mr2-l {
        margin-right: .25rem
    }

    .nr2-l {
        margin-right: -.25rem
    }

    .pt2-l {
        padding-top: .25rem
    }

    .mt2-l {
        margin-top: .25rem
    }

    .nt2-l {
        margin-top: -.25rem
    }

    .pb2-l {
        padding-bottom: .25rem
    }

    .mb2-l {
        margin-bottom: .25rem
    }

    .nb2-l {
        margin-bottom: -.25rem
    }

    .pv2-l {
        padding-top: .25rem;
        padding-bottom: .25rem
    }

    .mv2-l {
        margin-top: .25rem;
        margin-bottom: .25rem
    }

    .nv2-l {
        margin-top: -.25rem;
        margin-bottom: -.25rem
    }

    .ph2-l {
        padding-left: .25rem;
        padding-right: .25rem
    }

    .mh2-l {
        margin-left: .25rem;
        margin-right: .25rem
    }

    .nh2-l {
        margin-left: -.25rem;
        margin-right: -.25rem
    }

    .pa3-l {
        padding: .5rem
    }

    .ma3-l {
        margin: .5rem
    }

    .na3-l {
        margin: -.5rem
    }

    .pl3-l {
        padding-left: .5rem
    }

    .ml3-l {
        margin-left: .5rem
    }

    .nl3-l {
        margin-left: -.5rem
    }

    .pr3-l {
        padding-right: .5rem
    }

    .mr3-l {
        margin-right: .5rem
    }

    .nr3-l {
        margin-right: -.5rem
    }

    .pt3-l {
        padding-top: .5rem
    }

    .mt3-l {
        margin-top: .5rem
    }

    .nt3-l {
        margin-top: -.5rem
    }

    .pb3-l {
        padding-bottom: .5rem
    }

    .mb3-l {
        margin-bottom: .5rem
    }

    .nb3-l {
        margin-bottom: -.5rem
    }

    .pv3-l {
        padding-top: .5rem;
        padding-bottom: .5rem
    }

    .mv3-l {
        margin-top: .5rem;
        margin-bottom: .5rem
    }

    .nv3-l {
        margin-top: -.5rem;
        margin-bottom: -.5rem
    }

    .ph3-l {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .mh3-l {
        margin-left: .5rem;
        margin-right: .5rem
    }

    .nh3-l {
        margin-left: -.5rem;
        margin-right: -.5rem
    }

    .pa4-l {
        padding: .75rem
    }

    .ma4-l {
        margin: .75rem
    }

    .na4-l {
        margin: -.75rem
    }

    .pl4-l {
        padding-left: .75rem
    }

    .ml4-l {
        margin-left: .75rem
    }

    .nl4-l {
        margin-left: -.75rem
    }

    .pr4-l {
        padding-right: .75rem
    }

    .mr4-l {
        margin-right: .75rem
    }

    .nr4-l {
        margin-right: -.75rem
    }

    .pt4-l {
        padding-top: .75rem
    }

    .mt4-l {
        margin-top: .75rem
    }

    .nt4-l {
        margin-top: -.75rem
    }

    .pb4-l {
        padding-bottom: .75rem
    }

    .mb4-l {
        margin-bottom: .75rem
    }

    .nb4-l {
        margin-bottom: -.75rem
    }

    .pv4-l {
        padding-top: .75rem;
        padding-bottom: .75rem
    }

    .mv4-l {
        margin-top: .75rem;
        margin-bottom: .75rem
    }

    .nv4-l {
        margin-top: -.75rem;
        margin-bottom: -.75rem
    }

    .ph4-l {
        padding-left: .75rem;
        padding-right: .75rem
    }

    .mh4-l {
        margin-left: .75rem;
        margin-right: .75rem
    }

    .nh4-l {
        margin-left: -.75rem;
        margin-right: -.75rem
    }

    .pa5-l {
        padding: 1rem
    }

    .ma5-l {
        margin: 1rem
    }

    .na5-l {
        margin: -1rem
    }

    .pl5-l {
        padding-left: 1rem
    }

    .ml5-l {
        margin-left: 1rem
    }

    .nl5-l {
        margin-left: -1rem
    }

    .pr5-l {
        padding-right: 1rem
    }

    .mr5-l {
        margin-right: 1rem
    }

    .nr5-l {
        margin-right: -1rem
    }

    .pt5-l {
        padding-top: 1rem
    }

    .mt5-l {
        margin-top: 1rem
    }

    .nt5-l {
        margin-top: -1rem
    }

    .pb5-l {
        padding-bottom: 1rem
    }

    .mb5-l {
        margin-bottom: 1rem
    }

    .nb5-l {
        margin-bottom: -1rem
    }

    .pv5-l {
        padding-top: 1rem;
        padding-bottom: 1rem
    }

    .mv5-l {
        margin-top: 1rem;
        margin-bottom: 1rem
    }

    .nv5-l {
        margin-top: -1rem;
        margin-bottom: -1rem
    }

    .ph5-l {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .mh5-l {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .nh5-l {
        margin-left: -1rem;
        margin-right: -1rem
    }

    .pa6-l {
        padding: 1.5rem
    }

    .ma6-l {
        margin: 1.5rem
    }

    .na6-l {
        margin: -1.5rem
    }

    .pl6-l {
        padding-left: 1.5rem
    }

    .ml6-l {
        margin-left: 1.5rem
    }

    .nl6-l {
        margin-left: -1.5rem
    }

    .pr6-l {
        padding-right: 1.5rem
    }

    .mr6-l {
        margin-right: 1.5rem
    }

    .nr6-l {
        margin-right: -1.5rem
    }

    .pt6-l {
        padding-top: 1.5rem
    }

    .mt6-l {
        margin-top: 1.5rem
    }

    .nt6-l {
        margin-top: -1.5rem
    }

    .pb6-l {
        padding-bottom: 1.5rem
    }

    .mb6-l {
        margin-bottom: 1.5rem
    }

    .nb6-l {
        margin-bottom: -1.5rem
    }

    .pv6-l {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem
    }

    .mv6-l {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem
    }

    .nv6-l {
        margin-top: -1.5rem;
        margin-bottom: -1.5rem
    }

    .ph6-l {
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }

    .mh6-l {
        margin-left: 1.5rem;
        margin-right: 1.5rem
    }

    .nh6-l {
        margin-left: -1.5rem;
        margin-right: -1.5rem
    }

    .pa7-l {
        padding: 2rem
    }

    .ma7-l {
        margin: 2rem
    }

    .na7-l {
        margin: -2rem
    }

    .pl7-l {
        padding-left: 2rem
    }

    .ml7-l {
        margin-left: 2rem
    }

    .nl7-l {
        margin-left: -2rem
    }

    .pr7-l {
        padding-right: 2rem
    }

    .mr7-l {
        margin-right: 2rem
    }

    .nr7-l {
        margin-right: -2rem
    }

    .pt7-l {
        padding-top: 2rem
    }

    .mt7-l {
        margin-top: 2rem
    }

    .nt7-l {
        margin-top: -2rem
    }

    .pb7-l {
        padding-bottom: 2rem
    }

    .mb7-l {
        margin-bottom: 2rem
    }

    .nb7-l {
        margin-bottom: -2rem
    }

    .pv7-l {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .mv7-l {
        margin-top: 2rem;
        margin-bottom: 2rem
    }

    .nv7-l {
        margin-top: -2rem;
        margin-bottom: -2rem
    }

    .ph7-l {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .mh7-l {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .nh7-l {
        margin-left: -2rem;
        margin-right: -2rem
    }

    .pa8-l {
        padding: 3rem
    }

    .ma8-l {
        margin: 3rem
    }

    .na8-l {
        margin: -3rem
    }

    .pl8-l {
        padding-left: 3rem
    }

    .ml8-l {
        margin-left: 3rem
    }

    .nl8-l {
        margin-left: -3rem
    }

    .pr8-l {
        padding-right: 3rem
    }

    .mr8-l {
        margin-right: 3rem
    }

    .nr8-l {
        margin-right: -3rem
    }

    .pt8-l {
        padding-top: 3rem
    }

    .mt8-l {
        margin-top: 3rem
    }

    .nt8-l {
        margin-top: -3rem
    }

    .pb8-l {
        padding-bottom: 3rem
    }

    .mb8-l {
        margin-bottom: 3rem
    }

    .nb8-l {
        margin-bottom: -3rem
    }

    .pv8-l {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .mv8-l {
        margin-top: 3rem;
        margin-bottom: 3rem
    }

    .nv8-l {
        margin-top: -3rem;
        margin-bottom: -3rem
    }

    .ph8-l {
        padding-left: 3rem;
        padding-right: 3rem
    }

    .mh8-l {
        margin-left: 3rem;
        margin-right: 3rem
    }

    .nh8-l {
        margin-left: -3rem;
        margin-right: -3rem
    }

    .pa9-l {
        padding: 4rem
    }

    .ma9-l {
        margin: 4rem
    }

    .na9-l {
        margin: -4rem
    }

    .pl9-l {
        padding-left: 4rem
    }

    .ml9-l {
        margin-left: 4rem
    }

    .nl9-l {
        margin-left: -4rem
    }

    .pr9-l {
        padding-right: 4rem
    }

    .mr9-l {
        margin-right: 4rem
    }

    .nr9-l {
        margin-right: -4rem
    }

    .pt9-l {
        padding-top: 4rem
    }

    .mt9-l {
        margin-top: 4rem
    }

    .nt9-l {
        margin-top: -4rem
    }

    .pb9-l {
        padding-bottom: 4rem
    }

    .mb9-l {
        margin-bottom: 4rem
    }

    .nb9-l {
        margin-bottom: -4rem
    }

    .pv9-l {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .mv9-l {
        margin-top: 4rem;
        margin-bottom: 4rem
    }

    .nv9-l {
        margin-top: -4rem;
        margin-bottom: -4rem
    }

    .ph9-l {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .mh9-l {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .nh9-l {
        margin-left: -4rem;
        margin-right: -4rem
    }

    .pa10-l {
        padding: 8rem
    }

    .ma10-l {
        margin: 8rem
    }

    .na10-l {
        margin: -8rem
    }

    .pl10-l {
        padding-left: 8rem
    }

    .ml10-l {
        margin-left: 8rem
    }

    .nl10-l {
        margin-left: -8rem
    }

    .pr10-l {
        padding-right: 8rem
    }

    .mr10-l {
        margin-right: 8rem
    }

    .nr10-l {
        margin-right: -8rem
    }

    .pt10-l {
        padding-top: 8rem
    }

    .mt10-l {
        margin-top: 8rem
    }

    .nt10-l {
        margin-top: -8rem
    }

    .pb10-l {
        padding-bottom: 8rem
    }

    .mb10-l {
        margin-bottom: 8rem
    }

    .nb10-l {
        margin-bottom: -8rem
    }

    .pv10-l {
        padding-top: 8rem;
        padding-bottom: 8rem
    }

    .mv10-l {
        margin-top: 8rem;
        margin-bottom: 8rem
    }

    .nv10-l {
        margin-top: -8rem;
        margin-bottom: -8rem
    }

    .ph10-l {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .mh10-l {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .nh10-l {
        margin-left: -8rem;
        margin-right: -8rem
    }

    .pa11-l {
        padding: 16rem
    }

    .ma11-l {
        margin: 16rem
    }

    .na11-l {
        margin: -16rem
    }

    .pl11-l {
        padding-left: 16rem
    }

    .ml11-l {
        margin-left: 16rem
    }

    .nl11-l {
        margin-left: -16rem
    }

    .pr11-l {
        padding-right: 16rem
    }

    .mr11-l {
        margin-right: 16rem
    }

    .nr11-l {
        margin-right: -16rem
    }

    .pt11-l {
        padding-top: 16rem
    }

    .mt11-l {
        margin-top: 16rem
    }

    .nt11-l {
        margin-top: -16rem
    }

    .pb11-l {
        padding-bottom: 16rem
    }

    .mb11-l {
        margin-bottom: 16rem
    }

    .nb11-l {
        margin-bottom: -16rem
    }

    .pv11-l {
        padding-top: 16rem;
        padding-bottom: 16rem
    }

    .mv11-l {
        margin-top: 16rem;
        margin-bottom: 16rem
    }

    .nv11-l {
        margin-top: -16rem;
        margin-bottom: -16rem
    }

    .ph11-l {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .mh11-l {
        margin-left: 16rem;
        margin-right: 16rem
    }

    .nh11-l {
        margin-left: -16rem;
        margin-right: -16rem
    }

    .top-0-l {
        top: 0
    }

    .right-0-l {
        right: 0
    }

    .bottom-0-l {
        bottom: 0
    }

    .left-0-l {
        left: 0
    }

    .top-1-l {
        top: 1rem
    }

    .right-1-l {
        right: 1rem
    }

    .bottom-1-l {
        bottom: 1rem
    }

    .left-1-l {
        left: 1rem
    }

    .top-2-l {
        top: 2rem
    }

    .right-2-l {
        right: 2rem
    }

    .bottom-2-l {
        bottom: 2rem
    }

    .left-2-l {
        left: 2rem
    }

    .top--1-l {
        top: -1rem
    }

    .right--1-l {
        right: -1rem
    }

    .bottom--1-l {
        bottom: -1rem
    }

    .left--1-l {
        left: -1rem
    }

    .top--2-l {
        top: -2rem
    }

    .right--2-l {
        right: -2rem
    }

    .bottom--2-l {
        bottom: -2rem
    }

    .left--2-l {
        left: -2rem
    }

    .absolute--fill-l {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0
    }

    .cf-l:after,.cf-l:before {
        content: " ";
        display: table
    }

    .cf-l:after {
        clear: both
    }

    .cl-l {
        clear: left
    }

    .cr-l {
        clear: right
    }

    .cb-l {
        clear: both
    }

    .cn-l {
        clear: none
    }

    .dn-l {
        display: none
    }

    .di-l {
        display: inline
    }

    .db-l {
        display: block
    }

    .dib-l {
        display: inline-block
    }

    .dit-l {
        display: inline-table
    }

    .dt-l {
        display: table
    }

    .dtc-l {
        display: table-cell
    }

    .dt-row-l {
        display: table-row
    }

    .dt-row-group-l {
        display: table-row-group
    }

    .dt-column-l {
        display: table-column
    }

    .dt-column-group-l {
        display: table-column-group
    }

    .dt--fixed-l {
        table-layout: fixed;
        width: 100%
    }

    .flex-l {
        display: -webkit-box;
        display: flex
    }

    .inline-flex-l {
        display: -webkit-inline-box;
        display: inline-flex
    }

    .flex-auto-l {
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0
    }

    .flex-none-l {
        -webkit-box-flex: 0;
        flex: none
    }

    .flex-column-l {
        -webkit-box-orient: vertical;
        flex-direction: column
    }

    .flex-column-l,.flex-row-l {
        -webkit-box-direction: normal
    }

    .flex-row-l {
        -webkit-box-orient: horizontal;
        flex-direction: row
    }

    .flex-wrap-l {
        flex-wrap: wrap
    }

    .flex-nowrap-l {
        flex-wrap: nowrap
    }

    .flex-wrap-reverse-l {
        flex-wrap: wrap-reverse
    }

    .flex-column-reverse-l {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        flex-direction: column-reverse
    }

    .flex-row-reverse-l {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        flex-direction: row-reverse
    }

    .items-start-l {
        -webkit-box-align: start;
        align-items: flex-start
    }

    .items-end-l {
        -webkit-box-align: end;
        align-items: flex-end
    }

    .items-center-l {
        -webkit-box-align: center;
        align-items: center
    }

    .items-baseline-l {
        -webkit-box-align: baseline;
        align-items: baseline
    }

    .items-stretch-l {
        -webkit-box-align: stretch;
        align-items: stretch
    }

    .self-start-l {
        align-self: flex-start
    }

    .self-end-l {
        align-self: flex-end
    }

    .self-center-l {
        align-self: center
    }

    .self-baseline-l {
        align-self: baseline
    }

    .self-stretch-l {
        align-self: stretch
    }

    .justify-start-l {
        -webkit-box-pack: start;
        justify-content: flex-start
    }

    .justify-end-l {
        -webkit-box-pack: end;
        justify-content: flex-end
    }

    .justify-center-l {
        -webkit-box-pack: center;
        justify-content: center
    }

    .justify-between-l {
        -webkit-box-pack: justify;
        justify-content: space-between
    }

    .justify-around-l {
        justify-content: space-around
    }

    .content-start-l {
        align-content: flex-start
    }

    .content-end-l {
        align-content: flex-end
    }

    .content-center-l {
        align-content: center
    }

    .content-between-l {
        align-content: space-between
    }

    .content-around-l {
        align-content: space-around
    }

    .content-stretch-l {
        align-content: stretch
    }

    .order-0-l {
        -webkit-box-ordinal-group: 1;
        order: 0
    }

    .order-1-l {
        -webkit-box-ordinal-group: 2;
        order: 1
    }

    .order-2-l {
        -webkit-box-ordinal-group: 3;
        order: 2
    }

    .order-3-l {
        -webkit-box-ordinal-group: 4;
        order: 3
    }

    .order-4-l {
        -webkit-box-ordinal-group: 5;
        order: 4
    }

    .order-5-l {
        -webkit-box-ordinal-group: 6;
        order: 5
    }

    .order-6-l {
        -webkit-box-ordinal-group: 7;
        order: 6
    }

    .order-7-l {
        -webkit-box-ordinal-group: 8;
        order: 7
    }

    .order-8-l {
        -webkit-box-ordinal-group: 9;
        order: 8
    }

    .order-last-l {
        -webkit-box-ordinal-group: 100000;
        order: 99999
    }

    .flex-grow-0-l {
        -webkit-box-flex: 0;
        flex-grow: 0
    }

    .flex-grow-1-l {
        -webkit-box-flex: 1;
        flex-grow: 1
    }

    .flex-shrink-0-l {
        flex-shrink: 0
    }

    .flex-shrink-1-l {
        flex-shrink: 1
    }

    .fl-l {
        float: left
    }

    .fl-l,.fr-l {
        _display: inline
    }

    .fr-l {
        float: right
    }

    .fn-l {
        float: none
    }

    .i-l {
        font-style: italic
    }

    .fs-normal-l {
        font-style: normal
    }

    .h1-l {
        height: 1rem
    }

    .h2-l {
        height: 2rem
    }

    .h3-l {
        height: 4rem
    }

    .h4-l {
        height: 8rem
    }

    .h5-l {
        height: 16rem
    }

    .h-25-l {
        height: 25%
    }

    .h-50-l {
        height: 50%
    }

    .h-75-l {
        height: 75%
    }

    .h-100-l {
        height: 100%
    }

    .min-h-100-l {
        min-height: 100%
    }

    .vh-25-l {
        height: 25vh
    }

    .vh-50-l {
        height: 50vh
    }

    .vh-75-l {
        height: 75vh
    }

    .vh-100-l {
        height: 100vh
    }

    .min-vh-100-l {
        min-height: 100vh
    }

    .h-auto-l {
        height: auto
    }

    .h-inherit-l {
        height: inherit
    }

    .h-small-l {
        height: 2rem;
        box-sizing: border-box
    }

    .min-h-small-l {
        min-height: 2rem;
        box-sizing: border-box
    }

    .h-regular-l {
        height: 2.5rem;
        box-sizing: border-box
    }

    .min-h-regular-l {
        min-height: 2.5rem;
        box-sizing: border-box
    }

    .h-large-l {
        height: 3rem;
        box-sizing: border-box
    }

    .min-h-large-l {
        min-height: 3rem;
        box-sizing: border-box
    }

    .tracked-l {
        letter-spacing: .1em
    }

    .tracked-tight-l {
        letter-spacing: -.05em
    }

    .tracked-mega-l {
        letter-spacing: .25em
    }

    .lh-solid-l {
        line-height: 1
    }

    .lh-title-l {
        line-height: 1.25
    }

    .lh-copy-l {
        line-height: 1.5
    }

    .mw1-l {
        max-width: 1rem
    }

    .mw2-l {
        max-width: 2rem
    }

    .mw3-l {
        max-width: 4rem
    }

    .mw4-l {
        max-width: 8rem
    }

    .mw5-l {
        max-width: 16rem
    }

    .mw6-l {
        max-width: 32rem
    }

    .mw7-l {
        max-width: 48rem
    }

    .mw8-l {
        max-width: 64rem
    }

    .mw9-l {
        max-width: 96rem
    }

    .mw-none-l {
        max-width: none
    }

    .mw-100-l {
        max-width: 100%
    }

    .o-100-l {
        opacity: 1
    }

    .o-90-l {
        opacity: .9
    }

    .o-80-l {
        opacity: .8
    }

    .o-70-l {
        opacity: .7
    }

    .o-60-l {
        opacity: .6
    }

    .o-50-l {
        opacity: .5
    }

    .o-40-l {
        opacity: .4
    }

    .o-30-l {
        opacity: .3
    }

    .o-20-l {
        opacity: .2
    }

    .o-10-l {
        opacity: .1
    }

    .o-05-l {
        opacity: .05
    }

    .o-025-l {
        opacity: .025
    }

    .o-0-l {
        opacity: 0
    }

    .rotate-45-l {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .rotate-90-l {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .rotate-135-l {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg)
    }

    .rotate-180-l {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .rotate-225-l {
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg)
    }

    .rotate-270-l {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg)
    }

    .rotate-315-l {
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg)
    }

    .outline-l {
        outline: 1px solid
    }

    .outline-transparent-l {
        outline: 1px solid transparent
    }

    .outline-0-l {
        outline: 0
    }

    .overflow-visible-l {
        overflow: visible
    }

    .overflow-hidden-l {
        overflow: hidden
    }

    .overflow-scroll-l {
        overflow: scroll
    }

    .overflow-auto-l {
        overflow: auto
    }

    .overflow-x-visible-l {
        overflow-x: visible
    }

    .overflow-x-hidden-l {
        overflow-x: hidden
    }

    .overflow-x-scroll-l {
        overflow-x: scroll
    }

    .overflow-x-auto-l {
        overflow-x: auto
    }

    .overflow-y-visible-l {
        overflow-y: visible
    }

    .overflow-y-hidden-l {
        overflow-y: hidden
    }

    .overflow-y-scroll-l {
        overflow-y: scroll
    }

    .overflow-y-auto-l {
        overflow-y: auto
    }

    .static-l {
        position: static
    }

    .relative-l {
        position: relative
    }

    .absolute-l {
        position: absolute
    }

    .fixed-l {
        position: fixed
    }

    .sticky-l {
        position: -webkit-sticky;
        position: sticky
    }

    .strike-l {
        text-decoration: line-through
    }

    .underline-l {
        text-decoration: underline
    }

    .no-underline-l {
        text-decoration: none
    }

    .tl-l {
        text-align: left
    }

    .tr-l {
        text-align: right
    }

    .tc-l {
        text-align: center
    }

    .tj-l {
        text-align: justify
    }

    .ttc-l {
        text-transform: capitalize
    }

    .ttl-l {
        text-transform: lowercase
    }

    .ttu-l {
        text-transform: uppercase
    }

    .ttn-l {
        text-transform: none
    }

    .f1-l {
        font-size: 3rem
    }

    .f2-l {
        font-size: 2.25rem
    }

    .f3-l {
        font-size: 1.5rem
    }

    .f4-l {
        font-size: 1.25rem
    }

    .f5-l {
        font-size: 1rem
    }

    .f6-l {
        font-size: .875rem
    }

    .f7-l {
        font-size: .75rem
    }

    .measure-l {
        max-width: 30em
    }

    .measure-wide-l {
        max-width: 34em
    }

    .measure-narrow-l {
        max-width: 20em
    }

    .small-caps-l {
        font-variant: small-caps
    }

    .indent-l {
        text-indent: 1em;
        margin-top: 0;
        margin-bottom: 0
    }

    .truncate-l {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .t-heading-1-l {
        font-size: 3rem
    }

    .t-heading-1-l,.t-heading-2-l {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-2-l {
        font-size: 2.25rem
    }

    .t-heading-3-l {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        font-size: 1.75rem;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-4-l {
        font-size: 1.5rem
    }

    .t-heading-4-l,.t-heading-5-l {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-5-l {
        font-size: 1.25rem
    }

    .t-heading-6-l {
        font-size: 1.25rem
    }

    .t-body-l,.t-heading-6-l,body {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-body-l,body {
        font-size: 1rem
    }

    .t-small-l {
        font-size: .875rem
    }

    .t-mini-l,.t-small-l {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-mini-l {
        font-size: .75rem
    }

    .t-action-l {
        font-size: 1rem
    }

    .t-action--small-l,.t-action-l {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-action--small-l {
        font-size: .875rem
    }

    .t-action--large-l {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-code-l {
        font-family: Consolas,monaco,monospace;
        font-size: 1rem;
        text-transform: none;
        letter-spacing: 0
    }

    .normal-l,.t-code-l {
        font-weight: 400
    }

    .b-l {
        font-weight: 700
    }

    .fw1-l {
        font-weight: 100
    }

    .fw2-l {
        font-weight: 200
    }

    .fw3-l {
        font-weight: 300
    }

    .fw4-l {
        font-weight: 400
    }

    .fw5-l {
        font-weight: 500
    }

    .fw6-l {
        font-weight: 600
    }

    .fw7-l {
        font-weight: 700
    }

    .fw8-l {
        font-weight: 800
    }

    .fw9-l {
        font-weight: 900
    }

    .clip-l {
        position: fixed!important;
        _position: absolute!important;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px,1px,1px,1px)
    }

    .ws-normal-l {
        white-space: normal
    }

    .nowrap-l {
        white-space: nowrap
    }

    .pre-l {
        white-space: pre
    }

    .w1-l {
        width: 1rem
    }

    .w2-l {
        width: 2rem
    }

    .w3-l {
        width: 4rem
    }

    .w4-l {
        width: 8rem
    }

    .w5-l {
        width: 16rem
    }

    .w-10-l {
        width: 10%
    }

    .w-20-l {
        width: 20%
    }

    .w-25-l {
        width: 25%
    }

    .w-30-l {
        width: 30%
    }

    .w-33-l {
        width: 33%
    }

    .w-34-l {
        width: 34%
    }

    .w-40-l {
        width: 40%
    }

    .w-50-l {
        width: 50%
    }

    .w-60-l {
        width: 60%
    }

    .w-70-l {
        width: 70%
    }

    .w-75-l {
        width: 75%
    }

    .w-80-l {
        width: 80%
    }

    .w-90-l {
        width: 90%
    }

    .w-100-l {
        width: 100%
    }

    .w-third-l {
        width: 33.33333%
    }

    .w-two-thirds-l {
        width: 66.66667%
    }

    .w-auto-l {
        width: auto
    }

    .vw-10-l {
        width: 10vw
    }

    .vw-20-l {
        width: 20vw
    }

    .vw-25-l {
        width: 25vw
    }

    .vw-30-l {
        width: 30vw
    }

    .vw-33-l {
        width: 33vw
    }

    .vw-34-l {
        width: 34vw
    }

    .vw-40-l {
        width: 40vw
    }

    .vw-50-l {
        width: 50vw
    }

    .vw-60-l {
        width: 60vw
    }

    .vw-70-l {
        width: 70vw
    }

    .vw-75-l {
        width: 75vw
    }

    .vw-80-l {
        width: 80vw
    }

    .vw-90-l {
        width: 90vw
    }

    .vw-100-l {
        width: 100vw
    }

    .vw-third-l {
        width: 33.33333vw
    }

    .vw-two-thirds-l {
        width: 66.66667vw
    }
}

@media screen and (min-width: 80em) {
    .aspect-ratio-xl {
        height:0;
        position: relative
    }

    .aspect-ratio--16x9-xl {
        padding-bottom: 56.25%
    }

    .aspect-ratio--9x16-xl {
        padding-bottom: 177.77%
    }

    .aspect-ratio--4x3-xl {
        padding-bottom: 75%
    }

    .aspect-ratio--3x4-xl {
        padding-bottom: 133.33%
    }

    .aspect-ratio--6x4-xl {
        padding-bottom: 66.6%
    }

    .aspect-ratio--4x6-xl {
        padding-bottom: 150%
    }

    .aspect-ratio--8x5-xl {
        padding-bottom: 62.5%
    }

    .aspect-ratio--5x8-xl {
        padding-bottom: 160%
    }

    .aspect-ratio--7x5-xl {
        padding-bottom: 71.42%
    }

    .aspect-ratio--5x7-xl {
        padding-bottom: 140%
    }

    .aspect-ratio--1x1-xl {
        padding-bottom: 100%
    }

    .aspect-ratio--object-xl {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100
    }

    .cover-xl {
        background-size: cover!important
    }

    .contain-xl {
        background-size: contain!important
    }

    .bg-center-xl {
        background-position: 50%
    }

    .bg-center-xl,.bg-top-xl {
        background-repeat: no-repeat
    }

    .bg-top-xl {
        background-position: top
    }

    .bg-right-xl {
        background-position: 100%
    }

    .bg-bottom-xl,.bg-right-xl {
        background-repeat: no-repeat
    }

    .bg-bottom-xl {
        background-position: bottom
    }

    .bg-left-xl {
        background-repeat: no-repeat;
        background-position: 0
    }

    .ba-xl {
        border-style: solid;
        border-width: 1px
    }

    .bt-xl {
        border-top-style: solid;
        border-top-width: 1px
    }

    .br-xl {
        border-right-style: solid;
        border-right-width: 1px
    }

    .bb-xl {
        border-bottom-style: solid;
        border-bottom-width: 1px
    }

    .bl-xl {
        border-left-style: solid;
        border-left-width: 1px
    }

    .bn-xl {
        border-style: none;
        border-width: 0
    }

    .br0-xl {
        border-radius: 0
    }

    .br1-xl {
        border-radius: .125rem
    }

    .br2-xl {
        border-radius: .25rem
    }

    .br3-xl {
        border-radius: .5rem
    }

    .br4-xl {
        border-radius: 1rem
    }

    .br-100-xl {
        border-radius: 100%
    }

    .br-pill-xl {
        border-radius: 9999px
    }

    .br--bottom-xl {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .br--top-xl {
        border-bottom-right-radius: 0
    }

    .br--right-xl,.br--top-xl {
        border-bottom-left-radius: 0
    }

    .br--right-xl {
        border-top-left-radius: 0
    }

    .br--left-xl {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .b--dotted-xl {
        border-style: dotted
    }

    .b--dashed-xl {
        border-style: dashed
    }

    .b--solid-xl {
        border-style: solid
    }

    .b--none-xl {
        border-style: none
    }

    .bw0-xl {
        border-width: 0
    }

    .bw1-xl {
        border-width: .125rem
    }

    .bw2-xl {
        border-width: .25rem
    }

    .bw3-xl {
        border-width: .5rem
    }

    .bw4-xl {
        border-width: 1rem
    }

    .bw5-xl {
        border-width: 2rem
    }

    .bt-0-xl {
        border-top-width: 0
    }

    .br-0-xl {
        border-right-width: 0
    }

    .bb-0-xl {
        border-bottom-width: 0
    }

    .bl-0-xl {
        border-left-width: 0
    }

    .shadow-1-xl {
        box-shadow: 0 0 4px 2px rgba(0,0,0,.2)
    }

    .shadow-2-xl {
        box-shadow: 0 0 8px 2px rgba(0,0,0,.2)
    }

    .shadow-3-xl {
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2)
    }

    .shadow-4-xl {
        box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2)
    }

    .shadow-5-xl {
        box-shadow: 4px 4px 8px 0 rgba(0,0,0,.2)
    }

    .pa0-xl {
        padding: 0
    }

    .ma0-xl,.na0-xl {
        margin: 0
    }

    .pl0-xl {
        padding-left: 0
    }

    .ml0-xl,.nl0-xl {
        margin-left: 0
    }

    .pr0-xl {
        padding-right: 0
    }

    .mr0-xl,.nr0-xl {
        margin-right: 0
    }

    .pt0-xl {
        padding-top: 0
    }

    .mt0-xl,.nt0-xl {
        margin-top: 0
    }

    .pb0-xl {
        padding-bottom: 0
    }

    .mb0-xl,.nb0-xl {
        margin-bottom: 0
    }

    .pv0-xl {
        padding-top: 0;
        padding-bottom: 0
    }

    .mv0-xl,.nv0-xl {
        margin-top: 0;
        margin-bottom: 0
    }

    .ph0-xl {
        padding-left: 0;
        padding-right: 0
    }

    .mh0-xl,.nh0-xl {
        margin-left: 0;
        margin-right: 0
    }

    .pa1-xl {
        padding: .125rem
    }

    .ma1-xl {
        margin: .125rem
    }

    .na1-xl {
        margin: -.125rem
    }

    .pl1-xl {
        padding-left: .125rem
    }

    .ml1-xl {
        margin-left: .125rem
    }

    .nl1-xl {
        margin-left: -.125rem
    }

    .pr1-xl {
        padding-right: .125rem
    }

    .mr1-xl {
        margin-right: .125rem
    }

    .nr1-xl {
        margin-right: -.125rem
    }

    .pt1-xl {
        padding-top: .125rem
    }

    .mt1-xl {
        margin-top: .125rem
    }

    .nt1-xl {
        margin-top: -.125rem
    }

    .pb1-xl {
        padding-bottom: .125rem
    }

    .mb1-xl {
        margin-bottom: .125rem
    }

    .nb1-xl {
        margin-bottom: -.125rem
    }

    .pv1-xl {
        padding-top: .125rem;
        padding-bottom: .125rem
    }

    .mv1-xl {
        margin-top: .125rem;
        margin-bottom: .125rem
    }

    .nv1-xl {
        margin-top: -.125rem;
        margin-bottom: -.125rem
    }

    .ph1-xl {
        padding-left: .125rem;
        padding-right: .125rem
    }

    .mh1-xl {
        margin-left: .125rem;
        margin-right: .125rem
    }

    .nh1-xl {
        margin-left: -.125rem;
        margin-right: -.125rem
    }

    .pa2-xl {
        padding: .25rem
    }

    .ma2-xl {
        margin: .25rem
    }

    .na2-xl {
        margin: -.25rem
    }

    .pl2-xl {
        padding-left: .25rem
    }

    .ml2-xl {
        margin-left: .25rem
    }

    .nl2-xl {
        margin-left: -.25rem
    }

    .pr2-xl {
        padding-right: .25rem
    }

    .mr2-xl {
        margin-right: .25rem
    }

    .nr2-xl {
        margin-right: -.25rem
    }

    .pt2-xl {
        padding-top: .25rem
    }

    .mt2-xl {
        margin-top: .25rem
    }

    .nt2-xl {
        margin-top: -.25rem
    }

    .pb2-xl {
        padding-bottom: .25rem
    }

    .mb2-xl {
        margin-bottom: .25rem
    }

    .nb2-xl {
        margin-bottom: -.25rem
    }

    .pv2-xl {
        padding-top: .25rem;
        padding-bottom: .25rem
    }

    .mv2-xl {
        margin-top: .25rem;
        margin-bottom: .25rem
    }

    .nv2-xl {
        margin-top: -.25rem;
        margin-bottom: -.25rem
    }

    .ph2-xl {
        padding-left: .25rem;
        padding-right: .25rem
    }

    .mh2-xl {
        margin-left: .25rem;
        margin-right: .25rem
    }

    .nh2-xl {
        margin-left: -.25rem;
        margin-right: -.25rem
    }

    .pa3-xl {
        padding: .5rem
    }

    .ma3-xl {
        margin: .5rem
    }

    .na3-xl {
        margin: -.5rem
    }

    .pl3-xl {
        padding-left: .5rem
    }

    .ml3-xl {
        margin-left: .5rem
    }

    .nl3-xl {
        margin-left: -.5rem
    }

    .pr3-xl {
        padding-right: .5rem
    }

    .mr3-xl {
        margin-right: .5rem
    }

    .nr3-xl {
        margin-right: -.5rem
    }

    .pt3-xl {
        padding-top: .5rem
    }

    .mt3-xl {
        margin-top: .5rem
    }

    .nt3-xl {
        margin-top: -.5rem
    }

    .pb3-xl {
        padding-bottom: .5rem
    }

    .mb3-xl {
        margin-bottom: .5rem
    }

    .nb3-xl {
        margin-bottom: -.5rem
    }

    .pv3-xl {
        padding-top: .5rem;
        padding-bottom: .5rem
    }

    .mv3-xl {
        margin-top: .5rem;
        margin-bottom: .5rem
    }

    .nv3-xl {
        margin-top: -.5rem;
        margin-bottom: -.5rem
    }

    .ph3-xl {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .mh3-xl {
        margin-left: .5rem;
        margin-right: .5rem
    }

    .nh3-xl {
        margin-left: -.5rem;
        margin-right: -.5rem
    }

    .pa4-xl {
        padding: .75rem
    }

    .ma4-xl {
        margin: .75rem
    }

    .na4-xl {
        margin: -.75rem
    }

    .pl4-xl {
        padding-left: .75rem
    }

    .ml4-xl {
        margin-left: .75rem
    }

    .nl4-xl {
        margin-left: -.75rem
    }

    .pr4-xl {
        padding-right: .75rem
    }

    .mr4-xl {
        margin-right: .75rem
    }

    .nr4-xl {
        margin-right: -.75rem
    }

    .pt4-xl {
        padding-top: .75rem
    }

    .mt4-xl {
        margin-top: .75rem
    }

    .nt4-xl {
        margin-top: -.75rem
    }

    .pb4-xl {
        padding-bottom: .75rem
    }

    .mb4-xl {
        margin-bottom: .75rem
    }

    .nb4-xl {
        margin-bottom: -.75rem
    }

    .pv4-xl {
        padding-top: .75rem;
        padding-bottom: .75rem
    }

    .mv4-xl {
        margin-top: .75rem;
        margin-bottom: .75rem
    }

    .nv4-xl {
        margin-top: -.75rem;
        margin-bottom: -.75rem
    }

    .ph4-xl {
        padding-left: .75rem;
        padding-right: .75rem
    }

    .mh4-xl {
        margin-left: .75rem;
        margin-right: .75rem
    }

    .nh4-xl {
        margin-left: -.75rem;
        margin-right: -.75rem
    }

    .pa5-xl {
        padding: 1rem
    }

    .ma5-xl {
        margin: 1rem
    }

    .na5-xl {
        margin: -1rem
    }

    .pl5-xl {
        padding-left: 1rem
    }

    .ml5-xl {
        margin-left: 1rem
    }

    .nl5-xl {
        margin-left: -1rem
    }

    .pr5-xl {
        padding-right: 1rem
    }

    .mr5-xl {
        margin-right: 1rem
    }

    .nr5-xl {
        margin-right: -1rem
    }

    .pt5-xl {
        padding-top: 1rem
    }

    .mt5-xl {
        margin-top: 1rem
    }

    .nt5-xl {
        margin-top: -1rem
    }

    .pb5-xl {
        padding-bottom: 1rem
    }

    .mb5-xl {
        margin-bottom: 1rem
    }

    .nb5-xl {
        margin-bottom: -1rem
    }

    .pv5-xl {
        padding-top: 1rem;
        padding-bottom: 1rem
    }

    .mv5-xl {
        margin-top: 1rem;
        margin-bottom: 1rem
    }

    .nv5-xl {
        margin-top: -1rem;
        margin-bottom: -1rem
    }

    .ph5-xl {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .mh5-xl {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .nh5-xl {
        margin-left: -1rem;
        margin-right: -1rem
    }

    .pa6-xl {
        padding: 1.5rem
    }

    .ma6-xl {
        margin: 1.5rem
    }

    .na6-xl {
        margin: -1.5rem
    }

    .pl6-xl {
        padding-left: 1.5rem
    }

    .ml6-xl {
        margin-left: 1.5rem
    }

    .nl6-xl {
        margin-left: -1.5rem
    }

    .pr6-xl {
        padding-right: 1.5rem
    }

    .mr6-xl {
        margin-right: 1.5rem
    }

    .nr6-xl {
        margin-right: -1.5rem
    }

    .pt6-xl {
        padding-top: 1.5rem
    }

    .mt6-xl {
        margin-top: 1.5rem
    }

    .nt6-xl {
        margin-top: -1.5rem
    }

    .pb6-xl {
        padding-bottom: 1.5rem
    }

    .mb6-xl {
        margin-bottom: 1.5rem
    }

    .nb6-xl {
        margin-bottom: -1.5rem
    }

    .pv6-xl {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem
    }

    .mv6-xl {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem
    }

    .nv6-xl {
        margin-top: -1.5rem;
        margin-bottom: -1.5rem
    }

    .ph6-xl {
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }

    .mh6-xl {
        margin-left: 1.5rem;
        margin-right: 1.5rem
    }

    .nh6-xl {
        margin-left: -1.5rem;
        margin-right: -1.5rem
    }

    .pa7-xl {
        padding: 2rem
    }

    .ma7-xl {
        margin: 2rem
    }

    .na7-xl {
        margin: -2rem
    }

    .pl7-xl {
        padding-left: 2rem
    }

    .ml7-xl {
        margin-left: 2rem
    }

    .nl7-xl {
        margin-left: -2rem
    }

    .pr7-xl {
        padding-right: 2rem
    }

    .mr7-xl {
        margin-right: 2rem
    }

    .nr7-xl {
        margin-right: -2rem
    }

    .pt7-xl {
        padding-top: 2rem
    }

    .mt7-xl {
        margin-top: 2rem
    }

    .nt7-xl {
        margin-top: -2rem
    }

    .pb7-xl {
        padding-bottom: 2rem
    }

    .mb7-xl {
        margin-bottom: 2rem
    }

    .nb7-xl {
        margin-bottom: -2rem
    }

    .pv7-xl {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .mv7-xl {
        margin-top: 2rem;
        margin-bottom: 2rem
    }

    .nv7-xl {
        margin-top: -2rem;
        margin-bottom: -2rem
    }

    .ph7-xl {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .mh7-xl {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .nh7-xl {
        margin-left: -2rem;
        margin-right: -2rem
    }

    .pa8-xl {
        padding: 3rem
    }

    .ma8-xl {
        margin: 3rem
    }

    .na8-xl {
        margin: -3rem
    }

    .pl8-xl {
        padding-left: 3rem
    }

    .ml8-xl {
        margin-left: 3rem
    }

    .nl8-xl {
        margin-left: -3rem
    }

    .pr8-xl {
        padding-right: 3rem
    }

    .mr8-xl {
        margin-right: 3rem
    }

    .nr8-xl {
        margin-right: -3rem
    }

    .pt8-xl {
        padding-top: 3rem
    }

    .mt8-xl {
        margin-top: 3rem
    }

    .nt8-xl {
        margin-top: -3rem
    }

    .pb8-xl {
        padding-bottom: 3rem
    }

    .mb8-xl {
        margin-bottom: 3rem
    }

    .nb8-xl {
        margin-bottom: -3rem
    }

    .pv8-xl {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .mv8-xl {
        margin-top: 3rem;
        margin-bottom: 3rem
    }

    .nv8-xl {
        margin-top: -3rem;
        margin-bottom: -3rem
    }

    .ph8-xl {
        padding-left: 3rem;
        padding-right: 3rem
    }

    .mh8-xl {
        margin-left: 3rem;
        margin-right: 3rem
    }

    .nh8-xl {
        margin-left: -3rem;
        margin-right: -3rem
    }

    .pa9-xl {
        padding: 4rem
    }

    .ma9-xl {
        margin: 4rem
    }

    .na9-xl {
        margin: -4rem
    }

    .pl9-xl {
        padding-left: 4rem
    }

    .ml9-xl {
        margin-left: 4rem
    }

    .nl9-xl {
        margin-left: -4rem
    }

    .pr9-xl {
        padding-right: 4rem
    }

    .mr9-xl {
        margin-right: 4rem
    }

    .nr9-xl {
        margin-right: -4rem
    }

    .pt9-xl {
        padding-top: 4rem
    }

    .mt9-xl {
        margin-top: 4rem
    }

    .nt9-xl {
        margin-top: -4rem
    }

    .pb9-xl {
        padding-bottom: 4rem
    }

    .mb9-xl {
        margin-bottom: 4rem
    }

    .nb9-xl {
        margin-bottom: -4rem
    }

    .pv9-xl {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .mv9-xl {
        margin-top: 4rem;
        margin-bottom: 4rem
    }

    .nv9-xl {
        margin-top: -4rem;
        margin-bottom: -4rem
    }

    .ph9-xl {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .mh9-xl {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .nh9-xl {
        margin-left: -4rem;
        margin-right: -4rem
    }

    .pa10-xl {
        padding: 8rem
    }

    .ma10-xl {
        margin: 8rem
    }

    .na10-xl {
        margin: -8rem
    }

    .pl10-xl {
        padding-left: 8rem
    }

    .ml10-xl {
        margin-left: 8rem
    }

    .nl10-xl {
        margin-left: -8rem
    }

    .pr10-xl {
        padding-right: 8rem
    }

    .mr10-xl {
        margin-right: 8rem
    }

    .nr10-xl {
        margin-right: -8rem
    }

    .pt10-xl {
        padding-top: 8rem
    }

    .mt10-xl {
        margin-top: 8rem
    }

    .nt10-xl {
        margin-top: -8rem
    }

    .pb10-xl {
        padding-bottom: 8rem
    }

    .mb10-xl {
        margin-bottom: 8rem
    }

    .nb10-xl {
        margin-bottom: -8rem
    }

    .pv10-xl {
        padding-top: 8rem;
        padding-bottom: 8rem
    }

    .mv10-xl {
        margin-top: 8rem;
        margin-bottom: 8rem
    }

    .nv10-xl {
        margin-top: -8rem;
        margin-bottom: -8rem
    }

    .ph10-xl {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .mh10-xl {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .nh10-xl {
        margin-left: -8rem;
        margin-right: -8rem
    }

    .pa11-xl {
        padding: 16rem
    }

    .ma11-xl {
        margin: 16rem
    }

    .na11-xl {
        margin: -16rem
    }

    .pl11-xl {
        padding-left: 16rem
    }

    .ml11-xl {
        margin-left: 16rem
    }

    .nl11-xl {
        margin-left: -16rem
    }

    .pr11-xl {
        padding-right: 16rem
    }

    .mr11-xl {
        margin-right: 16rem
    }

    .nr11-xl {
        margin-right: -16rem
    }

    .pt11-xl {
        padding-top: 16rem
    }

    .mt11-xl {
        margin-top: 16rem
    }

    .nt11-xl {
        margin-top: -16rem
    }

    .pb11-xl {
        padding-bottom: 16rem
    }

    .mb11-xl {
        margin-bottom: 16rem
    }

    .nb11-xl {
        margin-bottom: -16rem
    }

    .pv11-xl {
        padding-top: 16rem;
        padding-bottom: 16rem
    }

    .mv11-xl {
        margin-top: 16rem;
        margin-bottom: 16rem
    }

    .nv11-xl {
        margin-top: -16rem;
        margin-bottom: -16rem
    }

    .ph11-xl {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .mh11-xl {
        margin-left: 16rem;
        margin-right: 16rem
    }

    .nh11-xl {
        margin-left: -16rem;
        margin-right: -16rem
    }

    .top-0-xl {
        top: 0
    }

    .right-0-xl {
        right: 0
    }

    .bottom-0-xl {
        bottom: 0
    }

    .left-0-xl {
        left: 0
    }

    .top-1-xl {
        top: 1rem
    }

    .right-1-xl {
        right: 1rem
    }

    .bottom-1-xl {
        bottom: 1rem
    }

    .left-1-xl {
        left: 1rem
    }

    .top-2-xl {
        top: 2rem
    }

    .right-2-xl {
        right: 2rem
    }

    .bottom-2-xl {
        bottom: 2rem
    }

    .left-2-xl {
        left: 2rem
    }

    .top--1-xl {
        top: -1rem
    }

    .right--1-xl {
        right: -1rem
    }

    .bottom--1-xl {
        bottom: -1rem
    }

    .left--1-xl {
        left: -1rem
    }

    .top--2-xl {
        top: -2rem
    }

    .right--2-xl {
        right: -2rem
    }

    .bottom--2-xl {
        bottom: -2rem
    }

    .left--2-xl {
        left: -2rem
    }

    .absolute--fill-xl {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0
    }

    .cf-xl:after,.cf-xl:before {
        content: " ";
        display: table
    }

    .cf-xl:after {
        clear: both
    }

    .cl-xl {
        clear: left
    }

    .cr-xl {
        clear: right
    }

    .cb-xl {
        clear: both
    }

    .cn-xl {
        clear: none
    }

    .dn-xl {
        display: none
    }

    .di-xl {
        display: inline
    }

    .db-xl {
        display: block
    }

    .dib-xl {
        display: inline-block
    }

    .dit-xl {
        display: inline-table
    }

    .dt-xl {
        display: table
    }

    .dtc-xl {
        display: table-cell
    }

    .dt-row-xl {
        display: table-row
    }

    .dt-row-group-xl {
        display: table-row-group
    }

    .dt-column-xl {
        display: table-column
    }

    .dt-column-group-xl {
        display: table-column-group
    }

    .dt--fixed-xl {
        table-layout: fixed;
        width: 100%
    }

    .flex-xl {
        display: -webkit-box;
        display: flex
    }

    .inline-flex-xl {
        display: -webkit-inline-box;
        display: inline-flex
    }

    .flex-auto-xl {
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0
    }

    .flex-none-xl {
        -webkit-box-flex: 0;
        flex: none
    }

    .flex-column-xl {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column
    }

    .flex-row-xl {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row
    }

    .flex-wrap-xl {
        flex-wrap: wrap
    }

    .flex-nowrap-xl {
        flex-wrap: nowrap
    }

    .flex-wrap-reverse-xl {
        flex-wrap: wrap-reverse
    }

    .flex-column-reverse-xl {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        flex-direction: column-reverse
    }

    .flex-row-reverse-xl {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        flex-direction: row-reverse
    }

    .items-start-xl {
        -webkit-box-align: start;
        align-items: flex-start
    }

    .items-end-xl {
        -webkit-box-align: end;
        align-items: flex-end
    }

    .items-center-xl {
        -webkit-box-align: center;
        align-items: center
    }

    .items-baseline-xl {
        -webkit-box-align: baseline;
        align-items: baseline
    }

    .items-stretch-xl {
        -webkit-box-align: stretch;
        align-items: stretch
    }

    .self-start-xl {
        align-self: flex-start
    }

    .self-end-xl {
        align-self: flex-end
    }

    .self-center-xl {
        align-self: center
    }

    .self-baseline-xl {
        align-self: baseline
    }

    .self-stretch-xl {
        align-self: stretch
    }

    .justify-start-xl {
        -webkit-box-pack: start;
        justify-content: flex-start
    }

    .justify-end-xl {
        -webkit-box-pack: end;
        justify-content: flex-end
    }

    .justify-center-xl {
        -webkit-box-pack: center;
        justify-content: center
    }

    .justify-between-xl {
        -webkit-box-pack: justify;
        justify-content: space-between
    }

    .justify-around-xl {
        justify-content: space-around
    }

    .content-start-xl {
        align-content: flex-start
    }

    .content-end-xl {
        align-content: flex-end
    }

    .content-center-xl {
        align-content: center
    }

    .content-between-xl {
        align-content: space-between
    }

    .content-around-xl {
        align-content: space-around
    }

    .content-stretch-xl {
        align-content: stretch
    }

    .order-0-xl {
        -webkit-box-ordinal-group: 1;
        order: 0
    }

    .order-1-xl {
        -webkit-box-ordinal-group: 2;
        order: 1
    }

    .order-2-xl {
        -webkit-box-ordinal-group: 3;
        order: 2
    }

    .order-3-xl {
        -webkit-box-ordinal-group: 4;
        order: 3
    }

    .order-4-xl {
        -webkit-box-ordinal-group: 5;
        order: 4
    }

    .order-5-xl {
        -webkit-box-ordinal-group: 6;
        order: 5
    }

    .order-6-xl {
        -webkit-box-ordinal-group: 7;
        order: 6
    }

    .order-7-xl {
        -webkit-box-ordinal-group: 8;
        order: 7
    }

    .order-8-xl {
        -webkit-box-ordinal-group: 9;
        order: 8
    }

    .order-last-xl {
        -webkit-box-ordinal-group: 100000;
        order: 99999
    }

    .flex-grow-0-xl {
        -webkit-box-flex: 0;
        flex-grow: 0
    }

    .flex-grow-1-xl {
        -webkit-box-flex: 1;
        flex-grow: 1
    }

    .flex-shrink-0-xl {
        flex-shrink: 0
    }

    .flex-shrink-1-xl {
        flex-shrink: 1
    }

    .fl-xl {
        float: left
    }

    .fl-xl,.fr-xl {
        _display: inline
    }

    .fr-xl {
        float: right
    }

    .fn-xl {
        float: none
    }

    .i-xl {
        font-style: italic
    }

    .fs-normal-xl {
        font-style: normal
    }

    .h1-xl {
        height: 1rem
    }

    .h2-xl {
        height: 2rem
    }

    .h3-xl {
        height: 4rem
    }

    .h4-xl {
        height: 8rem
    }

    .h5-xl {
        height: 16rem
    }

    .h-25-xl {
        height: 25%
    }

    .h-50-xl {
        height: 50%
    }

    .h-75-xl {
        height: 75%
    }

    .h-100-xl {
        height: 100%
    }

    .min-h-100-xl {
        min-height: 100%
    }

    .vh-25-xl {
        height: 25vh
    }

    .vh-50-xl {
        height: 50vh
    }

    .vh-75-xl {
        height: 75vh
    }

    .vh-100-xl {
        height: 100vh
    }

    .min-vh-100-xl {
        min-height: 100vh
    }

    .h-auto-xl {
        height: auto
    }

    .h-inherit-xl {
        height: inherit
    }

    .h-small-xl {
        height: 2rem;
        box-sizing: border-box
    }

    .min-h-small-xl {
        min-height: 2rem;
        box-sizing: border-box
    }

    .h-regular-xl {
        height: 2.5rem;
        box-sizing: border-box
    }

    .min-h-regular-xl {
        min-height: 2.5rem;
        box-sizing: border-box
    }

    .h-large-xl {
        height: 3rem;
        box-sizing: border-box
    }

    .min-h-large-xl {
        min-height: 3rem;
        box-sizing: border-box
    }

    .tracked-xl {
        letter-spacing: .1em
    }

    .tracked-tight-xl {
        letter-spacing: -.05em
    }

    .tracked-mega-xl {
        letter-spacing: .25em
    }

    .lh-solid-xl {
        line-height: 1
    }

    .lh-title-xl {
        line-height: 1.25
    }

    .lh-copy-xl {
        line-height: 1.5
    }

    .mw1-xl {
        max-width: 1rem
    }

    .mw2-xl {
        max-width: 2rem
    }

    .mw3-xl {
        max-width: 4rem
    }

    .mw4-xl {
        max-width: 8rem
    }

    .mw5-xl {
        max-width: 16rem
    }

    .mw6-xl {
        max-width: 32rem
    }

    .mw7-xl {
        max-width: 48rem
    }

    .mw8-xl {
        max-width: 64rem
    }

    .mw9-xl {
        max-width: 96rem
    }

    .mw-none-xl {
        max-width: none
    }

    .mw-100-xl {
        max-width: 100%
    }

    .o-100-xl {
        opacity: 1
    }

    .o-90-xl {
        opacity: .9
    }

    .o-80-xl {
        opacity: .8
    }

    .o-70-xl {
        opacity: .7
    }

    .o-60-xl {
        opacity: .6
    }

    .o-50-xl {
        opacity: .5
    }

    .o-40-xl {
        opacity: .4
    }

    .o-30-xl {
        opacity: .3
    }

    .o-20-xl {
        opacity: .2
    }

    .o-10-xl {
        opacity: .1
    }

    .o-05-xl {
        opacity: .05
    }

    .o-025-xl {
        opacity: .025
    }

    .o-0-xl {
        opacity: 0
    }

    .rotate-45-xl {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .rotate-90-xl {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .rotate-135-xl {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg)
    }

    .rotate-180-xl {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .rotate-225-xl {
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg)
    }

    .rotate-270-xl {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg)
    }

    .rotate-315-xl {
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg)
    }

    .outline-xl {
        outline: 1px solid
    }

    .outline-transparent-xl {
        outline: 1px solid transparent
    }

    .outline-0-xl {
        outline: 0
    }

    .overflow-visible-xl {
        overflow: visible
    }

    .overflow-hidden-xl {
        overflow: hidden
    }

    .overflow-scroll-xl {
        overflow: scroll
    }

    .overflow-auto-xl {
        overflow: auto
    }

    .overflow-x-visible-xl {
        overflow-x: visible
    }

    .overflow-x-hidden-xl {
        overflow-x: hidden
    }

    .overflow-x-scroll-xl {
        overflow-x: scroll
    }

    .overflow-x-auto-xl {
        overflow-x: auto
    }

    .overflow-y-visible-xl {
        overflow-y: visible
    }

    .overflow-y-hidden-xl {
        overflow-y: hidden
    }

    .overflow-y-scroll-xl {
        overflow-y: scroll
    }

    .overflow-y-auto-xl {
        overflow-y: auto
    }

    .static-xl {
        position: static
    }

    .relative-xl {
        position: relative
    }

    .absolute-xl {
        position: absolute
    }

    .fixed-xl {
        position: fixed
    }

    .sticky-xl {
        position: -webkit-sticky;
        position: sticky
    }

    .strike-xl {
        text-decoration: line-through
    }

    .underline-xl {
        text-decoration: underline
    }

    .no-underline-xl {
        text-decoration: none
    }

    .tl-xl {
        text-align: left
    }

    .tr-xl {
        text-align: right
    }

    .tc-xl {
        text-align: center
    }

    .tj-xl {
        text-align: justify
    }

    .ttc-xl {
        text-transform: capitalize
    }

    .ttl-xl {
        text-transform: lowercase
    }

    .ttu-xl {
        text-transform: uppercase
    }

    .ttn-xl {
        text-transform: none
    }

    .f1-xl {
        font-size: 3rem
    }

    .f2-xl {
        font-size: 2.25rem
    }

    .f3-xl {
        font-size: 1.5rem
    }

    .f4-xl {
        font-size: 1.25rem
    }

    .f5-xl {
        font-size: 1rem
    }

    .f6-xl {
        font-size: .875rem
    }

    .f7-xl {
        font-size: .75rem
    }

    .measure-xl {
        max-width: 30em
    }

    .measure-wide-xl {
        max-width: 34em
    }

    .measure-narrow-xl {
        max-width: 20em
    }

    .small-caps-xl {
        font-variant: small-caps
    }

    .indent-xl {
        text-indent: 1em;
        margin-top: 0;
        margin-bottom: 0
    }

    .truncate-xl {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .t-heading-1-xl {
        font-size: 3rem
    }

    .t-heading-1-xl,.t-heading-2-xl {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-2-xl {
        font-size: 2.25rem
    }

    .t-heading-3-xl {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 700;
        font-size: 1.75rem;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-4-xl {
        font-size: 1.5rem
    }

    .t-heading-4-xl,.t-heading-5-xl {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-heading-5-xl {
        font-size: 1.25rem
    }

    .t-heading-6-xl {
        font-size: 1.25rem
    }

    .t-body-xl,.t-heading-6-xl,body {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-body-xl,body {
        font-size: 1rem
    }

    .t-small-xl {
        font-size: .875rem
    }

    .t-mini-xl,.t-small-xl {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0
    }

    .t-mini-xl {
        font-size: .75rem
    }

    .t-action-xl {
        font-size: 1rem
    }

    .t-action--small-xl,.t-action-xl {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-action--small-xl {
        font-size: .875rem
    }

    .t-action--large-xl {
        font-family: Lato-Regular,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0
    }

    .t-code-xl {
        font-family: Consolas,monaco,monospace;
        font-size: 1rem;
        text-transform: none;
        letter-spacing: 0
    }

    .normal-xl,.t-code-xl {
        font-weight: 400
    }

    .b-xl {
        font-weight: 700
    }

    .fw1-xl {
        font-weight: 100
    }

    .fw2-xl {
        font-weight: 200
    }

    .fw3-xl {
        font-weight: 300
    }

    .fw4-xl {
        font-weight: 400
    }

    .fw5-xl {
        font-weight: 500
    }

    .fw6-xl {
        font-weight: 600
    }

    .fw7-xl {
        font-weight: 700
    }

    .fw8-xl {
        font-weight: 800
    }

    .fw9-xl {
        font-weight: 900
    }

    .clip-xl {
        position: fixed!important;
        _position: absolute!important;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px,1px,1px,1px)
    }

    .ws-normal-xl {
        white-space: normal
    }

    .nowrap-xl {
        white-space: nowrap
    }

    .pre-xl {
        white-space: pre
    }

    .w1-xl {
        width: 1rem
    }

    .w2-xl {
        width: 2rem
    }

    .w3-xl {
        width: 4rem
    }

    .w4-xl {
        width: 8rem
    }

    .w5-xl {
        width: 16rem
    }

    .w-10-xl {
        width: 10%
    }

    .w-20-xl {
        width: 20%
    }

    .w-25-xl {
        width: 25%
    }

    .w-30-xl {
        width: 30%
    }

    .w-33-xl {
        width: 33%
    }

    .w-34-xl {
        width: 34%
    }

    .w-40-xl {
        width: 40%
    }

    .w-50-xl {
        width: 50%
    }

    .w-60-xl {
        width: 60%
    }

    .w-70-xl {
        width: 70%
    }

    .w-75-xl {
        width: 75%
    }

    .w-80-xl {
        width: 80%
    }

    .w-90-xl {
        width: 90%
    }

    .w-100-xl {
        width: 100%
    }

    .w-third-xl {
        width: 33.33333%
    }

    .w-two-thirds-xl {
        width: 66.66667%
    }

    .w-auto-xl {
        width: auto
    }

    .vw-10-xl {
        width: 10vw
    }

    .vw-20-xl {
        width: 20vw
    }

    .vw-25-xl {
        width: 25vw
    }

    .vw-30-xl {
        width: 30vw
    }

    .vw-33-xl {
        width: 33vw
    }

    .vw-34-xl {
        width: 34vw
    }

    .vw-40-xl {
        width: 40vw
    }

    .vw-50-xl {
        width: 50vw
    }

    .vw-60-xl {
        width: 60vw
    }

    .vw-70-xl {
        width: 70vw
    }

    .vw-75-xl {
        width: 75vw
    }

    .vw-80-xl {
        width: 80vw
    }

    .vw-90-xl {
        width: 90vw
    }

    .vw-100-xl {
        width: 100vw
    }

    .vw-third-xl {
        width: 33.33333vw
    }

    .vw-two-thirds-xl {
        width: 66.66667vw
    }
}

@-webkit-keyframes bounce {
    0%,20%,53%,80%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        -webkit-transform: translateZ(0);
        animation-timing-function: cubic-bezier(.215,.61,.355,1);
        transform: translateZ(0)
    }

    40%,43% {
        -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        -webkit-transform: translate3d(0,-30px,0);
        animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        transform: translate3d(0,-30px,0)
    }

    70% {
        -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        -webkit-transform: translate3d(0,-15px,0);
        animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        transform: translate3d(0,-15px,0)
    }

    90% {
        -webkit-transform: translate3d(0,-4px,0);
        transform: translate3d(0,-4px,0)
    }
}

@keyframes bounce {
    0%,20%,53%,80%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        -webkit-transform: translateZ(0);
        animation-timing-function: cubic-bezier(.215,.61,.355,1);
        transform: translateZ(0)
    }

    40%,43% {
        -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        -webkit-transform: translate3d(0,-30px,0);
        animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        transform: translate3d(0,-30px,0)
    }

    70% {
        -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        -webkit-transform: translate3d(0,-15px,0);
        animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        transform: translate3d(0,-15px,0)
    }

    90% {
        -webkit-transform: translate3d(0,-4px,0);
        transform: translate3d(0,-4px,0)
    }
}

.bounce {
    -webkit-animation-name: bounce;
    -webkit-transform-origin: center bottom;
    animation-name: bounce;
    transform-origin: center bottom
}

@-webkit-keyframes flash {
    0%,50%,to {
        opacity: 1
    }

    25%,75% {
        opacity: 0
    }
}

@keyframes flash {
    0%,50%,to {
        opacity: 1
    }

    25%,75% {
        opacity: 0
    }
}

.flash {
    -webkit-animation-name: flash;
    animation-name: flash
}

@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    50% {
        -webkit-transform: scale3d(1.05,1.05,1.05);
        transform: scale3d(1.05,1.05,1.05)
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

@keyframes pulse {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    50% {
        -webkit-transform: scale3d(1.05,1.05,1.05);
        transform: scale3d(1.05,1.05,1.05)
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

.pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse
}

@-webkit-keyframes rubberBand {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    30% {
        -webkit-transform: scale3d(1.25,.75,1);
        transform: scale3d(1.25,.75,1)
    }

    40% {
        -webkit-transform: scale3d(.75,1.25,1);
        transform: scale3d(.75,1.25,1)
    }

    50% {
        -webkit-transform: scale3d(1.15,.85,1);
        transform: scale3d(1.15,.85,1)
    }

    65% {
        -webkit-transform: scale3d(.95,1.05,1);
        transform: scale3d(.95,1.05,1)
    }

    75% {
        -webkit-transform: scale3d(1.05,.95,1);
        transform: scale3d(1.05,.95,1)
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

@keyframes rubberBand {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    30% {
        -webkit-transform: scale3d(1.25,.75,1);
        transform: scale3d(1.25,.75,1)
    }

    40% {
        -webkit-transform: scale3d(.75,1.25,1);
        transform: scale3d(.75,1.25,1)
    }

    50% {
        -webkit-transform: scale3d(1.15,.85,1);
        transform: scale3d(1.15,.85,1)
    }

    65% {
        -webkit-transform: scale3d(.95,1.05,1);
        transform: scale3d(.95,1.05,1)
    }

    75% {
        -webkit-transform: scale3d(1.05,.95,1);
        transform: scale3d(1.05,.95,1)
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

.rubberBand {
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand
}

@-webkit-keyframes shake {
    0%,to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    10%,30%,50%,70%,90% {
        -webkit-transform: translate3d(-10px,0,0);
        transform: translate3d(-10px,0,0)
    }

    20%,40%,60%,80% {
        -webkit-transform: translate3d(10px,0,0);
        transform: translate3d(10px,0,0)
    }
}

@keyframes shake {
    0%,to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    10%,30%,50%,70%,90% {
        -webkit-transform: translate3d(-10px,0,0);
        transform: translate3d(-10px,0,0)
    }

    20%,40%,60%,80% {
        -webkit-transform: translate3d(10px,0,0);
        transform: translate3d(10px,0,0)
    }
}

.shake {
    -webkit-animation-name: shake;
    animation-name: shake
}

@-webkit-keyframes headShake {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    6.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg)
    }

    18.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg)
    }

    31.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg)
    }

    43.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg)
    }

    50% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes headShake {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    6.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg)
    }

    18.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg)
    }

    31.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg)
    }

    43.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg)
    }

    50% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

.headShake {
    -webkit-animation-name: headShake;
    -webkit-animation-timing-function: ease-in-out;
    animation-name: headShake;
    animation-timing-function: ease-in-out
}

@-webkit-keyframes swing {
    20% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg)
    }

    40% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg)
    }

    60% {
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg)
    }

    80% {
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg)
    }

    to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
}

@keyframes swing {
    20% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg)
    }

    40% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg)
    }

    60% {
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg)
    }

    80% {
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg)
    }

    to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
}

.swing {
    -webkit-animation-name: swing;
    -webkit-transform-origin: top center;
    animation-name: swing;
    transform-origin: top center
}

@-webkit-keyframes tada {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    10%,20% {
        -webkit-transform: scale3d(.9,.9,.9) rotate(-3deg);
        transform: scale3d(.9,.9,.9) rotate(-3deg)
    }

    30%,50%,70%,90% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate(3deg);
        transform: scale3d(1.1,1.1,1.1) rotate(3deg)
    }

    40%,60%,80% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate(-3deg);
        transform: scale3d(1.1,1.1,1.1) rotate(-3deg)
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

@keyframes tada {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    10%,20% {
        -webkit-transform: scale3d(.9,.9,.9) rotate(-3deg);
        transform: scale3d(.9,.9,.9) rotate(-3deg)
    }

    30%,50%,70%,90% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate(3deg);
        transform: scale3d(1.1,1.1,1.1) rotate(3deg)
    }

    40%,60%,80% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate(-3deg);
        transform: scale3d(1.1,1.1,1.1) rotate(-3deg)
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

.tada {
    -webkit-animation-name: tada;
    animation-name: tada
}

@-webkit-keyframes wobble {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    15% {
        -webkit-transform: translate3d(-25%,0,0) rotate(-5deg);
        transform: translate3d(-25%,0,0) rotate(-5deg)
    }

    30% {
        -webkit-transform: translate3d(20%,0,0) rotate(3deg);
        transform: translate3d(20%,0,0) rotate(3deg)
    }

    45% {
        -webkit-transform: translate3d(-15%,0,0) rotate(-3deg);
        transform: translate3d(-15%,0,0) rotate(-3deg)
    }

    60% {
        -webkit-transform: translate3d(10%,0,0) rotate(2deg);
        transform: translate3d(10%,0,0) rotate(2deg)
    }

    75% {
        -webkit-transform: translate3d(-5%,0,0) rotate(-1deg);
        transform: translate3d(-5%,0,0) rotate(-1deg)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes wobble {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    15% {
        -webkit-transform: translate3d(-25%,0,0) rotate(-5deg);
        transform: translate3d(-25%,0,0) rotate(-5deg)
    }

    30% {
        -webkit-transform: translate3d(20%,0,0) rotate(3deg);
        transform: translate3d(20%,0,0) rotate(3deg)
    }

    45% {
        -webkit-transform: translate3d(-15%,0,0) rotate(-3deg);
        transform: translate3d(-15%,0,0) rotate(-3deg)
    }

    60% {
        -webkit-transform: translate3d(10%,0,0) rotate(2deg);
        transform: translate3d(10%,0,0) rotate(2deg)
    }

    75% {
        -webkit-transform: translate3d(-5%,0,0) rotate(-1deg);
        transform: translate3d(-5%,0,0) rotate(-1deg)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.wobble {
    -webkit-animation-name: wobble;
    animation-name: wobble
}

@-webkit-keyframes jello {
    0%,11.1%,to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    22.2% {
        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
        transform: skewX(-12.5deg) skewY(-12.5deg)
    }

    33.3% {
        -webkit-transform: skewX(6.25deg) skewY(6.25deg);
        transform: skewX(6.25deg) skewY(6.25deg)
    }

    44.4% {
        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
        transform: skewX(-3.125deg) skewY(-3.125deg)
    }

    55.5% {
        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
        transform: skewX(1.5625deg) skewY(1.5625deg)
    }

    66.6% {
        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);
        transform: skewX(-.78125deg) skewY(-.78125deg)
    }

    77.7% {
        -webkit-transform: skewX(.390625deg) skewY(.390625deg);
        transform: skewX(.390625deg) skewY(.390625deg)
    }

    88.8% {
        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);
        transform: skewX(-.1953125deg) skewY(-.1953125deg)
    }
}

@keyframes jello {
    0%,11.1%,to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    22.2% {
        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
        transform: skewX(-12.5deg) skewY(-12.5deg)
    }

    33.3% {
        -webkit-transform: skewX(6.25deg) skewY(6.25deg);
        transform: skewX(6.25deg) skewY(6.25deg)
    }

    44.4% {
        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
        transform: skewX(-3.125deg) skewY(-3.125deg)
    }

    55.5% {
        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
        transform: skewX(1.5625deg) skewY(1.5625deg)
    }

    66.6% {
        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);
        transform: skewX(-.78125deg) skewY(-.78125deg)
    }

    77.7% {
        -webkit-transform: skewX(.390625deg) skewY(.390625deg);
        transform: skewX(.390625deg) skewY(.390625deg)
    }

    88.8% {
        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);
        transform: skewX(-.1953125deg) skewY(-.1953125deg)
    }
}

.jello {
    -webkit-animation-name: jello;
    -webkit-transform-origin: center;
    animation-name: jello;
    transform-origin: center
}

@-webkit-keyframes heartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    28% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes heartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    28% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.heartBeat {
    -webkit-animation-duration: 1.3s;
    -webkit-animation-name: heartBeat;
    -webkit-animation-timing-function: ease-in-out;
    animation-duration: 1.3s;
    animation-name: heartBeat;
    animation-timing-function: ease-in-out
}

@-webkit-keyframes bounceIn {
    0%,20%,40%,60%,80%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: scale3d(.3,.3,.3);
        opacity: 0;
        transform: scale3d(.3,.3,.3)
    }

    20% {
        -webkit-transform: scale3d(1.1,1.1,1.1);
        transform: scale3d(1.1,1.1,1.1)
    }

    40% {
        -webkit-transform: scale3d(.9,.9,.9);
        transform: scale3d(.9,.9,.9)
    }

    60% {
        -webkit-transform: scale3d(1.03,1.03,1.03);
        opacity: 1;
        transform: scale3d(1.03,1.03,1.03)
    }

    80% {
        -webkit-transform: scale3d(.97,.97,.97);
        transform: scale3d(.97,.97,.97)
    }

    to {
        -webkit-transform: scaleX(1);
        opacity: 1;
        transform: scaleX(1)
    }
}

@keyframes bounceIn {
    0%,20%,40%,60%,80%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: scale3d(.3,.3,.3);
        opacity: 0;
        transform: scale3d(.3,.3,.3)
    }

    20% {
        -webkit-transform: scale3d(1.1,1.1,1.1);
        transform: scale3d(1.1,1.1,1.1)
    }

    40% {
        -webkit-transform: scale3d(.9,.9,.9);
        transform: scale3d(.9,.9,.9)
    }

    60% {
        -webkit-transform: scale3d(1.03,1.03,1.03);
        opacity: 1;
        transform: scale3d(1.03,1.03,1.03)
    }

    80% {
        -webkit-transform: scale3d(.97,.97,.97);
        transform: scale3d(.97,.97,.97)
    }

    to {
        -webkit-transform: scaleX(1);
        opacity: 1;
        transform: scaleX(1)
    }
}

.bounceIn {
    -webkit-animation-duration: .75s;
    -webkit-animation-name: bounceIn;
    animation-duration: .75s;
    animation-name: bounceIn
}

@-webkit-keyframes bounceInDown {
    0%,60%,75%,90%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: translate3d(0,-3000px,0);
        opacity: 0;
        transform: translate3d(0,-3000px,0)
    }

    60% {
        -webkit-transform: translate3d(0,25px,0);
        opacity: 1;
        transform: translate3d(0,25px,0)
    }

    75% {
        -webkit-transform: translate3d(0,-10px,0);
        transform: translate3d(0,-10px,0)
    }

    90% {
        -webkit-transform: translate3d(0,5px,0);
        transform: translate3d(0,5px,0)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes bounceInDown {
    0%,60%,75%,90%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: translate3d(0,-3000px,0);
        opacity: 0;
        transform: translate3d(0,-3000px,0)
    }

    60% {
        -webkit-transform: translate3d(0,25px,0);
        opacity: 1;
        transform: translate3d(0,25px,0)
    }

    75% {
        -webkit-transform: translate3d(0,-10px,0);
        transform: translate3d(0,-10px,0)
    }

    90% {
        -webkit-transform: translate3d(0,5px,0);
        transform: translate3d(0,5px,0)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown
}

@-webkit-keyframes bounceInLeft {
    0%,60%,75%,90%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: translate3d(-3000px,0,0);
        opacity: 0;
        transform: translate3d(-3000px,0,0)
    }

    60% {
        -webkit-transform: translate3d(25px,0,0);
        opacity: 1;
        transform: translate3d(25px,0,0)
    }

    75% {
        -webkit-transform: translate3d(-10px,0,0);
        transform: translate3d(-10px,0,0)
    }

    90% {
        -webkit-transform: translate3d(5px,0,0);
        transform: translate3d(5px,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes bounceInLeft {
    0%,60%,75%,90%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: translate3d(-3000px,0,0);
        opacity: 0;
        transform: translate3d(-3000px,0,0)
    }

    60% {
        -webkit-transform: translate3d(25px,0,0);
        opacity: 1;
        transform: translate3d(25px,0,0)
    }

    75% {
        -webkit-transform: translate3d(-10px,0,0);
        transform: translate3d(-10px,0,0)
    }

    90% {
        -webkit-transform: translate3d(5px,0,0);
        transform: translate3d(5px,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft
}

@-webkit-keyframes bounceInRight {
    0%,60%,75%,90%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: translate3d(3000px,0,0);
        opacity: 0;
        transform: translate3d(3000px,0,0)
    }

    60% {
        -webkit-transform: translate3d(-25px,0,0);
        opacity: 1;
        transform: translate3d(-25px,0,0)
    }

    75% {
        -webkit-transform: translate3d(10px,0,0);
        transform: translate3d(10px,0,0)
    }

    90% {
        -webkit-transform: translate3d(-5px,0,0);
        transform: translate3d(-5px,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes bounceInRight {
    0%,60%,75%,90%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: translate3d(3000px,0,0);
        opacity: 0;
        transform: translate3d(3000px,0,0)
    }

    60% {
        -webkit-transform: translate3d(-25px,0,0);
        opacity: 1;
        transform: translate3d(-25px,0,0)
    }

    75% {
        -webkit-transform: translate3d(10px,0,0);
        transform: translate3d(10px,0,0)
    }

    90% {
        -webkit-transform: translate3d(-5px,0,0);
        transform: translate3d(-5px,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight
}

@-webkit-keyframes bounceInUp {
    0%,60%,75%,90%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: translate3d(0,3000px,0);
        opacity: 0;
        transform: translate3d(0,3000px,0)
    }

    60% {
        -webkit-transform: translate3d(0,-20px,0);
        opacity: 1;
        transform: translate3d(0,-20px,0)
    }

    75% {
        -webkit-transform: translate3d(0,10px,0);
        transform: translate3d(0,10px,0)
    }

    90% {
        -webkit-transform: translate3d(0,-5px,0);
        transform: translate3d(0,-5px,0)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes bounceInUp {
    0%,60%,75%,90%,to {
        -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }

    0% {
        -webkit-transform: translate3d(0,3000px,0);
        opacity: 0;
        transform: translate3d(0,3000px,0)
    }

    60% {
        -webkit-transform: translate3d(0,-20px,0);
        opacity: 1;
        transform: translate3d(0,-20px,0)
    }

    75% {
        -webkit-transform: translate3d(0,10px,0);
        transform: translate3d(0,10px,0)
    }

    90% {
        -webkit-transform: translate3d(0,-5px,0);
        transform: translate3d(0,-5px,0)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp
}

@-webkit-keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(.9,.9,.9);
        transform: scale3d(.9,.9,.9)
    }

    50%,55% {
        -webkit-transform: scale3d(1.1,1.1,1.1);
        opacity: 1;
        transform: scale3d(1.1,1.1,1.1)
    }

    to {
        -webkit-transform: scale3d(.3,.3,.3);
        opacity: 0;
        transform: scale3d(.3,.3,.3)
    }
}

@keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(.9,.9,.9);
        transform: scale3d(.9,.9,.9)
    }

    50%,55% {
        -webkit-transform: scale3d(1.1,1.1,1.1);
        opacity: 1;
        transform: scale3d(1.1,1.1,1.1)
    }

    to {
        -webkit-transform: scale3d(.3,.3,.3);
        opacity: 0;
        transform: scale3d(.3,.3,.3)
    }
}

.bounceOut {
    -webkit-animation-duration: .75s;
    -webkit-animation-name: bounceOut;
    animation-duration: .75s;
    animation-name: bounceOut
}

@-webkit-keyframes bounceOutDown {
    20% {
        -webkit-transform: translate3d(0,10px,0);
        transform: translate3d(0,10px,0)
    }

    40%,45% {
        -webkit-transform: translate3d(0,-20px,0);
        opacity: 1;
        transform: translate3d(0,-20px,0)
    }

    to {
        -webkit-transform: translate3d(0,2000px,0);
        opacity: 0;
        transform: translate3d(0,2000px,0)
    }
}

@keyframes bounceOutDown {
    20% {
        -webkit-transform: translate3d(0,10px,0);
        transform: translate3d(0,10px,0)
    }

    40%,45% {
        -webkit-transform: translate3d(0,-20px,0);
        opacity: 1;
        transform: translate3d(0,-20px,0)
    }

    to {
        -webkit-transform: translate3d(0,2000px,0);
        opacity: 0;
        transform: translate3d(0,2000px,0)
    }
}

.bounceOutDown {
    -webkit-animation-name: bounceOutDown;
    animation-name: bounceOutDown
}

@-webkit-keyframes bounceOutLeft {
    20% {
        -webkit-transform: translate3d(20px,0,0);
        opacity: 1;
        transform: translate3d(20px,0,0)
    }

    to {
        -webkit-transform: translate3d(-2000px,0,0);
        opacity: 0;
        transform: translate3d(-2000px,0,0)
    }
}

@keyframes bounceOutLeft {
    20% {
        -webkit-transform: translate3d(20px,0,0);
        opacity: 1;
        transform: translate3d(20px,0,0)
    }

    to {
        -webkit-transform: translate3d(-2000px,0,0);
        opacity: 0;
        transform: translate3d(-2000px,0,0)
    }
}

.bounceOutLeft {
    -webkit-animation-name: bounceOutLeft;
    animation-name: bounceOutLeft
}

@-webkit-keyframes bounceOutRight {
    20% {
        -webkit-transform: translate3d(-20px,0,0);
        opacity: 1;
        transform: translate3d(-20px,0,0)
    }

    to {
        -webkit-transform: translate3d(2000px,0,0);
        opacity: 0;
        transform: translate3d(2000px,0,0)
    }
}

@keyframes bounceOutRight {
    20% {
        -webkit-transform: translate3d(-20px,0,0);
        opacity: 1;
        transform: translate3d(-20px,0,0)
    }

    to {
        -webkit-transform: translate3d(2000px,0,0);
        opacity: 0;
        transform: translate3d(2000px,0,0)
    }
}

.bounceOutRight {
    -webkit-animation-name: bounceOutRight;
    animation-name: bounceOutRight
}

@-webkit-keyframes bounceOutUp {
    20% {
        -webkit-transform: translate3d(0,-10px,0);
        transform: translate3d(0,-10px,0)
    }

    40%,45% {
        -webkit-transform: translate3d(0,20px,0);
        opacity: 1;
        transform: translate3d(0,20px,0)
    }

    to {
        -webkit-transform: translate3d(0,-2000px,0);
        opacity: 0;
        transform: translate3d(0,-2000px,0)
    }
}

@keyframes bounceOutUp {
    20% {
        -webkit-transform: translate3d(0,-10px,0);
        transform: translate3d(0,-10px,0)
    }

    40%,45% {
        -webkit-transform: translate3d(0,20px,0);
        opacity: 1;
        transform: translate3d(0,20px,0)
    }

    to {
        -webkit-transform: translate3d(0,-2000px,0);
        opacity: 0;
        transform: translate3d(0,-2000px,0)
    }
}

.bounceOutUp {
    -webkit-animation-name: bounceOutUp;
    animation-name: bounceOutUp
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn
}

@-webkit-keyframes fadeInDown {
    0% {
        -webkit-transform: translate3d(0,-100%,0);
        opacity: 0;
        transform: translate3d(0,-100%,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInDown {
    0% {
        -webkit-transform: translate3d(0,-100%,0);
        opacity: 0;
        transform: translate3d(0,-100%,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown
}

@-webkit-keyframes fadeInDownBig {
    0% {
        -webkit-transform: translate3d(0,-2000px,0);
        opacity: 0;
        transform: translate3d(0,-2000px,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInDownBig {
    0% {
        -webkit-transform: translate3d(0,-2000px,0);
        opacity: 0;
        transform: translate3d(0,-2000px,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInDownBig {
    -webkit-animation-name: fadeInDownBig;
    animation-name: fadeInDownBig
}

@-webkit-keyframes fadeInLeft {
    0% {
        -webkit-transform: translate3d(-100%,0,0);
        opacity: 0;
        transform: translate3d(-100%,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInLeft {
    0% {
        -webkit-transform: translate3d(-100%,0,0);
        opacity: 0;
        transform: translate3d(-100%,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft
}

@-webkit-keyframes fadeInLeftBig {
    0% {
        -webkit-transform: translate3d(-2000px,0,0);
        opacity: 0;
        transform: translate3d(-2000px,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInLeftBig {
    0% {
        -webkit-transform: translate3d(-2000px,0,0);
        opacity: 0;
        transform: translate3d(-2000px,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInLeftBig {
    -webkit-animation-name: fadeInLeftBig;
    animation-name: fadeInLeftBig
}

@-webkit-keyframes fadeInRight {
    0% {
        -webkit-transform: translate3d(100%,0,0);
        opacity: 0;
        transform: translate3d(100%,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInRight {
    0% {
        -webkit-transform: translate3d(100%,0,0);
        opacity: 0;
        transform: translate3d(100%,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight
}

@-webkit-keyframes fadeInRightBig {
    0% {
        -webkit-transform: translate3d(2000px,0,0);
        opacity: 0;
        transform: translate3d(2000px,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInRightBig {
    0% {
        -webkit-transform: translate3d(2000px,0,0);
        opacity: 0;
        transform: translate3d(2000px,0,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInRightBig {
    -webkit-animation-name: fadeInRightBig;
    animation-name: fadeInRightBig
}

@-webkit-keyframes fadeInUp {
    0% {
        -webkit-transform: translate3d(0,100%,0);
        opacity: 0;
        transform: translate3d(0,100%,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInUp {
    0% {
        -webkit-transform: translate3d(0,100%,0);
        opacity: 0;
        transform: translate3d(0,100%,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp
}

@-webkit-keyframes fadeInUpBig {
    0% {
        -webkit-transform: translate3d(0,2000px,0);
        opacity: 0;
        transform: translate3d(0,2000px,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInUpBig {
    0% {
        -webkit-transform: translate3d(0,2000px,0);
        opacity: 0;
        transform: translate3d(0,2000px,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInUpBig {
    -webkit-animation-name: fadeInUpBig;
    animation-name: fadeInUpBig
}

@-webkit-keyframes fadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut
}

@-webkit-keyframes fadeOutDown {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,100%,0);
        opacity: 0;
        transform: translate3d(0,100%,0)
    }
}

@keyframes fadeOutDown {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,100%,0);
        opacity: 0;
        transform: translate3d(0,100%,0)
    }
}

.fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown
}

@-webkit-keyframes fadeOutDownBig {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,2000px,0);
        opacity: 0;
        transform: translate3d(0,2000px,0)
    }
}

@keyframes fadeOutDownBig {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,2000px,0);
        opacity: 0;
        transform: translate3d(0,2000px,0)
    }
}

.fadeOutDownBig {
    -webkit-animation-name: fadeOutDownBig;
    animation-name: fadeOutDownBig
}

@-webkit-keyframes fadeOutLeft {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(-100%,0,0);
        opacity: 0;
        transform: translate3d(-100%,0,0)
    }
}

@keyframes fadeOutLeft {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(-100%,0,0);
        opacity: 0;
        transform: translate3d(-100%,0,0)
    }
}

.fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft
}

@-webkit-keyframes fadeOutLeftBig {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(-2000px,0,0);
        opacity: 0;
        transform: translate3d(-2000px,0,0)
    }
}

@keyframes fadeOutLeftBig {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(-2000px,0,0);
        opacity: 0;
        transform: translate3d(-2000px,0,0)
    }
}

.fadeOutLeftBig {
    -webkit-animation-name: fadeOutLeftBig;
    animation-name: fadeOutLeftBig
}

@-webkit-keyframes fadeOutRight {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(100%,0,0);
        opacity: 0;
        transform: translate3d(100%,0,0)
    }
}

@keyframes fadeOutRight {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(100%,0,0);
        opacity: 0;
        transform: translate3d(100%,0,0)
    }
}

.fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight
}

@-webkit-keyframes fadeOutRightBig {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(2000px,0,0);
        opacity: 0;
        transform: translate3d(2000px,0,0)
    }
}

@keyframes fadeOutRightBig {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(2000px,0,0);
        opacity: 0;
        transform: translate3d(2000px,0,0)
    }
}

.fadeOutRightBig {
    -webkit-animation-name: fadeOutRightBig;
    animation-name: fadeOutRightBig
}

@-webkit-keyframes fadeOutUp {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,-100%,0);
        opacity: 0;
        transform: translate3d(0,-100%,0)
    }
}

@keyframes fadeOutUp {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,-100%,0);
        opacity: 0;
        transform: translate3d(0,-100%,0)
    }
}

.fadeOutUp {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp
}

@-webkit-keyframes fadeOutUpBig {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,-2000px,0);
        opacity: 0;
        transform: translate3d(0,-2000px,0)
    }
}

@keyframes fadeOutUpBig {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(0,-2000px,0);
        opacity: 0;
        transform: translate3d(0,-2000px,0)
    }
}

.fadeOutUpBig {
    -webkit-animation-name: fadeOutUpBig;
    animation-name: fadeOutUpBig
}

@-webkit-keyframes flip {
    0% {
        -webkit-animation-timing-function: ease-out;
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        animation-timing-function: ease-out;
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)
    }

    40% {
        -webkit-animation-timing-function: ease-out;
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        animation-timing-function: ease-out;
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)
    }

    50% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)
    }

    80% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)
    }

    to {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)
    }
}

@keyframes flip {
    0% {
        -webkit-animation-timing-function: ease-out;
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        animation-timing-function: ease-out;
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)
    }

    40% {
        -webkit-animation-timing-function: ease-out;
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        animation-timing-function: ease-out;
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)
    }

    50% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)
    }

    80% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)
    }

    to {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)
    }
}

.animated.flip {
    -webkit-animation-name: flip;
    -webkit-backface-visibility: visible;
    animation-name: flip;
    backface-visibility: visible
}

@-webkit-keyframes flipInX {
    0% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateX(90deg);
        animation-timing-function: ease-in;
        opacity: 0;
        transform: perspective(400px) rotateX(90deg)
    }

    40% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateX(-20deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) rotateX(-20deg)
    }

    60% {
        -webkit-transform: perspective(400px) rotateX(10deg);
        opacity: 1;
        transform: perspective(400px) rotateX(10deg)
    }

    80% {
        -webkit-transform: perspective(400px) rotateX(-5deg);
        transform: perspective(400px) rotateX(-5deg)
    }

    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

@keyframes flipInX {
    0% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateX(90deg);
        animation-timing-function: ease-in;
        opacity: 0;
        transform: perspective(400px) rotateX(90deg)
    }

    40% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateX(-20deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) rotateX(-20deg)
    }

    60% {
        -webkit-transform: perspective(400px) rotateX(10deg);
        opacity: 1;
        transform: perspective(400px) rotateX(10deg)
    }

    80% {
        -webkit-transform: perspective(400px) rotateX(-5deg);
        transform: perspective(400px) rotateX(-5deg)
    }

    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

.flipInX {
    -webkit-animation-name: flipInX;
    -webkit-backface-visibility: visible!important;
    animation-name: flipInX;
    backface-visibility: visible!important
}

@-webkit-keyframes flipInY {
    0% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateY(90deg);
        animation-timing-function: ease-in;
        opacity: 0;
        transform: perspective(400px) rotateY(90deg)
    }

    40% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateY(-20deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) rotateY(-20deg)
    }

    60% {
        -webkit-transform: perspective(400px) rotateY(10deg);
        opacity: 1;
        transform: perspective(400px) rotateY(10deg)
    }

    80% {
        -webkit-transform: perspective(400px) rotateY(-5deg);
        transform: perspective(400px) rotateY(-5deg)
    }

    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

@keyframes flipInY {
    0% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateY(90deg);
        animation-timing-function: ease-in;
        opacity: 0;
        transform: perspective(400px) rotateY(90deg)
    }

    40% {
        -webkit-animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateY(-20deg);
        animation-timing-function: ease-in;
        transform: perspective(400px) rotateY(-20deg)
    }

    60% {
        -webkit-transform: perspective(400px) rotateY(10deg);
        opacity: 1;
        transform: perspective(400px) rotateY(10deg)
    }

    80% {
        -webkit-transform: perspective(400px) rotateY(-5deg);
        transform: perspective(400px) rotateY(-5deg)
    }

    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

.flipInY {
    -webkit-animation-name: flipInY;
    -webkit-backface-visibility: visible!important;
    animation-name: flipInY;
    backface-visibility: visible!important
}

@-webkit-keyframes flipOutX {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }

    30% {
        -webkit-transform: perspective(400px) rotateX(-20deg);
        opacity: 1;
        transform: perspective(400px) rotateX(-20deg)
    }

    to {
        -webkit-transform: perspective(400px) rotateX(90deg);
        opacity: 0;
        transform: perspective(400px) rotateX(90deg)
    }
}

@keyframes flipOutX {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }

    30% {
        -webkit-transform: perspective(400px) rotateX(-20deg);
        opacity: 1;
        transform: perspective(400px) rotateX(-20deg)
    }

    to {
        -webkit-transform: perspective(400px) rotateX(90deg);
        opacity: 0;
        transform: perspective(400px) rotateX(90deg)
    }
}

.flipOutX {
    -webkit-animation-duration: .75s;
    -webkit-animation-name: flipOutX;
    -webkit-backface-visibility: visible!important;
    animation-duration: .75s;
    animation-name: flipOutX;
    backface-visibility: visible!important
}

@-webkit-keyframes flipOutY {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }

    30% {
        -webkit-transform: perspective(400px) rotateY(-15deg);
        opacity: 1;
        transform: perspective(400px) rotateY(-15deg)
    }

    to {
        -webkit-transform: perspective(400px) rotateY(90deg);
        opacity: 0;
        transform: perspective(400px) rotateY(90deg)
    }
}

@keyframes flipOutY {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }

    30% {
        -webkit-transform: perspective(400px) rotateY(-15deg);
        opacity: 1;
        transform: perspective(400px) rotateY(-15deg)
    }

    to {
        -webkit-transform: perspective(400px) rotateY(90deg);
        opacity: 0;
        transform: perspective(400px) rotateY(90deg)
    }
}

.flipOutY {
    -webkit-animation-duration: .75s;
    -webkit-animation-name: flipOutY;
    -webkit-backface-visibility: visible!important;
    animation-duration: .75s;
    animation-name: flipOutY;
    backface-visibility: visible!important
}

@-webkit-keyframes lightSpeedIn {
    0% {
        -webkit-transform: translate3d(100%,0,0) skewX(-30deg);
        opacity: 0;
        transform: translate3d(100%,0,0) skewX(-30deg)
    }

    60% {
        -webkit-transform: skewX(20deg);
        opacity: 1;
        transform: skewX(20deg)
    }

    80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes lightSpeedIn {
    0% {
        -webkit-transform: translate3d(100%,0,0) skewX(-30deg);
        opacity: 0;
        transform: translate3d(100%,0,0) skewX(-30deg)
    }

    60% {
        -webkit-transform: skewX(20deg);
        opacity: 1;
        transform: skewX(20deg)
    }

    80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg)
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.lightSpeedIn {
    -webkit-animation-name: lightSpeedIn;
    -webkit-animation-timing-function: ease-out;
    animation-name: lightSpeedIn;
    animation-timing-function: ease-out
}

@-webkit-keyframes lightSpeedOut {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(100%,0,0) skewX(30deg);
        opacity: 0;
        transform: translate3d(100%,0,0) skewX(30deg)
    }
}

@keyframes lightSpeedOut {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(100%,0,0) skewX(30deg);
        opacity: 0;
        transform: translate3d(100%,0,0) skewX(30deg)
    }
}

.lightSpeedOut {
    -webkit-animation-name: lightSpeedOut;
    -webkit-animation-timing-function: ease-in;
    animation-name: lightSpeedOut;
    animation-timing-function: ease-in
}

@-webkit-keyframes rotateIn {
    0% {
        -webkit-transform: rotate(-200deg);
        -webkit-transform-origin: center;
        opacity: 0;
        transform: rotate(-200deg);
        transform-origin: center
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: center;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: center
    }
}

@keyframes rotateIn {
    0% {
        -webkit-transform: rotate(-200deg);
        -webkit-transform-origin: center;
        opacity: 0;
        transform: rotate(-200deg);
        transform-origin: center
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: center;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: center
    }
}

.rotateIn {
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn
}

@-webkit-keyframes rotateInDownLeft {
    0% {
        -webkit-transform: rotate(-45deg);
        -webkit-transform-origin: left bottom;
        opacity: 0;
        transform: rotate(-45deg);
        transform-origin: left bottom
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: left bottom;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: left bottom
    }
}

@keyframes rotateInDownLeft {
    0% {
        -webkit-transform: rotate(-45deg);
        -webkit-transform-origin: left bottom;
        opacity: 0;
        transform: rotate(-45deg);
        transform-origin: left bottom
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: left bottom;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: left bottom
    }
}

.rotateInDownLeft {
    -webkit-animation-name: rotateInDownLeft;
    animation-name: rotateInDownLeft
}

@-webkit-keyframes rotateInDownRight {
    0% {
        -webkit-transform: rotate(45deg);
        -webkit-transform-origin: right bottom;
        opacity: 0;
        transform: rotate(45deg);
        transform-origin: right bottom
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: right bottom;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: right bottom
    }
}

@keyframes rotateInDownRight {
    0% {
        -webkit-transform: rotate(45deg);
        -webkit-transform-origin: right bottom;
        opacity: 0;
        transform: rotate(45deg);
        transform-origin: right bottom
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: right bottom;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: right bottom
    }
}

.rotateInDownRight {
    -webkit-animation-name: rotateInDownRight;
    animation-name: rotateInDownRight
}

@-webkit-keyframes rotateInUpLeft {
    0% {
        -webkit-transform: rotate(45deg);
        -webkit-transform-origin: left bottom;
        opacity: 0;
        transform: rotate(45deg);
        transform-origin: left bottom
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: left bottom;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: left bottom
    }
}

@keyframes rotateInUpLeft {
    0% {
        -webkit-transform: rotate(45deg);
        -webkit-transform-origin: left bottom;
        opacity: 0;
        transform: rotate(45deg);
        transform-origin: left bottom
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: left bottom;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: left bottom
    }
}

.rotateInUpLeft {
    -webkit-animation-name: rotateInUpLeft;
    animation-name: rotateInUpLeft
}

@-webkit-keyframes rotateInUpRight {
    0% {
        -webkit-transform: rotate(-90deg);
        -webkit-transform-origin: right bottom;
        opacity: 0;
        transform: rotate(-90deg);
        transform-origin: right bottom
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: right bottom;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: right bottom
    }
}

@keyframes rotateInUpRight {
    0% {
        -webkit-transform: rotate(-90deg);
        -webkit-transform-origin: right bottom;
        opacity: 0;
        transform: rotate(-90deg);
        transform-origin: right bottom
    }

    to {
        -webkit-transform: translateZ(0);
        -webkit-transform-origin: right bottom;
        opacity: 1;
        transform: translateZ(0);
        transform-origin: right bottom
    }
}

.rotateInUpRight {
    -webkit-animation-name: rotateInUpRight;
    animation-name: rotateInUpRight
}

@-webkit-keyframes rotateOut {
    0% {
        -webkit-transform-origin: center;
        opacity: 1;
        transform-origin: center
    }

    to {
        -webkit-transform: rotate(200deg);
        -webkit-transform-origin: center;
        opacity: 0;
        transform: rotate(200deg);
        transform-origin: center
    }
}

@keyframes rotateOut {
    0% {
        -webkit-transform-origin: center;
        opacity: 1;
        transform-origin: center
    }

    to {
        -webkit-transform: rotate(200deg);
        -webkit-transform-origin: center;
        opacity: 0;
        transform: rotate(200deg);
        transform-origin: center
    }
}

.rotateOut {
    -webkit-animation-name: rotateOut;
    animation-name: rotateOut
}

@-webkit-keyframes rotateOutDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        opacity: 1;
        transform-origin: left bottom
    }

    to {
        -webkit-transform: rotate(45deg);
        -webkit-transform-origin: left bottom;
        opacity: 0;
        transform: rotate(45deg);
        transform-origin: left bottom
    }
}

@keyframes rotateOutDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        opacity: 1;
        transform-origin: left bottom
    }

    to {
        -webkit-transform: rotate(45deg);
        -webkit-transform-origin: left bottom;
        opacity: 0;
        transform: rotate(45deg);
        transform-origin: left bottom
    }
}

.rotateOutDownLeft {
    -webkit-animation-name: rotateOutDownLeft;
    animation-name: rotateOutDownLeft
}

@-webkit-keyframes rotateOutDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        opacity: 1;
        transform-origin: right bottom
    }

    to {
        -webkit-transform: rotate(-45deg);
        -webkit-transform-origin: right bottom;
        opacity: 0;
        transform: rotate(-45deg);
        transform-origin: right bottom
    }
}

@keyframes rotateOutDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        opacity: 1;
        transform-origin: right bottom
    }

    to {
        -webkit-transform: rotate(-45deg);
        -webkit-transform-origin: right bottom;
        opacity: 0;
        transform: rotate(-45deg);
        transform-origin: right bottom
    }
}

.rotateOutDownRight {
    -webkit-animation-name: rotateOutDownRight;
    animation-name: rotateOutDownRight
}

@-webkit-keyframes rotateOutUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        opacity: 1;
        transform-origin: left bottom
    }

    to {
        -webkit-transform: rotate(-45deg);
        -webkit-transform-origin: left bottom;
        opacity: 0;
        transform: rotate(-45deg);
        transform-origin: left bottom
    }
}

@keyframes rotateOutUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        opacity: 1;
        transform-origin: left bottom
    }

    to {
        -webkit-transform: rotate(-45deg);
        -webkit-transform-origin: left bottom;
        opacity: 0;
        transform: rotate(-45deg);
        transform-origin: left bottom
    }
}

.rotateOutUpLeft {
    -webkit-animation-name: rotateOutUpLeft;
    animation-name: rotateOutUpLeft
}

@-webkit-keyframes rotateOutUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        opacity: 1;
        transform-origin: right bottom
    }

    to {
        -webkit-transform: rotate(90deg);
        -webkit-transform-origin: right bottom;
        opacity: 0;
        transform: rotate(90deg);
        transform-origin: right bottom
    }
}

@keyframes rotateOutUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        opacity: 1;
        transform-origin: right bottom
    }

    to {
        -webkit-transform: rotate(90deg);
        -webkit-transform-origin: right bottom;
        opacity: 0;
        transform: rotate(90deg);
        transform-origin: right bottom
    }
}

.rotateOutUpRight {
    -webkit-animation-name: rotateOutUpRight;
    animation-name: rotateOutUpRight
}

@-webkit-keyframes hinge {
    0% {
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform-origin: top left;
        animation-timing-function: ease-in-out;
        transform-origin: top left
    }

    20%,60% {
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform: rotate(80deg);
        -webkit-transform-origin: top left;
        animation-timing-function: ease-in-out;
        transform: rotate(80deg);
        transform-origin: top left
    }

    40%,80% {
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform: rotate(60deg);
        -webkit-transform-origin: top left;
        animation-timing-function: ease-in-out;
        opacity: 1;
        transform: rotate(60deg);
        transform-origin: top left
    }

    to {
        -webkit-transform: translate3d(0,700px,0);
        opacity: 0;
        transform: translate3d(0,700px,0)
    }
}

@keyframes hinge {
    0% {
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform-origin: top left;
        animation-timing-function: ease-in-out;
        transform-origin: top left
    }

    20%,60% {
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform: rotate(80deg);
        -webkit-transform-origin: top left;
        animation-timing-function: ease-in-out;
        transform: rotate(80deg);
        transform-origin: top left
    }

    40%,80% {
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform: rotate(60deg);
        -webkit-transform-origin: top left;
        animation-timing-function: ease-in-out;
        opacity: 1;
        transform: rotate(60deg);
        transform-origin: top left
    }

    to {
        -webkit-transform: translate3d(0,700px,0);
        opacity: 0;
        transform: translate3d(0,700px,0)
    }
}

.hinge {
    -webkit-animation-duration: 2s;
    -webkit-animation-name: hinge;
    animation-duration: 2s;
    animation-name: hinge
}

@-webkit-keyframes jackInTheBox {
    0% {
        -webkit-transform: scale(.1) rotate(30deg);
        -webkit-transform-origin: center bottom;
        opacity: 0;
        transform: scale(.1) rotate(30deg);
        transform-origin: center bottom
    }

    50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg)
    }

    70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg)
    }

    to {
        -webkit-transform: scale(1);
        opacity: 1;
        transform: scale(1)
    }
}

@keyframes jackInTheBox {
    0% {
        -webkit-transform: scale(.1) rotate(30deg);
        -webkit-transform-origin: center bottom;
        opacity: 0;
        transform: scale(.1) rotate(30deg);
        transform-origin: center bottom
    }

    50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg)
    }

    70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg)
    }

    to {
        -webkit-transform: scale(1);
        opacity: 1;
        transform: scale(1)
    }
}

.jackInTheBox {
    -webkit-animation-name: jackInTheBox;
    animation-name: jackInTheBox
}

@-webkit-keyframes rollIn {
    0% {
        -webkit-transform: translate3d(-100%,0,0) rotate(-120deg);
        opacity: 0;
        transform: translate3d(-100%,0,0) rotate(-120deg)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes rollIn {
    0% {
        -webkit-transform: translate3d(-100%,0,0) rotate(-120deg);
        opacity: 0;
        transform: translate3d(-100%,0,0) rotate(-120deg)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.rollIn {
    -webkit-animation-name: rollIn;
    animation-name: rollIn
}

@-webkit-keyframes rollOut {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(100%,0,0) rotate(120deg);
        opacity: 0;
        transform: translate3d(100%,0,0) rotate(120deg)
    }
}

@keyframes rollOut {
    0% {
        opacity: 1
    }

    to {
        -webkit-transform: translate3d(100%,0,0) rotate(120deg);
        opacity: 0;
        transform: translate3d(100%,0,0) rotate(120deg)
    }
}

.rollOut {
    -webkit-animation-name: rollOut;
    animation-name: rollOut
}

@-webkit-keyframes zoomIn {
    0% {
        -webkit-transform: scale3d(.3,.3,.3);
        opacity: 0;
        transform: scale3d(.3,.3,.3)
    }

    50% {
        opacity: 1
    }
}

@keyframes zoomIn {
    0% {
        -webkit-transform: scale3d(.3,.3,.3);
        opacity: 0;
        transform: scale3d(.3,.3,.3)
    }

    50% {
        opacity: 1
    }
}

.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn
}

@-webkit-keyframes zoomInDown {
    0% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0)
    }

    60% {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(0,60px,0)
    }
}

@keyframes zoomInDown {
    0% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0)
    }

    60% {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(0,60px,0)
    }
}

.zoomInDown {
    -webkit-animation-name: zoomInDown;
    animation-name: zoomInDown
}

@-webkit-keyframes zoomInLeft {
    0% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0)
    }

    60% {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(10px,0,0);
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(10px,0,0)
    }
}

@keyframes zoomInLeft {
    0% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0)
    }

    60% {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(10px,0,0);
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(10px,0,0)
    }
}

.zoomInLeft {
    -webkit-animation-name: zoomInLeft;
    animation-name: zoomInLeft
}

@-webkit-keyframes zoomInRight {
    0% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(1000px,0,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(1000px,0,0)
    }

    60% {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(-10px,0,0);
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(-10px,0,0)
    }
}

@keyframes zoomInRight {
    0% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(1000px,0,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(1000px,0,0)
    }

    60% {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(-10px,0,0);
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(-10px,0,0)
    }
}

.zoomInRight {
    -webkit-animation-name: zoomInRight;
    animation-name: zoomInRight
}

@-webkit-keyframes zoomInUp {
    0% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(0,1000px,0)
    }

    60% {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(0,-60px,0)
    }
}

@keyframes zoomInUp {
    0% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(0,1000px,0)
    }

    60% {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(0,-60px,0)
    }
}

.zoomInUp {
    -webkit-animation-name: zoomInUp;
    animation-name: zoomInUp
}

@-webkit-keyframes zoomOut {
    0% {
        opacity: 1
    }

    50% {
        -webkit-transform: scale3d(.3,.3,.3);
        opacity: 0;
        transform: scale3d(.3,.3,.3)
    }

    to {
        opacity: 0
    }
}

@keyframes zoomOut {
    0% {
        opacity: 1
    }

    50% {
        -webkit-transform: scale3d(.3,.3,.3);
        opacity: 0;
        transform: scale3d(.3,.3,.3)
    }

    to {
        opacity: 0
    }
}

.zoomOut {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut
}

@-webkit-keyframes zoomOutDown {
    40% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(0,-60px,0)
    }

    to {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
        -webkit-transform-origin: center bottom;
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
        transform-origin: center bottom
    }
}

@keyframes zoomOutDown {
    40% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(0,-60px,0)
    }

    to {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
        -webkit-transform-origin: center bottom;
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
        transform-origin: center bottom
    }
}

.zoomOutDown {
    -webkit-animation-name: zoomOutDown;
    animation-name: zoomOutDown
}

@-webkit-keyframes zoomOutLeft {
    40% {
        -webkit-transform: scale3d(.475,.475,.475) translate3d(42px,0,0);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(42px,0,0)
    }

    to {
        -webkit-transform: scale(.1) translate3d(-2000px,0,0);
        -webkit-transform-origin: left center;
        opacity: 0;
        transform: scale(.1) translate3d(-2000px,0,0);
        transform-origin: left center
    }
}

@keyframes zoomOutLeft {
    40% {
        -webkit-transform: scale3d(.475,.475,.475) translate3d(42px,0,0);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(42px,0,0)
    }

    to {
        -webkit-transform: scale(.1) translate3d(-2000px,0,0);
        -webkit-transform-origin: left center;
        opacity: 0;
        transform: scale(.1) translate3d(-2000px,0,0);
        transform-origin: left center
    }
}

.zoomOutLeft {
    -webkit-animation-name: zoomOutLeft;
    animation-name: zoomOutLeft
}

@-webkit-keyframes zoomOutRight {
    40% {
        -webkit-transform: scale3d(.475,.475,.475) translate3d(-42px,0,0);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(-42px,0,0)
    }

    to {
        -webkit-transform: scale(.1) translate3d(2000px,0,0);
        -webkit-transform-origin: right center;
        opacity: 0;
        transform: scale(.1) translate3d(2000px,0,0);
        transform-origin: right center
    }
}

@keyframes zoomOutRight {
    40% {
        -webkit-transform: scale3d(.475,.475,.475) translate3d(-42px,0,0);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(-42px,0,0)
    }

    to {
        -webkit-transform: scale(.1) translate3d(2000px,0,0);
        -webkit-transform-origin: right center;
        opacity: 0;
        transform: scale(.1) translate3d(2000px,0,0);
        transform-origin: right center
    }
}

.zoomOutRight {
    -webkit-animation-name: zoomOutRight;
    animation-name: zoomOutRight
}

@-webkit-keyframes zoomOutUp {
    40% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(0,60px,0)
    }

    to {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
        -webkit-transform-origin: center bottom;
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
        transform-origin: center bottom
    }
}

@keyframes zoomOutUp {
    40% {
        -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        opacity: 1;
        transform: scale3d(.475,.475,.475) translate3d(0,60px,0)
    }

    to {
        -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
        -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
        -webkit-transform-origin: center bottom;
        animation-timing-function: cubic-bezier(.175,.885,.32,1);
        opacity: 0;
        transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
        transform-origin: center bottom
    }
}

.zoomOutUp {
    -webkit-animation-name: zoomOutUp;
    animation-name: zoomOutUp
}

@-webkit-keyframes slideInDown {
    0% {
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes slideInDown {
    0% {
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.slideInDown {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown
}

@-webkit-keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft
}

@-webkit-keyframes slideInRight {
    0% {
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes slideInRight {
    0% {
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight
}

@-webkit-keyframes slideInUp {
    0% {
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes slideInUp {
    0% {
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.slideInUp {
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp
}

@-webkit-keyframes slideOutDown {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        visibility: hidden
    }
}

@keyframes slideOutDown {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        visibility: hidden
    }
}

.slideOutDown {
    -webkit-animation-name: slideOutDown;
    animation-name: slideOutDown
}

@-webkit-keyframes slideOutLeft {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        visibility: hidden
    }
}

@keyframes slideOutLeft {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        visibility: hidden
    }
}

.slideOutLeft {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft
}

@-webkit-keyframes slideOutRight {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        visibility: hidden
    }
}

@keyframes slideOutRight {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        visibility: hidden
    }
}

.slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight
}

@-webkit-keyframes slideOutUp {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
        visibility: hidden
    }
}

@keyframes slideOutUp {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
        visibility: hidden
    }
}

.slideOutUp {
    -webkit-animation-name: slideOutUp;
    animation-name: slideOutUp
}

.animated {
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-duration: 1s;
    animation-fill-mode: both
}

.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}

.animated.delay-1s {
    -webkit-animation-delay: 1s;
    animation-delay: 1s
}

.animated.delay-2s {
    -webkit-animation-delay: 2s;
    animation-delay: 2s
}

.animated.delay-3s {
    -webkit-animation-delay: 3s;
    animation-delay: 3s
}

.animated.delay-4s {
    -webkit-animation-delay: 4s;
    animation-delay: 4s
}

.animated.delay-5s {
    -webkit-animation-delay: 5s;
    animation-delay: 5s
}

.animated.fast {
    -webkit-animation-duration: .8s;
    animation-duration: .8s
}

.animated.faster {
    -webkit-animation-duration: .5s;
    animation-duration: .5s
}

.animated.slow {
    -webkit-animation-duration: 2s;
    animation-duration: 2s
}

.animated.slower {
    -webkit-animation-duration: 3s;
    animation-duration: 3s
}

@media (prefers-reduced-motion) {
    .animated {
        -webkit-animation: unset!important;
        -webkit-transition: none!important;
        animation: unset!important;
        transition: none!important
    }
}

@-webkit-keyframes vtex-render-runtime-8-x-slide {
    0% {
        transform: translate3d(-50%,0,0)
    }

    to {
        transform: translateZ(0)
    }
}

@keyframes vtex-render-runtime-8-x-slide {
    0% {
        transform: translate3d(-50%,0,0)
    }

    to {
        transform: translateZ(0)
    }
}

.vtex-render-runtime-8-x-slide {
    -webkit-animation: vtex-render-runtime-8-x-slide 1.5s linear infinite;
    animation: vtex-render-runtime-8-x-slide 1.5s linear infinite
}

.vtex-render-runtime-8-x-lazyload.lazyload {
    opacity: 0
}

@layer sl-tokens {
    :root {
        --sl-space-0: 0rem;
        --sl-space-1: 0.25rem;
        --sl-space-2: 0.5rem;
        --sl-space-3: 0.75rem;
        --sl-space-4: 1rem;
        --sl-space-5: 1.25rem;
        --sl-space-6: 1.5rem;
        --sl-space-7: 1.75rem;
        --sl-space-8: 2rem;
        --sl-space-10: 2.5rem;
        --sl-space-12: 3rem;
        --sl-space-16: 4rem;
        --sl-space-20: 5rem;
        --sl-space-24: 6rem;
        --sl-space-28: 7rem;
        --sl-space-32: 8rem;
        --sl-space-05: 0.125rem;
        --sl-space-gap: var(--sl-space-4);
        --sl-color-gray-0: #fff;
        --sl-color-gray-1: #f5f5f5;
        --sl-color-gray-2: #ebebeb;
        --sl-color-gray-3: #e0e0e0;
        --sl-color-gray-4: #d6d6d6;
        --sl-color-gray-5: #c2c2c2;
        --sl-color-gray-6: #adadad;
        --sl-color-gray-7: #999;
        --sl-color-gray-8: #858585;
        --sl-color-gray-9: #707070;
        --sl-color-gray-10: #5c5c5c;
        --sl-color-gray-11: #3d3d3d;
        --sl-color-gray-12: #1f1f1f;
        --sl-color-gray-13: #000;
        --sl-color-red-1: #fdf6f5;
        --sl-color-red-2: #ffedea;
        --sl-color-red-3: #ffdfd9;
        --sl-color-red-4: #ffd0c7;
        --sl-color-red-5: #ffbbad;
        --sl-color-red-6: #ff9e8b;
        --sl-color-red-7: #ff7f68;
        --sl-color-red-8: #f95d47;
        --sl-color-red-9: #ec3727;
        --sl-color-red-10: #d31a15;
        --sl-color-red-11: #b40202;
        --sl-color-red-12: #940303;
        --sl-color-red-13: #720000;
        --sl-color-orange-1: #fdf5e9;
        --sl-color-orange-2: #ffedcd;
        --sl-color-orange-3: #ffe0ae;
        --sl-color-orange-4: #fed392;
        --sl-color-orange-5: #febc64;
        --sl-color-orange-6: #ffa138;
        --sl-color-orange-7: #f78612;
        --sl-color-orange-8: #e57001;
        --sl-color-orange-9: #cc5e01;
        --sl-color-orange-10: #b24d01;
        --sl-color-orange-11: #963e01;
        --sl-color-orange-12: #7b3001;
        --sl-color-orange-13: #622401;
        --sl-color-yellow-1: #fbf7d4;
        --sl-color-yellow-2: #fdf5ad;
        --sl-color-yellow-3: #faec6d;
        --sl-color-yellow-4: #fade1e;
        --sl-color-yellow-5: #e9c701;
        --sl-color-yellow-6: #d8b401;
        --sl-color-yellow-7: #c5a001;
        --sl-color-yellow-8: #b18d01;
        --sl-color-yellow-9: #9c7901;
        --sl-color-yellow-10: #866701;
        --sl-color-yellow-11: #715401;
        --sl-color-yellow-12: #5c4401;
        --sl-color-yellow-13: #493401;
        --sl-color-green-1: #e9fce3;
        --sl-color-green-2: #cefdc0;
        --sl-color-green-3: #aff79e;
        --sl-color-green-4: #97ef86;
        --sl-color-green-5: #74e26c;
        --sl-color-green-6: #4fd051;
        --sl-color-green-7: #28bc37;
        --sl-color-green-8: #08a822;
        --sl-color-green-9: #019213;
        --sl-color-green-10: #017d10;
        --sl-color-green-11: #016810;
        --sl-color-green-12: #01540e;
        --sl-color-green-13: #01410b;
        --sl-color-teal-1: #e9faf8;
        --sl-color-teal-2: #cff8f4;
        --sl-color-teal-3: #abf2eb;
        --sl-color-teal-4: #8deae3;
        --sl-color-teal-5: #66dbd3;
        --sl-color-teal-6: #40cac2;
        --sl-color-teal-7: #10b6af;
        --sl-color-teal-8: #01a29b;
        --sl-color-teal-9: #018d88;
        --sl-color-teal-10: #017873;
        --sl-color-teal-11: #016460;
        --sl-color-teal-12: #0d504d;
        --sl-color-teal-13: #133d3b;
        --sl-color-blue-1: #f1f8fd;
        --sl-color-blue-2: #e1f3ff;
        --sl-color-blue-3: #cbe9ff;
        --sl-color-blue-4: #b6dfff;
        --sl-color-blue-5: #97cffe;
        --sl-color-blue-6: #79bcfb;
        --sl-color-blue-7: #5aa8f7;
        --sl-color-blue-8: #3993f4;
        --sl-color-blue-9: #157bf4;
        --sl-color-blue-10: #0366dd;
        --sl-color-blue-11: #0155b7;
        --sl-color-blue-12: #014592;
        --sl-color-blue-13: #013672;
        --sl-color-purple-1: #f9f5fd;
        --sl-color-purple-2: #f5eafe;
        --sl-color-purple-3: #eddcfe;
        --sl-color-purple-4: #e5cffe;
        --sl-color-purple-5: #dabafd;
        --sl-color-purple-6: #cba3fc;
        --sl-color-purple-7: #bc8afb;
        --sl-color-purple-8: #ad71f8;
        --sl-color-purple-9: #9c56f3;
        --sl-color-purple-10: #883ce6;
        --sl-color-purple-11: #7225d2;
        --sl-color-purple-12: #5c12b6;
        --sl-color-purple-13: #460b93;
        --sl-color-pink-1: #fdf5f7;
        --sl-color-pink-2: #ffebf2;
        --sl-color-pink-3: #ffdfeb;
        --sl-color-pink-4: #ffc8dc;
        --sl-color-pink-5: #feb2cd;
        --sl-color-pink-6: #ff98bf;
        --sl-color-pink-7: #fe78ac;
        --sl-color-pink-8: #ef5997;
        --sl-color-pink-9: #de387f;
        --sl-color-pink-10: #ca226a;
        --sl-color-pink-11: #af0956;
        --sl-color-pink-12: #8f0246;
        --sl-color-pink-13: #74043b;
        --sl-color-cyan-1: #e6fafd;
        --sl-color-cyan-2: #c6f9ff;
        --sl-color-cyan-3: #a5f1ff;
        --sl-color-cyan-4: #89e8fb;
        --sl-color-cyan-5: #61d9f4;
        --sl-color-cyan-6: #34c6e9;
        --sl-color-cyan-7: #13b1db;
        --sl-color-cyan-8: #029dc9;
        --sl-color-cyan-9: #0187b5;
        --sl-color-cyan-10: #0172a0;
        --sl-color-cyan-11: #015e8a;
        --sl-color-cyan-12: #014b74;
        --sl-color-cyan-13: #013a5e;
        --sl-fg-base: var(--sl-color-gray-12);
        --sl-fg-base-soft: var(--sl-color-gray-9);
        --sl-fg-base-disabled: var(--sl-color-gray-7);
        --sl-fg-inverted: var(--sl-color-gray-0);
        --sl-fg-warning: var(--sl-color-yellow-9);
        --sl-fg-success: var(--sl-color-green-9);
        --sl-fg-informational: var(--sl-color-blue-9);
        --sl-fg-muted: var(--sl-color-gray-11);
        --sl-fg-muted-hover: var(--sl-color-gray-12);
        --sl-fg-muted-pressed: var(--sl-color-gray-13);
        --sl-fg-accent: var(--sl-color-blue-10);
        --sl-fg-accent-hover: var(--sl-color-blue-11);
        --sl-fg-accent-pressed: var(--sl-color-blue-12);
        --sl-fg-critical: var(--sl-color-red-10);
        --sl-fg-critical-hover: var(--sl-color-red-11);
        --sl-fg-critical-pressed: var(--sl-color-red-12);
        --sl-bg-base: var(--sl-color-gray-0);
        --sl-bg-base-disabled: color-mix(in srgb,var(--sl-color-gray-12) 5%,transparent);
        --sl-bg-base-strong: var(--sl-color-gray-3);
        --sl-bg-base-strong-disabled: var(--sl-color-gray-6);
        --sl-bg-base-soft: var(--sl-color-gray-1);
        --sl-bg-warning: var(--sl-color-yellow-1);
        --sl-bg-success: var(--sl-color-green-1);
        --sl-bg-informational: var(--sl-color-blue-1);
        --sl-bg-inverted: var(--sl-color-gray-12);
        --sl-bg-inverted-strong: color-mix(in srgb,var(--sl-color-gray-12) 50%,transparent);
        --sl-bg-muted: color-mix(in srgb,var(--sl-color-gray-12) 5%,transparent);
        --sl-bg-muted-hover: color-mix(in srgb,var(--sl-color-gray-12) 10%,transparent);
        --sl-bg-muted-pressed: color-mix(in srgb,var(--sl-color-gray-12) 15%,transparent);
        --sl-bg-muted-plain: color-mix(in srgb,var(--sl-color-gray-12) 0%,transparent);
        --sl-bg-muted-plain-hover: color-mix(in srgb,var(--sl-color-gray-12) 5%,transparent);
        --sl-bg-muted-plain-pressed: color-mix(in srgb,var(--sl-color-gray-12) 10%,transparent);
        --sl-bg-accent: var(--sl-color-blue-2);
        --sl-bg-accent-hover: var(--sl-color-blue-3);
        --sl-bg-accent-pressed: var(--sl-color-blue-4);
        --sl-bg-accent-plain: color-mix(in srgb,var(--sl-color-blue-10) 0%,transparent);
        --sl-bg-accent-plain-hover: color-mix(in srgb,var(--sl-color-blue-10) 5%,transparent);
        --sl-bg-accent-plain-pressed: color-mix(in srgb,var(--sl-color-blue-10) 10%,transparent);
        --sl-bg-accent-strong: var(--sl-color-blue-10);
        --sl-bg-accent-strong-hover: var(--sl-color-blue-11);
        --sl-bg-accent-strong-pressed: var(--sl-color-blue-12);
        --sl-bg-critical: var(--sl-color-red-1);
        --sl-bg-critical-plain: color-mix(in srgb,var(--sl-color-red-10) 0%,transparent);
        --sl-bg-critical-plain-hover: color-mix(in srgb,var(--sl-color-red-10) 5%,transparent);
        --sl-bg-critical-plain-pressed: color-mix(in srgb,var(--sl-color-red-10) 10%,transparent);
        --sl-bg-critical-strong: var(--sl-color-red-10);
        --sl-bg-critical-strong-hover: var(--sl-color-red-11);
        --sl-bg-critical-strong-pressed: var(--sl-color-red-12);
        --sl-border-base: 1px solid var(--sl-color-gray-3);
        --sl-border-base-disabled: 1px solid var(--sl-color-gray-6);
        --sl-border-base-strong: 1px solid var(--sl-color-gray-5);
        --sl-border-base-strong-hover: 1px solid var(--sl-color-gray-6);
        --sl-border-success: 1px solid var(--sl-color-green-3);
        --sl-border-informational: 1px solid var(--sl-color-blue-3);
        --sl-border-warning: 1px solid var(--sl-color-yellow-3);
        --sl-border-accent: 1px solid var(--sl-color-blue-3);
        --sl-border-accent-strong: 1px solid var(--sl-color-blue-10);
        --sl-border-accent-strong-hover: 1px solid var(--sl-color-blue-11);
        --sl-border-critical: 1px solid var(--sl-color-red-3);
        --sl-border-critical-strong: 1px solid var(--sl-color-red-8);
        --sl-border-critical-strong-hover: 1px solid var(--sl-color-red-9);
        --sl-radius-0: 0rem;
        --sl-radius-1: 0.25rem;
        --sl-radius-2: 0.5rem;
        --sl-radius-3: 0.75rem;
        --sl-radius-full: 9999rem;
        --sl-focus-ring-base: 0rem 0rem 0rem 0.0625rem var(--sl-color-gray-0),0rem 0rem 0rem 0.1875rem var(--sl-color-gray-5);
        --sl-focus-ring-critical: 0rem 0rem 0rem 0.0625rem var(--sl-color-gray-0),0rem 0rem 0rem 0.1875rem var(--sl-color-red-6);
        --sl-focus-ring-accent: 0rem 0rem 0rem 0.0625rem var(--sl-color-gray-0),0rem 0rem 0rem 0.1875rem var(--sl-color-blue-6);
        --sl-shadow-1: 0rem 0.25rem 1rem 0rem rgba(0,0,0,0.16);
        --sl-shadow-2: 0rem 1.5rem 3rem 0rem rgba(0,0,0,0.16);
        --sl-z-1: 0;
        --sl-z-2: 100;
        --sl-z-3: 200;
        --sl-z-4: 300;
        --sl-z-5: 400;
        --sl-z-6: 500;
        --sl-z-7: 600;
        --sl-z-8: 700;
        --sl-z-9: 800;
        --sl-z-10: 900;
        --sl-font-family-sans: "Inter",-apple-system,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,sans-serif;
        --sl-font-weight-regular: 400;
        --sl-font-weight-medium: 500;
        --sl-font-weight-semibold: 600;
        --sl-font-size-1: 0.75rem;
        --sl-font-size-2: 0.875rem;
        --sl-font-size-3: 1rem;
        --sl-font-size-4: 1.25rem;
        --sl-font-size-5: 1.5rem;
        --sl-letter-spacing-1: 0rem;
        --sl-letter-spacing-2: -0.00875rem;
        --sl-letter-spacing-3: -0.02rem;
        --sl-letter-spacing-4: -0.04rem;
        --sl-line-height-1: 1rem;
        --sl-line-height-2: 1.25rem;
        --sl-line-height-3: 1.5rem;
        --sl-line-height-4: 1.75rem;
        --sl-line-height-5: 2rem;
        --sl-text-caption-1-font: var(--sl-font-weight-medium) var(--sl-font-size-1)/var(--sl-line-height-1) var(--sl-font-family-sans);
        --sl-text-caption-1-letter-spacing: var(--sl-letter-spacing-1);
        --sl-text-caption-2-font: var(--sl-font-weight-regular) var(--sl-font-size-1)/var(--sl-line-height-1) var(--sl-font-family-sans);
        --sl-text-caption-2-letter-spacing: var(--sl-letter-spacing-1);
        --sl-text-action-font: var(--sl-font-weight-semibold) var(--sl-font-size-2)/var(--sl-line-height-2) var(--sl-font-family-sans);
        --sl-text-action-letter-spacing: var(--sl-letter-spacing-2);
        --sl-text-emphasis-font: var(--sl-font-weight-medium) var(--sl-font-size-2)/var(--sl-line-height-2) var(--sl-font-family-sans);
        --sl-text-emphasis-letter-spacing: var(--sl-letter-spacing-2);
        --sl-text-body-font: var(--sl-font-weight-regular) var(--sl-font-size-2)/var(--sl-line-height-2) var(--sl-font-family-sans);
        --sl-text-body-letter-spacing: var(--sl-letter-spacing-2);
        --sl-text-display-1-font: var(--sl-font-weight-semibold) var(--sl-font-size-5)/var(--sl-line-height-5) var(--sl-font-family-sans);
        --sl-text-display-1-letter-spacing: var(--sl-letter-spacing-4);
        --sl-text-display-2-font: var(--sl-font-weight-semibold) var(--sl-font-size-4)/var(--sl-line-height-4) var(--sl-font-family-sans);
        --sl-text-display-2-letter-spacing: var(--sl-letter-spacing-4);
        --sl-text-display-3-font: var(--sl-font-weight-semibold) var(--sl-font-size-3)/var(--sl-line-height-3) var(--sl-font-family-sans);
        --sl-text-display-3-letter-spacing: var(--sl-letter-spacing-3);
        --sl-text-display-4-font: var(--sl-font-weight-regular) var(--sl-font-size-3)/var(--sl-line-height-3) var(--sl-font-family-sans);
        --sl-text-display-4-letter-spacing: var(--sl-letter-spacing-3)
    }
}

[data-sl-text] {
    overflow-wrap: break-word;
    text-wrap: pretty
}

[data-sl-text][data-variant=body] {
    font: var(--sl-text-body-font);
    letter-spacing: var(--sl-text-body-letter-spacing)
}

[data-sl-text][data-variant=action] {
    font: var(--sl-text-action-font);
    letter-spacing: var(--sl-text-action-letter-spacing)
}

[data-sl-text][data-variant=emphasis] {
    font: var(--sl-text-emphasis-font);
    letter-spacing: var(--sl-text-emphasis-letter-spacing)
}

[data-sl-text][data-variant=caption1] {
    font: var(--sl-text-caption-1-font);
    letter-spacing: var(--sl-text-caption-1-letter-spacing)
}

[data-sl-text][data-variant=caption2] {
    font: var(--sl-text-caption-2-font);
    letter-spacing: var(--sl-text-caption-2-letter-spacing)
}

[data-sl-text][data-variant=display1] {
    font: var(--sl-text-display-1-font);
    letter-spacing: var(--sl-text-display-1-letter-spacing)
}

[data-sl-text][data-variant=display2] {
    font: var(--sl-text-display-2-font);
    letter-spacing: var(--sl-text-display-2-letter-spacing)
}

[data-sl-text][data-variant=display3] {
    font: var(--sl-text-display-3-font);
    letter-spacing: var(--sl-text-display-3-letter-spacing)
}

[data-sl-text][data-variant=display4] {
    font: var(--sl-text-display-4-font);
    letter-spacing: var(--sl-text-display-4-letter-spacing)
}

@-webkit-keyframes vtex-render-runtime-8-x-sl-animation-dash {
    0% {
        stroke-dasharray: 1 150;
        stroke-dashoffset: 0
    }

    50% {
        stroke-dasharray: 90 150;
        stroke-dashoffset: -35px
    }

    to {
        stroke-dasharray: 90 150;
        stroke-dashoffset: -124px
    }
}

@keyframes vtex-render-runtime-8-x-sl-animation-dash {
    0% {
        stroke-dasharray: 1 150;
        stroke-dashoffset: 0
    }

    50% {
        stroke-dasharray: 90 150;
        stroke-dashoffset: -35px
    }

    to {
        stroke-dasharray: 90 150;
        stroke-dashoffset: -124px
    }
}

@-webkit-keyframes vtex-render-runtime-8-x-sl-animation-rotate {
    to {
        transform: rotate(1turn)
    }
}

@keyframes vtex-render-runtime-8-x-sl-animation-rotate {
    to {
        transform: rotate(1turn)
    }
}

[data-sl-spinner]>svg {
    -webkit-animation: vtex-render-runtime-8-x-sl-animation-rotate 1.5s linear infinite;
    animation: vtex-render-runtime-8-x-sl-animation-rotate 1.5s linear infinite
}

[data-sl-spinner]>svg>circle {
    fill: none;
    stroke: currentColor;
    stroke-width: 5px;
    stroke-linecap: round;
    -webkit-animation: vtex-render-runtime-8-x-sl-animation-dash 1s ease-in-out infinite;
    animation: vtex-render-runtime-8-x-sl-animation-dash 1s ease-in-out infinite
}

[data-sl-button] {
    padding: var(--sl-element-space-top) var(--sl-element-space-right) var(--sl-element-space-bottom) var(--sl-element-space-left);
    height: var(--sl-element-height);
    border-radius: var(--sl-radius-2);
    font: var(--sl-text-action-font);
    letter-spacing: var(--sl-text-action-letter-spacing);
    cursor: pointer;
    -ms-appearance: button;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    border: none;
    text-decoration: none;
    position: relative
}

[data-sl-button]:focus {
    outline: none
}

[data-sl-button]>[data-sl-button-content] {
    font: inherit;
    letter-spacing: inherit;
    gap: var(--sl-space-1);
    opacity: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: opacity .3s;
    display: flex
}

[data-sl-button]>[data-sl-button-content] [data-sl-icon-small]:first-child,[data-sl-button]>[data-sl-button-content] [data-sl-icon]:first-child {
    margin-left: calc(var(--sl-space-1)*-1)
}

[data-sl-button]>[data-sl-button-content] [data-sl-icon-small]:last-child,[data-sl-button]>[data-sl-button-content] [data-sl-icon]:last-child {
    margin-left: calc(var(--sl-space-05)*-1)
}

[data-sl-button]>[data-sl-button-overlay] {
    color: inherit;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

[data-sl-button][data-loading=true]>[data-sl-button-content] {
    opacity: 0
}

[data-sl-button][data-size=normal] {
    --sl-element-space-top: var(--sl-space-2);
    --sl-element-space-bottom: var(--sl-space-2);
    --sl-element-space-right: var(--sl-space-3);
    --sl-element-space-left: var(--sl-space-3);
    --sl-element-height: 2.25rem
}

[data-sl-button][data-size=large] {
    --sl-element-space-top: var(--sl-space-3);
    --sl-element-space-bottom: var(--sl-space-3);
    --sl-element-space-right: var(--sl-space-4);
    --sl-element-space-left: var(--sl-space-4);
    --sl-element-height: 2.75rem
}

[data-sl-button][data-variant=secondary] {
    background: var(--sl-bg-muted);
    color: var(--sl-fg-muted)
}

[data-sl-button][data-variant=secondary]:hover {
    background: var(--sl-bg-muted-hover);
    color: var(--sl-fg-muted-hover)
}

[data-sl-button][data-variant=secondary]:active {
    background: var(--sl-bg-muted-pressed);
    color: var(--sl-fg-muted-pressed)
}

[data-sl-button][data-variant=secondary]:focus-visible {
    box-shadow: var(--sl-focus-ring-base);
    background: var(--sl-bg-muted-hover);
    color: var(--sl-fg-muted-hover)
}

[data-sl-button][data-variant=secondary]:disabled {
    background: var(--sl-bg-base-disabled);
    color: var(--sl-fg-base-disabled)
}

[data-sl-button][data-variant=secondary]:disabled>[data-sl-button-overlay] {
    color: var(--sl-fg-base-soft)
}

[data-sl-button][data-variant=tertiary] {
    background: var(--sl-bg-muted-plain);
    color: var(--sl-fg-muted)
}

[data-sl-button][data-variant=tertiary]:hover {
    background: var(--sl-bg-muted-plain-hover);
    color: var(--sl-fg-muted-hover)
}

[data-sl-button][data-variant=tertiary]:active {
    background: var(--sl-bg-muted-plain-pressed);
    color: var(--sl-fg-muted-pressed)
}

[data-sl-button][data-variant=tertiary]:focus-visible {
    box-shadow: var(--sl-focus-ring-base);
    background: var(--sl-bg-muted-plain-hover);
    color: var(--sl-fg-muted-hover)
}

[data-sl-button][data-variant=tertiary]:disabled {
    color: var(--sl-fg-base-disabled);
    background: none
}

[data-sl-button][data-variant=tertiary]:disabled>[data-sl-button-overlay] {
    color: var(--sl-fg-base-soft)
}

[data-sl-button][data-variant=primary] {
    background: var(--sl-bg-accent-strong);
    color: var(--sl-fg-inverted)
}

[data-sl-button][data-variant=primary]:hover {
    background: var(--sl-bg-accent-strong-hover)
}

[data-sl-button][data-variant=primary]:active {
    background: var(--sl-bg-accent-strong-pressed)
}

[data-sl-button][data-variant=primary]:focus-visible {
    box-shadow: var(--sl-focus-ring-accent)
}

[data-sl-button][data-variant=primary]:disabled {
    background: var(--sl-bg-base-strong-disabled)
}

[data-sl-button][data-variant=critical] {
    background: var(--sl-bg-critical-strong);
    color: var(--sl-fg-inverted)
}

[data-sl-button][data-variant=critical]:hover {
    background: var(--sl-bg-critical-strong-hover)
}

[data-sl-button][data-variant=critical]:active {
    background: var(--sl-bg-critical-strong-pressed)
}

[data-sl-button][data-variant=critical]:focus-visible {
    box-shadow: var(--sl-focus-ring-critical);
    background: var(--sl-bg-critical-strong-hover)
}

[data-sl-button][data-variant=critical]:disabled {
    background: var(--sl-bg-base-strong-disabled)
}

[data-sl-button][data-variant=criticalTertiary] {
    background: var(--sl-bg-critical-plain);
    color: var(--sl-fg-critical)
}

[data-sl-button][data-variant=criticalTertiary]:hover {
    background: var(--sl-bg-critical-plain-hover);
    color: var(--sl-fg-critical-hover)
}

[data-sl-button][data-variant=criticalTertiary]:active {
    background: var(--sl-bg-critical-plain-pressed);
    color: var(--sl-fg-critical-pressed)
}

[data-sl-button][data-variant=criticalTertiary]:focus-visible {
    box-shadow: var(--sl-focus-ring-critical);
    background: var(--sl-bg-critical-plain-hover);
    color: var(--sl-fg-critical-hover)
}

[data-sl-button][data-variant=criticalTertiary]:disabled {
    color: var(--sl-fg-base-disabled);
    background: none
}

[data-sl-button][data-variant=criticalTertiary]:disabled>[data-sl-button-overlay] {
    color: var(--sl-fg-base-soft)
}

.vtex-render-runtime-pg1sL2adbd5iWZ5Y2nXMl {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center
}

@media only screen and (max-width: 768px) {
    .vtex-render-runtime-pg1sL2adbd5iWZ5Y2nXMl {
        padding:var(--sl-space-0) var(--sl-space-5)
    }
}

.vtex-render-runtime-3AtoHrtNgkkkqIqbiXxmWL {
    max-width: 26.25rem;
    display: flex;
    flex-direction: column;
    align-items: center
}

.vtex-render-runtime-p5FQbJ7ZJqV4WVc1AtTH {
    margin-top: var(--sl-space-10)
}

.vtex-render-runtime-11jplJx6Fvm7JR4Wnojt-W {
    margin-top: var(--sl-space-3)
}

.vtex-render-runtime-1z5UBnR-ke_rHTBzjVWyAB {
    margin-top: var(--sl-space-10);
    color: var(--sl-fg-base-soft)
}

.vtex-render-runtime-2S0yAG6pMGhNWzOlWlfPX6 {
    margin-top: var(--sl-space-12);
    width: 7.5rem
}

.vtex-render-runtime-3elgVH0IKRcXXQcJMKQEpT {
    display: flex;
    gap: var(--sl-space-3);
    margin-top: var(--sl-space-24);
    color: var(--sl-fg-informational)
}

@-webkit-keyframes vtex-render-runtime-8-x-loading-bar-animation {
    0% {
        transform: scaleX(0)
    }

    10% {
        transform: scaleX(.5)
    }

    20% {
        transform: scaleX(.75)
    }

    to {
        transform: scaleX(.95)
    }
}

@keyframes vtex-render-runtime-8-x-loading-bar-animation {
    0% {
        transform: scaleX(0)
    }

    10% {
        transform: scaleX(.5)
    }

    20% {
        transform: scaleX(.75)
    }

    to {
        transform: scaleX(.95)
    }
}

.vtex-render-runtime-8-x-loadingBarAnimation {
    transform-origin: 0 0;
    -webkit-animation: vtex-render-runtime-8-x-loading-bar-animation 6s ease-out;
    animation: vtex-render-runtime-8-x-loading-bar-animation 6s ease-out;
    transform: scaleX(.95)
}

.vtex-store-components-3-x-container {
}

.vtex-store-components-3-x-sizeDesktop {
    max-width: 150px;
    max-height: 75px;
    min-width: 120px
}

.vtex-store-components-3-x-sizeMobile {
    max-width: 90px;
    max-height: 40px;
    min-width: 72px
}

.vtex-store-components-3-x-resultsList {
    max-height: 60vh
}

.vtex-store-components-3-x-resultsList a,.vtex-store-components-3-x-resultsList div {
    text-decoration: none;
    color: #727273
}

.vtex-store-components-3-x-resultsList a:hover {
    background-color: #f2f4f5
}

.vtex-store-components-3-x-resultsItemImage {
    width: 50px
}

@media only screen and (max-width: 49rem) {
    .vtex-store-components-3-x-resultsList {
        margin:0;
        max-height: calc(100vh - 6.2rem)
    }
}

.vtex-store-components-3-x-searchBarContainer .vtex-input-prefix__group {
    height: 38px
}

.vtex-store-components-3-x-searchBarContainer input {
    color: #727273;
    border-radius: 1px
}

.vtex-store-components-3-x-compactMode input {
    border-style: none!important;
    border-bottom: 2px solid!important
}

.vtex-store-components-3-x-paddingInput input {
    -webkit-appearance: none;
    padding-left: 40px!important
}

.vtex-store-components-3-x-searchMobile .vtex-store-components-3-x-vtex-button {
    padding: .9rem;
    font-weight: 400;
    font-size: .875rem
}

.vtex-store-components-3-x-searchMobile input {
    border: none
}

@media only screen and (max-width: 49rem) {
    .vtex-store-components-3-x-searchBarContainer input {
        box-shadow:none
    }
}

.vtex-store-components-3-x-installmentsPrice,.vtex-store-components-3-x-installmentsPriceLoader,.vtex-store-components-3-x-interestRatePrice,.vtex-store-components-3-x-listPrice,.vtex-store-components-3-x-listPriceLabel,.vtex-store-components-3-x-listPriceLoader,.vtex-store-components-3-x-listPriceValue,.vtex-store-components-3-x-priceContainer,.vtex-store-components-3-x-priceLoaderContainer,.vtex-store-components-3-x-savingPrice,.vtex-store-components-3-x-savingPriceValue,.vtex-store-components-3-x-savingsPriceLoader,.vtex-store-components-3-x-sellingPrice,.vtex-store-components-3-x-sellingPriceContainer,.vtex-store-components-3-x-sellingPriceLabel,.vtex-store-components-3-x-sellingPriceLabelLoader,.vtex-store-components-3-x-sellingPriceLoader,.vtex-store-components-3-x-sellingPriceValue,.vtex-store-components-3-x-sellingPriceValue--range {
}

.vtex-store-components-3-x-discountContainer,.vtex-store-components-3-x-discountInsideContainer {
}

@-webkit-keyframes vtex-styleguide-9-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

@keyframes vtex-styleguide-9-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

.vtex-styleguide-9-x-rotate {
    transform-origin: 50% 50%;
    -webkit-animation: vtex-styleguide-9-x-vtex-spinner-rotate .5s linear infinite;
    animation: vtex-styleguide-9-x-vtex-spinner-rotate .5s linear infinite
}

@-webkit-keyframes vtex-styleguide-9-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

@keyframes vtex-styleguide-9-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

.vtex-styleguide-9-x-rotate {
    transform-origin: 50% 50%;
    -webkit-animation: vtex-styleguide-9-x-vtex-spinner-rotate .5s linear infinite;
    animation: vtex-styleguide-9-x-vtex-spinner-rotate .5s linear infinite
}

.vtex-styleguide-9-x-shadowTransition {
    transition: box-shadow .3s ease-in-out
}

.vtex-styleguide-9-x-mh100 {
    max-height: 100%
}

.vtex-styleguide-9-x-scrollBar::-webkit-scrollbar {
    background-color: transparent;
    width: 8px
}

.vtex-styleguide-9-x-scrollBar::-webkit-scrollbar-track {
    background-color: transparent
}

.vtex-styleguide-9-x-scrollBar::-webkit-scrollbar-thumb {
    background-color: #e3e4e6;
    border-radius: 16px
}

.vtex-styleguide-9-x-scrollBar::-webkit-scrollbar-button {
    display: none
}

.vtex-modal__overlay.pa0 {
    padding: 0
}

@media screen and (min-width: 40rem) {
    .vtex-modal__overlay.pa5-ns {
        padding:1.25rem
    }
}

.vtex-styleguide-9-x-input {
}

.vtex-styleguide-9-x-hideDecorators::-ms-clear {
    display: none
}

.vtex-styleguide-9-x-noAppearance {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

::-webkit-input-placeholder {
    color: #979899
}

::-moz-placeholder {
    color: #979899
}

:-ms-input-placeholder {
    color: #979899
}

:-moz-placeholder {
    color: #979899
}

@-webkit-keyframes vtex-styleguide-9-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

@keyframes vtex-styleguide-9-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

.vtex-styleguide-9-x-rotate {
    transform-origin: 50% 50%;
    -webkit-animation: vtex-styleguide-9-x-vtex-spinner-rotate .5s linear infinite;
    animation: vtex-styleguide-9-x-vtex-spinner-rotate .5s linear infinite
}

.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow {
    margin-left: -8px;
    position: absolute
}

.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__month-year-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow:before {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px
}

.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__month-year-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow:before {
    content: "";
    z-index: -1;
    border-width: 8px;
    left: -8px;
    border-bottom-color: #aeaeae
}

.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {
    top: 0;
    margin-top: -8px
}

.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before {
    border-top: none;
    border-bottom-color: #f0f0f0
}

.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle:before {
    top: -1px;
    border-bottom-color: #aeaeae
}

.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow {
    bottom: 0;
    margin-bottom: -8px
}

.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__month-year-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow:before {
    border-bottom: none;
    border-top-color: #fff
}

.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle:before,.react-datepicker__month-read-view--down-arrow:before,.react-datepicker__month-year-read-view--down-arrow:before,.react-datepicker__year-read-view--down-arrow:before {
    bottom: -1px;
    border-top-color: #aeaeae
}

.react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0
}

.react-datepicker {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: .8rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #aeaeae;
    border-radius: .3rem;
    display: inline-block;
    position: relative
}

.react-datepicker--time-only .react-datepicker__triangle {
    left: 35px
}

.react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0
}

.react-datepicker--time-only .react-datepicker__time,.react-datepicker--time-only .react-datepicker__time-box {
    border-radius: .3rem
}

.react-datepicker__triangle {
    position: absolute;
    left: 50px
}

.react-datepicker-popper {
    z-index: 1
}

.react-datepicker-popper[data-placement^=bottom] {
    margin-top: 10px
}

.react-datepicker-popper[data-placement=bottom-end] .react-datepicker__triangle,.react-datepicker-popper[data-placement=top-end] .react-datepicker__triangle {
    left: auto;
    right: 50px
}

.react-datepicker-popper[data-placement^=top] {
    margin-bottom: 10px
}

.react-datepicker-popper[data-placement^=right] {
    margin-left: 8px
}

.react-datepicker-popper[data-placement^=right] .react-datepicker__triangle {
    left: auto;
    right: 42px
}

.react-datepicker-popper[data-placement^=left] {
    margin-right: 8px
}

.react-datepicker-popper[data-placement^=left] .react-datepicker__triangle {
    left: 42px;
    right: auto
}

.react-datepicker__header {
    text-align: center;
    background-color: #f0f0f0;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    padding-top: 8px;
    position: relative
}

.react-datepicker__header--time {
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px
}

.react-datepicker__month-dropdown-container--scroll,.react-datepicker__month-dropdown-container--select,.react-datepicker__month-year-dropdown-container--scroll,.react-datepicker__month-year-dropdown-container--select,.react-datepicker__year-dropdown-container--scroll,.react-datepicker__year-dropdown-container--select {
    display: inline-block;
    margin: 0 2px
}

.react-datepicker-time__header,.react-datepicker-year-header,.react-datepicker__current-month {
    margin-top: 0;
    color: #000;
    font-weight: 700;
    font-size: .944rem
}

.react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
}

.react-datepicker__navigation {
    background: none;
    line-height: 1.7rem;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    width: 0;
    padding: 0;
    border: .45rem solid transparent;
    z-index: 1;
    height: 10px;
    width: 10px;
    text-indent: -999em;
    overflow: hidden
}

.react-datepicker__navigation--previous {
    left: 10px;
    border-right-color: #ccc
}

.react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3
}

.react-datepicker__navigation--previous--disabled,.react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default
}

.react-datepicker__navigation--next {
    right: 10px;
    border-left-color: #ccc
}

.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 80px
}

.react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3
}

.react-datepicker__navigation--next--disabled,.react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default
}

.react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto
}

.react-datepicker__navigation--years-previous {
    top: 4px;
    border-top-color: #ccc
}

.react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b3b3
}

.react-datepicker__navigation--years-upcoming {
    top: -4px;
    border-bottom-color: #ccc
}

.react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b3b3
}

.react-datepicker__month-container {
    float: left
}

.react-datepicker__month {
    margin: .4rem;
    text-align: center
}

.react-datepicker__month .react-datepicker__month-text,.react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block;
    width: 4rem;
    margin: 2px
}

.react-datepicker__input-time-container {
    clear: both;
    width: 100%;
    float: left;
    margin: 5px 0 10px 15px;
    text-align: left
}

.react-datepicker__input-time-container .react-datepicker-time__caption,.react-datepicker__input-time-container .react-datepicker-time__input-container {
    display: inline-block
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {
    display: inline-block;
    margin-left: 10px
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {
    width: 85px
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-inner-spin-button,.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time] {
    -moz-appearance: textfield
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {
    margin-left: 5px;
    display: inline-block
}

.react-datepicker__time-container {
    float: right;
    border-left: 1px solid #aeaeae;
    width: 85px
}

.react-datepicker__time-container--with-today-button {
    display: inline;
    border: 1px solid #aeaeae;
    border-radius: .3rem;
    position: absolute;
    right: -72px;
    top: 0
}

.react-datepicker__time-container .react-datepicker__time {
    position: relative;
    background: #fff
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: 85px;
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(195px + .85rem);
    overflow-y: scroll;
    padding-right: 0;
    padding-left: 0;
    width: 100%;
    box-sizing: content-box
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    height: 30px;
    padding: 5px 10px;
    white-space: nowrap
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
    cursor: pointer;
    background-color: #f0f0f0
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #216ba5;
    color: #fff;
    font-weight: 700
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background-color: #216ba5
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
    color: #ccc
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
    cursor: default;
    background-color: transparent
}

.react-datepicker__week-number {
    color: #ccc;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: .166rem
}

.react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer
}

.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: .3rem;
    background-color: #f0f0f0
}

.react-datepicker__day-names,.react-datepicker__week {
    white-space: nowrap
}

.react-datepicker__day,.react-datepicker__day-name,.react-datepicker__time-name {
    color: #000;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: .166rem
}

.react-datepicker__month--in-range,.react-datepicker__month--in-selecting-range,.react-datepicker__month--selected,.react-datepicker__quarter--in-range,.react-datepicker__quarter--in-selecting-range,.react-datepicker__quarter--selected {
    border-radius: .3rem;
    background-color: #216ba5;
    color: #fff
}

.react-datepicker__month--in-range:hover,.react-datepicker__month--in-selecting-range:hover,.react-datepicker__month--selected:hover,.react-datepicker__quarter--in-range:hover,.react-datepicker__quarter--in-selecting-range:hover,.react-datepicker__quarter--selected:hover {
    background-color: #1d5d90
}

.react-datepicker__month--disabled,.react-datepicker__quarter--disabled {
    color: #ccc;
    pointer-events: none
}

.react-datepicker__month--disabled:hover,.react-datepicker__quarter--disabled:hover {
    cursor: default;
    background-color: transparent
}

.react-datepicker__day,.react-datepicker__month-text,.react-datepicker__quarter-text {
    cursor: pointer
}

.react-datepicker__day:hover,.react-datepicker__month-text:hover,.react-datepicker__quarter-text:hover {
    border-radius: .3rem;
    background-color: #f0f0f0
}

.react-datepicker__day--today,.react-datepicker__month-text--today,.react-datepicker__quarter-text--today {
    font-weight: 700
}

.react-datepicker__day--highlighted,.react-datepicker__month-text--highlighted,.react-datepicker__quarter-text--highlighted {
    border-radius: .3rem;
    background-color: #3dcc4a;
    color: #fff
}

.react-datepicker__day--highlighted:hover,.react-datepicker__month-text--highlighted:hover,.react-datepicker__quarter-text--highlighted:hover {
    background-color: #32be3f
}

.react-datepicker__day--highlighted-custom-1,.react-datepicker__month-text--highlighted-custom-1,.react-datepicker__quarter-text--highlighted-custom-1 {
    color: #f0f
}

.react-datepicker__day--highlighted-custom-2,.react-datepicker__month-text--highlighted-custom-2,.react-datepicker__quarter-text--highlighted-custom-2 {
    color: green
}

.react-datepicker__day--in-range,.react-datepicker__day--in-selecting-range,.react-datepicker__day--selected,.react-datepicker__month-text--in-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__month-text--selected,.react-datepicker__quarter-text--in-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__quarter-text--selected {
    border-radius: .3rem;
    background-color: #216ba5;
    color: #fff
}

.react-datepicker__day--in-range:hover,.react-datepicker__day--in-selecting-range:hover,.react-datepicker__day--selected:hover,.react-datepicker__month-text--in-range:hover,.react-datepicker__month-text--in-selecting-range:hover,.react-datepicker__month-text--selected:hover,.react-datepicker__quarter-text--in-range:hover,.react-datepicker__quarter-text--in-selecting-range:hover,.react-datepicker__quarter-text--selected:hover {
    background-color: #1d5d90
}

.react-datepicker__day--keyboard-selected,.react-datepicker__month-text--keyboard-selected,.react-datepicker__quarter-text--keyboard-selected {
    border-radius: .3rem;
    background-color: #2a87d0;
    color: #fff
}

.react-datepicker__day--keyboard-selected:hover,.react-datepicker__month-text--keyboard-selected:hover,.react-datepicker__quarter-text--keyboard-selected:hover {
    background-color: #1d5d90
}

.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range {
    background-color: rgba(33,107,165,.5)
}

.react-datepicker__month--selecting-range .react-datepicker__day--in-range,.react-datepicker__month--selecting-range .react-datepicker__month-text--in-range,.react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range {
    background-color: #f0f0f0;
    color: #000
}

.react-datepicker__day--disabled,.react-datepicker__month-text--disabled,.react-datepicker__quarter-text--disabled {
    cursor: default;
    color: #ccc
}

.react-datepicker__day--disabled:hover,.react-datepicker__month-text--disabled:hover,.react-datepicker__quarter-text--disabled:hover {
    background-color: transparent
}

.react-datepicker__month-text.react-datepicker__month--in-range:hover,.react-datepicker__month-text.react-datepicker__month--selected:hover,.react-datepicker__month-text.react-datepicker__quarter--in-range:hover,.react-datepicker__month-text.react-datepicker__quarter--selected:hover,.react-datepicker__quarter-text.react-datepicker__month--in-range:hover,.react-datepicker__quarter-text.react-datepicker__month--selected:hover,.react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover,.react-datepicker__quarter-text.react-datepicker__quarter--selected:hover {
    background-color: #216ba5
}

.react-datepicker__month-text:hover,.react-datepicker__quarter-text:hover {
    background-color: #f0f0f0
}

.react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%
}

.react-datepicker__month-read-view,.react-datepicker__month-year-read-view,.react-datepicker__year-read-view {
    border: 1px solid transparent;
    border-radius: .3rem
}

.react-datepicker__month-read-view:hover,.react-datepicker__month-year-read-view:hover,.react-datepicker__year-read-view:hover {
    cursor: pointer
}

.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow {
    border-top-color: #b3b3b3
}

.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow,.react-datepicker__year-read-view--down-arrow {
    border-top-color: #ccc;
    float: right;
    margin-left: 20px;
    top: 8px;
    position: relative;
    border-width: .45rem
}

.react-datepicker__month-dropdown,.react-datepicker__month-year-dropdown,.react-datepicker__year-dropdown {
    background-color: #f0f0f0;
    position: absolute;
    width: 50%;
    left: 25%;
    top: 30px;
    z-index: 1;
    text-align: center;
    border-radius: .3rem;
    border: 1px solid #aeaeae
}

.react-datepicker__month-dropdown:hover,.react-datepicker__month-year-dropdown:hover,.react-datepicker__year-dropdown:hover {
    cursor: pointer
}

.react-datepicker__month-dropdown--scrollable,.react-datepicker__month-year-dropdown--scrollable,.react-datepicker__year-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll
}

.react-datepicker__month-option,.react-datepicker__month-year-option,.react-datepicker__year-option {
    line-height: 20px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto
}

.react-datepicker__month-option:first-of-type,.react-datepicker__month-year-option:first-of-type,.react-datepicker__year-option:first-of-type {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem
}

.react-datepicker__month-option:last-of-type,.react-datepicker__month-year-option:last-of-type,.react-datepicker__year-option:last-of-type {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem
}

.react-datepicker__month-option:hover,.react-datepicker__month-year-option:hover,.react-datepicker__year-option:hover {
    background-color: #ccc
}

.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming,.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b3b3
}

.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous,.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous {
    border-top-color: #b3b3b3
}

.react-datepicker__month-option--selected,.react-datepicker__month-year-option--selected,.react-datepicker__year-option--selected {
    position: absolute;
    left: 15px
}

.react-datepicker__close-icon {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0 6px 0 0;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: table-cell;
    vertical-align: middle
}

.react-datepicker__close-icon:after {
    cursor: pointer;
    background-color: #216ba5;
    color: #fff;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    padding: 2px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
}

.react-datepicker__today-button {
    background: #f0f0f0;
    border-top: 1px solid #aeaeae;
    cursor: pointer;
    text-align: center;
    font-weight: 700;
    padding: 5px 0;
    clear: left
}

.react-datepicker__portal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.8);
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2147483647
}

.react-datepicker__portal .react-datepicker__day,.react-datepicker__portal .react-datepicker__day-name,.react-datepicker__portal .react-datepicker__time-name {
    width: 3rem;
    line-height: 3rem
}

@media (max-height: 550px),(max-width:400px) {
    .react-datepicker__portal .react-datepicker__day,.react-datepicker__portal .react-datepicker__day-name,.react-datepicker__portal .react-datepicker__time-name {
        width:2rem;
        line-height: 2rem
    }
}

.react-datepicker__portal .react-datepicker-time__header,.react-datepicker__portal .react-datepicker__current-month {
    font-size: 1.44rem
}

.react-datepicker__portal .react-datepicker__navigation {
    border: .81rem solid transparent
}

.react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc
}

.react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3
}

.react-datepicker__portal .react-datepicker__navigation--previous--disabled,.react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default
}

.react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc
}

.react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3
}

.react-datepicker__portal .react-datepicker__navigation--next--disabled,.react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default
}

.react-datepicker {
    --white: #fff;
    --near-white: #f0f0f0;
    --near-black: #2e2e2e;
    --blue: #134cd8;
    --light-blue: #dbe9fd;
    --dark-blue: #0c389f;
    --gray: #979899;
    --light-gray: #e3e4e6;
    --dark-gray: #727273;
    --calendar-width: 376px;
    --calendar-height: 346px;
    --time-width: 130px;
    --time-paddings: 24px 12px;
    --cell-size: 42px;
    --cell-margins: 0;
    --bg-color: var(--white);
    --day-color: var(--near-black);
    --day-disabled-text-color: var(--light-gray);
    --day-hover-bg-color: var(--near-white);
    --day-hover-text-color: var(--blue);
    --day-outside-month-color: var(--dark-gray);
    --day-selected-border-color: var(--blue);
    --day-selected-hover-color: var(--light-blue);
    --day-name-color: var(--gray);
    --navigation-arrow-color: var(--blue);
    --navigation-arrow-hover-color: var(--dark-blue);
    --time-hover-color: var(--near-white);
    --time-selected-color: var(--blue);
    --time-selected-hover-color: var(--blue);
    --title-font-size: 20px;
    --font-size: 16px;
    --shadow: 0px 1px 18px rgba(0,0,0,0.14)
}

.react-datepicker-popper {
    z-index: 10
}

.react-datepicker {
    display: flex;
    position: absolute;
    font-family: inherit;
    font-size: var(--font-size);
    background: var(--bg-color);
    box-shadow: var(--shadow);
    border: none;
    border-radius: 4px
}

.react-datepicker-wrapper,.react-datepicker__input-container {
    width: 100%
}

.react-datepicker__triangle {
    display: none
}

.react-datepicker__navigation {
    border: 0;
    text-indent: 0;
    width: 16px;
    height: 16px
}

.react-datepicker__navigation:before {
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: inline-block;
    height: 8px;
    width: 8px;
    position: relative;
    left: 0;
    top: 3px;
    transform: rotate(-45deg);
    vertical-align: top;
    z-index: 1;
    cursor: pointer
}

.react-datepicker__navigation--next:before {
    left: -2px;
    transform: rotate(45deg)
}

.react-datepicker__navigation--previous:before {
    left: 2px;
    transform: rotate(-135deg)
}

.react-datepicker__navigation {
    margin: 20px
}

.react-datepicker__navigation--previous:before {
    border-color: var(--navigation-arrow-color)
}

.react-datepicker__navigation--previous:hover:before {
    border-color: var(--navigation-arrow-hover-color)
}

.react-datepicker__navigation--next:before {
    border-color: var(--navigation-arrow-color)
}

.react-datepicker__navigation--next:hover:before {
    border-color: var(--navigation-arrow-hover-color)
}

.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: calc(var(--time-width) + 10px)
}

.react-datepicker__month-container {
    margin: 20px
}

.react-datepicker__time-container {
    width: auto;
    border-left: 1px solid #e3e4e6
}

.react-datepicker__header {
    background-color: var(--bg-color);
    border: none;
    border-bottom: 1px solid #e3e4e6;
    padding: 0
}

.react-datepicker-time__header,.react-datepicker__current-month {
    font-size: var(--title-font-size);
    line-height: 28px;
    padding-bottom: 16px
}

.react-datepicker__header.react-datepicker__header--time {
    display: none
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: auto
}

.react-datepicker__time-list {
    height: 333px!important
}

.react-datepicker__day,.react-datepicker__day-name,.react-datepicker__time-name {
    color: var(--day-color);
    width: var(--cell-size);
    height: var(--cell-size);
    line-height: var(--cell-size);
    margin: var(--cell-margins);
    border-radius: .3rem
}

.react-datepicker__day:hover {
    background-color: var(--day-hover-bg-color);
    color: var(--day-hover-text-color)
}

.react-datepicker__day--disabled,.react-datepicker__day--disabled:hover {
    background-color: transparent;
    color: var(--day-disabled-text-color)
}

.react-datepicker__day--outside-month {
    color: var(--day-outside-month-color)
}

.react-datepicker__day--in-range,.react-datepicker__day--in-selecting-range,.react-datepicker__day--selected {
    background: var(--white);
    color: var(--blue);
    box-shadow: inset 0 0 0 2px var(--day-selected-border-color)
}

.react-datepicker__day--in-range:hover,.react-datepicker__day--in-selecting-range:hover,.react-datepicker__day--selected:hover {
    background: var(--day-selected-hover-color)
}

.react-datepicker__day-name {
    color: var(--day-name-color)
}

.react-datepicker__month {
    margin: 0
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    width: var(--time-width);
    height: auto;
    padding: var(--time-paddings)
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
    background-color: var(--time-hover-color)
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: var(--time-selected-color)
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background-color: var(--time-selected-hover-color)
}

.vtex-input__prefix .vtex-styleguide-9-x-dropdown,.vtex-input__suffix .vtex-styleguide-9-x-dropdown {
    height: 100%
}

.vtex-input__prefix .vtex-styleguide-9-x-dropdown {
    margin-left: -1rem
}

.vtex-input__suffix .vtex-styleguide-9-x-dropdown {
    margin-right: -1rem
}

.vtex-input__prefix .vtex-styleguide-9-x-container,.vtex-input__suffix .vtex-styleguide-9-x-container {
    height: 100%;
    border-top: none;
    border-bottom: none;
    border-radius: 0
}

.vtex-input__prefix .vtex-styleguide-9-x-container {
    border-left: none
}

.vtex-input__suffix .vtex-styleguide-9-x-container {
    border-right: none
}

@-webkit-keyframes vtex-styleguide-9-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

@keyframes vtex-styleguide-9-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

.vtex-styleguide-9-x-rotate {
    transform-origin: 50% 50%;
    -webkit-animation: vtex-styleguide-9-x-vtex-spinner-rotate .5s linear infinite;
    animation: vtex-styleguide-9-x-vtex-spinner-rotate .5s linear infinite
}

.vtex-styleguide-9-x-popup {
    will-change: transform
}

.vtex-input__prefix .vtex-address-form-4-x-dropdown,.vtex-input__suffix .vtex-address-form-4-x-dropdown {
    height: 100%
}

.vtex-input__prefix .vtex-address-form-4-x-dropdown {
    margin-left: -1rem
}

.vtex-input__suffix .vtex-address-form-4-x-dropdown {
    margin-right: -1rem
}

.vtex-input__prefix .vtex-address-form-4-x-container,.vtex-input__suffix .vtex-address-form-4-x-container {
    height: 100%;
    border-top: none;
    border-bottom: none;
    border-radius: 0
}

.vtex-input__prefix .vtex-address-form-4-x-container {
    border-left: none
}

.vtex-input__suffix .vtex-address-form-4-x-container {
    border-right: none
}

@-webkit-keyframes vtex-address-form-4-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

@keyframes vtex-address-form-4-x-vtex-spinner-rotate {
    0% {
        transform: translateZ(0) rotate(0deg)
    }

    to {
        transform: translateZ(0) rotate(1turn)
    }
}

.vtex-address-form-4-x-rotate {
    transform-origin: 50% 50%;
    -webkit-animation: vtex-address-form-4-x-vtex-spinner-rotate .5s linear infinite;
    animation: vtex-address-form-4-x-vtex-spinner-rotate .5s linear infinite
}

.vtex-address-form-4-x-input {
}

.vtex-address-form-4-x-hideDecorators::-ms-clear {
    display: none
}

.vtex-address-form-4-x-noAppearance {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

::-webkit-input-placeholder {
    color: #979899
}

::-moz-placeholder {
    color: #979899
}

:-ms-input-placeholder {
    color: #979899
}

:-moz-placeholder {
    color: #979899
}

@-webkit-keyframes shimmer-anim {
    0% {
        transform: translateZ(0)
    }

    to {
        transform: translate3d(50%,0,0)
    }
}

@keyframes shimmer-anim {
    0% {
        transform: translateZ(0)
    }

    to {
        transform: translate3d(50%,0,0)
    }
}

.shimmer {
    width: 200%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.7),hsla(0,0%,100%,0));
    background-size: 50% 100%;
    -webkit-animation: shimmer-anim .7s linear infinite;
    animation: shimmer-anim .7s linear infinite
}

@-webkit-keyframes shimmer-anim {
    0% {
        transform: translateZ(0)
    }

    to {
        transform: translate3d(50%,0,0)
    }
}

@keyframes shimmer-anim {
    0% {
        transform: translateZ(0)
    }

    to {
        transform: translate3d(50%,0,0)
    }
}

.shimmer {
    width: 200%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.7),hsla(0,0%,100%,0));
    background-size: 50% 100%;
    -webkit-animation: shimmer-anim .7s linear infinite;
    animation: shimmer-anim .7s linear infinite
}

.vtex-profile-form-3-x-autocompleteInput,.vtex-profile-form-3-x-autocompleteMenu,.vtex-profile-form-3-x-autocompleteMenuItem,.vtex-profile-form-3-x-autocompleteToggleButton,.vtex-profile-form-3-x-businessFields,.vtex-profile-form-3-x-customGender,.vtex-profile-form-3-x-extendedFields,.vtex-profile-form-3-x-genderInput,.vtex-profile-form-3-x-personalFields,.vtex-profile-form-3-x-profileContainer,.vtex-profile-form-3-x-profileSummary,.vtex-profile-form-3-x-styleguideInput,.vtex-profile-form-3-x-toggleBusinessButtonWrapper {
}

.vtex-profile-form-3-x-autocompleteInput,.vtex-profile-form-3-x-autocompleteMenu,.vtex-profile-form-3-x-autocompleteMenuItem,.vtex-profile-form-3-x-autocompleteToggleButton,.vtex-profile-form-3-x-businessFields,.vtex-profile-form-3-x-customGender,.vtex-profile-form-3-x-extendedFields,.vtex-profile-form-3-x-genderInput,.vtex-profile-form-3-x-personalFields,.vtex-profile-form-3-x-profileContainer,.vtex-profile-form-3-x-profileSummary,.vtex-profile-form-3-x-styleguideInput,.vtex-profile-form-3-x-toggleBusinessButtonWrapper {
}

.vtex-admin-pages-4-x-overlay-mask-enter {
    opacity: 0
}

.vtex-admin-pages-4-x-overlay-mask-enter-active {
    opacity: .8;
    transition: opacity .3s cubic-bezier(.19,1,.22,1)
}

.vtex-admin-pages-4-x-overlay-mask-enter-done,.vtex-admin-pages-4-x-overlay-mask-exit {
    opacity: .8
}

.vtex-admin-pages-4-x-overlay-mask-exit-active {
    opacity: 0;
    transition: opacity .15s cubic-bezier(.215,.61,.355,1)
}

.vtex-admin-pages-4-x-overlay-mask-exit-done {
    opacity: 0
}

.vtex-admin-pages-4-x-highlight-enter {
    opacity: 0;
    border-color: rgba(19,76,216,0)
}

.vtex-admin-pages-4-x-highlight-enter-active {
    transition: opacity .15s cubic-bezier(.19,1,.22,1),border-color .15s cubic-bezier(.19,1,.22,1);
    opacity: 1;
    border-color: #134cd8
}

.vtex-admin-pages-4-x-highlight-enter-done,.vtex-admin-pages-4-x-highlight-exit {
    opacity: 1;
    border-color: #134cd8
}

.vtex-admin-pages-4-x-highlight-exit-active {
    transition: opacity .15s cubic-bezier(.215,.61,.355,1),border-color .15s cubic-bezier(.215,.61,.355,1);
    opacity: 0;
    border-color: rgba(19,76,216,0)
}

.vtex-admin-pages-4-x-highlight-exit-done {
    opacity: 0;
    border-color: rgba(19,76,216,0)
}

.vtex-flex-layout-0-x-stretchChildrenWidth {
    justify-content: center
}

.vtex-flex-layout-0-x-stretchChildrenWidth>:not(img) {
    width: 100%
}

.vtex-flex-layout-0-x-col:empty {
    display: none
}

.change-v2-padding {
    padding: 32px 40px
}

.remaining-items-header {
    display: flex;
    justify-content: space-between;
    background-color: #f4f4f4;
    gap: 20px
}

.mobile {
    display: none
}

.item-section {
    width: 100%
}

.item-section,.item-section--collapsable {
    padding-left: 30px;
    padding-right: 40px
}

.remaining-items__last-change {
    flex-direction: column;
    gap: 4px;
    justify-content: center
}

.remaining-items__title {
    gap: 20px
}

.package-header {
    flex-direction: column;
    background-color: #deecf7;
    padding: 32px 40px
}

.package-header,.package-header-infos-wrapper {
    display: flex;
    gap: 20px
}

.package-header-infos {
    gap: 4px;
    justify-content: center;
    display: flex;
    flex-direction: column
}

.package-change-summary,.value-summary {
    padding: 24px 40px
}

.package-change-summary-modal-content {
    margin: 0 -3rem -3rem
}

@media (max-width: 639px) {
    .remaining-items-header {
        flex-direction:column;
        gap: 32px
    }

    .change-v2-padding {
        padding: 32px 20px 20px
    }

    .desktop {
        display: none
    }

    .mobile {
        display: flex
    }

    .item-section {
        padding-left: 10px;
        padding-right: 20px
    }

    .remaining-items__last-change {
        flex-direction: row;
        justify-content: space-between
    }

    .remaining-items__title {
        gap: 12px
    }

    .package-header {
        padding: 32px 20px 20px;
        gap: 32px
    }

    .package-header-infos-wrapper {
        flex-direction: column;
        align-items: stretch;
        flex-grow: 1;
        gap: 16px
    }

    .package-header-infos {
        flex-direction: row;
        justify-content: space-between;
        align-items: center
    }

    .package-change-summary,.value-summary {
        padding: 20px
    }

    .package-change-summary-modal-content {
        margin: 0 -2rem;
        overflow-x: hidden
    }

    .vtex-modal__overlay>.vtex-modal__modal {
        padding: 0!important
    }
}

.w-45 {
    width: 45%
}

.bt-none {
    border-top: 0
}

.bb-none {
    border-bottom: 0
}

.minh-100vh {
    min-height: 100vh
}

.transition-opacity-06s {
    transition: opacity .6s
}

.transition-max-height-06s {
    transition: max-height .6s
}

.heavier-blue {
    color: #0070d1
}

.max-h-0 {
    max-height: 0
}

.max-h-999 {
    max-height: 999px
}

.max-w-30 {
    max-width: 30%
}

.max-w-70 {
    max-width: 70%
}

.h4-plus {
    height: 13rem
}

.w-29px {
    width: 29px
}

.h-22px {
    height: 22px
}

.nt-1px {
    margin-top: -1px
}

.h-15px {
    height: 15px
}

.w-15px {
    width: 15px
}

.hh0 {
    height: 0
}

.hh1 {
    height: 1rem
}

.hh2 {
    height: 2rem
}

.hh3 {
    height: 4rem
}

.hh4 {
    height: 8rem
}

.hh5 {
    height: 16rem
}

.cursor-not-allowed {
    cursor: not-allowed
}

@media screen and (min-width: 80em) {
    .bg-orange-ns {
        background-color:#ff6300
    }

    .white-ns {
        color: #fff
    }
}

:root {
    font-size: 16px
}

.right--060 {
    right: .6rem
}

.top--040 {
    top: .4rem
}

.option[type=radio]:checked:after {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    top: 6px;
    left: 5px;
    background: #555;
    border-radius: 50%
}

.modal-content-container {
    position: fixed;
    background-color: #fff;
    border-radius: 3px;
    width: 25%;
    max-width: 100%;
    z-index: 9990;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-height: 100%;
    margin: 0 auto
}

.vtex-bootstrap .font-12 {
    font-size: 12px;
    line-height: 15px
}

.vtex-bootstrap .box-shadow-blue {
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)
}

.vtex-bootstrap .dont-show-text {
    text-indent: -999em
}

.vtex-bootstrap .hide {
    display: none
}

.vtex-bootstrap body {
    overflow-y: scroll
}

.vtex-bootstrap p {
    margin: 0 0 10px
}

.vtex-bootstrap label {
    margin-bottom: 0
}

.vtex-bootstrap .btn-small {
    font-size: 12px
}

.vtex-bootstrap .btn-mini {
    font-size: 11px
}

.vtex-bootstrap .btn-large {
    font-size: 16px
}

.vtex-bootstrap .table td {
    border: 0
}

.vtex-bootstrap .notification {
    color: #999;
    margin-bottom: 0
}

.vtex-bootstrap .collapse {
    overflow: visible
}

.vtex-bootstrap h1 {
    color: #666;
    font-size: 36px;
    font-weight: 400;
    margin: 20px 0
}

.vtex-bootstrap h3 {
    font-size: 13px;
    line-height: 1em;
    margin-top: 15px
}

.body-cart .vtex-bootstrap h4,.body-order-form .vtex-bootstrap h4 {
    color: #666;
    font-weight: 400;
    font-size: 13px;
    margin-top: 10px
}

.vtex-bootstrap h5 {
    font-size: 13px
}

.vtex-bootstrap #locale-selector-template-holder {
    position: absolute;
    right: 0;
    top: 10px;
    font-size: 12px;
    line-height: 15px
}

.vtex-bootstrap #locale-selector-template-holder .select2-container {
    min-width: 200px
}

.vtex-bootstrap .loading-inline {
    margin: 7px 0 0 -25px;
    position: absolute;
    z-index: 8
}

.vtex-bootstrap .loading-inline span {
    display: none
}

.vtex-bootstrap .loading-text {
    margin-right: 5px;
    vertical-align: text-top
}

.vtex-bootstrap .loading-text span {
    display: none
}

.vtex-bootstrap .vtex-loading {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute
}

.vtex-bootstrap .loading-bg {
    opacity: .8;
    background-color: #fff;
    z-index: 200;
    text-align: center
}

.vtex-bootstrap .loading-img {
    position: relative;
    top: 20%
}

.loading .vtex-bootstrap .loading-img {
    height: 100%;
    display: -moz-flex;
    display: flex;
    -moz-box-pack: center;
    -moz-box-align: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    box-pack: center;
    box-align: center;
    z-index: 201
}

.vtex-bootstrap .loading-img span {
    display: none
}

.vtex-bootstrap .loading-email {
    display: inline-block
}

.vtex-bootstrap .loading-item {
    display: none
}

.vtex-bootstrap .icon-spinner.icon-3x {
    opacity: .5
}

.vtex-bootstrap .table,.vtex-bootstrap form {
    margin-bottom: 0
}

.vtex-bootstrap .body-order-placed {
    padding-bottom: 30px
}

.vtex-bootstrap .row-fluid .full-cart.inactive {
    margin-left: -100%
}

.vtex-bootstrap .row-fluid .orderform-template.inactive {
    margin-left: 100%
}

.vtex-bootstrap .row-fluid .full-cart,.vtex-bootstrap .row-fluid .orderform-template {
    margin-bottom: 15px;
    min-height: 200px;
    opacity: 0;
    position: absolute;
    transition: all .7s ease-in-out
}

.vtex-bootstrap .row-fluid .full-cart.active,.vtex-bootstrap .row-fluid .orderform-template.active {
    margin-left: 0;
    opacity: 1;
    position: relative
}

.vtex-bootstrap .orderform-template-holder {
    margin-left: 0;
    min-height: 650px
}

.vtex-bootstrap .checkout-container {
    min-height: 200px;
    position: relative;
    overflow: hidden
}

.vtex-bootstrap .cart-active .full-cart,.vtex-bootstrap .orderform-active .orderform-template {
    margin-left: 0;
    position: relative
}

.vtex-bootstrap .accordion-group,.vtex-bootstrap .accordion-inner {
    border: 0
}

.vtex-bootstrap .accordion-toggle {
    position: relative
}

.vtex-bootstrap .accordion-inner {
    padding: 9px
}

.vtex-bootstrap .accordion-heading .accordion-toggle {
    padding: 4px 8px 0
}

.vtex-bootstrap .accordion-toggle {
    color: #999;
    cursor: inherit;
    font-size: 16px;
    padding-bottom: 0;
    padding-top: 4px
}

.vtex-bootstrap .accordion-toggle span {
    line-height: 18px
}

.vtex-bootstrap .accordion-toggle .link-box-edit {
    position: absolute;
    right: -8px;
    top: -8px;
    padding: 4px 6px 2px;
    border-radius: 0 6px;
    background: #eee;
    border-color: #eee;
    color: #08c;
    font-size: 14px;
    opacity: .7
}

.vtex-bootstrap .accordion-toggle .link-box-edit:hover {
    opacity: 1
}

.vtex-bootstrap .accordion-toggle-active {
    color: #333;
    font-size: 24px;
    line-height: 30px;
    padding-top: 8px
}

.vtex-bootstrap .cart,.vtex-bootstrap .step,.vtex-bootstrap .totalizers {
    border: 3px solid #f4f4f4;
    margin-bottom: 15px;
    padding: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px
}

.vtex-bootstrap .cart.active,.vtex-bootstrap .step.active,.vtex-bootstrap .totalizers.active {
    border-color: #e5e5e5
}

.vtex-bootstrap .box-info {
    color: #999
}

.vtex-bootstrap .box-info,.vtex-bootstrap .box-info li {
    font-size: 12px;
    line-height: 15px
}

.vtex-bootstrap .box-info .shipping-options.just-one p,.vtex-bootstrap .box-info>p:last-child {
    margin: 0
}

.vtex-bootstrap .masked-info {
    font-size: 0;
    width: 0
}

.vtex-bootstrap .masked-info:after {
    content: "x";
    color: #dfdfdf;
    display: inline-block;
    font-size: 13px;
    text-shadow: 0 0 6px rgba(0,0,0,.5)
}

.vtex-bootstrap .icon-circle-blank,.vtex-bootstrap .icon-ok-circle {
    display: block;
    font-size: 20px;
    -webkit-text-stroke: .1px;
    position: absolute;
    right: 10px;
    top: 4px
}

.vtex-bootstrap .icon-ok-circle,.vtex-bootstrap .label-vertical-group:hover .icon-circle-blank {
    color: #46a546
}

.vtex-bootstrap .icon-circle-blank {
    color: #999
}

.vtex-bootstrap .badge {
    display: inline-block;
    padding: 2px 4px;
    font-size: 10px;
    font-weight: 700;
    line-height: 11px;
    color: #468847;
    white-space: nowrap;
    vertical-align: baseline;
    background-color: #dff0d8;
    border-radius: 9px;
    cursor: default
}

.vtex-bootstrap .icon-spin {
    -webkit-animation: spin .7s linear infinite;
    animation: spin .7s linear infinite
}

.vtex-bootstrap .subscriptions-page * {
    box-sizing: border-box
}

.vtex-bootstrap .subscriptions-page .subscription-container {
    padding: 0;
    margin: 0
}

.vtex-bootstrap .subscriptions-page h1.subscription-title {
    font-size: 18px;
    padding: 0;
    margin: 15px 0 0
}

.vtex-bootstrap .subscriptions-page h1.empty-items {
    font-size: 21px
}

.vtex-bootstrap .subscriptions-page .subscription-info-container {
    width: 100%
}

.vtex-bootstrap .subscriptions-page .customer-area {
    padding: 10px;
    word-break: break-all
}

.vtex-bootstrap .subscriptions-page .customer-name {
    font-size: 16px;
    font-weight: 700
}

.vtex-bootstrap .subscriptions-page .customer-actions a {
    padding: 5px 5px 5px 10px;
    text-decoration: none
}

.vtex-bootstrap .subscriptions-page .payment-card {
    padding: 10px;
    border: 1px solid #eee
}

.vtex-bootstrap .subscriptions-page .payment-card .payment-action a {
    padding: 5px 5px 5px 10px;
    text-decoration: none
}

.vtex-bootstrap .subscriptions-page .subscription-items-container {
    width: 100%;
    margin-top: 20px
}

.vtex-bootstrap .subscriptions-page .item-card {
    clear: both;
    height: 120px;
    width: 100%;
    padding: 10px;
    border: 1px solid #eee;
    margin-top: 5px
}

.vtex-bootstrap .subscriptions-page .item-card .item-img {
    margin-top: 18px
}

.vtex-bootstrap .subscriptions-page .item-card .item-name-container {
    height: 100%
}

.vtex-bootstrap .subscriptions-page .item-card .item-name {
    font-size: 14px;
    font-weight: 550;
    margin-top: 18px
}

.vtex-bootstrap .subscriptions-page .item-card .item-actions a {
    padding: 5px 5px 5px 10px;
    text-decoration: none
}

.vtex-bootstrap .subscriptions-page .shipping-data {
    font-size: 12px
}

.vtex-bootstrap .subscriptions-page .card-label {
    color: #999;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase
}

.vtex-bootstrap .subscriptions-page #subscriptionEditItemForm label {
    margin-bottom: 5px
}

.vtex-bootstrap .subscriptions-page #subscriptionEditItemForm label:last-child {
    margin-bottom: 0
}

.vtex-bootstrap .subscriptions-page #subscriptionEditItemForm input {
    height: 28px
}

.vtex-bootstrap .subscriptions-page #subscription-lightbox-backdrop {
    display: none
}

.vtex-bootstrap .subscriptions-page .subscription-lightbox {
    top: 15%!important;
    right: auto!important;
    bottom: auto!important;
    left: 50%!important;
    margin: 0 0 0 -175px!important;
    width: 350px!important
}

.dropdown-menu {
    display: block;
    right: 0;
    left: auto
}

@-webkit-keyframes shimmer-anim {
    0% {
        transform: translateZ(0)
    }

    to {
        transform: translate3d(50%,0,0)
    }
}

@keyframes shimmer-anim {
    0% {
        transform: translateZ(0)
    }

    to {
        transform: translate3d(50%,0,0)
    }
}

.shimmer {
    width: 200%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.7),hsla(0,0%,100%,0));
    background-size: 50% 100%;
    -webkit-animation: shimmer-anim .7s linear infinite;
    animation: shimmer-anim .7s linear infinite
}

.myo-progress-bar .myo-progress-bar__mobile-text {
    display: none
}

.myo-progress-bar .myo-progress-bar__subtitle {
    min-width: 5rem
}

.myo-progress-bar .myo-progress-bar__ma-inner-circle {
    margin: .1rem
}

.myo-progress-bar .myo-progress-bar__ma-inner-circle:before {
    content: "";
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    left: -4px;
    top: -4px;
    border-radius: 50%;
    z-index: -1;
    background: currentColor
}

.myo-progress-bar .myo-progress-bar__height1 {
    height: 1rem
}

.myo-progress-bar .myo-progress-bar__title-font {
    display: block;
    font-size: 13px;
    margin: 1.15em 0 1em;
    font-weight: 700
}

.myo-progress-bar .myo-package-progress-bar__ma-inner-circle {
    margin: .15rem;
    width: .75rem;
    height: .75rem
}

.myo-progress-bar .myo-package-progress-bar__ma-inner-circle:before {
    content: "";
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: -4px;
    top: -4px;
    border-radius: 50%;
    z-index: -1;
    background: currentColor
}

.myo-progress-bar .myo-package-progress-bar__circle.w1 {
    width: .75rem;
    height: .75rem
}

.myo-progress-bar .myo-package-progress-bar__line {
    border-width: 1px
}

.myo-progress-bar .myo-package-progress-bar__circle.mv3 {
    margin-top: .6rem;
    margin-bottom: .5rem
}

.status-color-blue {
    background-color: #96ccff
}

.status-color-yellow {
    background-color: #fbf1a9
}

.status-color-red {
    background-color: #ff725c
}

.status-color-green {
    background-color: #19a974
}

.myo-progress-bar .myo-package-progress-bar__text {
    display: none
}

.myo-progress-bar .myo-package-progress-bar__margin {
    margin-left: .25rem;
    margin-right: .25rem
}

.myo-package-progress-bar__line-height {
    line-height: 1.25rem
}

.myo-font {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif
}

.myo__menu-background-color {
    background-color: #08c
}

.myo__menu--color {
    color: #08c
}

.address-form .address-summary {
    padding-top: 1rem
}

.vtex-dropdown .f6,.vtex-input .f6 {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif
}

@supports ((width: -webkit-fit-content) or (width:-moz-fit-content) or (width:fit-content)) {
    .myo-progress-bar .myo-package-progress-bar__maxWidth {
        width:-webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        max-width: 300px
    }
}

.myo-progress-bar .myo-package-progress-bar__maxWidth {
    width: intrinsic;
    width: -moz-max-content;
    width: -webkit-max-content
}

.myo-subscription__history .history-package-progress .myo-progress-bar .myo-progress-bar__subtitle {
    min-width: 15rem
}

.invert-arrow .arrow-down {
    display: -webkit-flex
}

.invert-arrow .arrow-up {
    display: none
}

.myo-subscription__history .accordion__item .accordion__body,.myo-subscription__history .accordion__item .title,.myo-subscription__history .accordion__item:last-of-type .title {
    border-bottom-style: solid;
    border-bottom-width: .125rem;
    border-right-style: solid;
    border-right-width: .125rem;
    border-left-style: solid;
    border-left-width: .125rem
}

.arrow-down,.myo-progress-bar .caption,.myo-subscription__history .caption {
    display: none
}

@media print {
    .container {
        width: 940px
    }
}

@media (min-width: 1200px) {
    .container {
        width:70%
    }

    .myo-margin-right {
        margin-right: 24px
    }
}

@media (min-width: 979px) and (max-width:1200px) {
    .myo-margin-right {
        margin-right:24px
    }
}

@media (min-width: 768px) and (max-width:979px) {
    .container {
        width:724px
    }

    .myo-subscription__history .caption {
        display: block
    }

    .myo-progress-bar .myo-progress-bar__text {
        display: none
    }

    .myo-progress-bar .myo-progress-bar__mobile-text {
        display: block;
        padding-left: .4rem
    }

    .myo-margin-right {
        margin-right: 24px
    }

    .myo-progress-bar .myo-package-progress-bar__margin:first-of-type {
        margin-left: 0;
        margin-right: .25rem
    }

    .myo-progress-bar .myo-package-progress-bar__margin:last-of-type {
        margin-left: .25rem;
        margin-right: 0
    }
}

@media (max-width: 767px) {
    .myo-progress-bar .myo-package-progress-bar__margin:first-of-type {
        margin-left:0;
        margin-right: .25rem
    }

    .myo-progress-bar .myo-package-progress-bar__margin:last-of-type {
        margin-left: .25rem;
        margin-right: 0
    }

    .myo-progress-bar .myo-progress-bar__text {
        display: none
    }

    .container {
        width: 90%
    }

    .myo-progress-bar .myo-progress-bar__ma-inner-circle {
        margin: .15rem;
        width: .75rem;
        height: .75rem
    }

    .myo-subscription__history .caption {
        display: block
    }

    .myo-progress-bar .myo-progress-bar__ma-inner-circle:before {
        content: "";
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: -4px;
        top: -4px;
        border-radius: 50%;
        z-index: -1;
        background: currentColor
    }

    .myo-progress-bar .myo-progress-bar__circle.w1 {
        width: .75rem;
        height: .75rem
    }

    .myo-progress-bar .myo-progress-bar__line {
        border-width: 1px
    }

    .myo-progress-bar .myo-progress-bar__circle.mv3 {
        margin-top: .6rem;
        margin-bottom: .5rem
    }

    .myo-progress-bar .myo-progress-bar__mobile-text {
        display: block;
        padding-left: .4rem
    }
}

@media (min-width: 320px) and (max-width:640px) {
    .subscription__listing-card {
        min-height:23rem
    }

    .myo-subscription__history .caption {
        display: block
    }

    .background-height {
        height: 200vh
    }

    .vtex-modal__modal {
        padding: 1.5rem!important
    }

    .vtex-address-form__postalCode .pt6 {
        padding-top: 1rem
    }
}

@media (min-width: 640px) and (max-width:1023px) {
    .subscription__listing-card {
        min-height:12rem
    }

    .myo-subscription__history .myo-progress-bar .w3-ns {
        width: 9rem
    }

    .subscription__product-listing__card {
        height: auto;
        min-height: 6rem;
        padding: 0
    }

    .background-height {
        height: 150vh
    }

    .myo-subscription__image-size {
        height: 13.5rem;
        width: 13.5rem
    }

    .product-vertical-line {
        width: 12rem
    }
}

@media (min-width: 1024px) {
    .subscription__listing-card {
        min-height:12rem
    }

    .myo-subscription__history .myo-progress-bar .w3-ns {
        width: 14rem
    }

    .subscription__product-listing__card {
        height: auto;
        min-height: 6rem
    }

    .myo-subscription__history .myo-progress-bar .myo-package-progress-bar__text {
        display: block
    }

    .background-height {
        height: 170vh
    }

    .card-height {
        min-height: 18rem
    }

    .product-vertical-line {
        height: 9rem;
        width: 14.2rem;
        width: 12rem
    }

    .myo-subscription__image-size {
        height: 13.5rem;
        width: 13.5rem
    }
}

@media (min-width: 1300px) {
    .myo-subscription__history .myo-progress-bar .w3-ns {
        width:22rem
    }
}

@media (min-width: 57em) {
    .dn-m-2 {
        display:none
    }

    .pv0-m-2 {
        padding-top: 0;
        padding-bottom: 0
    }

    .pl0-m-2 {
        padding-left: 0
    }
}

.grecaptcha-badge {
    visibility: hidden
}

.squareBox {
    width: calc(100vw - 1.5rem);
    min-height: 20rem
}

@media screen and (min-width: 20em) {
    .squareBox {
        width:calc(100vw - 3rem)
    }
}

@media screen and (min-width: 23em) {
    .squareBox {
        width:20rem
    }
}

@media screen and (min-width: 40em) {
    .biggerContainer {
        margin-right:-25%
    }
}

.vtex-my-authentication-1-x-authenticationScreen_container,.vtex-my-authentication-1-x-authenticationScreen_passBox,.vtex-my-authentication-1-x-box_container,.vtex-my-authentication-1-x-box_content,.vtex-my-authentication-1-x-box_footer,.vtex-my-authentication-1-x-box_header,.vtex-my-authentication-1-x-box_headerSeparator,.vtex-my-authentication-1-x-codeInput_container,.vtex-my-authentication-1-x-createPassword_text,.vtex-my-authentication-1-x-currPassInput_container,.vtex-my-authentication-1-x-errorAlert_container,.vtex-my-authentication-1-x-loginSession_currSession,.vtex-my-authentication-1-x-loginSession_currSessionIcon,.vtex-my-authentication-1-x-loginSession_currSessionText,.vtex-my-authentication-1-x-loginSession_device,.vtex-my-authentication-1-x-loginSession_firstAccess,.vtex-my-authentication-1-x-loginSession_fullAddress,.vtex-my-authentication-1-x-loginSession_lastAccess,.vtex-my-authentication-1-x-loginSession_originDetails,.vtex-my-authentication-1-x-loginSessions_box,.vtex-my-authentication-1-x-loginSessions_error,.vtex-my-authentication-1-x-loginSessions_list,.vtex-my-authentication-1-x-loginSessions_skeleton,.vtex-my-authentication-1-x-loginSessionsBox_content,.vtex-my-authentication-1-x-loginSessionsBox_title,.vtex-my-authentication-1-x-loginSessionsScreen_container,.vtex-my-authentication-1-x-maskedPassword_content,.vtex-my-authentication-1-x-maskedPassword_title,.vtex-my-authentication-1-x-newPassInput_container,.vtex-my-authentication-1-x-passValidation_container,.vtex-my-authentication-1-x-passValidation_content,.vtex-my-authentication-1-x-passValidation_iconFailure,.vtex-my-authentication-1-x-passValidation_iconSuccess,.vtex-my-authentication-1-x-passValidation_lower,.vtex-my-authentication-1-x-passValidation_lowerUpper,.vtex-my-authentication-1-x-passValidation_minLength,.vtex-my-authentication-1-x-passValidation_minLengthNumber,.vtex-my-authentication-1-x-passValidation_number,.vtex-my-authentication-1-x-passValidation_title,.vtex-my-authentication-1-x-passValidation_upper,.vtex-my-authentication-1-x-resendCodeButton_container,.vtex-my-authentication-1-x-savePassButton_container,.vtex-my-authentication-1-x-skeletonEditPassword_button,.vtex-my-authentication-1-x-skeletonEditPassword_content,.vtex-my-authentication-1-x-skeletonLoginSessions_button,.vtex-my-authentication-1-x-skeletonLoginSessions_content,.vtex-my-authentication-1-x-skeletonLoginSessionsScreen_text1,.vtex-my-authentication-1-x-skeletonLoginSessionsScreen_text2,.vtex-my-authentication-1-x-skeletonLoginSessionsScreen_title,.vtex-my-authentication-1-x-warnAlert_container {
}

.vtex-subscriptions-custom-image-size {
    width: 12rem;
    height: 12rem
}

.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1
}

.swiper-container-no-flexbox .swiper-slide {
    float: left
}

.swiper-container-vertical>.swiper-wrapper {
    flex-direction: column
}

.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box
}

.swiper-container-android .swiper-slide,.swiper-wrapper {
    transform: translateZ(0)
}

.swiper-container-multirow>.swiper-wrapper {
    flex-wrap: wrap
}

.swiper-container-free-mode>.swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto
}

.swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform
}

.swiper-slide-invisible-blank {
    visibility: hidden
}

.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide {
    height: auto
}

.swiper-container-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform,height
}

.swiper-container-3d {
    perspective: 1200px
}

.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper {
    transform-style: preserve-3d
}

.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10
}

.swiper-container-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(270deg,rgba(0,0,0,.5),transparent)
}

.swiper-container-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(90deg,rgba(0,0,0,.5),transparent)
}

.swiper-container-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(0deg,rgba(0,0,0,.5),transparent)
}

.swiper-container-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(180deg,rgba(0,0,0,.5),transparent)
}

.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper {
    touch-action: pan-y
}

.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper {
    touch-action: pan-x
}

.swiper-button-next,.swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: 50%;
    background-repeat: no-repeat
}

.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled {
    opacity: .35;
    cursor: auto;
    pointer-events: none
}

.swiper-button-prev,.swiper-container-rtl .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E");
    left: 10px;
    right: auto
}

.swiper-button-next,.swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E");
    right: 10px;
    left: auto
}

.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E")
}

.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E")
}

.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E")
}

.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E")
}

.swiper-button-lock {
    display: none
}

.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: opacity .3s;
    transform: translateZ(0);
    z-index: 10
}

.swiper-pagination.swiper-pagination-hidden {
    opacity: 0
}

.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%
}

.swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transform: scale(.33);
    position: relative
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(.66)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    transform: scale(.33)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    transform: scale(.66)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
    transform: scale(.33)
}

.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2
}

button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer
}

.swiper-pagination-bullet-active {
    opacity: 1;
    background: currentColor
}

.swiper-container-vertical>.swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0,-50%,0)
}

.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 6px 0;
    display: block
}

.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px
}

.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    display: inline-block;
    transition: transform .2s,top .2s
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px
}

.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap
}

.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: transform .2s,left .2s
}

.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: transform .2s,right .2s
}

.swiper-pagination-progressbar {
    background: rgba(0,0,0,.25);
    position: absolute
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: currentColor;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top
}

.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    transform-origin: right top
}

.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0
}

.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0
}

.swiper-pagination-white .swiper-pagination-bullet-active {
    background: #fff
}

.swiper-pagination-progressbar.swiper-pagination-white {
    background: hsla(0,0%,100%,.25)
}

.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {
    background: #fff
}

.swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000
}

.swiper-pagination-progressbar.swiper-pagination-black {
    background: rgba(0,0,0,.25)
}

.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {
    background: #000
}

.swiper-pagination-lock {
    display: none
}

.swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0,0,0,.1)
}

.swiper-container-horizontal>.swiper-scrollbar {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%
}

.swiper-container-vertical>.swiper-scrollbar {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%
}

.swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0,0,0,.5);
    border-radius: 10px;
    left: 0;
    top: 0
}

.swiper-scrollbar-cursor-drag {
    cursor: move
}

.swiper-scrollbar-lock {
    display: none
}

.swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center
}

.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg {
    max-width: 100%;
    max-height: 100%;
    -o-object-fit: contain;
    object-fit: contain
}

.swiper-slide-zoomed {
    cursor: move
}

.swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    transform-origin: 50%;
    -webkit-animation: swiper-preloader-spin 1s steps(12) infinite;
    animation: swiper-preloader-spin 1s steps(12) infinite
}

.swiper-lazy-preloader:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E");
    background-position: 50%;
    background-size: 100%;
    background-repeat: no-repeat
}

.swiper-lazy-preloader-white:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E")
}

@-webkit-keyframes swiper-preloader-spin {
    to {
        transform: rotate(1turn)
    }
}

@keyframes swiper-preloader-spin {
    to {
        transform: rotate(1turn)
    }
}

.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000
}

.swiper-container-fade.swiper-container-free-mode .swiper-slide {
    transition-timing-function: ease-out
}

.swiper-container-fade .swiper-slide {
    pointer-events: none;
    transition-property: opacity
}

.swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-container-cube {
    overflow: visible
}

.swiper-container-cube .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
    visibility: hidden;
    transform-origin: 0 0;
    width: 100%;
    height: 100%
}

.swiper-container-cube .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-container-cube.swiper-container-rtl .swiper-slide {
    transform-origin: 100% 0
}

.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev {
    pointer-events: auto;
    visibility: visible
}

.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.swiper-container-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .6;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    z-index: 0
}

.swiper-container-flip {
    overflow: visible
}

.swiper-container-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1
}

.swiper-container-flip .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.swiper-container-coverflow .swiper-wrapper {
    -ms-perspective: 1200px
}

@media screen and (min-width: 40em) {
    .ml-20-ns {
        margin-left:20%
    }
}

.center-all {
    margin: auto
}

.border-box {
    box-sizing: border-box
}

.top-50 {
    top: 50%
}

.translate--50y {
    transform: translateY(-50%)
}

.vtex-my-subscriptions-3-x-statusDot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    background: currentColor
}

.vtex-my-subscriptions-3-x-statusDotBorder {
    min-width: 14px;
    min-height: 14px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    border: 1px solid
}

@media screen and (max-width: 39.9em) {
    .vtex-my-subscriptions-3-x-quantitySelector {
        width:4.4rem
    }
}

@media screen and (min-width: 40em) {
    .vtex-my-subscriptions-3-x-quantity {
        width:5.6rem
    }
}

.vtex-my-subscriptions-3-x-historyList {
    list-style: none;
    margin: 0;
    padding: 0 0 0 5px
}

.vtex-my-subscriptions-3-x-historyListItem {
    position: relative;
    display: flex;
    align-items: baseline
}

.vtex-my-subscriptions-3-x-historyListItem:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 4px;
    border-left: 1px solid #e3e4e6;
    height: 100%;
    z-index: 0
}

.vtex-my-subscriptions-3-x-historyListItem:first-child:before {
    top: 1em
}

.vtex-my-subscriptions-3-x-historyList.vtex-my-subscriptions-3-x-isFullyloaded .vtex-my-subscriptions-3-x-historyListItem:last-child:before {
    top: auto;
    bottom: calc(100% - 1em)
}

.vtex-my-subscriptions-3-x-historyListItem:only-child:before {
    content: none
}

.vtex-my-subscriptions-3-x-historyListItemDot,.vtex-my-subscriptions-3-x-historyListItemDot:before {
    display: block;
    position: relative;
    z-index: 1;
    flex: 0 0 9px;
    height: 9px;
    border-radius: 50%;
    transform-origin: 50%;
    background: currentColor
}

.vtex-my-subscriptions-3-x-historyListItem:first-child .vtex-my-subscriptions-3-x-historyListItemDot:before {
    content: "";
    transform: scale(2);
    opacity: .2
}

.vtex-my-subscriptions-3-x-historyListItemContent {
    flex: 1;
    margin-left: 1rem
}

.vtex-login-2-x-container,.vtex-login-2-x-contentFormVisible,.vtex-login-2-x-contentInitialScreen {
}

.vtex-login-2-x-profile {
    max-width: 130px
}

.vtex-login-2-x-accessCodeOptionBtn,.vtex-login-2-x-accountOptions,.vtex-login-2-x-accountOptionsSectionTitle,.vtex-login-2-x-arrowUp,.vtex-login-2-x-backButton,.vtex-login-2-x-button,.vtex-login-2-x-buttonDanger,.vtex-login-2-x-buttonLink,.vtex-login-2-x-buttonSocial,.vtex-login-2-x-codeConfirmation,.vtex-login-2-x-content,.vtex-login-2-x-corporateEmail,.vtex-login-2-x-corporateOptionBtn,.vtex-login-2-x-customOAuthOptionBtn,.vtex-login-2-x-deliveryMethodOptions,.vtex-login-2-x-dontHaveAccount,.vtex-login-2-x-emailAndPasswordForm,.vtex-login-2-x-emailForm,.vtex-login-2-x-emailPasswordOptionBtn,.vtex-login-2-x-emailVerification,.vtex-login-2-x-eyeIcon,.vtex-login-2-x-facebookOptionBtn,.vtex-login-2-x-forgotPasswordForm,.vtex-login-2-x-forgotPasswordLink,.vtex-login-2-x-formError,.vtex-login-2-x-formLinkContainer,.vtex-login-2-x-googleOptionBtn,.vtex-login-2-x-inputContainer,.vtex-login-2-x-inputContainerAccessCode,.vtex-login-2-x-inputContainerEmail,.vtex-login-2-x-inputContainerPassword,.vtex-login-2-x-label,.vtex-login-2-x-loading,.vtex-login-2-x-loginOptionsContainer,.vtex-login-2-x-logoutButton,.vtex-login-2-x-oauthAutoRedirect,.vtex-login-2-x-oauthAutoRedirectLoading,.vtex-login-2-x-oauthProvider,.vtex-login-2-x-optionsList,.vtex-login-2-x-optionsListItem,.vtex-login-2-x-optionsListItemContainer,.vtex-login-2-x-optionsSticky,.vtex-login-2-x-selectCodeDeliveryMethod,.vtex-login-2-x-sendButton,.vtex-login-2-x-termsAndConditions {
}

.vtex-login-2-x-formTitle {
    white-space: pre-line
}

.vtex-login-2-x-formSubtitle {
}

.vtex-login-2-x-box {
    top: 100%;
    visibility: visible;
    min-width: 19.375rem
}

.vtex-login-2-x-contentContainer {
    min-width: 100%
}

.vtex-login-2-x-formFooter {
    min-height: 2rem
}

.vtex-login-2-x-contentForm {
    min-width: 18.125rem
}

.vtex-login-2-x-contentAlwaysWithOptions {
    min-height: 18.75rem;
    max-width: 43.75rem
}

@media only screen and (max-width: 600px) {
    .vtex-login-2-x-contentAlwaysWithOptions {
        max-width:25rem
    }
}

.vtex-login-2-x-options {
    min-width: 20rem
}

.vtex-login-2-x-sendButton:only-child {
    margin: 0;
    width: 100%
}

.vtex-login-2-x-sendButton:only-child .vtex-button {
    width: 100%
}

.vtex-login-2-x-tooltipContainer {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content
}

.vtex-login-2-x-tooltipContainerTop {
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%)
}

.vtex-login-2-x-tooltipContainerLeft {
    top: 50%;
    transform: translateY(-50%);
    right: 102%
}

.vtex-login-2-x-tooltipContainerLeft:after {
    content: "";
    position: absolute;
    top: 45%;
    left: 100%;
    border: .625rem solid transparent;
    border-left-color: #3b3b3b
}

.vtex-login-2-x-tooltipContainerTop:after {
    content: "";
    position: absolute;
    left: 45%;
    top: 100%;
    border: .625rem solid transparent;
    border-top-color: #3b3b3b
}

.vtex-login-2-x-button .vtex-button {
    border: 1px solid #e9e9e9;
    width: 100%;
    min-height: 2.5rem
}

.vtex-login-2-x-button .vtex-button .vtex-login-2-x-oauthLabel {
    margin: 0 1.25rem
}

.vtex-login-2-x-buttonDanger>.vtex-button {
    background-color: #ffe6e6;
    color: #ff4c4c
}

.vtex-login-2-x-buttonDanger>.vtex-button .vtex__icon-spinner {
    color: #ff4c4c
}

.vtex-minicart-2-x-container,.vtex-minicart-2-x-content,.vtex-minicart-2-x-contentDiscount,.vtex-minicart-2-x-contentPrice,.vtex-minicart-2-x-imgContainer,.vtex-minicart-2-x-item,.vtex-minicart-2-x-itemContainer,.vtex-minicart-2-x-itemDeleteIcon,.vtex-minicart-2-x-itemDeleteIconLoader,.vtex-minicart-2-x-itemFooter,.vtex-minicart-2-x-itemImage,.vtex-minicart-2-x-itemName,.vtex-minicart-2-x-itemNameLarge,.vtex-minicart-2-x-itemRemoveBtn,.vtex-minicart-2-x-label,.vtex-minicart-2-x-sidebarHeader,.vtex-minicart-2-x-sidebarScrim {
}

.vtex-minicart-2-x-contentSmall {
    max-height: 383px
}

.vtex-minicart-2-x-contentLarge {
    max-height: -webkit-fill-available;
    max-height: -moz-available;
    max-height: stretch
}

.vtex-minicart-2-x-badge {
    top: -.7rem;
    right: -.8rem
}

.vtex-minicart-2-x-arrowUp {
    right: 7px
}

.vtex-minicart-2-x-box {
    width: 364px;
    top: 100%
}

.vtex-minicart-2-x-itemImageLoader {
    width: 100%;
    height: 100%
}

.vtex-minicart-2-x-contentFooter,.vtex-minicart-2-x-footerShippingPriceContainer,.vtex-minicart-2-x-footerShippingPriceLabelContainer,.vtex-minicart-2-x-footerSpacer,.vtex-minicart-2-x-labelDiscountText,.vtex-minicart-2-x-popupChildrenContainer,.vtex-minicart-2-x-popupContentContainer,.vtex-minicart-2-x-sidebarItemQuantityContainer,.vtex-minicart-2-x-sidebarRightCaretContainer {
}

@media only screen and (max-width: 40rem) {
    body.vtex-minicart-2-x-sidebarOpen {
        overflow:hidden
    }
}

@media only screen and (min-width: 40em) {
    .vtex-minicart-2-x-sidebar {
        width:340px
    }
}

.vtex-product-summary-2-x-containerInline .vtex-product-summary-2-x-imageContainer {
    max-width: 30%
}

.vtex-product-summary-2-x-containerInline .vtex-product-summary-2-x-imageContainer>img {
    max-height: 100%
}

.vtex-product-summary-2-x-buyButton,.vtex-product-summary-2-x-buyButtonContainer,.vtex-product-summary-2-x-container,.vtex-product-summary-2-x-containerInline,.vtex-product-summary-2-x-containerInlinePrice,.vtex-product-summary-2-x-containerSmall,.vtex-product-summary-2-x-description,.vtex-product-summary-2-x-element,.vtex-product-summary-2-x-image,.vtex-product-summary-2-x-information,.vtex-product-summary-2-x-quantityStepperContainer {
}

.vtex-product-summary-2-x-imageInline {
    max-height: 7rem
}

.vtex-product-summary-2-x-isHidden {
    visibility: hidden
}

.vtex-product-summary-2-x-containerNormal,.vtex-product-summary-2-x-nameContainer {
}

.vtex-product-summary-2-x-clearLink {
    text-decoration: inherit;
    color: inherit
}

.vtex-product-summary-2-x-aspectRatio {
    padding-top: 100%;
    background: 50%/contain no-repeat
}

.vtex-product-summary-2-x-attachmentItemContainer,.vtex-product-summary-2-x-attachmentListContainer,.vtex-product-summary-2-x-priceContainer,.vtex-product-summary-2-x-SKUSelectorContainer {
}

.vtex-product-summary-2-x-imageNormal {
    max-height: 17.56rem
}

.vtex-product-summary-2-x-addToListBtn,.vtex-product-summary-2-x-attachmentChildrenContainer,.vtex-product-summary-2-x-hoverEffect,.vtex-product-summary-2-x-imagePlaceholder,.vtex-product-summary-2-x-imageStackContainer {
}

.vtex-product-summary-2-x-hoverEffect:hover .vtex-product-summary-2-x-hoverImage {
    display: inline
}

.vtex-product-summary-2-x-hoverEffect:hover .vtex-product-summary-2-x-mainImageHovered {
    opacity: 0
}

.vtex-product-summary-2-x-hoverImage {
}

.vtex-product-summary-2-x-priceSpinner {
    border: 2px solid rgba(0,0,0,.1);
    border-left-color: #4d4d4d;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    -webkit-animation: vtex-product-summary-2-x-spin .5s linear infinite;
    animation: vtex-product-summary-2-x-spin .5s linear infinite
}

@-webkit-keyframes vtex-product-summary-2-x-spin {
    to {
        transform: rotate(1turn)
    }
}

@keyframes vtex-product-summary-2-x-spin {
    to {
        transform: rotate(1turn)
    }
}

.vtex-product-summary-2-x-sponsoredBadgeContainer,.vtex-product-summary-2-x-sponsoredBadgeText {
}

.vtex-product-summary-2-x-containerInline .vtex-product-summary-2-x-imageContainer {
    max-width: 30%
}

.vtex-product-summary-2-x-containerInline .vtex-product-summary-2-x-imageContainer>img {
    max-height: 100%
}

.vtex-product-summary-2-x-buyButton,.vtex-product-summary-2-x-buyButtonContainer,.vtex-product-summary-2-x-container,.vtex-product-summary-2-x-containerInline,.vtex-product-summary-2-x-containerInlinePrice,.vtex-product-summary-2-x-containerSmall,.vtex-product-summary-2-x-description,.vtex-product-summary-2-x-element,.vtex-product-summary-2-x-image,.vtex-product-summary-2-x-information,.vtex-product-summary-2-x-quantityStepperContainer {
}

.vtex-product-summary-2-x-imageInline {
    max-height: 7rem
}

.vtex-product-summary-2-x-isHidden {
    visibility: hidden
}

.vtex-product-summary-2-x-containerNormal,.vtex-product-summary-2-x-nameContainer {
}

.vtex-product-summary-2-x-clearLink {
    text-decoration: inherit;
    color: inherit
}

.vtex-product-summary-2-x-aspectRatio {
    padding-top: 100%;
    background: 50%/contain no-repeat
}

.vtex-product-summary-2-x-attachmentItemContainer,.vtex-product-summary-2-x-attachmentListContainer,.vtex-product-summary-2-x-priceContainer,.vtex-product-summary-2-x-SKUSelectorContainer {
}

.vtex-product-summary-2-x-imageNormal {
    max-height: 17.56rem
}

.vtex-product-summary-2-x-addToListBtn,.vtex-product-summary-2-x-attachmentChildrenContainer,.vtex-product-summary-2-x-hoverEffect,.vtex-product-summary-2-x-imagePlaceholder,.vtex-product-summary-2-x-imageStackContainer {
}

.vtex-product-summary-2-x-hoverEffect:hover .vtex-product-summary-2-x-hoverImage {
    display: inline
}

.vtex-product-summary-2-x-hoverEffect:hover .vtex-product-summary-2-x-mainImageHovered {
    opacity: 0
}

.vtex-product-summary-2-x-hoverImage {
}

.vtex-product-summary-2-x-priceSpinner {
    border: 2px solid rgba(0,0,0,.1);
    border-left-color: #4d4d4d;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    -webkit-animation: vtex-product-summary-2-x-spin .5s linear infinite;
    animation: vtex-product-summary-2-x-spin .5s linear infinite
}

@-webkit-keyframes vtex-product-summary-2-x-spin {
    to {
        transform: rotate(1turn)
    }
}

@keyframes vtex-product-summary-2-x-spin {
    to {
        transform: rotate(1turn)
    }
}

.vtex-product-summary-2-x-sponsoredBadgeContainer,.vtex-product-summary-2-x-sponsoredBadgeText {
}

.vtex-wish-list-1-x-iconSize {
    display: inline-block;
    width: 24px;
    height: 24px
}

.vtex-wish-list-1-x-fill {
    background: url('data:image/svg+xml;utf,<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" data-name="Layer 1" fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>heart-glyph</title><path d="M362.67,21.33A149,149,0,0,0,256,66.19,149,149,0,0,0,149.33,21.33C67,21.33,0,88.32,0,170.67a148.45,148.45,0,0,0,43.08,104.9L240.51,484a21.33,21.33,0,0,0,31,0L468.75,275.74A148.45,148.45,0,0,0,512,170.67C512,88.32,445,21.33,362.67,21.33Z"/></svg>')
}

.vtex-wish-list-1-x-outline {
    background: url('data:image/svg+xml;utf,<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" data-name="Layer 1" fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>heart-other</title><path d="M256,489.24a5.69,5.69,0,0,1-4.13-1.78L41.15,265A141.37,141.37,0,0,1,0,165C0,86.56,63.8,22.76,142.22,22.76A141.94,141.94,0,0,1,256,79.71a141.94,141.94,0,0,1,113.78-57C448.2,22.76,512,86.56,512,165A141.38,141.38,0,0,1,470.81,265L260.13,487.47A5.69,5.69,0,0,1,256,489.24ZM142.22,34.13C70.07,34.13,11.38,92.83,11.38,165A130.09,130.09,0,0,0,49.28,257l.08.09L256,475.28,462.63,257.13a130.18,130.18,0,0,0,38-92.16c0-72.14-58.69-130.84-130.84-130.84a130.66,130.66,0,0,0-109,58.58,5.9,5.9,0,0,1-9.48,0A130.66,130.66,0,0,0,142.22,34.13Z"/></svg>')
}

.vtex-wish-list-1-x-clearLink {
    text-decoration: inherit;
    color: inherit
}

.vtex-flex-layout-0-x-flexCol--priceWrapper {
    height: 40px
}

.vtex-flex-layout-0-x-flexRow--minicart-footer {
    box-shadow: 0 0 12px rgba(0,0,0,.15)
}

.vtex-store-icons-0-x-cartIcon--minicart-empty-state {
    color: #979899
}

.vtex-carousel-2-x-containerImg {
    background-color: #f0f0f0
}

.vtex-carousel-2-x-containerImg .vtex-carousel-2-x-img {
    max-width: 100%
}

.vtex-checkout-summary-0-x-summaryItemLabel {
    color: #afafc0;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--default-font-family)
}

.vtex-checkout-summary-0-x-price {
    color: #464b59;
    font-size: 16px;
    font-weight: 700;
    font-family: var(--default-font-family)
}

.vtex-checkout-summary-0-x-summaryItemContainer:first-child {
    display: none
}

.vtex-disclosure-layout-1-x-trigger--footer-accordion-mobile {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    background-repeat: no-repeat;
    background-position: 100% 0
}

.vtex-disclosure-layout-1-x-trigger--footer-accordion-mobile--hidden {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
}

.vtex-disclosure-layout-1-x-trigger--footer-accordion-mobile--visible {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 15l-6-6-6 6' stroke='%23fff' stroke-width='2.25' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
}

.vtex-flex-layout-0-x-flexRow--deals {
    background: #102a4c
}

.vtex-flex-layout-0-x-flexRow--deals-item {
    width: 100%
}

.vtex-flex-layout-0-x-flexRowContent--deals-item {
    justify-content: center;
    gap: 8px;
    padding: 8px 0;
    transition: all .3s ease
}

.vtex-flex-layout-0-x-flexRowContent--deals-item .vtex-flex-layout-0-x-stretchChildrenWidth {
    align-items: center;
    width: auto!important
}

.vtex-flex-layout-0-x-flexRowContent--main-header {
    justify-content: space-between
}

.vtex-flex-layout-0-x-flexRowContent--main-header .vtex-flex-layout-0-x-stretchChildrenWidth {
    width: auto!important;
    align-items: center
}

.vtex-flex-layout-0-x-flexRow--frequent-questions,.vtex-flex-layout-0-x-flexRow--header-icons {
    display: flex;
    align-items: center
}

.vtex-flex-layout-0-x-flexRowContent--frequent-questions .vtex-flex-layout-0-x-stretchChildrenWidth {
    align-items: center
}

.vtex-flex-layout-0-x-flexRowContent--header-icons {
    justify-content: right;
    gap: 16px
}

.vtex-flex-layout-0-x-flexRow--frequent-questions {
    margin-right: 8px
}

.vtex-flex-layout-0-x-flexRowContent--frequent-questions {
    gap: 8px
}

.vtex-sticky-layout-0-x-wrapper--sticky-header .vtex-flex-layout-0-x-flexRow--main-header .vtex-flex-layout-0-x-flexRowContent--main-header {
    box-shadow: none
}

.vtex-flex-layout-0-x-flexRow--main-header,.vtex-flex-layout-0-x-flexRowContent--main-header {
    background-color: #e06741!important
}

.vtex-flex-layout-0-x-flexRow--deals .vtex-store-components-3-x-container {
    max-width: 1220px;
    margin: 0 auto
}

.vtex-flex-layout-0-x-flexRowContent--main-header-mobile {
    align-items: center;
    padding: .625rem .5rem;
    background-color: #e06741!important
}

.vtex-flex-layout-0-x-flexRowContent--main-header .vtex-menu-2-x-styledLink {
    color: #727273;
    font-size: 14px
}

.vtex-flex-layout-0-x-flexRow--all-departaments {
    width: 100%
}

.vtex-flex-layout-0-x-flexRowContent--all-departaments {
    justify-content: space-between;
    align-items: center
}

.vtex-flex-layout-0-x-flexCol--filterCol {
    max-width: 500px;
    min-width: 230px
}

.vtex-flex-layout-0-x-flexCol--productCountCol {
    align-items: flex-start
}

.vtex-flex-layout-0-x-flexCol--orderByCol {
    align-items: flex-end
}

.vtex-flex-layout-0-x-flexCol--orderByMobileCol {
    width: 42%
}

.vtex-flex-layout-0-x-flexCol--filterMobileCol {
    width: 38%
}

.vtex-flex-layout-0-x-flexRow--quickviewMainRow {
    display: flex;
    max-height: 100%
}

.vtex-flex-layout-0-x-flexColChild--quickviewDetails:first-child {
    overflow-y: auto;
    height: 66%!important;
    overflow-x: hidden
}

.vtex-flex-layout-0-x-flexColChild--quickviewDetails:last-child {
    height: 34%!important
}

.vtex-flex-layout-0-x-flexRow--addToCartRow {
    padding-bottom: 1rem
}

.vtex-flex-layout-0-x-flexRowContent--mobile-header-row {
    display: flex;
    gap: 12px
}

.vtex-flex-layout-0-x-flexRowContent--mobile-header-row .vtex-flex-layout-0-x-stretchChildrenWidth {
    width: auto!important
}

.vtex-flex-layout-0-x-flexRowContent--main-header-mobile {
    justify-content: space-between;
    padding: 16px
}

.vtex-flex-layout-0-x-flexRow--header-mobile .vtex-store-components-3-x-container {
    padding: 0
}

.vtex-flex-layout-0-x-flexRow--footer-newsletter {
    border-bottom: 1px solid #e77754;
    padding: 32px 0
}

.vtex-flex-layout-0-x-flexRowContent--footer-newsletter {
    justify-content: center;
    gap: 32px
}

.vtex-flex-layout-0-x-flexRowContent--footer-1 {
    flex-wrap: wrap;
    justify-content: left;
    column-gap: 34px
}

.vtex-flex-layout-0-x-flexRowContent--footer-1 .vtex-flex-layout-0-x-stretchChildrenWidth {
    width: auto!important
}

.vtex-flex-layout-0-x-flexRow--social-media {
    display: flex;
    align-items: center
}

.vtex-flex-layout-0-x-flexRowContent--social-media {
    gap: 8px;
    padding-right: 20px
}

.vtex-flex-layout-0-x-flexRowContent--footer-container {
    gap: 32px
}

.vtex-flex-layout-0-x-flexRow--footer-container {
    padding: 32px 0 48px
}

.vtex-flex-layout-0-x-flexRowContent--footer-container-2 .vtex-flex-layout-0-x-stretchChildrenWidth,.vtex-flex-layout-0-x-flexRowContent--payment-methods .vtex-flex-layout-0-x-stretchChildrenWidth {
    width: auto!important
}

.vtex-flex-layout-0-x-flexRowContent--footer-container-2 {
    justify-content: space-between
}

.vtex-flex-layout-0-x-flexRowContent--payment-methods {
    flex-wrap: wrap;
    gap: 8px
}

.vtex-flex-layout-0-x-flexRowContent--certificates,.vtex-flex-layout-0-x-flexRowContent--stamps {
    gap: 8px
}

.vtex-flex-layout-0-x-flexRow--footer-container-2 {
    padding: 0 0 32px
}

.vtex-flex-layout-0-x-flexRow--confirmationButtons .vtex-button {
    background-color: #e06741;
    border: 1px solid transparent;
    border-radius: 8px;
    height: 50px;
    transition: all .3s ease
}

.vtex-flex-layout-0-x-flexRow--confirmationButtons .vtex-button:hover {
    border-color: #e06741
}

.vtex-flex-layout-0-x-flexRow--confirmationButtons .vtex-button__label {
    color: #fff;
    font: 400 16px/18.08px Lato-Bold,sans-serif;
    text-transform: uppercase
}

.vtex-flex-layout-0-x-flexRow--confirmationButtons .vtex-button:hover .vtex-button__label {
    color: #e06741
}

.vtex-flex-layout-0-x-flexRow--minicart-footer {
    box-shadow: none;
    border-top: 1px solid #afafc0
}

.vtex-flex-layout-0-x-flexRowContent--minicart-content {
    padding: 16px;
    gap: 12px;
    border-bottom: 1px solid #ebebf3
}

.vtex-flex-layout-0-x-flexCol--wishlist-item-info-col {
    gap: 8px
}

.vtex-flex-layout-0-x-flexRowContent--buy-or-remove .vtex-flex-layout-0-x-stretchChildrenWidth {
    width: auto!important
}

@media screen and (max-width: 1025px) {
    .vtex-flex-layout-0-x-flexRow--deals {
        background:#193861
    }

    .vtex-flex-layout-0-x-flexRowContent--deals-item {
        display: flex
    }

    .vtex-flex-layout-0-x-flexRow--search-bar-mobile {
        background-color: #e06741;
        padding: 0 16px
    }

    .vtex-flex-layout-0-x-flexRowContent--frequent-questions .vtex-flex-layout-0-x-stretchChildrenWidth {
        width: auto!important
    }

    .vtex-flex-layout-0-x-flexRow--drawer-header-row .vtex-store-drawer-0-x-closeIcon {
        filter: invert(1)
    }

    .vtex-flex-layout-0-x-flexRow--footer-newsletter {
        border: none
    }

    .vtex-flex-layout-0-x-flexRowContent--payment-methods {
        max-width: 85%
    }

    .vtex-flex-layout-0-x-flexRow--footer-4 {
        margin-bottom: 32px
    }

    .vtex-flex-layout-0-x-flexRowContent--stamps {
        justify-content: center;
        flex-wrap: wrap;
        padding-bottom: 24px
    }

    .vtex-flex-layout-0-x-flexRowContent--menu-content-footer .vtex-flex-layout-0-x-stretchChildrenWidth {
        flex-direction: column
    }

    .vtex-flex-layout-0-x-flexRowContent--menu-content-footer {
        margin-bottom: 16px
    }

    .vtex-flex-layout-0-x-flexRowContent--minicart-content {
        padding: 8px
    }
}

.vtex-list-context-0-x-list--wishlist {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0
}

.vtex-list-context-0-x-item--wishlist {
    border: 1px solid #ebebf3;
    background: #f7fafb;
    border-radius: 8px;
    padding: 16px
}

.vtex-list-context-0-x-list--wishlist .vtex-flex-layout-0-x-flexRowContent {
    min-height: 115px
}

.vtex-list-context-0-x-item--wishlist .vtex-button {
    border-radius: 8px;
    border: 1px solid #e06741;
    min-width: 208px;
    text-transform: capitalize
}

.vtex-list-context-0-x-item--wishlist .vtex-button:focus,.vtex-list-context-0-x-item--wishlist .vtex-button:hover {
    background: transparent;
    color: #e06741;
    border: 1px solid #e06741
}

.vtex-list-context-0-x-list--wishlist .vtex-flex-layout-0-x-flexRowContent--buy-or-remove {
    height: 40px;
    gap: 16px;
    min-height: 40px
}

@media screen and (max-width: 1025px) {
    .vtex-list-context-0-x-item--wishlist .vtex-button {
        min-width:188px
    }

    .vtex-list-context-0-x-list--wishlist .vtex-flex-layout-0-x-flexRowContent--buy-or-remove {
        height: auto
    }

    .vtex-list-context-0-x-list--wishlist .vtex-store-components-3-x-discountContainer {
        height: 100%
    }
}

.vtex-menu-2-x-menuContainerNav--menu-desktop {
    background: #cf532d;
    position: relative
}

.vtex-menu-2-x-menuContainer--menu-desktop {
    justify-content: space-between;
    max-width: 1110px;
    margin: 0 auto
}

.vtex-menu-2-x-submenuContainer--desktop-submenu {
    position: static
}

.vtex-menu-2-x-styledLinkContent--department {
    color: #fff;
    font: 400 16px Lato-Bold,sans-serif
}

.vtex-menu-2-x-styledLink--department--highlight {
    display: flex;
    align-items: center;
    gap: 8px
}

.vtex-menu-2-x-styledLink--department--highlight:after {
    content: url("data:image/svg+xml;charset=utf-8,%3Csvg width='17' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 6l4 4 4-4' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    height: 16px
}

.vtex-menu-2-x-styledLinkContainer--department,.vtex-menu-2-x-styledLinkContainer--submenu-label {
    margin: 0
}

.vtex-menu-2-x-styledLinkContent--submenu-label {
    color: #a1a6b7;
    font: 400 16px/18.08px Lato-Bold,sans-serif;
    transition: all .3s ease;
    padding: 3px 0;
    min-width: 210px;
    margin-right: 32px
}

.vtex-menu-2-x-styledLinkContent--submenu-label:after {
    content: url(https://cleanweb.vtexassets.com/assets/vtex/assets-builder/cleanweb.clean-whey/1.0.2/menu-arrow___e4f58bcdf9bff81fcb35ea77c955f50b.svg);
    display: block;
    width: 15px;
    height: 15px;
    transform: translateY(-3px);
    transition: all .3s ease
}

.vtex-menu-2-x-styledLinkContent--submenu-label:hover {
    color: #e06741
}

.vtex-menu-2-x-styledLinkContent--submenu-label:hover:after {
    transform: translate(7px,6px) rotate(180deg)
}

.vtex-menu-2-x-menuContainer--submenu {
    flex-direction: column;
    gap: 19px;
    border-right: 1px solid #afafc0;
    position: relative
}

.vtex-menu-2-x-menuContainer--submenu:before {
    content: "Todos os produtos";
    color: #e06741;
    font: 400 18px/20.7px Lato-Bold,sans-serif;
    margin-bottom: 5px
}

.vtex-menu-2-x-submenu--desktop-submenu {
    position: relative
}

.vtex-menu-2-x-menuItem--submenu-label .vtex-menu-2-x-submenuContainer {
    position: absolute;
    right: 0;
    top: 0
}

.vtex-menu-2-x-menuItem--submenu-label .vtex-menu-2-x-submenuWrapper {
    padding: 0;
    margin: 0;
    border: none;
    left: 0;
    top: 47px;
    background: transparent;
    height: 90%
}

.vtex-menu-2-x-submenuWrapper--desktop-submenu {
    width: 100%;
    padding: 32px 0;
    border-bottom: 4px solid #e06741
}

.vtex-menu-2-x-submenu--desktop-submenu {
    justify-content: flex-start;
    max-width: 1216px;
    margin: 0 auto
}

.vtex-menu-2-x-submenu--submenu-items {
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 19px
}

.vtex-menu-2-x-submenuContainer--submenu-items {
    height: 100%
}

.vtex-menu-2-x-styledLinkContent--submenu-item {
    color: #a1a6b7;
    font: 400 16px/18.08px Lato-Bold,sans-serif;
    text-transform: uppercase
}

.vtex-menu-2-x-menuContainer--footer-menu .vtex-menu-2-x-styledLinkContent {
    color: #f4f4f4;
    font: 400 14px/15.82px Lato-Regular,sans-serif
}

.vtex-menu-2-x-menuContainer--footer-menu {
    flex-direction: column;
    gap: 8px
}

.vtex-menu-2-x-menuContainer--footer-menu .vtex-menu-2-x-styledLinkContainer {
    padding: 0;
    margin: 0
}

@media screen and (max-width: 1024px) {
    .vtex-store-drawer-0-x-childrenContainer--menu-mobile .vtex-menu-2-x-menuContainerNav {
        margin:0;
        width: -webkit-fill-available;
        width: fill-available;
        width: -moz-available
    }

    .vtex-menu-2-x-menuItem--submenu-label .vtex-menu-2-x-submenuContainer--submenu-items {
        position: static
    }

    .vtex-menu-2-x-menuItem--submenu-label {
        padding: 24px 0;
        border-bottom: 1px solid #ebebf3;
        margin: 0
    }

    .vtex-menu-2-x-styledLinkContent--submenu-label {
        margin-right: 0
    }

    .vtex-menu-2-x-styledLinkContainer--submenu-label {
        margin: 0
    }

    .vtex-menu-2-x-menuItem--submenu-label .vtex-menu-2-x-styledLinkContainer--submenu-label {
        padding: 0
    }

    .vtex-menu-2-x-menuItem--submenu-label--isOpen .vtex-menu-2-x-styledLinkContainer--submenu-label {
        padding: 0;
        margin-bottom: 16px
    }

    .vtex-menu-2-x-menuContainerNav--footer-menu {
        width: 100%;
        margin-bottom: 16px
    }

    .vtex-menu-2-x-styledLinkContent--menu-desktop-item {
        align-items: center;
        color: #a1a6b7
    }

    .vtex-menu-2-x-accordionIcon--f-lvl-menu {
        display: none
    }

    .vtex-menu-2-x-styledLinkIcon--menu-desktop-item {
        margin: 0;
        height: 24px
    }

    .vtex-menu-2-x-styledLinkContainer--menu-desktop-item {
        margin: 0 32px;
        padding: 24px 0;
        border-bottom: 1px solid #ebebf3
    }

    .vtex-menu-2-x-menuItem--f-lvl-menu--isOpen .vtex-menu-2-x-submenuAccordion--menu-terceiro-nivel {
        right: auto;
        left: 0
    }

    .vtex-menu-2-x-menuItem--f-lvl-menu--isOpen {
        position: absolute;
        width: 100%;
        z-index: 999;
        background: #fff;
        left: 0
    }

    .vtex-menu-2-x-submenuAccordion--menu-terceiro-nivel {
        background-color: #fff;
        position: absolute;
        left: -100vw;
        overflow-x: hidden;
        transition: all .5s ease;
        z-index: 99;
        height: 100vh;
        background-size: cover;
        padding: 8px 0 0 8px;
        flex-direction: column;
        gap: 12px
    }

    .vtex-menu-2-x-styledLink--menu-desktop-item--highlight:after {
        position: absolute;
        right: 0;
        top: 42%;
        transform: rotate(270deg)
    }

    .vtex-menu-2-x-menuItem--f-lvl-menu--isOpen .vtex-menu-2-x-styledLinkContent--menu-desktop-item {
        color: #464b59;
        font: 400 18px/20.7px Lato-Bold,sans-serif;
        justify-content: left;
        gap: 8px
    }

    .vtex-menu-2-x-menuItem--f-lvl-menu--isOpen .vtex-menu-2-x-styledLinkContent--menu-desktop-item:before {
        content: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 6l-6 6 6 6' stroke='%23464B59' stroke-width='2.25' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        height: 24px
    }

    .vtex-menu-2-x-menuItem--f-lvl-menu--isOpen .vtex-menu-2-x-styledLinkIcon--menu-desktop-item {
        display: none
    }
}

.vtex-login-2-x-profileIcon {
    overflow: visible!important;
    transform: translate(-8px,-8px)
}

.vtex-login-2-x-container .vtex-button__label {
    width: 30px;
    height: 30px
}

.vtex-login-2-x-container .vtex-button {
    margin: 0;
    border: none
}

.vtex-login-2-x-content {
    padding: 24px;
    border-radius: 8px
}

.vtex-login-2-x-contentContainer {
    border-radius: 8px
}

.vtex-login-2-x-arrowUp {
    display: none
}

.vtex-login-2-x-accessCodeOptionBtn .vtex-button,.vtex-login-2-x-accessCodeOptionBtn .vtex-button:hover,.vtex-login-2-x-emailPasswordOptionBtn .vtex-button,.vtex-login-2-x-emailPasswordOptionBtn .vtex-button:hover {
    border: 1px solid #102a4c;
    border-radius: 8px;
    min-height: 48px;
    background: #6c86b4!important
}

.vtex-login-2-x-accessCodeOptionBtn .vtex-button__label,.vtex-login-2-x-emailPasswordOptionBtn .vtex-button__label {
    font: 400 14px Lato-Regular,sans-serif;
    text-transform: none;
    color: #fff;
    gap: 3px;
    align-items: center;
    padding: 0 13px!important
}

.vtex-login-2-x-accessCodeOptionBtn .vtex-button__label:after,.vtex-login-2-x-emailPasswordOptionBtn .vtex-button__label:after {
    content: ">"
}

.vtex-login-2-x-formTitle {
    font: 400 14px Lato-Regular,sans-serif;
    color: #464b59;
    margin: 0;
    padding: 0
}

.vtex-login-2-x-optionsList {
    margin: 16px 0 0
}

.vtex-login-2-x-optionsListItem {
    margin-bottom: 8px
}

.vtex-login-2-x-box {
    min-width: 315px
}

.vtex-login-2-x-contentForm,.vtex-login-2-x-options {
    min-width: unset
}

.vtex-login-2-x-contentForm {
    padding: 0;
    width: 100%
}

.vtex-login-2-x-inputContainer {
    padding: 0;
    outline: none;
    margin: 16px 0 0
}

.vtex-login-2-x-inputContainer .vtex-input,.vtex-login-2-x-inputContainer .vtex-input-prefix__group,.vtex-login-2-x-inputContainer .vtex-input:hover {
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    box-shadow: none
}

.vtex-login-2-x-inputContainer .vtex-styleguide-9-x-input {
    border: 1px solid #afafc0;
    border-radius: 8px
}

.vtex-login-2-x-inputContainer .vtex-styleguide-9-x-input::placeholder {
    font: 400 14px Lato-Regular,sans-serif;
    color: #afafc0
}

.vtex-login-2-x-sendButton {
    width: 45%
}

.vtex-login-2-x-sendButton .vtex-button {
    background: #e06741;
    border: none;
    border-radius: 8px;
    height: 48px;
    width: 100%
}

.vtex-login-2-x-sendButton .vtex-button__label {
    font: 400 14px Lato-Regular,sans-serif
}

.vtex-login-2-x-arrowBackIcon,.vtex-login-2-x-eyeSightIcon {
    overflow: visible!important;
    width: 19px;
    height: 19px
}

.vtex-login-2-x-backButton .vtex-button,.vtex-login-2-x-backButton .vtex-button__label {
    padding: 0!important;
    margin: 0
}

.vtex-login-2-x-formFooter {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #afafc0
}

.vtex-login-2-x-dontHaveAccount,.vtex-login-2-x-dontHaveAccount:hover {
    border: 1px solid #193861;
    padding: 16px 0;
    width: 100%;
    text-align: center;
    font: 400 14px Lato-Regular,sans-serif;
    color: #193861;
    border-radius: 8px;
    opacity: 1
}

.vtex-login-2-x-forgotPasswordLink:hover {
    opacity: 1
}

.vtex-login-2-x-forgotPasswordLink:after {
    content: ">";
    padding-left: 6px
}

@media screen and (max-width: 1024px) {
    .vtex-login-2-x-formTitle {
        margin-top:16px
    }

    .vtex-login-2-x-forgotPasswordLink {
        margin-top: 8px
    }
}

.vtex-minicart-2-x-openIconContainer,.vtex-minicart-2-x-openIconContainer .vtex-button__label {
    padding: 0!important
}

.vtex-minicart-2-x-cartIcon {
    overflow: visible!important;
    transform: translate(-8px,-8px)
}

.vtex-minicart-2-x-openIconContainer .vtex-button__label {
    width: 31px;
    height: 30px
}

.vtex-minicart-2-x-openIconContainer .vtex-button {
    border: none
}

.vtex-minicart-2-x-minicartQuantityBadgeDefault {
    background: #193861;
    width: 24px;
    height: 24px;
    padding: 0;
    aspect-ratio: 1/1;
    top: -12px;
    right: -16px
}

.vtex-minicart-2-x-closeIconContainer--minicart {
    position: absolute;
    right: 0
}

.vtex-minicart-2-x-minicartTitle {
    font-size: 0;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 24px 16px;
    margin: 0;
    border-bottom: 1px solid #afafc0
}

.vtex-minicart-2-x-minicartTitle:after {
    content: "Sua sacola de compras";
    font: 400 16px/21.28px Lato-Regular,sans-serif;
    color: #e06741
}

.vtex-minicart-2-x-minicartTitle:before {
    content: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 11-8 0' stroke='%23E06741' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    height: 24px
}

.vtex-minicart-2-x-closeIcon--minicart {
    width: 24px;
    height: 24px;
    filter: brightness(0) saturate(100%) invert(26%) sepia(6%) saturate(1553%) hue-rotate(187deg) brightness(98%) contrast(85%)
}

.vtex-minicart-2-x-closeIconButton--minicart {
    padding: 24px 16px;
    line-height: 11px
}

.vtex-minicart-2-x-minicartProductListContainer .vtex-flex-layout-0-x-flexColChild {
    position: relative
}

.vtex-minicart-2-x-minicartCheckoutButton .vtex-button,.vtex-minicart-2-x-minicartCheckoutButton .vtex-button:hover {
    border-radius: 8px;
    background: #e06741;
    border: none
}

.vtex-minicart-2-x-minicartCheckoutButton .vtex-button:after {
    content: "Ir para o pagamento";
    text-transform: none;
    height: 40px;
    font: 700 16px Lato-Regular,sans-serif;
    display: flex;
    align-items: center;
    justify-content: center
}

.vtex-minicart-2-x-childrenContainer--minicart,.vtex-minicart-2-x-drawerContent--minicart,.vtex-minicart-2-x-minicartSideBarContentWrapper--minicart {
    height: 100%!important
}

.vtex-minicart-2-x-minicartCheckoutButton .vtex-button__label {
    display: none
}

.vtex-minicart-2-x-minicartSummary {
    border-bottom: 1px solid #ebebf3;
    border-top: 1px solid #afafc0;
    padding-bottom: 16px;
    margin-bottom: 16px
}

.vtex-minicart-2-x-minicartProductListContainer {
    padding: 0
}

@media screen and (max-width: 1025px) {
    .vtex-minicart-2-x-childrenContainer--minicart,.vtex-minicart-2-x-drawerContent--minicart,.vtex-minicart-2-x-minicartSideBarContentWrapper {
        height:100%!important
    }
}

@media screen and (min-width: 40em) {
    .vtex-modal-layout-0-x-paper--quickview {
        height:260px;
        width: 580px
    }

    .vtex-modal-layout-0-x-actionsContainer--quickview {
        padding: 0 2rem 2rem
    }
}

@media screen and (min-width: 50em) {
    .vtex-modal-layout-0-x-paper--quickview {
        height:450px;
        width: 900px
    }
}

@media screen and (min-width: 75em) {
    .vtex-modal-layout-0-x-paper--quickview {
        width:calc(100% - 4rem);
        height: auto
    }
}

@media screen and (min-width: 82em) {
    .vtex-modal-layout-0-x-actionsContainer--quickview {
        padding:0 2.5rem 2.5rem
    }
}

.vtex-modal-layout-0-x-paper--quickview {
    min-width: 320px;
    max-width: 96rem
}

.vtex-modal-layout-0-x-headerContainer--quickview {
    border: none;
    position: absolute;
    right: 0
}

.vtex-modal-layout-0-x-actionsContainer--quickview {
    height: 100%;
    width: 100%;
    transition: box-shadow .15s ease-in-out,border-top .15s ease-in-out;
    border-top: 1px solid transparent;
    box-shadow: -4px 0 27px -12px transparent
}

.vtex-modal-layout-0-x-actionsContentWrapper {
    border-top: 1px solid #aaa;
    padding-top: 1.5rem
}

.vtex-modal-layout-0-x-contentContainer--quickviewContent {
    padding: 2.5rem 0 2.5rem 2rem;
    overflow-x: hidden
}

.vtex-modal-layout-0-x-triggerContainer--quickview {
    padding: .75rem
}

.vtex-modal-layout-0-x-triggerContainer {
    outline: none
}

.vtex-modal-layout-0-x-actionsContainer--quickview:not(.vtex-modal-layout-0-x-actionsContainerEndOfContent--quickview) {
    border-top-color: #eee;
    box-shadow: -4px 0 27px -12px rgba(0,0,0,.64)
}

.vtex-modal-layout-0-x-actionsContainer--quickview:not(.vtex-modal-layout-0-x-actionsContainerEndOfContent--quickview) .vtex-modal-layout-0-x-actionsContentWrapper {
    border-top-color: transparent
}

.vtex-modal-layout-0-x-closeButton {
    padding-right: 1rem
}

.vtex-modal-layout-0-x-paper--product-gifts {
    padding: 1.5rem
}

input:-webkit-autofill {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s
}

input:focus-visible {
    outline: none
}

@keyframes vtex-my-account-1-x-slide-in {
    0% {
        left: -100vw
    }

    to {
        left: 0
    }
}

.vtex-menu-2-x-submenuAccordion--menu-terceiro-nivel {
    animation: vtex-my-account-1-x-slide-in .5s
}

.vtex-menu-2-x-menuItem--f-lvl-menu--isOpen {
    animation: vtex-my-account-1-x-slide-in .6s
}

.vtex-flex-layout-0-x-flexRowContent--main-header>.vtex-flex-layout-0-x-stretchChildrenWidth:nth-child(2) {
    width: 55.7%!important
}

.vtex-login-2-x-container .vtex-button__label>span>div:last-child {
    display: none
}

.vtex-login-2-x-container .vtex-button__label {
    padding: 0!important
}

.vtex-login-2-x-container .vtex-button__label>span>div {
    margin: 0
}

.hover-bg-action-secondary:hover {
    background: transparent!important
}

.vtex-login-2-x-backButton .vtex-button__label .t-small {
    font: 400 14px Lato-Regular,sans-serif;
    color: #464b59
}

.vtex-login-2-x-backButton .vtex-button__label>span {
    gap: 8px;
    height: 48px
}

.vtex-login-2-x-backButton .vtex-button__label>span>div:first-child {
    transform: translateY(-10px)
}

.vtex-login-2-x-inputContainerPassword .vtex-styleguide-9-x-input+span {
    position: absolute;
    background: transparent;
    right: 5px;
    top: 5px
}

.vtex-flex-layout-0-x-flexRowContent--footer-container>.vtex-flex-layout-0-x-stretchChildrenWidth {
    width: 25%!important
}

.vtex-flex-layout-0-x-flexRowContent--footer-container>.vtex-flex-layout-0-x-stretchChildrenWidth:first-child {
    width: 31%!important
}

.vtex-store-footer-2-x-footerLayout>.vtex-flex-layout-0-x-flexRow>.vtex-store-components-3-x-container {
    padding: 0
}

.vtex-order-placed-2-x-productImageWrapper img {
    border-radius: 8px;
    height: 100%
}

.vtex-account>div.w-100.mw9.pv7-m.pv9-l.flex {
    max-width: 1216px;
    margin: 0 auto;
    gap: 32px
}

@media screen and (min-width: 1026px) {
    aside.vtex-my-account-1-x-menu {
        width:23%;
        height: 370px;
        padding: 24px
    }

    .vtex-account__page {
        width: 77%
    }

    .vtex-my-account-1-x-profile main .w-60-ns {
        width: 68%
    }

    .vtex-my-account-1-x-profile main .w-40-ns {
        width: 32%
    }

    .vtex-button:has(.vtex__icon-arrow-back) {
        display: none
    }

    .vtex-pageHeader-link__container {
        margin: 0
    }

    .vtex-my-account-1-x-emailContainer {
        margin: 0!important
    }

    .render-route-store-login .vtex-login-2-x-loginOptionsContainer {
        width: 100%
    }
}

.vtex-my-account-1-x-boxContainer,.vtex-my-account-1-x-profileBoxContainer .vtex-my-account-1-x-boxContainerBody {
    border: 1px solid #afafc0;
    border-radius: 4px 12px 4px 4px
}

.vtex-pageHeader__title {
    color: #464b59;
    font: 400 18px/20.7px Lato-Bold,sans-serif
}

.vtex-pageHeader__container {
    padding: 0 0 16px
}

.vtex-account__page-body {
    padding: 0
}

.vtex-my-account-1-x-profileBoxContainer .vtex-my-account-1-x-boxContainer {
    border: none
}

.vtex-my-account-1-x-boxContainerBody {
    padding: 24px
}

.vtex-my-account-1-x-boxContainerBody div.mb8 {
    margin-bottom: 24px;
    flex: none;
    width: 165px;
    margin-right: 24px
}

.vtex-my-account-1-x-phoneNumberContainer {
    display: contents
}

.vtex-my-account-1-x-phoneNumberContainer div.mb8 {
    margin: 0
}

.vtex-my-account-1-x-userInfo {
    margin-bottom: 24px
}

.vtex-my-account-1-x-boxContainerBody label {
    font: 400 12px/13.56px Lato-Regular,sans-serif;
    color: #a1a6b7
}

.vtex-my-account-1-x-boxContainerBody label+.light {
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    color: #464b59;
    max-width: 165px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.vtex-my-account-1-x-boxContainerFooter {
    justify-content: left;
    padding: 0
}

.vtex-my-account-1-x-boxContainerFooter .vtex-button {
    border: 1px solid #e06741;
    background: #e06741;
    border-radius: 8px;
    margin-top: 16px;
    transition: all .5s ease
}

.vtex-my-account-1-x-boxContainerFooter .vtex-button__label {
    font-size: 0;
    padding: 10px 28px!important
}

.vtex-my-account-1-x-boxContainerFooter .vtex-button__label:before {
    content: "Editar dados pessoais";
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    color: #fff;
    text-transform: none;
    transition: all .5s ease
}

.vtex-my-account-1-x-boxContainerFooter .vtex-button:hover .vtex-button__label:before {
    color: #e06741;
    transition: all .5s ease
}

.vtex-my-account-1-x-newsletterBoxContainer>.pb5,.vtex-my-account-1-x-profileBoxContainer>.pb5 {
    padding: 0
}

.vtex-my-account-1-x-profile>main {
    gap: 32px
}

.vtex-profile-form-3-x-profileSummary {
    display: flex;
    flex-wrap: wrap
}

.vtex-account input,.vtex-my-account-1-x-profileForm-gender label .br2.bw1 {
    border: 1px solid #afafc0;
    border-radius: 8px;
    height: 48px
}

.vtex-account .vtex-input-prefix__group {
    border: none;
    height: 48px
}

.vtex-my-account-1-x-profileForm-gender label .vtex-dropdown__button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%
}

.vtex-my-account-1-x-profileForm-gender label .vtex-dropdown__button>div {
    width: 100%
}

.vtex-my-account-1-x-profileContainer span {
    color: #a1a6b7;
    font: 400 12px/13.56px Lato-Regular,sans-serif
}

.vtex-profile-form-3-x-toggleBusinessButtonWrapper .vtex-button {
    border: 1px solid #193861;
    background: #fff;
    color: #193861;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    text-transform: none;
    padding: 10px;
    border-radius: 8px
}

.vtex-profile-form-3-x-toggleBusinessButtonWrapper {
    margin-bottom: 16px
}

.vtex-my-account-1-x-boxContainerBody .vtex-button:last-child {
    height: 40px;
    border-radius: 8px
}

.vtex-my-account-1-x-newsletterContainerTitle {
    color: #e06741;
    font: 400 18px/20.7px Lato-Bold,sans-serif
}

.vtex-my-account-1-x-newsletterContainerMessage {
    color: #464b59;
    padding: 24px 0;
    font: 400 16px/18.08px Lato-Regular,sans-serif
}

.vtex-my-account-1-x-passwordBox .vtex-checkbox__label {
    color: #a1a6b7;
    font: 400 16px/18.08px Lato-Regular,sans-serif
}

.vtex-my-account-1-x-passwordBox .vtex-checkbox__line-container {
    align-items: center
}

.vtex-my-account-1-x-userImage {
    display: none
}

.vtex-my-account-1-x-userGreeting,.vtex-my-account-1-x-userName {
    color: #e06741;
    font: 400 24px/27.6px Lato-Bold,sans-serif;
    display: inline-block
}

.vtex-my-account-1-x-menu {
    border: 1px solid #afafc0;
    border-radius: 8px;
    padding: 24px
}

.vtex-account_menu-link,.vtex-my-account-1-x-menuLink {
    color: #a1a6b7;
    font: 400 14px/15.82px Lato-Regular,sans-serif;
    display: flex;
    align-items: center;
    padding: 0 8px;
    border: none;
    border-left: 1px solid transparent;
    margin: 0 0 12px
}

.vtex-account_menu-link.b--action-primary {
    border-left-color: #e06741;
    color: #464b59
}

.vtex-pageHeader__container>.mt7 {
    margin: 0
}

.vtex-my-account-1-x-menuLinks {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85%
}

.vtex-my-account-1-x-menuLinks .vtex-my-account-1-x-menuLink:last-child {
    color: #cf2424;
    border-left: 1px solid #cf2424
}

.vtex-login-2-x-content--accountOptions:not(.vtex-login-2-x-contentInitialScreen) {
    padding: 0
}

.render-route-store-login .vtex-login-2-x-contentAlwaysWithOptions {
    gap: 16px;
    flex-direction: column-reverse
}

.vtex-login-2-x-content--accountOptions:not(.vtex-login-2-x-contentInitialScreen) .mv4.min-h-2.b--muted-4 {
    text-align: center
}

.vtex-my-authentication-1-x-authenticationScreen_container {
    padding: 0
}

.vtex-my-authentication-1-x-box_container {
    border: 1px solid #afafc0;
    border-radius: 4px 12px 4px 4px
}

.vtex-account__page:has(.vtex-account__page) {
    width: 100%
}

.vtex-my-authentication-1-x-loginSessionsBox_title,.vtex-my-authentication-1-x-maskedPassword_title {
    color: #000;
    font: 400 16px/18.08px Lato-Bold,sans-serif
}

.vtex-my-authentication-1-x-box_footer .vtex-button {
    border: 1px solid #193861;
    border-radius: 8px;
    background: #fff;
    width: 208px
}

.vtex-my-authentication-1-x-box_footer .vtex-button__label {
    color: #193861;
    text-transform: none;
    padding: 12px 0!important
}

.vtex_my-authentication_box_footer {
    padding: 0 0 24px 24px
}

.vtex-my-authentication-1-x-savePassButton_container {
    margin: 0
}

.vtex-pageHeader__container>.c-on-base.flex.flex-wrap.flex-row.justify-between.mt0 {
    flex-direction: column
}

.vtex-pageHeader__children.order-2 {
    width: fit-content;
    margin-top: 8px
}

.vtex-my-account-1-x-addressList__header .vtex-button,.vtex-my-account-1-x-newAddressButton .vtex-button,.vtex-my-cards-1-x-newCardButton .vtex-button {
    border-radius: 8px;
    border: 1px solid #e06741;
    height: 40px;
    width: 208px;
    transition: all .5s ease
}

.vtex-my-account-1-x-addressList__header .vtex-button:hover,.vtex-my-account-1-x-newAddressButton .vtex-button:hover,.vtex-my-cards-1-x-newCardButton .vtex-button:hover {
    background: transparent;
    transition: all .5s ease
}

.vtex-my-account-1-x-addressList__header .vtex-button__label,.vtex-my-account-1-x-newAddressButton .vtex-button__label,.vtex-my-cards-1-x-newCardButton .vtex-button__label {
    color: #fff;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    text-transform: none;
    padding: 0!important
}

.vtex-my-account-1-x-addressList__header .vtex-button:hover .vtex-button__label,.vtex-my-account-1-x-newAddressButton .vtex-button:hover .vtex-button__label,.vtex-my-cards-1-x-newCardButton .vtex-button:hover .vtex-button__label {
    color: #e06741;
    transition: all .5s ease
}

.vtex-my-account-1-x-addressList .vtex-my-account-1-x-boxContainerFooter {
    padding: 0 0 24px 24px
}

.vtex-my-account-1-x-addressList .vtex-my-account-1-x-boxContainerFooter .vtex-button {
    margin: 0
}

.vtex-my-account-1-x-addressEdit .vtex-address-form__container+.vtex-button {
    display: inline-block;
    width: 49%;
    background: #e06741;
    border-radius: 8px;
    height: 40px;
    margin-right: 8px;
    border: 1px solid #e06741;
    transition: all .3s ease
}

.vtex-my-account-1-x-addressEdit .vtex-address-form__container+.vtex-button:hover {
    background: transparent
}

.vtex-my-account-1-x-addressEdit .vtex-address-form__container+.vtex-button .vtex-button__label {
    color: #fff;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    text-transform: none
}

.vtex-my-account-1-x-addressEdit .vtex-address-form__container+.vtex-button:hover .vtex-button__label {
    color: #e06741
}

#root .vtex-button {
    transition: all .3s ease;
    border: 1px solid #e06741;
    padding: 0 6px
}

#root .vtex-input-prefix__group {
    border: none
}

#root input {
    border: 1px solid #afafc0
}

#root .vtex-button:hover,.vtex-my-account-1-x-boxContainerBody .vtex-button:hover {
    background: transparent;
    color: #e06741;
    border: 1px solid #e06741
}

.vtex-my-authentication-1-x-authenticationScreen_container .vtex-button,.vtex-my-authentication-1-x-authenticationScreen_container .vtex-button .vtex-button__label,.vtex_my-authentication_box_container .vtex-button,.vtex_my-authentication_box_container .vtex-button .vtex-button__label {
    transition: all .3s ease
}

.vtex-wish-list-1-x-wishlistIconContainer .vtex-button:focus,.vtex-wish-list-1-x-wishlistIconContainer .vtex-button:focus-visible {
    background: transparent;
    border: none
}

.vtex-wish-list-1-x-wishlistIconContainer .vtex-button:has(.vtex-wish-list-1-x-fill):after {
    content: "Remover dos favoritos";
    text-decoration: underline;
    text-transform: none;
    color: #3d61a0
}

.vtex-wish-list-1-x-wishlistIconContainer .vtex-button:has(.vtex-wish-list-1-x-outline):after {
    content: "Adicionar aos favoritos";
    text-decoration: underline;
    text-transform: none;
    color: #3d61a0
}

.vtex-account__page:has(.wish-list) {
    width: 100%!important
}

.vtex-account__page-body.wish-list {
    border: 1px solid #afafc0;
    border-radius: 8px;
    padding: 24px
}

.vtex-my-authentication-1-x-authenticationScreen_container .vtex-button:hover,.vtex_my-authentication_box_container .vtex-button:hover {
    background: #193861!important
}

.vtex-my-authentication-1-x-authenticationScreen_container .vtex-button:hover .vtex-button__label,.vtex_my-authentication_box_container .vtex-button:hover .vtex-button__label {
    color: #fff
}

.vtex-my-account-1-x-addressEdit .vtex-button+.mt5 {
    display: inline-block;
    width: 49%
}

.vtex-my-account-1-x-addressEdit .vtex-button+.mt5 .vtex-button {
    border: 1px solid #193861;
    border-radius: 8px;
    background: #fff;
    height: 40px;
    transition: all .3s ease
}

.vtex-my-account-1-x-addressEdit .vtex-button+.mt5 .vtex-button:hover {
    background: #193861
}

.vtex-my-account-1-x-addressEdit .vtex-button+.mt5 .vtex-button__label {
    color: #193861;
    text-transform: none;
    font: 400 16px/18.08px Lato-Regular,sans-serif
}

.vtex-my-account-1-x-addressEdit .vtex-button+.mt5 .vtex-button:hover .vtex-button__label {
    color: #fff
}

.vtex-my-subscriptions-new-button .vtex-button {
    transition: all .3s ease;
    border: 1px solid #e06741!important
}

.vtex-my-subscriptions-new-button .vtex-button:hover {
    background: transparent
}

.vtex-my-subscriptions-new-button .vtex-button:hover .vtex-button__label {
    color: #e06741
}

.styleguide__box .vtex-button {
    border: 1px solid #e06741;
    background: transparent
}

.styleguide__box+div>.vtex-button {
    border: 1px solid #e06741;
    transition: all .3s ease
}

.styleguide__box+div>.vtex-button:hover {
    background: transparent
}

.styleguide__box+div>.vtex-button:hover .vtex-button__label {
    color: #e06741
}

.vtex-my-account-1-x-boxContainerBody .vtex-dropdown__container {
    border: 1px solid #afafc0;
    height: 48px;
    border-radius: 8px
}

.vtex-my-account-1-x-boxContainerBody .vtex-dropdown__label,.vtex-my-account-1-x-boxContainerBody .vtex-input__label {
    font: 400 12px/13.56px Lato-Regular,sans-serif;
    color: #a1a6b7
}

.vtex-my-account-1-x-addressCreate .vtex-input__suffix,.vtex-my-account-1-x-addressEdit .vtex-input__suffix {
    display: none
}

.vtex-my-account-1-x-boxContainerBody .vtex-address-form__postalCode-forgottenURL>a {
    color: #3d61a0;
    font: 400 14px/15.82px Lato-Regular,sans-serif
}

.vtex-my-account-1-x-boxContainerBody .vtex-address-form__postalCode-forgottenURL>a .ml2,.vtex-my-orders-app-3-x-orderBody svg,.vtex-my-orders-app-3-x-orderHeader .tr-ns.mt2-ns,.vtex-my-orders-app-3-x-orderHeader img {
    display: none
}

.vtex-my-orders-app-3-x-orderHeader {
    border: none;
    background: transparent;
    display: flex;
    gap: 112px;
    justify-content: flex-start;
    padding: 16px 16px 8px
}

.vtex-my-orders-app-3-x-orderHeader>div {
    width: auto
}

.vtex-my-orders-app-3-x-orderCard {
    background: #f7fafb;
    border-radius: 8px;
    border: 1px solid #ebebf3;
    margin: 0 0 24px
}

.vtex-my-orders-app-3-x-orderBody {
    background: transparent
}

.vtex-my-orders-app-3-x-orderHeaderLabel {
    font: 400 12px/13.56px Lato-Regular,sans-serif;
    color: #a1a6b7;
    text-transform: none;
    margin-bottom: 8px
}

.vtex-my-orders-app-3-x-orderHeaderValue,.vtex-my-orders-app-3-x-orderId {
    font: 400 18px/20.7px Lato-Bold,sans-serif;
    color: #464b59;
    text-transform: none
}

.vtex-my-orders-app-3-x-orderId {
    display: flex;
    flex-direction: column;
    align-items: baseline
}

.vtex-my-orders-app-3-x-orderId:before {
    content: "NÃºmero do pedido";
    font: 400 12px/13.56px Lato-Regular,sans-serif;
    color: #a1a6b7;
    margin-bottom: 8px
}

.vtex-my-orders-app-3-x-orderCard .cf:after,.vtex-my-orders-app-3-x-orderCard .cf:before {
    display: none
}

.vtex-my-orders-app-3-x-detailsBtn {
    border: 1px solid #e06741;
    background: #e06741;
    border-radius: 8px;
    height: 40px
}

.vtex-my-orders-app-3-x-detailsBtn:hover {
    background: transparent;
    color: #e06741;
    transition: all .3s ease
}

.vtex-my-orders-app-3-x-detailsBtn>span {
    color: #fff;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    text-transform: none;
    transition: all .3s ease;
    padding-top: 2px
}

.vtex-my-orders-app-3-x-detailsBtn:hover>span {
    color: #e06741
}

.vtex-my-orders-app-3-x-reorderBtn {
    width: 100%;
    border: 1px solid #193861;
    border-radius: 8px;
    background: #fff;
    height: 40px;
    justify-content: center
}

.vtex-my-orders-app-3-x-font {
    margin: 0;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    color: #193861;
    text-transform: none
}

.vtex-my-orders-app-3-x-orderProductName {
    color: #464b59;
    font: 700 16px/18.08px Lato-Bold,sans-serif
}

.vtex-my-orders-app-3-x-cancelBtn {
    display: none
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li a {
    border: 1px solid #e06741;
    color: #fff;
    background: #e06741;
    padding: 6px 4px;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;
    justify-content: center;
    min-width: 208px;
    transition: all .3s ease
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li a svg {
    display: none
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li a span {
    color: #fff;
    margin: 0!important;
    padding: 0
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li:first-child a {
    background: transparent;
    border: 1px solid #193861;
    transition: all .3s ease
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li a:hover {
    background: transparent;
    color: #e06741
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li a:hover span {
    color: #e06741
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li:first-child a:hover {
    background: #193861
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li:first-child a:hover span {
    color: #fff
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li:first-child {
    margin: 0
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li:first-child a span {
    color: #193861;
    font-size: 0
}

.vtex-my-orders-app-3-x-orderDetails>div>div:nth-child(2) li:first-child a span:after {
    content: "Comprar novamente";
    font: 400 16px/18.08px Lato-Regular,sans-serif
}

.myo-progress-bar__line {
    width: 15%
}

.myo-progress-bar:not(.myo-progress-bar .myo-progress-bar) {
    border-radius: 8px;
    border: 1px solid #afafc0
}

.vtex-account__order-details>div>div:last-child>div {
    border: 1px solid #afafc0;
    border-radius: 8px;
    margin-top: 24px;
    padding: 16px
}

.vtex-account__order-details>div>div:last-child>div h2 {
    margin: 0
}

.styleguide__box,.vtex-dropdown__container {
    border: 1px solid #afafc0
}

.vtex-my-orders-app-3-x-orderProductQuantityValue {
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    color: #a1a6b7;
    margin-top: 24px
}

.vtex-account .vtex-styleguide-9-x-input {
    padding: 0 12px
}

.vtex-my-orders-app-3-x-orderProductShipping {
    display: none
}

.vtex-account__page:has(.vtex-my-orders-app-3-x-orderCard) {
    width: 100%
}

.vtex-my-orders-app-3-x-orderProduct img {
    width: 112px;
    border: 1px solid #afafc0;
    border-radius: 8px
}

.vtex-my-orders-app-3-x-orderProduct h4.db.mb1.mt0 {
    margin-top: 32px
}

.vtex-my-orders-app-3-x-orderBody {
    display: flex;
    align-items: center;
    padding: 16px
}

main.vtex-my-orders-app-3-x-ordersList {
    border: 1px solid #afafc0;
    padding: 24px;
    border-radius: 8px
}

.vtex-my-orders-app-3-x-productName {
    font: 400 16px/18.08px Lato-Bold,sans-serif;
    color: #464b59;
    text-decoration: none
}

.vtex-my-orders-app-3-x-orderDetails .w-100.fl.mt5.mb2-l.mb2-xl {
    flex-direction: column;
    display: flex
}

.vtex-my-orders-app-3-x-orderDetails .w-100.fl.mt5.mb2-l.mb2-xl .w-100.fl.w-third-m.mb5 {
    width: 100%;
    padding: 0;
    overflow: hidden;
    border: 1px solid #afafc0;
    border-radius: 8px
}

.vtex-my-orders-app-3-x-orderDetails .w-100.fl.mt5.mb2-l.mb2-xl .w-100.fl.w-third-m.mb5 section {
    overflow: hidden;
    border: none
}

.vtex-my-subscriptions-new-button .vtex-button {
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 208px
}

.vtex-my-subscriptions-new-button .vtex-button__label {
    color: #fff;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    text-transform: none;
    padding: 0!important
}

.vtex-modal__overlay .vtex-styleguide-9-x-scrollBar {
    padding-bottom: 24px
}

.vtex-styleguide-9-x-scrollBar .vtex-modal__close-icon {
    padding: 4px
}

.vtex-modal__confirmation>.vtex-button {
    width: 50%;
    border-radius: 0;
    height: 40px
}

.vtex-modal__confirmation>.mr4 {
    width: 50%;
    text-align: center;
    border: 1px solid #e06741;
    display: flex;
    justify-content: center
}

.vtex-modal__confirmation>.mr4 .vtex-button {
    width: 100%
}

.vtex-product-list-0-x-inputContainer input {
    width: auto;
    max-width: 25px;
    text-align: center;
    color: #464b59;
    font-family: var(--default-font-family);
    font-size: 12px;
    font-weight: 400
}

.vtex-product-list-0-x-inputContainer span {
    display: none
}

.vtex-product-list-0-x-quantitySelectorButton svg {
    width: 7px
}

.vtex-checkout-summary-0-x-summaryItemLabel#shipping:after {
    content: "Frete";
    display: block;
    font: 400 16px Lato-Regular,sans-serif;
    color: #afafc0
}

.vtex-checkout-summary-0-x-summaryItemLabel#shipping {
    font-size: 0
}

@media screen and (max-width: 1025px) {
    .vtex-account__page-body.wish-list {
        padding:0;
        border: none
    }

    .vtex-wish-list-1-x-wishlistIconContainer .vtex-button:has(.vtex-wish-list-1-x-fill):after {
        font-size: 14px
    }

    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0)
    }

    .vtex-account>div.w-100.mw9.pv7-m.pv9-l.flex {
        max-width: 100%;
        margin: 24px 16px;
        gap: 24px
    }

    .vtex-my-account-1-x-menu {
        margin: 24px 0;
        min-height: 340px
    }

    .vtex-my-account-1-x-genderContainer,.vtex-my-account-1-x-nameContainer,.vtex-my-account-1-x-phoneNumberContainer {
        display: flex;
        width: 100%
    }

    .vtex-my-account-1-x-boxContainerFooter {
        margin: 0
    }

    .vtex-my-account-1-x-boxContainerBody label+.light {
        max-width: none
    }

    .vtex-my-account-1-x-boxContainerBody div.mb8 {
        flex: 1 1;
        width: auto;
        margin-right: 0
    }

    .vtex-my-account-1-x-dateOfBirthSubContainer,.vtex-my-account-1-x-phoneNumberSubContainer {
        margin: 0
    }

    .vtex-my-account-1-x-profile>main {
        gap: 24px
    }

    .vtex-pageHeader-link__container {
        margin-bottom: 24px
    }

    .vtex-pageHeader-link__container .ml3.ttu.t-action--small {
        color: #4b5563;
        font: 400 14px/15.82px Lato-Regular,sans-serif;
        text-transform: none
    }

    .vtex-pageHeader-link__container .vtex__icon-arrow-back {
        filter: brightness(0) saturate(100%) invert(30%) sepia(11%) saturate(791%) hue-rotate(176deg) brightness(99%) contrast(86%);
        width: 18px;
        height: 18px
    }

    .vtex-pageHeader-link__container .vtex-button:has(.vtex__icon-arrow-back) {
        width: auto;
        height: auto
    }

    .vtex-my-account-1-x-addressBox {
        flex-direction: column
    }

    .vtex-my-orders-app-3-x-orderHeader {
        flex-wrap: wrap;
        gap: 12px
    }

    .vtex-my-orders-app-3-x-orderHeaderLabel {
        text-align: left
    }

    .vtex-my-orders-app-3-x-orderBody {
        flex-direction: column
    }

    .vtex-my-orders-app-3-x-orderProduct h4.db.mb1.mt0 {
        margin-top: 0
    }

    .vtex-my-orders-app-3-x-orderProduct img {
        width: auto
    }
}

.vtex-order-placed-2-x-confirmationTitle {
    color: #98ac3a;
    font: 400 32px/36.8px Lato-Bold,sans-serif;
    margin-top: 12px
}

.vtex-order-placed-2-x-confirmationIconWrapper {
    filter: brightness(0) saturate(100%) invert(60%) sepia(66%) saturate(388%) hue-rotate(30deg) brightness(93%) contrast(90%)
}

.vtex-order-placed-2-x-confirmationMessage {
    color: #464b59;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    margin-top: 32px
}

.vtex-order-placed-2-x-noticeListItem {
    padding: 32px 0;
    font: 400 18px/20.7px Lato-Regular,sans-serif;
    color: #464b59
}

.vtex-order-placed-2-x-orderOptionsWrapper .vtex-button {
    background-color: #e06741;
    border: 1px solid transparent;
    border-radius: 8px;
    height: 46px
}

.vtex-order-placed-2-x-orderOptionsWrapper .vtex-button:hover {
    border-color: #e06741
}

.vtex-order-placed-2-x-orderOptionsWrapper .vtex-button__label {
    color: #fff;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    text-transform: uppercase
}

.vtex-order-placed-2-x-orderOptionsWrapper .vtex-button:hover .vtex-button__label {
    color: #e06741
}

.vtex-order-placed-2-x-orderPlacedMainWrapper {
    max-width: 1216px;
    margin: 0 auto;
    width: 100%
}

.vtex-order-placed-2-x-totalList {
    width: 100%
}

.vtex-order-placed-2-x-totalListItemValue {
    color: #464b59;
    font: 400 18px/20.7px Lato-Bold,sans-serif
}

.vtex-order-placed-2-x-totalListItemLabel {
    color: #999;
    font: 400 16px/18.08px Lato-Regular,sans-serif
}

.vtex-order-placed-2-x-totalListItem:last-child .vtex-order-placed-2-x-totalListItemLabel,.vtex-order-placed-2-x-totalListItem:last-child .vtex-order-placed-2-x-totalListItemValue {
    color: #464b59;
    font: 400 48px/55.2px Lato-Bold,sans-serif;
    margin-bottom: 48px
}

.vtex-order-placed-2-x-orderNumber {
    color: #464b59;
    font: 400 24px/27.6px Lato-Bold,sans-serif;
    margin-bottom: 13px
}

.vtex-order-placed-2-x-orderDatetime,.vtex-order-placed-2-x-orderSoldBy {
    color: #a1a6b7;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    margin-top: 9px;
    display: block
}

.vtex-order-placed-2-x-orderSeller {
    color: #13181d;
    font: 400 16px/18.08px Lato-Regular,sans-serif
}

.vtex-order-placed-2-x-paymentGroup {
    display: none
}

.vtex-order-placed-2-x-customerInfoListName {
    color: #13181d;
    font: 400 16px/18.08px Lato-Bold,sans-serif
}

.vtex-order-placed-2-x-customerInfoListDocument,.vtex-order-placed-2-x-customerInfoListEmail,.vtex-order-placed-2-x-customerInfoListPhone {
    color: #a1a6b7;
    font: 400 16px/18.08px Lato-Regular,sans-serif
}

.vtex-order-placed-2-x-packageDeliveryTitle {
    color: #464b59;
    font: 400 32px/36.8px Lato-Bold,sans-serif
}

.vtex-order-placed-2-x-productName {
    color: #464b59;
    font: 400 16px/18.08px Lato-Bold,sans-serif
}

.vtex-order-placed-2-x-productPrice {
    color: #464b59;
    font: 400 18px/20.7px Lato-Bold,sans-serif
}

.vtex-order-placed-2-x-productQuantity {
    color: #a1a6b7;
    font: 400 16px/18.08px Lato-Regular,sans-serif;
    margin-bottom: 13px
}

.vtex-order-placed-2-x-productImageWrapper {
    border: 1px solid #afafc0;
    border-radius: 8px;
    height: 167px
}

.vtex-order-placed-2-x-noticeListItem .vtex-button {
    transition: all .3s ease
}

.vtex-order-placed-2-x-cancelOrderButton .vtex-button:hover,.vtex-order-placed-2-x-noticeListItem .vtex-button:hover,.vtex-order-placed-2-x-orderPaymentItem .vtex-button:hover,.vtex-order-placed-2-x-printButtonWrapper .vtex-button {
    background: transparent;
    color: #e06741;
    border: 1px solid #e06741
}

.vtex-button {
    transition: all .3s ease
}

.vtex-product-gifts-0-x-productGiftText--default {
    cursor: pointer
}

.vtex-product-highlights-2-x-productHighlightWrapper--collection {
    position: absolute;
    top: 10px;
    left: 5px;
    width: 200px
}

.vtex-product-highlights-2-x-productHighlightText {
    background: #faebd7;
    border-radius: 20px;
    padding: 5px 10px
}

.vtex-product-list-0-x-productBrandName {
    display: none
}

.vtex-product-list-0-x-productName {
    font: 400 14px var(--default-font-family);
    font-size: 14px
}

.vtex-product-list-0-x-deleteIcon {
    overflow: visible!important
}

.vtex-product-list-0-x-quantitySelector {
    position: absolute;
    right: 0;
    z-index: 1;
    top: 12px
}

.vtex-product-list-0-x-price {
    transform: translateY(-7px);
    color: #464b59;
    font-family: var(--default-font-family);
    font-size: 18px;
    font-weight: 700;
    margin-top: 7px
}

.vtex-product-list-0-x-quantityDropdownContainer .vtex-styleguide-9-x-container {
    font-size: 12px
}

.vtex-product-list-0-x-inputContainer,.vtex-product-list-0-x-inputContainer:hover {
    width: auto!important;
    padding: 0;
    border: 2px solid #afafc0
}

.vtex-product-list-0-x-productPriceContainer {
    margin-top: 8px!important
}

.vtex-product-list-0-x-quantitySelectorButton,.vtex-product-list-0-x-quantitySelectorButton:hover,.vtex-product-list-0-x-quantitySelectorIncrease,.vtex-product-list-0-x-quantitySelectorIncrease:hover {
    padding: 6px 13px;
    background: #ebebf3;
    color: #464b59;
    margin: 0
}

.vtex-product-list-0-x-quantitySelectorDecrease,.vtex-product-list-0-x-quantitySelectorDecrease:hover {
    border: 2px solid #afafc0;
    border-right: none;
    border-radius: 8px 0 0 8px
}

.vtex-product-list-0-x-quantitySelectorIncrease,.vtex-product-list-0-x-quantitySelectorIncrease:hover {
    border: 2px solid #afafc0;
    border-left: none;
    border-radius: 0 8px 8px 0
}

@media screen and (max-width: 1024px) {
    .vtex-product-list-0-x-price {
        transform:translateY(-2px)
    }

    .vtex-product-list-0-x-quantitySelector {
        width: auto
    }
}

.vtex-product-identifier-0-x-product-identifier--productReference {
    margin-bottom: 1rem
}

.vtex-product-price-1-x-listPrice {
    color: #727273;
    margin-bottom: .25rem;
    font-size: 1rem
}

.vtex-product-price-1-x-sellingPrice {
    color: #3f3f40;
    font-size: 1.25rem
}

.vtex-product-price-1-x-sellingPriceValue {
    font-size: 2.25rem;
    font-weight: 700
}

.vtex-product-price-1-x-installments {
    color: #727273;
    margin-bottom: 1rem
}

.vtex-product-price-1-x-savings {
    font-weight: 500;
    color: #79b03a
}

.vtex-product-price-1-x-sellingPriceValue--summary {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2e2e2e
}

.vtex-product-price-1-x-savings--summary {
    background: #8bc34a;
    border-radius: 1000px;
    align-items: center;
    display: flex
}

.vtex-product-price-1-x-savings--summary,.vtex-product-price-1-x-savings-discount--summary {
    padding-left: .5rem;
    padding-right: .5rem;
    font-size: .875rem;
    font-weight: 600;
    vertical-align: baseline;
    color: #fff
}

.vtex-product-price-1-x-listPrice--summary {
    margin-bottom: .25rem;
    font-size: .875rem
}

.vtex-product-price-1-x-installments--summary {
    margin-bottom: 2rem;
    font-size: .875rem
}

.vtex-product-price-1-x-savings--summaryPercentage {
    background: #e06741;
    border-radius: 1000px;
    align-items: center;
    display: flex
}

.vtex-product-price-1-x-savingsPercentage--summaryPercentage {
    font-size: .875rem;
    font-weight: 600;
    vertical-align: baseline;
    color: #fff;
    padding: .25rem .5rem
}

.vtex-product-summary-2-x-skuSelectorContainer--quickview .vtex-product-summary-2-x-skuSelectorItemImage .vtex-product-summary-2-x-frameAround,.vtex-product-summary-2-x-skuSelectorContainer--quickview .vtex-product-summary-2-x-skuSelectorItemImage .vtex-product-summary-2-x-skuSelectorInternalBox {
    border-radius: 50%
}

.vtex-product-summary-2-x-container .vtex-modal-layout-0-x-triggerContainer {
    opacity: 0;
    transition: opacity .2s ease-in-out
}

.vtex-product-summary-2-x-container:hover .vtex-modal-layout-0-x-triggerContainer {
    opacity: 1
}

@media screen and (max-width: 40em) {
    .vtex-product-summary-2-x-container .vtex-modal-layout-0-x-triggerContainer {
        display:none
    }
}

.vtex-product-summary-2-x-nameContainer {
    justify-content: start;
    padding-top: 1rem;
    padding-bottom: 1rem
}

.vtex-product-summary-2-x-brandName {
    font-weight: 600;
    font-size: 18px;
    color: #2e2e2e
}

.vtex-product-summary-2-x-container {
    text-align: start
}

.vtex-product-summary-2-x-imageContainer {
    text-align: center
}

.vtex-product-summary-2-x-image {
    border-radius: .25rem
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-container {
    max-width: 100%!important
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-element {
    flex-direction: row;
    gap: 16px;
    padding: 0
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-imageContainer {
    max-width: 112px;
    display: flex;
    align-items: center;
    margin: 0
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-imageStackContainer {
    border: 1px solid #afafc0;
    border-radius: 8px;
    overflow: hidden;
    padding-top: 4px;
    background: #fff
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-productPriceClass {
    flex-direction: row;
    align-items: center;
    margin: 0 auto 0 0
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-brandName {
    font: 700 16px Lato,sans-serif;
    color: #464b59
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-nameContainer {
    padding: 0
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-priceContainer {
    margin-bottom: 8px
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-priceContainer,.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-sellingPriceContainer {
    padding: 0
}

.vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-sellingPrice {
    padding-left: 0
}

.vtex-list-context-0-x-item--wishlist .vtex-product-summary-2-x-currencyContainer {
    font: 700 18px Lato,sans-serif;
    color: #e06741
}

@media screen and (max-width: 1025px) {
    .vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-productPriceClass {
        flex-direction:column;
        align-items: flex-start
    }

    .vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-price_installmentContainer {
        font-size: 13px
    }

    .vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-brandName {
        font-size: 14px
    }

    .vtex-list-context-0-x-item--wishlist .vtex-product-summary-2-x-currencyContainer {
        font-size: 16px
    }

    .vtex-list-context-0-x-list--wishlist .vtex-product-summary-2-x-imageStackContainer {
        height: 100%
    }
}

.vtex-reviews-and-ratings-3-x-container {
    max-width: 96rem;
    padding-left: .5rem;
    padding-right: .5rem
}

.vtex-reviews-and-ratings-3-x-inlineContainer {
    margin-left: 0
}

.vtex-reviews-and-ratings-3-x-star--empty,.vtex-reviews-and-ratings-3-x-star--filled {
    color: #ffb100
}

.vtex-rich-text-0-x-container--shelfTitle {
    color: #727273;
    justify-content: center;
    text-align: center
}

.vtex-rich-text-0-x-headingLevel2--shelfTitle {
    font-weight: 200
}

.vtex-rich-text-0-x-paragraph--deals {
    color: #fff;
    font: 400 14px/15.82px Lato-Regular,sans-serif;
    margin: 0
}

.vtex-rich-text-0-x-container--link,.vtex-rich-text-0-x-container--question {
    justify-content: center
}

.vtex-rich-text-0-x-container--question .vtex-rich-text-0-x-paragraph {
    text-align: center;
    max-width: 540px;
    margin: 0 16px;
    padding-top: 120px;
    color: #03034e
}

.vtex-rich-text-0-x-container--question .vtex-rich-text-0-x-strong {
    font-size: 32px;
    line-height: 2rem;
    font-weight: 700
}

.vtex-rich-text-0-x-container--link .vtex-rich-text-0-x-paragraph {
    text-align: center;
    max-width: 540px;
    padding-top: 36px;
    padding-bottom: 84px;
    color: #03034e
}

.vtex-rich-text-0-x-container--link .vtex-rich-text-0-x-strong {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase
}

.vtex-rich-text-0-x-container--link .vtex-rich-text-0-x-link {
    text-decoration: none;
    font-size: 36px;
    font-weight: 300;
    color: #03034e
}

.vtex-rich-text-0-x-container--title {
    color: #03034e;
    font-size: 28px;
    font-weight: 700
}

.vtex-rich-text-0-x-paragraph--address {
    color: #fff;
    margin: 24px 0 0;
    font: 400 14px/15.82px Lato-Regular,sans-serif
}

.vtex-rich-text-0-x-paragraph--footer-newsletter-title {
    color: #fff;
    font: 400 24px/27.06px Lato-Bold,sans-serif;
    margin: 0 0 8px;
    display: flex;
    align-items: center;
    gap: 8px
}

.vtex-rich-text-0-x-paragraph--footer-newsletter-title:before {
    content: url("data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26.668 5.334H5.335a2.667 2.667 0 00-2.667 2.667v16a2.667 2.667 0 002.667 2.667h21.333A2.667 2.667 0 0029.335 24V8a2.667 2.667 0 00-2.667-2.667z' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M29.335 9.334l-11.96 7.6a2.586 2.586 0 01-2.747 0l-11.96-7.6' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    height: 32px
}

.vtex-rich-text-0-x-paragraph--footer-newsletter-text {
    color: #fff;
    font: 400 14px/15.82px Lato-Regular,sans-serif;
    margin: 0
}

.vtex-rich-text-0-x-heading--footer-title {
    margin: 0 0 16px;
    padding: 0;
    color: #fff;
    font: 400 16px/18.08px Lato-Bold,sans-serif
}

.vtex-rich-text-0-x-container--copyright {
    background: #193861;
    color: #fff;
    justify-content: center;
    width: 100%;
    left: 0;
    position: absolute
}

.vtex-rich-text-0-x-paragraph--copyright {
    font: 400 14px/15.82px Lato-Regular,sans-serif
}

@media only screen and (min-width: 640px) {
    .vtex-rich-text-0-x-container--question .vtex-rich-text-0-x-strong {
        font-size:40px;
        line-height: 3rem
    }

    .vtex-rich-text-0-x-container--about {
        max-width: 85%
    }

    .vtex-rich-text-0-x-container--title {
        color: #03034e;
        font-size: 40px;
        font-weight: 700;
        max-width: 60%
    }

    .vtex-rich-text-0-x-container--title .vtex-rich-text-0-x-paragraph {
        line-height: 1.3em
    }
}

@media screen and (max-width: 1025px) {
    .vtex-rich-text-0-x-paragraph--footer-newsletter-text,.vtex-rich-text-0-x-paragraph--footer-newsletter-title {
        margin-left:12px
    }

    .vtex-rich-text-0-x-paragraph--copyright {
        text-align: center;
        max-width: 70%;
        margin: 16px auto
    }

    .vtex-rich-text-0-x-paragraph--address {
        margin-bottom: 32px
    }
}

.vtex-search-result-3-x-galleryLayoutOptionButton {
    background-color: #f0f0f0;
    color: #3f3f40;
    padding: .375rem .75rem
}

.vtex-search-result-3-x-galleryLayoutOptionButton--selected {
    background-color: #3f3f40;
    color: #fff
}

.vtex-search-result-3-x-galleryLayoutSwitcher {
    border-radius: 4px 4px 4px 4px;
    justify-content: center;
    overflow: hidden;
    width: auto!important;
    align-self: center
}

.vtex-search-result-3-x-galleryItem--list {
    border-bottom: 1px solid #e7e9ee
}

.vtex-search-2-x-imageContainer,.vtex-search-2-x-priceContainer {
    display: none
}

.vtex-search-2-x-productBrand,.vtex-search-2-x-productNameContainer {
    font-size: 16px;
    font-family: var(--default-font-family);
    font-weight: 700;
    color: #a1a6b7;
    transition: all .3s ease
}

.vtex-search-2-x-element {
    border-bottom: 1px solid #ebebf3;
    margin-left: 16px;
    padding: 0 0 16px;
    margin-bottom: 16px
}

.vtex-search-2-x-information {
    margin: 0
}

.vtex-search-2-x-element:hover {
    background: transparent
}

.vtex-search-2-x-element:hover .vtex-search-2-x-productBrand,.vtex-search-2-x-element:hover .vtex-search-2-x-productNameContainer {
    color: #e06741
}

.vtex-search-2-x-itemList--history:after,.vtex-search-2-x-itemList--top-search:after,.vtex-search-2-x-itemListTitle,.vtex-search-2-x-tileListTitle {
    margin: 0 0 12px 16px;
    padding: 0 0 8px;
    border-bottom: 1px solid #e06741;
    display: inline-block;
    width: auto;
    text-transform: none;
    font-weight: 700;
    font-size: 18px;
    font-family: var(--default-font-family);
    color: #193861
}

.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListSubItemLink,.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListSubItemLink:hover {
    margin: 0 16px;
    height: auto;
    font: 700 16px/35px Lato-Regular,sans-serif;
    padding: 7px 0;
    border-bottom: 1px solid #ebebf3;
    background: transparent;
    color: #a1a6b7;
    transition: all .3s ease
}

.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListSubItemLink:hover {
    color: #e06741
}

.vtex-search-2-x-itemList--top-search {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end
}

.vtex-search-2-x-itemList--top-search .vtex-search-2-x-itemListTitle {
    display: none
}

.vtex-search-2-x-itemList--top-search:after {
    content: "Buscas populares";
    width: max-content
}

.vtex-search-2-x-biggy-autocomplete-wrapper {
    max-width: 680px
}

.vtex-search-2-x-biggy-autocomplete {
    gap: 16px;
    border-bottom: 3px solid #e06741;
    border-radius: 8px;
    margin-top: 16px
}

.vtex-search-2-x-tileListSeeMore {
    text-align: left;
    margin-left: 16px;
    color: #e06741;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    height: auto;
    line-height: normal;
    padding-bottom: 16px
}

.vtex-search-2-x-itemList--history:after {
    content: "Buscas recentes";
    width: max-content
}

.vtex-search-2-x-itemList--history {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end
}

.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListLink,.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListLink:hover {
    height: auto;
    padding: 7px 0;
    margin: 0 16px;
    border-bottom: 1px solid #ebebf3;
    background: transparent;
    transition: all .3s ease
}

.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListLink .vtex-search-2-x-itemListLinkTitle,.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListLink .vtex-search-2-x-itemListPrefix {
    transition: all .3s ease
}

.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListLink:hover .vtex-search-2-x-itemListLinkTitle,.vtex-search-2-x-itemListItem .vtex-search-2-x-itemListLink:hover .vtex-search-2-x-itemListPrefix {
    color: #e06741
}

.vtex-search-2-x-itemList--history .vtex-search-2-x-itemListTitle {
    display: none
}

.vtex-search-2-x-itemListLinkTitle {
    font: 700 16px Lato-Regular,sans-serif;
    color: #a1a6b7;
    transition: all .3s ease
}

.vtex-search-2-x-itemList--history .vtex-search-2-x-itemListIcon {
    width: auto;
    margin-right: 8px
}

.vtex-search-2-x-itemList--history .vtex-search-2-x-itemListLink,.vtex-search-2-x-itemList--history .vtex-search-2-x-itemListLink:hover {
    background: transparent;
    border-bottom: 1px solid #ebebf3;
    margin: 0 16px;
    padding: 7px 0;
    box-sizing: content-box
}

.vtex-search-2-x-itemList--history .vtex-search-2-x-itemListLink:hover .vtex-search-2-x-itemListIcon:before {
    filter: brightness(0) saturate(100%) invert(61%) sepia(29%) saturate(5041%) hue-rotate(331deg) brightness(90%) contrast(94%)
}

.vtex-search-2-x-itemList--history .vtex-search-2-x-itemListIcon:before {
    content: url(https://cleanweb.vtexassets.com/assets/vtex/assets-builder/cleanweb.clean-whey/1.0.2/recent-search___a7f411aa2c9e1288bff7906b825044c7.svg);
    display: block;
    transform: translateY(3px);
    filter: brightness(0) saturate(100%) invert(75%) sepia(4%) saturate(969%) hue-rotate(189deg) brightness(88%) contrast(93%);
    transition: all .3s ease
}

.vtex-search-2-x-itemList--history .vtex-search-2-x-itemListLink:hover .vtex-search-2-x-itemListLinkTitle {
    color: #e06741
}

.vtex-search-2-x-itemList--history .vtex__icon-clock {
    display: none
}

@media screen and (max-width: 1025px) {
    .vtex-search-2-x-biggy-autocomplete-wrapper {
        width:92vw
    }

    .vtex-search-2-x-element {
        margin-right: 16px
    }

    .vtex-search-2-x-close-btn {
        display: none
    }
}

.vtex-slider-layout-0-x-sliderLayoutContainer {
    justify-content: center
}

.vtex-slider-layout-0-x-sliderLayoutContainer--carousel {
    background-color: #f0f0f0;
    min-height: 450px
}

.vtex-slider-layout-0-x-sliderTrackContainer {
    max-width: 100%
}

.vtex-slider-layout-0-x-paginationDotsContainer {
    margin-top: .5rem;
    margin-bottom: .5rem
}

.vtex-slider-layout-0-x-layoutContainer--shelf {
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 96rem;
    min-height: 550px
}

.vtex-slider-layout-0-x-slide--shelf {
    margin-bottom: 25px;
    padding-left: .5rem;
    padding-right: .5rem;
    min-height: 550px
}

@media screen and (max-width: 1025px) {
    .vtex-slider-layout-0-x-caretIcon--deals {
        width:16px
    }
}

.vtex-stack-layout-0-x-stackItem--product {
    width: 100%;
    min-height: 257px
}

.vtex-stack-layout-0-x-stackItem--quickview {
    right: 0;
    top: 0;
    left: auto
}

.vtex-store-components-3-x-container {
    max-width: 1216px;
    margin: 0 auto;
    padding: 0
}

.vtex-store-components-3-x-sizeDesktop {
    padding: 0;
    max-width: 133px;
    max-height: 68px
}

.vtex-store-components-3-x-notificationBarContainer {
    background-color: #e6f1e6;
    color: #03034e;
    font-weight: 700;
    font-size: 12px;
    text-decoration: underline
}

.vtex-store-components-3-x-infoCardContainer--info-card-home {
    max-width: 1520px;
    margin: 0 auto;
    background-color: #e6f1e6;
    padding: 0
}

.vtex-store-components-3-x-newsletter {
    background-color: #03054e;
    max-width: 1528px;
    margin: 0 auto
}

.vtex-store-components-3-x-newsletter .vtex-store-components-3-x-container {
    padding: 60px 10px
}

.vtex-store-components-3-x-label {
    color: #fff;
    font-size: 26px
}

.vtex-store-components-3-x-inputGroup {
    padding-bottom: 4px;
    display: flex;
    color: #fff
}

.vtex-store-components-3-x-inputGroup .vtex-styleguide-9-x-hideDecorators {
    background-color: transparent;
    color: #fff;
    border: none
}

.vtex-store-components-3-x-inputGroup .vtex-styleguide-9-x-hideDecorators::placeholder {
    color: #fff;
    font-size: 16px
}

.vtex-store-components-3-x-searchBarIcon--search {
    padding-right: 0
}

.vtex-store-components-3-x-inputGroup .vtex-button {
    background-color: transparent;
    color: #fff;
    border: none;
    margin-right: -24px
}

.vtex-store-components-3-x-buttonContainer {
    padding-top: 0
}

.vtex-store-components-3-x-imageElement--storePrint {
    max-height: 300px;
    margin-bottom: 20px
}

.vtex-store-components-3-x-skuSelectorContainer {
    margin: 1rem 0
}

.vtex-store-components-3-x-logoImage--logo-desktop {
    width: 134px;
    height: 68px;
    aspect-ratio: unset
}

.vtex-store-components-3-x-searchBarContainer {
    display: flex;
    align-items: center;
    padding: 26px 0
}

.vtex-store-components-3-x-searchBarContainer .vtex-styleguide-9-x-input {
    color: #a1a6b7;
    font: 400 14px/15.82px Lato-Regular,sans-serif
}

.vtex-store-components-3-x-imageElement--all-departaments-banner {
    height: fit-content
}

.vtex-store-components-3-x-imageElementLink--frequent-questions {
    height: 32px
}

@media only screen and (min-width: 640px) {
    .vtex-store-components-3-x-newsletter .vtex-store-components-3-x-container {
        padding:140px
    }

    .vtex-store-components-3-x-label {
        font-size: 40px
    }

    .vtex-store-components-3-x-infoCardContainer--info-card-home .vtex-store-components-3-x-infoCardTextContainer {
        width: 30%
    }

    .vtex-store-components-3-x-infoCardContainer--info-card-home .vtex-store-components-3-x-infoCardImageContainer {
        width: 70%
    }

    .vtex-store-components-3-x-imageElement--storePrint {
        margin-bottom: 0;
        max-height: 600px
    }
}

.vtex-store-components-3-x-productImagesContainer--quickview .vtex-store-components-3-x-carouselContainer {
    justify-content: flex-start
}

.vtex-store-components-3-x-productImagesContainer--quickview .vtex-store-components-3-x-productImageTag {
    object-fit: cover!important
}

.vtex-store-components-3-x-productImagesContainer--quickview .vtex-store-components-3-x-carouselGaleryThumbs {
    display: none
}

.vtex-store-components-3-x-productImagesContainer--quickview .vtex-store-components-3-x-carouselGaleryCursor {
    margin: 0;
    padding: 0;
    width: 100%
}

.vtex-store-components-3-x-productNameContainer {
    color: #3f3f40;
    font-weight: 700;
    font-size: 30px
}

.vtex-store-components-3-x-image {
    image-rendering: -webkit-optimize-contrast
}

.vtex-store-components-3-x-autoCompleteOuterContainer .vtex-input-prefix__group {
    border: none;
    border-radius: 8px;
    height: 48px
}

.vtex-store-components-3-x-sizeMobile {
    padding: 0
}

.vtex-store-components-3-x-imageElement--payment-method {
    width: 50px;
    height: 32px
}

@media screen and (max-width: 1025px) {
    .vtex-store-components-3-x-searchBarContainer {
        padding:0 0 16px
    }
}

.vtex-store-drawer-0-x-openIconContainer {
    padding: 0;
    width: 30px!important
}

.vtex-store-drawer-0-x-menuIcon {
    overflow: visible!important;
    transform: translateY(4px)
}

.vtex-store-drawer-0-x-closeIconButton--keep-buying {
    display: block;
    color: #e06741;
    font: 700 16px Lato-Regular,sans-serif;
    margin: 0 auto 24px
}

@media screen and (max-width: 1025px) {
    .vtex-store-drawer-0-x-drawer--menu-mobile {
        width:95%!important
    }

    .vtex-store-drawer-0-x-menuIcon {
        transform: translateY(5px);
        width: 17px
    }

    .vtex-store-drawer-0-x-drawerHeader {
        background-color: #e06741;
        flex-direction: column;
        padding: 24px 16px;
        gap: 32px
    }

    .vtex-store-drawer-0-x-closeIconButton {
        padding: 0
    }
}

.vtex-store-footer-2-x-footerLayout {
    background: #e06741;
    display: none
}

@media screen and (max-width: 1024px) {
    .vtex-store-footer-2-x-footerLayout--footer-container-mobile {
        padding:0 16px
    }
}

.vtex-sticky-layout-0-x-container .vtex-minicart-2-x-openIconContainer,.vtex-sticky-layout-0-x-container .vtex-store-components-3-x-logoLink,.vtex-sticky-layout-0-x-container .vtex-store-components-3-x-searchBarContainer {
    transition: all .3s ease;
    display: block
}

.vtex-flex-layout-0-x-flexRowContent--main-header,.vtex-flex-layout-0-x-flexRowContent--main-header-mobile {
    transition: background .3s ease;
    will-change: padding,background
}

.vtex-store-header-2-x-headerStickyRow {
    display: none
}

.vtex-flex-layout-0-x-flexRowContent--main-header {
    padding-top: .5rem;
    padding-bottom: .5rem
}

.vtex-sticky-layout-0-x-wrapper--stuck .vtex-flex-layout-0-x-flexRowContent--main-header,.vtex-sticky-layout-0-x-wrapper--stuck .vtex-flex-layout-0-x-flexRowContent--main-header-mobile {
    box-shadow: 0 4px 5px rgba(0,0,0,.1)
}

@media (prefers-reduced-motion:reduce) {
    .vtex-sticky-layout-0-x-container .vtex-minicart-2-x-openIconContainer,.vtex-sticky-layout-0-x-container .vtex-store-components-3-x-logoLink,.vtex-sticky-layout-0-x-container .vtex-store-components-3-x-searchBarContainer,.vtex-sticky-layout-0-x-wrapper--stuck .vtex-flex-layout-0-x-flexRowContent--main-header {
        transition: none
    }
}

.vtex-store-icons-0-x-expandIcon {
    color: #727273
}

.vtex-store-link-0-x-label--frequent-questions {
    color: #fff;
    font: 400 14px/15.82px Lato-Regular,sans-serif
}

.vtex-store-link-0-x-link--frequent-questions {
    text-decoration: none;
    max-width: 67px
}

.vtex-store-video-1-x-videoContainer {
    width: 100%;
    height: 300px;
    margin-top: 2%
}

@media only screen and (min-width: 640px) {
    .vtex-store-video-1-x-videoContainer {
        height:700px
    }
}

.vtex-store-newsletter-1-x-newsletterForm {
    display: flex;
    gap: 8px;
    align-items: center
}

.vtex-store-newsletter-1-x-emailInputContainer .vtex-input-prefix__group {
    height: 43px;
    border: none;
    font: 400 14px/15.82px Lato-Regular,sans-serif;
    color: #a1a6b7;
    width: 276px
}

.vtex-store-newsletter-1-x-emailInputContainer .vtex-styleguide-9-x-input {
    border: 1px solid #ebebf3;
    border-radius: 8px
}

.vtex-store-newsletter-1-x-formSubmitContainer .vtex-button {
    background: #193861;
    border-radius: 8px;
    height: 43px;
    border: none
}

.vtex-store-newsletter-1-x-formSubmitContainer .vtex-button__label {
    font: 400 16px/18.08px Lato-Bold,sans-serif;
    color: #fff;
    text-transform: capitalize;
    padding: 13.5px 16px!important
}

.vtex-store-newsletter-1-x-emailInputContainer--invalid .vtex-input__error {
    color: #fff;
    position: absolute
}

.vtex-store-newsletter-1-x-defaultSuccessMessage {
    color: #fff;
    margin-left: 12px
}

@media screen and (max-width: 1025px) {
    .vtex-store-newsletter-1-x-newsletterForm {
        flex-direction:column;
        margin-top: 16px
    }

    .vtex-store-newsletter-1-x-emailInputContainer,.vtex-store-newsletter-1-x-emailInputContainer .vtex-input-prefix__group,.vtex-store-newsletter-1-x-formSubmitContainer,.vtex-store-newsletter-1-x-formSubmitContainer .vtex-button {
        width: 100%
    }
}

.vtex-list-context-0-x-item--wishlist .vtex-wish-list-1-x-wishlistIconContainer .vtex-button,.vtex-list-context-0-x-item--wishlist .vtex-wish-list-1-x-wishlistIconContainer .vtex-button:hover {
    border: none;
    min-width: none
}

.vtex-wish-list-1-x-wishlistIconContainer .vtex-button .vtex-button__label {
    display: none
}

@media screen and (max-width: 1025px) {
    .vtex-wish-list-1-x-wishlistIconContainer .vtex-button {
        text-align:left
    }

    .vtex-wish-list-1-x-wishlistIconContainer {
        height: 25px
    }

    .vtex-wish-list-1-x-wishlistIconContainer .vtex-button {
        display: flex;
        margin-top: 8px
    }
}

.vtex-flex-layout-0-x-flexRowContent--contact {
    max-width: 700px;
    margin: auto
}

.vtex-flex-layout-0-x-flexRowContent--contact .vtex-input__label,.vtex-flex-layout-0-x-flexRowContent--contact .vtex-textarea__label {
    font-size: 1rem;
    color: #3f3f40
}

.vtex-flex-layout-0-x-flexRowContent--contact .vtex-input,.vtex-flex-layout-0-x-flexRowContent--contact .vtex-textarea {
    display: block;
    margin-bottom: 1rem
}

.vtex-flex-layout-0-x-flexRowContent--faq {
    max-width: 700px;
    margin: auto
}

.vtex-disclosure-layout-1-x-trigger--question {
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none
}

.vtex-disclosure-layout-1-x-trigger--question .vtex-rich-text-0-x-paragraph {
    font-weight: 700
}

.vtex-disclosure-layout-1-x-trigger--question:focus,.vtex-disclosure-layout-1-x-trigger--question:focus .vtex-rich-text-0-x-paragraph {
    color: #e06741
}

.vtex-disclosure-layout-1-x-trigger .vtex-store-icons-0-x-caretIcon {
    margin-right: 1rem
}

.vtex-disclosure-layout-1-x-content--answer {
    transition: opacity .25s ease-in-out,height .25s ease-in-out,transform .25s ease-in-out;
    opacity: 0;
    height: 0;
    transform: translate3d(0,-10%,0)
}

.vtex-disclosure-layout-1-x-content--answer[data-enter] {
    opacity: 1;
    height: fit-content;
    transform: translateZ(0)
}

.vtex-disclosure-layout-1-x-content--answer[data-leave] {
    height: 0;
    overflow: hidden
}

.vtex-flex-layout-0-x-flexRow--productSpecificationGroup:not(:first-child) {
    margin-top: 1.5rem
}

.vtex-flex-layout-0-x-flexRow--productSpecificationGroupName {
    background-color: #eaeaea;
    padding: .5rem 1rem
}

.vtex-flex-layout-0-x-flexCol--productSpecificationName {
    padding: 1rem
}

.vtex-flex-layout-0-x-flexCol--productSpecificationValue {
    padding: 1rem 1rem 1rem 0
}

.vtex-flex-layout-0-x-flexRow--productSpecification:nth-child(2n) {
    background-color: #f9f9f9
}

.vtex-product-specifications-1-x-groupName {
    font-size: 1.25rem
}

.vtex-product-specifications-1-x-specificationName {
    font-weight: 700
}

.vtex-flex-layout-0-x-flexRow--orderByAndSwitcher {
    padding-right: 1.5em
}

.vtex-flex-layout-0-x-flexRowContent--savingsSummaryListDesktop {
    justify-content: flex-start
}

.vtex-flex-layout-0-x-flexCol--summaryRightListDesktop {
    justify-content: space-around
}

.vtex-flex-layout-0-x-flexRow--buyNowButton .vtex-button {
    background: #eef3f7;
    border-color: #eef3f7;
    color: #e06741
}

.vtex-flex-layout-0-x-flexRow--buyNowButton:hover .vtex-button {
    background: #e06741;
    border-color: #e06741
}

.vtex-flex-layout-0-x-flexCol--productRating {
    margin-bottom: 3rem
}

.vtex-flex-layout-0-x-flexCol--summaryDetailsListMobile {
    justify-content: space-between
}

.vtex-flex-layout-0-x-flexCol--summaryUpDetailsListMobile {
    margin-bottom: .25rem
}

.vtex-product-summary-2-x-nameContainer--summaryListDesktop {
    padding-top: .25rem;
    padding-bottom: .75rem;
    justify-content: start
}

.vtex-product-summary-2-x-nameContainer--summaryListMobile {
    padding-top: .25rem;
    padding-bottom: .5rem;
    justify-content: start
}

.vtex-product-summary-2-x-brandName--summaryListMobile {
    font-weight: 400;
    font-size: .875rem;
    color: #000
}

.vtex-product-summary-2-x-container--listLayout {
    max-width: none!important
}

.vtex-product-summary-2-x-image--summaryListDesktop {
    width: 180px!important
}

.vtex-product-summary-2-x-image--summaryListMobile {
    width: 140px!important;
    min-width: 140px;
    height: inherit!important
}

.vtex-rich-text-0-x-container--layout-option {
    margin-left: .3em
}

.vtex-rich-text-0-x-paragraph--layout-option {
    margin: 0
}

.vtex-rich-text-0-x-paragraph--summarySpecificationBullet {
    margin: 0;
    line-height: normal;
    font-size: 1.25rem;
    line-height: 1.15rem
}

.vtex-store-components-3-x-productBrandName--summaryListDesktop {
    text-decoration: none;
    font-weight: 500;
    color: #0067c7;
    font-size: .875rem
}

.vtex-store-components-3-x-productBrandName--summaryListMobile {
    text-decoration: none;
    color: #0067c7;
    font-size: .875rem
}

@font-face {
    font-family: Lato-Regular;
    src: url(https://cleanweb.vtexassets.com/assets/vtex/assets-builder/cleanweb.clean-whey/1.0.2/fonts/Lato-Regular___ae05cb2ad509482faafc41f4f6c86220.woff2),url(https://cleanweb.vtexassets.com/assets/vtex/assets-builder/cleanweb.clean-whey/1.0.2/fonts/Lato-Regular___8ed525743dbb32ae4bdb7531d637f7fa.woff),url(https://cleanweb.vtexassets.com/assets/vtex/assets-builder/cleanweb.clean-whey/1.0.2/fonts/Lato-Regular___122dd68d69fe9587e062d20d9ff5de2a.ttf);
    font-display: swap
}

@font-face {
    font-family: Lato-Bold;
    src: url(https://cleanweb.vtexassets.com/assets/vtex/assets-builder/cleanweb.clean-whey/1.0.2/fonts/Lato-Bold___25583230b7fa52a5aa215dedae394a2c.woff2),url(https://cleanweb.vtexassets.com/assets/vtex/assets-builder/cleanweb.clean-whey/1.0.2/fonts/Lato-Bold___a9d8f02506c0ea8b1b0ea76ccc485651.woff),url(https://cleanweb.vtexassets.com/assets/vtex/assets-builder/cleanweb.clean-whey/1.0.2/fonts/Lato-Bold___24b516c266d7341c954cb2918f1c8f38.ttf);
    font-display: swap
} `