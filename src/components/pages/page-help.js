import React from 'react';

const PageHelp = () => {
    
    return(
            <div className="container">  
                <form className="text-center border border-seconadry p-5" action="#!">
                    <p className="h4 mb-4">Contact with us</p>
                    <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Namw"/>
                    <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail"/>
                    <label>Type of message</label>
                    <select className="browser-default custom-select mb-4">
                        <option value="0" disabled>Choose</option>
                        <option value="1">Review</option>
                        <option value="2">Issue</option>
                        <option value="3">Recommendation</option>
                    </select>
                    <div className="form-group">
                        <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Сообщение"></textarea>
                    </div>
                    <div className="custom-control custom-checkbox mb-4">
                        <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy"/>
                
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Send message</button>
                </form>
            </div>
    )
}

export default PageHelp; 