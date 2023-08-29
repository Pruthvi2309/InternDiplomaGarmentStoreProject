import React from 'react';
import './ContactUs.css';

export const ContactUs = () => {
  return (
    <div>
    <div className='banner'>
      <div className="contact_us_green">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
              <form className="form-box">
                <div className="container-block form-wrapper">
                  <div className="head-text-box">
                    <p className="text-blk contactus-head">
                      Contact us
                    </p>
                    <p className="text-blk contactus-subhead">
                      One-Way Garments
                    </p>
                  </div>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7464931181853!2d72.93279037483741!3d22.551167233756424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4ff3c556af0d%3A0xe1c3c55b598e6c71!2sNew%20Jersey%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1690886696665!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{ border: '0' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="responsive-container-block">
                    <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                      <p className="text-blk input-title">
                        FIRST NAME
                      </p>
                      <input className="input" id="ijowk-6" name="FirstName" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        LAST NAME
                      </p>
                      <input className="input" id="indfi-4" name="Last Name" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        EMAIL
                      </p>
                      <input className="input" id="ipmgh-6" name="Email" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        PHONE NUMBER
                      </p>
                      <input className="input" id="imgis-5" name="PhoneNumber" />
                    </div>
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                      <p className="text-blk input-title">
                        WHAT DO YOU HAVE IN MIND
                      </p>
                      <textarea className="textinput" id="i5vyy-6" placeholder="Please enter query..."></textarea>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <button className="submit-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
);
};
