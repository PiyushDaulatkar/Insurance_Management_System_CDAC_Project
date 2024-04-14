import { useNavigate } from 'react-router-dom';
import '../CSS/ContactUs.css'
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

function ContactUs() {
    const navigate=useNavigate();
    var handleSubmit=()=>{
        alert("message sent successfully!");
        navigate('/home');
    }
    return (
        <>
            <div id="contact" class="contact-area section-padding" style={{marginTop:'80px'}}>
                <div class="container">
                    <div class="section-title text-center">
                        <h2>Get in Touch</h2>
                        <p>Send us a message and tell us how you feel about our website!</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="contact">
                                <form class="form" onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="text" name="name" class="form-control" placeholder="Name" required="required"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="email" name="email" class="form-control" placeholder="Email" required="required"/>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" required="required"/>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="single_address">
                                <i class="fa fa-map-marker"></i>
                                <h4>Our Address</h4>
                                <p>Sunbeam Pune</p>
                            </div>
                            <div class="single_address">
                                <i class="fa fa-envelope"></i>
                                <h4>Send your message</h4>
                                <p>info@ims.com</p>
                            </div>
                            <div class="single_address">
                                <i class="fa fa-phone"></i>
                                <h4>Call us on</h4>
                                <p>180054979254</p>
                            </div>
                            <div class="single_address">
                                <i class="fa fa-clock-o"></i>
                                <h4>Work Time</h4>
                                <p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;