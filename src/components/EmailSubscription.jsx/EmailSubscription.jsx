import React from "react";
import "./email-subscription.css";
// import MailchimpSubscribe from "react-mailchimp-subscribe"
// const BASE_URL = "https://gisfest.us11.list-manage.com/subscribe/post?u=aa3820248ae5099a48118feb1&id=ae2c181efa"

const EmailSubscription = ( )=>{


    // const [email,setEmailAddress] = useState('');
    // const [message,setMessage] = useState(null);

    // const handleEmailSubscription =(e,status,subscribe)=>{

    //     e.preventDefault();

    //     //validate email

    //     var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    //     if (pattern.test(String(email).toLowerCase().trim())){

    //         subscribe({EMAIL:email});
    //         setEmailAddress('');

    //     }else{

    //         setMessage("Please enter a valid email address.");
    //         setEmailAddress('');
    //     }

    
    //     if(status === "success"){
    //         setMessage("Subscribed! We'll be in touch.");
    //         setEmailAddress('');
    //     }else if(status === "error"){
            
    //         setMessage("Oops! An error occured, please try again.");
    //         setEmailAddress('');

    //     }else if(status==="sending"){
    //         setMessage("Sending...");
    //     }

    //     setTimeout(()=>{
    //         setMessage(null);
    //     },6000);
    // }

    // const handleEmailChange = (e) => setEmailAddress(e.target.value);

    return(
        <section id="email-subscription" >
            <div>
                <h3>Subscribe for event updates</h3>
                <p>Registration will open soon. In the meantime, join our mailing list to receive news and updates for GISFest events</p>
                    <div>
                        {/*<MailchimpSubscribe
                            url={BASE_URL}
                            render={({subscribe,status})=>(
                                <form onSubmit={(e)=>handleEmailSubscription(e,status,subscribe)}>
                                    <input required type={'email'} placeholder="Enter your email address..." value={email} onChange={handleEmailChange}></input>
                                    <button type="submit">Subscribe</button>
                                    {message && <><br></br><br></br><span>{message}</span></>}
                                </form>)
                            }
                        />*/}
                        <button className="submit" type="submit"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdSnXsxJcOtaP3WHr2k3VjY28tbBXuv9C2cYsBeSTrI_2_hzg/viewform?usp=sf_link" target={'blank_'}>Subscribe ➚</a></button>
                    </div>
            </div>
        </section>
    )
}

export default EmailSubscription;
// https://docs.google.com/forms/d/e/1FAIpQLSdSnXsxJcOtaP3WHr2k3VjY28tbBXuv9C2cYsBeSTrI_2_hzg/viewform?usp=sf_link


// <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdSnXsxJcOtaP3WHr2k3VjY28tbBXuv9C2cYsBeSTrI_2_hzg/viewform?embedded=true" width="640" height="674" frameBorder="0" marginHeight="0" marginWidth="0" title="Google">Loading…</iframe>
