export function ContactArea() {
  return (
    <div >
      <BrandArea />
    </div>
  );
}

export function BrandArea() {
  return (
    <div id="clients" className="brand-area section" style={{background:'white'}}>
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Meet our Partners</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {[
            "assets/images/33.jpg",
            "assets/images/watr.jpg",
            "assets/images/I2M.png",
            "assets/images/platec.jpg",
            "assets/images/alpha.jpg",
            "assets/images/pipc.jpg",
            "assets/images/pan.jpg",
            "assets/images/CCD2.png",
            "assets/images/gain2.svg",
          ].map((e) => {
            return (
              <div className="col-6 col-sm-4 col-md-3">
                <div className="single-image">
                  <img src={e} alt="Brand Logo Images" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// {["assets/images/33.jpg", "assets/images/22.jpg"].map((e) => {
//   return (
//     <div className="col-6 col-md-2">
//       <div className="single-image">
//         <img src={e} alt="Brand Logo Images" />
//       </div>
//     </div>
//   );
// })}