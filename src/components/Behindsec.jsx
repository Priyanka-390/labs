import React from "react";
import james from "../assets/images/img-1.webp";
import tricia from "../assets/images/img-2.webp";
import kevin from "../assets/images/img-3.webp";
import ryn from "../assets/images/img-4.webp";
import dylan from "../assets/images/img-5.webp";
import ralf from "../assets/images/img-6.webp";
import jorden from "../assets/images/img-7.webp"
import jae from "../assets/images/img-8.webp"

const datacard = [
    {
        img: james ,
        name: "James Vuong",
        post: "(Co-CEO)",
        para1: "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
    para2: "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
      
    },
      {
        img: tricia ,
        name: "Tricia Yong",
        post: "(Co-CEO)",
        para1: "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
        para2:"products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape."
    },
         {
        img:  kevin ,
        name: "Kevin Li",
        post: "(CFO)",
        para1: "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His ",
        para2:"strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease."
    },
              {
        img:  ryn ,
        name: "Ryan Ang",
        post: "(Lorem Ipsum)",
        para1: "Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi  ",
        para2:"products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures."
    },
                     {
        img:  dylan,
        name: "Dylan",
        post: "(Executive Producer)",
        para1: "Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.",
        para2:"Lorem ipsum dolor sit amet consectetur. Amet erat condimentum."
    },
                                     {
        img: ralf ,
        name: "Ralf",
        post: "(Lorem Ipsum)",
        para1: "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.",
        para2:"Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc."
    },
                                     
                                     {
        img: jorden ,
        name: "Jordan Stratford",
        post: "(Creative Director)",
        para1: "Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development",
        para2:"for television with the world’s largest streaming producer."
    },
                                                                      {
        img:  jae,
        name: "Jae Sik Choi",
        post: "(Lorem Ipsum)",
        para1: "Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB",
        para2:"Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University."
    },
]

const Behindsec = () => {
    const data2 = datacard.map ((datacard,i)=> (
         <div  key={i} className="col-md-6 mb-md-4 mb-2">
            <div className="card-2  position-relative overflow-hidden">
              <div data-aos="zoom-in-down" className="row">
                <div className="col-lg-5 ">
                  <img src={datacard.img} alt="james" className="raadius-30 w-100" />
                </div>
                <div className="col-lg-7 pt-lg-0 pt-2">
                  <p className="text-white d-flex align-items-center fs-20 lh-24 mb-0 ff-roboto fw-semibold">
                    {datacard.name}
                     <span className="btngradient ps-2 fw-normal fs-16">
                     { datacard.post}
                    </span>
                                  </p>
                        <p className=" text-lightwhite mb-0 fs-16 lh-24 ff-roboto fw-normal pt-sm-2 pt-1">{ datacard.para1}</p>
                </div>
                          </div>
                          <p data-aos="zoom-in-down" className="pt-sm-2 text-lightwhite fs-16  lh-24 ff-roboto fw-normal ">{datacard.para2}
                </p>
                <div className="cardellipse"></div>
            </div>
          </div>
    ))
  return (
    <div id="team" className="py-lg-5 overflow-x-clip position-relative z-3">
      <div className="ourteamellipse1"></div>
      <div className="ourteamellipse2"></div>
       <h2 className="ff-roboto fw-bold fs-187 lh-224 teamtext text-center text-whiteopacity">
     Our Team
      </h2>
      <div className="container pb-4">
        <div className="d-flex justify-content-center ">
          <span className=" bgbtngradient sideborder">
            <span className=" z-1 btngradient ff-roboto fs-16 lh-19">
              Our Team
            </span>
          </span>
        </div>
        <h2 className="text-white pt-sm-3 pt-1 text-center pb-sm-4 pb-3 mb-0 ff-roboto fw-bold fs-52 lh-62">
          Behind our expertise
        </h2>
        <div className="row">
         {data2}
        </div>
      </div>
    </div>
  );
};

export default Behindsec;
