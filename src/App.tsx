import { useState } from "react";
function App() {
  let [a, seta]: any = useState('a')
  let [b, setb]: any = useState('b')
  let [c, setc]: any = useState('c')
  //calculate
  let delta: number = Math.pow(b, 2) - 4 * a * c
  let x1: any = 0
  let x2: any = 0
  if (isNaN(delta)) {
    delta = 0
  }
  if (delta > 0) {
    let delta1: number = Math.sqrt(delta)
    let a1: number = 2 * a
    x1 = ((-b + delta1) / a1).toFixed(2)
    x2 = ((-b - delta1) / a1).toFixed(2)
  }
  else if (delta == 0) {
    x1 = x2 = 0
  }
  else {
    x1 = x2 = "Phương trình vô nghiệm"
  }
  return (
    <>
      <div className="all">
        <center>
          <div className="box1">
            <input type="text"
              className="ipvl1"
              value={a}
              onChange={(e: any) => seta(e.target.value)}
              placeholder="a" />x
            <sup>
              2
            </sup> + <input type="text"
              className="ipvl1"
              value={b}
              onChange={(e: any) => setb(e.target.value)}
              placeholder="b" />
            x + <input type="text"
              className="ipvl1"
              value={c}
              placeholder="c"
              onChange={(e: any) => setc(e.target.value)} /> = 0
          </div>
        </center>
        <center>
          <div className="box2">
            <p className="asw1">
              Δ = b<sup>2</sup> - 4ac = {b}<sup>2</sup> - 4{a}{c} = {delta.toFixed(2)}
            </p>
            <p className="asw2">
              x1 = (-b + √Δ) / 2a = (-{b} + √{delta}) / 2{a} = {x1}
            </p>
            <p className="asw3">
              x2 = (-b - √Δ) / 2a = (-{b} - √{delta}) / 2{a} = {x2}
            </p>
          </div>
        </center>
      </div>
    </>
  )
}
export default App;