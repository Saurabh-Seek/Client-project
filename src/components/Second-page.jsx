import React from 'react';
import '../App.css';

const App = () => (
  <div className="app-container">
    <header className="app-header">
    <div className='servicemain'>
    <h1 style={{color: "#1BBAC7"}}>AI-Fueled Smart Solutions</h1>
      
      <p>Take advantage of our AI-powered service portfolio to automate customer support tasks to augment your customer support team and optimize your business processes.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi hic dolorem laborum voluptas sequi illo, dolores id iste dolore enim.

      </p>
    
    </div>
     
    </header>
    <div className="service-grid">
    
      <div className="service-card">

        <img src="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=600" alt="Conversational AI ChatBots" className="service-image" />
        <div className="service-content">
          <h3>Conversational AI ChatBots</h3>
          <p>Streamline customer interactions and speed up resolution by implementing conversational AI chatbots for common inquiries and live support for more complex issues.
            Lorem ipsum dolor, Streamline customer interactions and speed up resolution by implementing conversational AI chatbots for common inquiries and live support for more complex issues.
            Lorem ipsum dolor,.sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque natus molestias facilis illum minima magnam magni ipsam eius tempora vel.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div className="service-content">
          <h3>Conversational AI Voice Bots</h3>
          <p>Reduce call times by allowing users to engage naturally with AI-driven voice bots, helping them navigate through complex situations.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis earum sit quas omnis animi, 
            laborum numquam commodi consequuntur accusamus vitae assumenda dolores eveniet fugiat repellat laudantium culpa fugit aspernatur unde?
          </p>
        </div>
        <img src="pexels-bertellifotografia.jpg" alt="Conversational AI Voice Bots" className="service-image" />
      </div>

      <div className="service-card">
        <img src="pexels-pixabay.jpg" alt="Email Automation" className="service-image" />
        <div className="service-content">
          <h3>Email Automation</h3>
          <p>Reduce the manual workload on support teams by automatically sending personalized responses to customer inquiries and follow-ups.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quos veritatis!
             Quaerat sapiente voluptas ad magnam cupiditate iure saepe harum eos commodi vero eveniet ut corrupti sed, assumenda numquam recusandae.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div className="service-content">
          <h3>AI Powered Back Office Services</h3>
          <p>Enhance back office functionalities through AI-powered automation of HR, finance, and accounting services.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quos veritatis!
          Quaerat sapiente voluptas ad magnam cupiditate iure saepe harum eos commodi vero eveniet ut corrupti sed, assumenda numquam recusandae.
          </p>
        </div>
        <img src="pexels-leeloothefirst.jpg" alt="AI Powered Back Office Services" className="service-image" />
      </div>

      <div className="service-card">
        <img src="pexels-n-voitkevich.jpg" alt="Digital Strategies Consulting" className="service-image" />
        <div className="service-content">
          <h3>Digital Strategies Consulting</h3>
          <p>Improve business efficiency with our cutting-edge consulting and AI solution design services.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quos veritatis!
          Quaerat sapiente voluptas ad magnam cupiditate iure saepe harum eos commodi vero eveniet ut corrupti sed, assumenda numquam recusandae.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default App;
