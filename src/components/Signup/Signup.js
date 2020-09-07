import "./Signup.css"
import React from 'react'

export default function Signup() {
    return (
        <div className="signup-container">

            <div className="singup-page-1">

                <div className="ui input signup-input">
                    <input type="text" name="name" placeholder="First and last name"/>
                </div>

                <div className="ui input signup-input">
                    <input type="email" name="email" placeholder="Email"/>
                </div>

                <div className="ui input signup-input">
                    <input type="password" name="password" placeholder="Password"/>     
                </div>

                <div className="ui input signup-input"> 
                    <input type="password" name="password" placeholder="Password"/>
                </div>

                <div className="signup-button-container">
                        <button className="ui violet button signup-button">Next</button>
                </div>

            </div>

            <div className="singup-page-2">

                <div className="ui input signup-input"> 
                    <input type="text" name="address" placeholder="Address"/>
                </div>

                <div className="ui input signup-input"> 
                    <input type="text" name="city" placeholder="City"/>
                </div>

                <select className="ui fluid search dropdown" multiple="">
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>

                <div className="ui input signup-input"> 
                    <input type="text" name="zipcode" placeholder="Postal code"/>
                </div>

                <div className="signup-button-container">
                        <button className="ui violet button signup-button">Next</button>
                </div>
            </div>

            <div className="singup-page-3">
                
                <div className="ui input signup-input"> 
                    <input type="number" name="age" placeholder="Age"/>
                </div>

                <div className="ui input signup-input"> 
                    <input type="text" name='gender' placeholder="Gender"/>
                </div>

                <div className="ui input signup-input"> 
                    <input type="file" name="photoID" placeholder="Photo ID"/>
                </div>

                <div className="signup-button-container">
                        <button className="ui violet button signup-button">Done</button>
                </div>

            </div>

        </div>
    )
}
