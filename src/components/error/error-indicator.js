import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return(
       <div>
           <p>
               Ой! 
               <br/> 
               Кажется, что-то пошло не так!
               <br/>
               <button>
                   Вернуться назад
               </button>
           </p>
       </div>
    )
}
export default ErrorIndicator;