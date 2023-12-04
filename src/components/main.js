import React, { useState } from "react";
import "../css/main.css";
import NameEpson from "../img/nameEpson.png";
import Epson from "../img/epson.png";
import Bepson from "../img/bepson.svg";
import BepsonRed from "../img/bepsonRed.svg";
import BcanonRed from "../img/bcanonRed.svg";
import BbroRed from "../img/BbroRed.svg";
import Bcanon from "../img/bcanon.svg";
import Bbrother from "../img/bbrother.svg";
import Bhp from "../img/bhp.svg";
import BhpRed from "../img/bhpred.svg";
import NameCanon from "../img/canon.png";
import Canon from "../img/printcanon.png";
import Brother from "../img/printbro.png";
import NameBro from "../img/brother.png"
import Hp from "../img/printhp.png";
import NameHp from "../img/hp.png"






const Main = () => {
  const [openepson, setOpenepson] = useState(false);
  const [opencanon, setOpencanon] = useState(false);
  const [activeCanon, setActiveCanon] = useState(false);
  const [activeEpson, setActiveEpson] = useState(true);

  const [openhp, setOpenhp] = useState(false);
  const [activehp, setactivehp] = useState(false);
  const [activebro, setactivebro] = useState(false);
  const [openbro, setOpenbro] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleCanonClick = () => {
    setOpenepson(false);
    setOpencanon(!opencanon);
    setActiveCanon(!activeCanon);
    setactivebro(!activebro);
    setOpenbro(false);
    setactivebro(false);
    setActiveEpson(false);
    setactivehp(false);
  };

  const handleEpsonClick = () => {
    setOpencanon(false);
    setOpenepson(!openepson);
    setActiveEpson(!activeEpson);
    setactivehp(false);
    setOpenbro(false);
    setactivebro(false);
    setClicked(false);
    setActiveCanon(false);
  };

  const handleBroClick = () => {
    setOpenhp(false);
    setactivehp(false);
    setOpenbro(!openbro);
    setactivebro(!activebro);
    setClicked(false);
    setActiveCanon(false);
    setActiveEpson(false);
  };

  const handleHpClick = () => {
    setOpenbro(false);
    setactivebro(false);
    setOpenhp(true);
    setactivehp(true);
    setClicked(false);
    setActiveCanon(false);
    setActiveEpson(false);
  };

  // const [Activehp, setActivehp] = useState(false)
  return (
    <section className="content">
      <div className="printer-block">
        <div className={`epson ${activeEpson ? 'active' : ''}`}>
          <div className="fam-block">
            <div className="block-all">
              <div className="flex-model">
                <div className="model">Stylus SX235W</div>
                <div className="more">ПОДРОБНЕЕ</div>
              </div>

              <div className="name">
                <div>
                  <img src={NameEpson} />
                </div>
              </div>
            </div>
            <div>
              <img className="print" src={Epson} />{" "}
            </div>
          </div>
        </div>

        <div className={`canon ${activeCanon ? "active" : ""}`}>
          <div className="fam-block">
            <div className="block-all">
              <div className="flex-model">
                <div className="model">Stylus SX235W</div>
                <div className="more">ПОДРОБНЕЕ</div>
              </div>

              <div className="name-canon">
                <div>
                  <img src={NameCanon} />
                </div>
              </div>
            </div>
            <div>
              <img className="print-canon" src={Canon} />{" "}
            </div>
          </div>
        </div>


        <div className={` brother ${activebro ? "active" : ""}`}>
          <div className="fam-block">
            <div className="block-all">
              <div className="flex-model">
                <div className="model">Stylus SX235W</div>
                <div className="more">ПОДРОБНЕЕ</div>
              </div>

              <div className="name-canon">
                <div>
                  <img src={NameBro} />
                </div>
              </div>
            </div>
            <div>
              <img className="print-bro" src={Brother} />
            </div>
          </div>
        </div>



        <div className={` hp ${activehp ? "active" : ""}`}>
          <div className="fam-block">
            <div className="block-all">
              <div className="flex-model">
                <div className="model">Stylus SX235W</div>
                <div className="more">ПОДРОБНЕЕ</div>
              </div>

              <div className="name-canon">
                <div>
                  <img src={NameHp} />
                </div>
              </div>
            </div>
            <div>
              <img className="print-hp" src={Hp} />
            </div>
          </div>
        </div>

        <div className="brand">
          <div>
            <img
              id="suitcase"
              onMouseOver={() => setOpenepson(true)}
              onMouseOut={() => setOpenepson(false)}
              className="b-epson"
              onClick={handleEpsonClick}
              src={openepson || activeEpson ? BepsonRed : Bepson}
            />
          </div>
          <div className="b-canon">
            <img
              onMouseOver={() => setOpencanon(true)}
              onMouseOut={() => setOpencanon(false)}
              onClick={handleCanonClick}
              src={opencanon || activeCanon ? BcanonRed : Bcanon}
            />
          </div>
          <div className="b-brother">
            <img
              onMouseOver={() => setOpenbro(true)}
              onMouseOut={() => setOpenbro(false)}
              onClick={handleBroClick}
              src={openbro || activebro ? BbroRed : Bbrother}
            />
          </div>
          <div>
            <img
              onMouseOver={() => setOpenhp(true)}
              onMouseOut={() => setOpenhp(false)}
              onClick={handleHpClick}
              src={clicked || activehp ? BhpRed : openhp ? BhpRed : Bhp}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
