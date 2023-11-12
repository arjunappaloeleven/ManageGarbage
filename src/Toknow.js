import React, { Component } from 'react';
import './know.css';
class Toknow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null,
    };
}

  handleTabClick = (tabName) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div>
 <div className="tab-buttons">
          <button
            onClick={() => this.handleTabClick('biomedical')}
            className={`tab-button ${activeTab === 'biomedical' ? 'active' : ''}`}
          >
            Biomedical Waste
          </button>
          <button
            onClick={() => this.handleTabClick('battery')}
            className={`tab-button ${activeTab === 'battery' ? 'active' : ''}`}
          >
            Battery Waste
          </button>
          <button
            onClick={() => this.handleTabClick('ewaste')}
            className={`tab-button ${activeTab === 'ewaste' ? 'active' : ''}`}
          >
            E-Waste
          </button>
          <button
            onClick={() => this.handleTabClick('solidwaste')}
            className={`tab-button ${activeTab === 'solidwaste' ? 'active' : ''}`}
          >
            Solid Waste
          </button>
          <button
            onClick={() => this.handleTabClick('plasticwaste')}
            className={`tab-button ${activeTab === 'plasticwaste' ? 'active' : ''}`}
          >
            Plastic waste
          </button>
        </div>
        <div >
          {activeTab === 'biomedical' && (
            <div>
              <h3>Biomedical Waste Content</h3>
              <p>
                        The Ministry of Environment, Forest and Climate Change, Government of India
                        has notified the Bio-Medical Waste Management Rules, 2016. As per the rules,
                        bio-medical waste means any waste, which is generated during diagnosis,
                        treatment or immunization of human beings or animals or research activities
                        pertaining there to or in the production or testing of biological or in health
                        camps. The bio-medical waste generator and the operator of the common
                        bio-medical waste treatment and disposal facility (CBMWTF) shall be responsible
                        for safe handling and disposal of the bio-medical waste. The State Government
                        of Health shall ensure for implementation of the rule in all health care
                        facilities.
                      </p>
                      <ul>
        <h6 style={{ color: 'rgb(166, 207, 90)' }}>BMW Rules</h6>
        <li>
          <a href="./pdf_2022/BMWRules10519.pdf" target="_blank" style={{ color: 'black' }}>
            Bio Medical Waste Management(Amendment) Rules 10.05.2019
          </a>
        </li>
        <li>
          <a href="./pdf_2022/BMWRules19219.pdf" target="_blank" style={{ color: 'black' }}>
            Bio Medical Waste Management(Amendment) Rules 19.02.2019
          </a>
        </li>
        <li>
          <a href="./pdf_2022/BMWRules16318.pdf" target="_blank" style={{ color: 'black' }}>
            Bio Medical Waste Management(Amendment) Rules 16.03.2018
          </a>
        </li>
        <li>
          <a href="./pdf_2022/BMWRules28316.pdf" target="_blank" style={{ color: 'black' }}>
            Bio Medical Waste Management Rules 28.03.2016
          </a>
        </li>
      </ul>
      <ul>
        <h6 style={{ color: 'rgb(166, 207, 90)' }}>BMW Guidelines</h6>
        <li>
          <a href="./pdf_2022/GuidelinesCBMWTF.pdf" target="_blank" style={{ color: 'black' }}>
            Guidelines for Monitoring Compliance of Common Biomedical Waste Treatment Facilities by State Pollution Control Boards/ Pollution Control Committees
          </a>
        </li>
        <li>
          <a href="./pdf_2022/GuidelinesBarCodesystem.pdf" target="_blank" style={{ color: 'black' }}>
            Guidelines for Bar Code System for Effective Management of Bio-medical Waste
          </a>
        </li>
        <li>
          <a href="./pdf_2022/GuidelinesCBMWTDF.pdf" target="_blank" style={{ color: 'black' }}>
            Revised Guidelines for Common Bio-medical Waste Treatment and Disposal Facilities
          </a>
        </li>
        <li>
          <a href="./pdf_2022/GuidelinesHealthcareWaste.pdf" target="_blank" style={{ color: 'black' }}>
            Guidelines for Management of Healthcare Waste as per Biomedical Waste Management Rules, 2016
          </a>
        </li>
        <li>
          <a href="./pdf_2022/GuidelinesImpositionEnvCharges.pdf" target="_blank" style={{ color: 'black' }}>
            CPCB Guidelines for Imposition of Environmental Compensation Charges against Healthcare Facilities and Common Biomedical Waste Treatment Facilities
          </a>
        </li>
        <li>
          <a href="./pdf_2022/GuidelinesUtilization.pdf" target="_blank" style={{ color: 'black' }}>
            Guidelines for Handling of Biomedical Waste for Utilization
          </a>
        </li>
        <li>
          <a href="./pdf_2022/GuidelinesOCEMS.pdf" target="_blank" style={{ color: 'black' }}>
            Guidelines for Continuous Emission Monitoring Systems
          </a>
        </li>
        <li>
          <a href="./pdf_2022/GuidelinesCovid19Revised.pdf" target="_blank" style={{ color: 'black' }}>
            Guidelines for Handling, Treatment, and Disposal of Waste Generated during Treatment/Diagnosis/Quarantine of COVID-19 patients - Revision-5
          </a>
        </li>
      </ul>
            </div>
          )}

          {activeTab === 'battery' && (
            <div>
              <h3>Battery Waste Content</h3>
              <p>
          The Ministry of Environment, Forest and Climate Change, Government of India, New Delhi
          notified the Battery Waste Management Rules, 2022 on 22/08/2022 in supersession of the
          Batteries (Management and Handling) Rules, 2001 under the provisions of the Environment
          (Protection) Act, 1986. These Rules apply to Producer, Dealer, Consumer of batteries,
          Entities involved in collection, segregation, transportation, re-furbishment of used
          batteries and recycling of waste batteries. These Rules apply to all types of batteries
          regardless of chemistry, shape, volume, weight, material composition and use.
        </p>
        <p>
          As per the Rules, Producer shall register through the online centralised portal of
          Central Pollution Control Board (CPCB) in Form-1(A) and obtain ‘Certificate of
          Registration’ from CPCB in Form-1(B). Producer shall have the obligation of Extended
          Producer Responsibility for the Battery that they introduce in the market to ensure the
          attainment of the recycling or refurbishing obligations. Producer shall also have the
          obligation with respect to the minimum use of domestically recycled materials in new
          battery as per the target mentioned. Refurbisher of used batteries and Recycler of waste
          batteries shall register with State Pollution Control Board (SPCB) on the centralised
          portal of CPCB in Form 2(A) and obtain ‘Certificate of Registration’ from SPCB in Form 2(B).
        </p>
        <p>There are 16 battery manufacturers & 30 waste battery recyclers registered with Tamil Nadu Pollution Control Board as of 31/12/2022.</p>
        <br />

        <ul style={{ listStyleType: 'square', lineHeight: '180%' }}>
          <li>
            <a href="./pdf_2022/BatteryRules.pdf" target="_blank" style={{ color: 'red' }}>
              <b>Battery Waste Management Rules, 2022</b>
            </a>
          </li>
          <li>
            <a href="./pdf_2022/BatteryManufacturersTN.pdf" target="_blank" style={{ color: 'black' }}>
              <b>LIST of Registered Battery Manufacturers</b>
            </a>
            <img border="0" alt="new" src="./img/Updated.gif" width="80" height="20" />
          </li>
          <li>
            <a href="./pdf_2022/WasteBatteryRecylers.pdf" target="_blank" style={{ color: 'black' }}>
              <b>LIST of Registered Waste Battery Recyclers</b>
            </a>
            <img border="0" alt="new" src="./img/Updated.gif" width="80" height="20" />
          </li>
          <li>
            <a href="./pdf_2022/EPRRegCPCB.pdf" target="_blank" style={{ color: 'black' }}>
              <b>Procedure for obtaining REGISTRATION by Manufacturer/Producer from CPCB (offline) under Battery Waste Management Rules, 2022</b>
            </a>
          </li>
          <li>
            <a href="./pdf_2022/CirculerBatteryDealer.pdf" target="_blank" style={{ color: 'blaCK' }}>
              <b>Circular issued related to registration of Battery Dealers under Batteries (Management & Handling) Rules, 2001</b>
            </a>
          </li>
          <li>
            <a href="./pdf_2022/EPRBatteryWastemgmt.pdf" target="_blank" style={{ color: 'black' }}>
              <b>SOP for Registration under Battery Waste Management.</b>
            </a>
            <img border="0" alt="new" src="./img/news.gif" width="40" height="30" />
          </li>
        </ul>
        <br />
        <ul style={{ listStyleType: 'circle' }}>
          <h6 style={{ color: '#0066FF' }}>ANNUAL REPORTS</h6>
          <li>
            <a href="./pdf_2022/AnnualRptBattery2020.pdf" target="_blank" style={{ color: 'black' }}>
              <b>Year -2020</b>
            </a>
          </li>
          <li>
            <a href="./pdf_2022/AnnualRptBattery2021.pdf" target="_blank" style={{ color: 'black' }}>
              <b>Year -2021</b>
            </a>
          </li>
        </ul>
      </div>
          
          )}
                <div>
       

        <div>
          {activeTab === 'ewaste' && (
            <div>
              <h3>E-Waste Content</h3>
              <p>The Ministry of Environment, Forest and Climate Change, Government of India, New Delhi notified the E-Waste (Management) Rules, 2016 for the management of E-Waste. E-Waste means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes. These Rules apply to every Manufacturer, Producer, Consumer, Bulk Consumer, Collection Centres, Dealers, E-Retailer, Refurbisher, Dismantler and Recycler involved in the manufacture, sale, transfer, purchase, collection, storage and processing of e-wastes or electrical and electronic equipment <span id="dots1">...</span><span id="more1"><br />
           As per the Rules, the producer of the electrical and electronic equipment shall be responsible for collection and channelization of e-wastes generated from the ‘end-of-life’ of their products under Extended Producer Responsibility (EPR). CPCB issues EPR authorisation to the Producers for environmentally sound management of e-waste. There are 129 Producers located in the State of Tamil Nadu have obtained EPR Authorisation from Central Pollution Control Board. Tamil Nadu Pollution Control Board is monitoring the compliance of conditions stipulated in the EPR Authorisation issued to the Producers located in the State of Tamil Nadu. <br />
		   As per the Rules, State Pollution Control Board shall grant authorization to the Dismantlers& Recyclers and Refurbishers of E-Waste. There are 38 E-Waste Dismantlers & 4 E-Waste Recyclers registered with Tamil Nadu Pollution Control Board as of 31/12/2022. </span></p>
       <ul style={{ listStyleType: 'square' }}>
        <li>
          <a href="./pdf_2022/EwasteMgmtRules2016.pdf" target="_blank" style={{ color: 'black' }}>
            <b>E-Waste (Management) Rules, 2016</b>
          </a>
        </li>
        <li>
          <a href="./pdf_2022/EwasteAmdt2018.pdf" target="_blank" style={{ color: 'black' }}>
            <b>E-Waste (Management) Amendment Rules, 2018</b>
          </a>
        </li>
        <li>
          <a href="./pdf_2022/EwasteMgmtRules2022.pdf" target="_blank" style={{ color: 'black' }}>
            <b>E-Waste (Management) Rules, 2022, w.e.f 1.4.2023</b>
            
          </a></li></ul></div>
          )}

          {activeTab === 'solidwaste' && (
            <div>
              <h3>Solid Waste Content</h3>
              <p>The Ministry of Environment, Forest and Climate Change, Government of India has notified the Solid Waste Management Rules, 2016. As per the rules, solid waste means solid or semi solid domestic waste, sanitary waste, commercial waste, institutional waste, catering and market waste and other non-residential wastes, street sweepings, silt removed or collected from surface drains, horticulture waste, agriculture and dairy waste, treated bio-medical waste excluding industrial waste, bio-medical waste and e-waste, battery waste, radio-active waste generated in the area under the local authorities. As per the rules, the local bodies are responsible for the collection, treatment and disposal of solid wastes. The Board is the monitoring authority under the said rules and is responsible for granting authorization to local bodies for processing and disposal of solid waste.  </p>
                              
                        <p>In Tamil Nadu there are 12 Corporations, 124 Municipalities and 528 Town Panchayats. In total the solid waste generation is 14,600 Tonnes per day. The Greater Chennai Corporation generates 5000 TPD, 11 Corporation and all Municipalities generates about 7600 TPD and all the town panchayat generates 2000 TPD. The Board is advocating the concept of waste segregation at source, waste reduction, recycle and reuse to avoid any environmental issues during handling. </p> 
                        <li>
          <a href="./pdf_2023/AnnualRptSWM22_23.pdf" target="_blank" style={{ color: 'black' }}>
            <b>Annual Report 2022-23</b>
          </a></li>
          <li>
          <a href="./pdf_2022/SWMAnnualRpt2122.pdf" target="_blank" style={{ color: 'black' }}>
            <b>Annual Report 2021-22</b>
          </a></li>
          <li>
          <a href="./pdf_2021/AnnualRptSolidwaste2021.pdf" target="_blank" style={{ color: 'black' }}>
            <b>Annual Report 2020-21</b>
          </a></li>
          <li>
          <a href="./pdf_2019/AnnualRptSolidwaste1920.pdf" target="_blank" style={{ color: 'black' }}>
            <b>Annual Report 2019-20</b>
          </a>
          </li>
            </div>
          )}
          {activeTab === 'plasticwaste' && (
            <div>
              <h3>Plastic Waste Content</h3>
              <p>As per Rule 13 of Plastic Waste Management Rules, the plastic manufacturers shall obtain Registration from the Board. The Board has issued registration to 27 compostable plastic manufacturing units, 230 plastic waste recycling units. The Board submits the annual report in Form-VI to the CPCB. </p> 
						<h4>Ban on one time Use and Throwaway Plastics</h4>
                        
                        <p>The Government vide G.O.(Ms) No.84 Environment and Forests (EC.2) Department dated 25.06.2018 have issued orders by banning fourteen types of ‘use and throwaway plastic items irrespective of thickness. The ban is in effect from 01.01.2019.  </p>
						<p>The Board in co-ordination with line departments took various actions for effective implementation of the ban on plastics, which includes awareness programmes through regional conferences, district environmental committee meetings, rallies at district headquarters, messages through social media, display board in national highway toll gates etc.</p>
						<p> In order to intensify the plastic ban and in compliance with the orders of the Hon’ble High Court of Madras, the Government vide G.O. (Ms). No. 37 Environment and Forests (EC.2) Department, dated 05.06.2020 has issued orders by banning the use of plastic in primary packaging also. As part of action on violators, the Board issued orders for closure of 115 units who manufactured banned plastic items.</p>
						<h4>Plastic Waste Management (Amendment) Rules, 2021</h4>
						<p>The Ministry of Environment & Forests, Climate Change, Govt. of India vide notification dated 12.08.2021 has issued Plastic Waste Management (Amendment) Rules, 2021 in which certain Single Use Plastic items such as plastic/PVC banners less than 100 microns, cutlery items, ear buds with plastic sticks, plastic sticks for balloons, plastic flags, candy sticks, ice-cream sticks, polystyrene [Thermocol] for decoration, plates, cups, glasses, etc are prohibited from 01.07.2022. Also, plastic carry bags less than 75 microns and non-woven plastic carry bags less than 60 Gram Per Square Metre (GSM) shall be prohibited from 30.09.2021 and plastic carry bags less than 120 microns shall be prohibited from 31.12.2022.	</p>
                        
            </div>
          )}
        </div>
      </div>
        </div></div>
      

    );
  }
}

export default Toknow;