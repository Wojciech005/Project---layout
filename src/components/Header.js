import React from 'react'

const Header = () => {
    return(
        <div>
        <header className="header">
          <menu className="header__menu">
            <nav>
              
              <a href=""><i class="fas fa-home"></i></a>
              <a href=""> About</a>
              <a href="">Getting Started</a>
              <a href="">Running a Project</a>
              <a href="">Design Principles</a>
              <a href="">Case Studies</a>
              <a href="">Data Dashboard</a>
              <a href="">Contacts and FAQ'</a>
              <a href="">Opportunity Indicator</a>
            </nav>
          </menu>
          <section className="header__title">
            <h1>Opportunity Indicator</h1>
            <p>Welcome to the Opportunity Indicator – our handy tool to help you estimate the amount of space you need, typical project costs and the benefits your 
project could deliver. To use the Opportunity Indicator, simply input the information for your project below. You can then select the scenario which best 
fits your project by clicking on the appropriate box below, or create your own custom scenario using the slider bars.</p>
          </section>
        </header>
        </div>
    )
}

export default Header;