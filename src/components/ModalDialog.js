import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal'

ReactModal.defaultStyles.overlay.backgroundColor = '#465165';


export default class ModalDialog extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  
  render () {
    return (
      <span>
        <a onClick={this.handleOpenModal} style={{cursor: 'pointer'}}>{this.props.linkedText}</a>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
            <button onClick={this.handleCloseModal} className="btn btn-brand btn-cta">Zatvoriť okno</button>  
            <p><strong>Zásady ochrany osobných údajov</strong></p>
              <p><strong>Informácie o spracúvaní osobných údajov</strong></p>
              <p>Slovenská Asociácia Falun Gong &nbsp;(ďalej Prevádzkovateľ) spracúva osobné údaje v súlade s GDPR – Nariadenie Európskeho parlamentu Rady EÚ 2016/679 (ďalej len Nariadenie) a zákonom č. 18/2018 o ochrane osobných údajov (ďalej len Zákon) s platnosťou od 25.5.2018 a Všeobecnými podmienkami MMM.</p>
              <p><strong>1. Identifikačné údaje prevádzkovateľa a zodpovednej osoby</strong></p>
              <p>Prevádzkovateľom osobných údajov Slovenská Asociácia Falun Gong, Šuňavcova 5, 831 02 Bratislava&nbsp;(ďalej aj „SAFG“), ktorá spracúva osobné údaje za podmienok uvedených nižšie.</p>
              <p>Ohľadom záležitostí Vašich podnetov ohľadom osobných údajov nás môžete kontaktovať písomne na adrese nášho sídla alebo emailom <a href="mailto:gdpr@vazimesikulturu.sk">gdpr@vazimesikulturu.sk</a></p>
              <p><strong>2. Osobné údaje, ktoré spracúvame</strong></p>
              <p> Meno, priezvisko, email</p>
              <p><strong>3. Získavanie osobných údajov</strong></p>
              <p> Osobné údaje získavame priamo od dotknutých osôb prostredníctvom webovej stránky prevádzkovateľa, pri podpise petície či otvoreného listu</p>
              <p><strong>4. Na aké účely spracúvame osobné údaje</strong></p>
              <p> Naše petície a otvorené listy sú vyjadrením vôle občanov a informujeme o nich naše štátne orgány a štátnych predstaviteľov.</p>
              <p>Vašu emalovú adresu nezverejňujeme, používa sa len pre účely prípadného overenia.</p>
              <p>Po skončení aktivity (petícia/otvorený list) budú vaše osobné údaje zo systému zmazané, resp. zosumarizované pre štatistické účely, takže už nebude možné zistiť ich pôvod.</p>
              <p><strong>5. Ako dlho spracúvame osobné údaje</strong></p>
              <p>Osobné údaje sú spracovávané a uchovávané počas doby nevyhnutnej k zaisteniu všetkých práv a povinností vyplývajúcich zo zmluvy. (viď. Všeobecné podmienky účasti na MMM).</p>
              <p>Vyhradzujeme si právo upraviť tieto Podmienky Ochrany osobných údajov, aby boli vždy v súlade s platnými právnymi predpismi, alebo ak dôjde k zmenám v nami ponúkaných službách. Nové podmienky ochrany osobných údajov budú pre vás platné pri najbližšej návšteve našej webovej stránky.</p>
              <p><strong>6. Bezpečnosť dát</strong></p>
              <p>Bezpečnosť osobných údajov je pre nás dôležitá a berieme ju ako otázku dôvery, ktorú ste nám zverili. Na internete nie je žiaľ možné garantovať 100% bezpečnosť pri prenose dát, čiže pokiaľ zadávate niektorý z vašich osobných údajov, robíte tak na vlastné nebezpečenstvo. Pokiaľ nechcete zverejniť svoju identitu a chcete napríklad podporiť petíciu či otvorený list len vo svojom srdci, je to pre nás tiež v poriadku. Nevyžadujeme, aby ste svoje údaje zadávali a pokiaľ ich zadávate, robíte tak kvôli tomu, aby ste ich zverejnili (okrem emalu, ktorý sa používa pre kontrolné účely). Váš email nezverejníme a pokiaľ nám k tomu nedáte výslovný súhlas, nebudeme ho ani používať na zasielanie akýchkoľvek ďalších informácií. Výnimkou sú jednorazové maily, ktoré pre účely overenia generuje systém pri podpise petície. </p>
              <p><strong>7. Spracúvanie osobných údajov na jednotlivé účely:</strong></p>
              <ul>
                <li><strong>Petície a otvorené listy</strong></li>
              </ul>
              <p>Pri petíciách a otvorených listoch, ktoré ste podpísali, beriete na vedomie, že pre riadne uplatnenie petície alebo otvoreného listu musí byť táto petícia či list aj s Vašimi osobnými údajmi doručená adresátovi petície či otvoreného listu. Pre účely petície a otvoreného listu je možné adresátovi petície, resp. otovreného listu doručiť&nbsp;tieto údaje:</p>
              <ul>
                <li>vaše meno a priezvisko</li>
                <li>povolanie</li>
              </ul>
              <p>Napríklad, petíciu či otvorený list môžeme poskytnúť politikom, médiám alebo príjemcom našich kampaní. Vašu adresu a&nbsp;email nezverejníme. </p>
              <p>Právnym základom spracúvania osobných údajov je článok 6 ods. 1 písm. b) Nariadenia GDPR. Spracúvanie osobných údajov SAFG &nbsp;je nevyhnutné na vykonanie citovaných činností.</p>
              <p>Pre tento účel potrebujeme spracúvať a&nbsp;uchovávať si kontakt na Vás, teda Vaše kontaktné údaje ako je meno, priezvisko, email. </p>
              <p>Bez vášho explicitného súhlasu nikdy nezdieľame osobné údaje, ktoré ste nám poskytli, pokiaľ v týchto Pravidlách ochrany osobných údajov nie je uvedené inak.</p>
              <p>Osobné údaje sú spracúvané po dobu 20 rokov. Kedykoľvek však môžete požiadať o&nbsp;to, aby sme ďalej Vaše údaje nespracúvali a&nbsp;Vaše údaje zmazali.</p>
              <p>Stačí nás kontaktovať:</p>
              <ol start="1">
                <li>&nbsp;písomne zaslaním listu na adresu sídla SAFG s uvedením mena a priezviska dotknutej osoby</li>
                <li>elektronicky zaslaním e-mailu na vyššie uvedenú e-mailovú adresu <a href="mailto:gdpr@vazimesikulturu.sk">gdpr@vazimesikulturu.sk</a></li>
              </ol>
              <p><strong>8.&nbsp;&nbsp; &nbsp;Práva dotknutej osoby</strong></p>
              <p>Dotknutá osoba má právo podať návrh na začatie konania na Úrad na ochranu osobných údajov Slovenskej republiky, ak sa domnieva, že je priamo dotknutá na svojich právach ustanovených Nariadením GDPR alebo príslušnými právnymi predpismi.</p>
              <p>Dotknutá osoba má voči prevádzkovateľovi právo (i) požadovať prístup k osobným údajom, (ii) na opravu osobných údajov, (iii) na vymazanie osobných údajov, (iv) na obmedzenie spracúvania osobných údajov, (v) právo na prenosnosť osobných údajov a (vi) právo namietať proti spracúvaniu osobných údajov. Tieto práva si dotknutá osoba môže uplatniť kontaktovaním SAFG:</p>
              <ol start="1">
                <li>a)&nbsp;&nbsp; &nbsp;písomne zaslaním listu na adresu sídla spoločnosti s uvedením mena a priezviska zodpovednej osoby pod názvom spoločnosti,<br /> b)&nbsp;&nbsp;&nbsp; elektronicky zaslaním e-mailu na vyššie uvedenú e-mailovú adresu.</li>
              </ol>
              <ul>
                <li><strong>Príslušné právne predpisy</strong></li>
              </ul>
              <p>Príslušným právnym predpisom je najmä Nariadenie GDPR, aplikovateľný zákon o ochrane osobných údajov v účinnom znení a ostatné aplikovateľné všeobecne záväzné právne predpisy.</p>

              <button onClick={this.handleCloseModal} className="btn btn-brand btn-cta">Zatvoriť okno</button>
        </ReactModal>
      </span>
    );
  }
}
