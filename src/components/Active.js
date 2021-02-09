import React, { Component } from 'react'

class Active extends Component {

    state = {
        isActive: false
    }

    handleClick = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }


    render() {
        return (
            <div class="main__active" >
                <div className="active__input">
                    
                        <div className="first">
                        <input type="number" /><span className="sgm2" > Current Office Area sqm</span> 
                        </div>
                        
                        <div className="second">
                        <input type="number" /> <span>Current Headcount</span> 
                        </div>
                        <div className="third">
                        <input type="number"  /> <span>Anticipated Headcount</span> 
                        </div>
                        <div className="fourth">
                        <select name="Region" id="region"> 
                            <option value="na">NA</option>
                            <option value="latam">LATAM</option>
                            <option value="emea">EMEA</option>
                            <option value="asia pac">ASIA PAC</option>
            
                        </select>

                        <span>Region</span>    
                        </div>
                        
                    
                </div>
                <div className="active__scenario">
                    <h1>Select a Scenario</h1>
                    <section className="active__scenario-button">
                    
                        <button onClick = {this.handleClick} className={this.state.isActive ? 'active' : ''} ><i class="far fa-clock"></i> Aim for efficiency and productivity</button>
                        <button  ><i class="fas fa-asterisk"></i> Aim for innovation and collaboration</button>
                        <button ><i class="fas fa-fingerprint"></i> Aim for talent and brand </button>
                        <button ><i class="fas fa-cogs"></i>Custom <br/> scenario</button>
                    </section>
                </div>
                <div className="active__down-box-area">
                    <section className="box">
                    <p>Space Required: <span>150sqm</span> </p>
                    <p>Fit-out cost: <span> €100,00</span> </p>
                    <p>Potential space saving: <span>150sqm</span> </p>
                    </section>
                    <div className="list">
                        <ul>
                            <li>Key benefit statements shown here</li>
                            <li>Key benefit statements shown here</li>
                            <li>Key benefit statements shown here</li>
                            <li>Key benefit statements shown here</li>
                        </ul>
                        <div className="list__button">
                        <button><i class="fas fa-arrow-up"></i></button>
                        <button>.PDF</button>
                        <button>.PNG</button>
                        </div>
                    </div>
                </div>
                <div className="active__input-range">
                    <div className="first">
                    <h3>In our future workplace work will be conducted:</h3>
                    <input type="range" name="first"/>
                    <label htmlFor="first">Anywhere at 
                    anytime</label>
                    <label htmlFor="first">Mainly from the 
                    ofice</label>
    
                    </div>
                    <div className="second">
                    <h3>Our future workplace will:</h3>
                    <input type="range" name="second"/>
                    <label htmlFor="second">Provide a 
                    diferentiating 
                     experience</label>
                    <label htmlFor="second">Provide the 
                    necessities</label>
                    </div>
                    <div className="third">
                    <h3>When we think about individual seats in the ofice:</h3>
                    <input type="range" name="third"/>
                    <label htmlFor="second">Depends on activity 
                    or need</label>
                    <label htmlFor="third">Depends on title and 
                    position</label>
                    </div>
                </div>

            </div>
        )
    }
}

export default Active;