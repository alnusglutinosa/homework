import { AuthService } from './../services/auth.service';

export class SignupComponent {
    constructor() {
        this._authService = new AuthService();
    }

    render() {
        return `
            <div class="auth-wrap d-flex mt-5">
                <div class="auth-form col col-6 mx-auto my-auto">
                    <h3>Sign up</h3>
                    <p class="text-secondary">Enter information</p>
                    <form name="signupForm" novalidate="">
                        <div class="form-group">

                            <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required="" data-pattern="^\S+@[a-z]+\.[a-z]+$">
                            <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required="" data-pattern="\S+">
                        
                            <input type="text" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname" required="">
                        
                        <div class="input-group mt-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text">Person</span>
                            </div>
                            <input type="text" class="form-control" id="first-name" placeholder="first name" required="">
                            <input type="text" class="form-control" id="last-name" placeholder="last name" required="">
                        </div>
                        
                        <input type="tel" class="form-control form-control-sm mt-3" id="phone" placeholder="phone" required="">
                                                            
                        <div class="input-group mt-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text">Gender orientation</span>
                            </div>
                            <select class="form-control" id="gender-orientation" name="sellist1" required="">
                            <option selected value="male">male</option>
                            <option value="female">female</option>
                            </select>
                        </div>
                        
                        <input type="text" class="form-control form-control-sm mt-3" id="city" placeholder="city" required="">
                        <input type="text" class="form-control form-control-sm mt-3" id="country" placeholder="country" required="">
                                                
                        <div class="input-group mt-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text">Birthday</span>
                            </div>
                        <input type="number" class="form-control" id="date-of-birth-day" placeholder="day" min="1" max="31" required="">
                        <input type="number" class="form-control" id="date-of-birth-month" placeholder="month" min="1" max="12" required="">
                        <input type="number" class="form-control" id="date-of-birth-year" placeholder="year" min="1890" required="">
                        </div>
                                                                    
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Signup</button>
                        </div>
                        </div>
                    </form>
                </div>           
            </div>
        `;
    }   

    afterRender() {
        document.forms['signupForm'].addEventListener('submit', (e) => {
            e.preventDefault();

            const email = e.target.elements['email'].value;
            const password = e.target.elements['password'].value;
            const nickname = e.target.elements['nickname'].value;
            const firstName = e.target.elements['first-name'].value;
            const lastName = e.target.elements['last-name'].value;
            const phone = e.target.elements['phone'].value;
            const genderOrientation = e.target.elements['gender-orientation'].value;
            const city = e.target.elements['city'].value;
            const country = e.target.elements['country'].value;
            const dateOfBirthDay = e.target.elements['date-of-birth-day'].value;
            const dateOfBirthMonth = e.target.elements['date-of-birth-month'].value;
            const dateOfBirthYear = e.target.elements['date-of-birth-year'].value;
 
           if (!email || !password || !nickname || !firstName || !lastName || !phone || !genderOrientation || !city || !country || !dateOfBirthDay || !dateOfBirthMonth || !dateOfBirthYear) {
               return;
           }

            this._authService.signup(email, password, nickname, firstName, lastName, phone, genderOrientation, city, country, dateOfBirthDay, dateOfBirthMonth, dateOfBirthYear)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });                
        });
    }
}